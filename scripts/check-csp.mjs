#!/usr/bin/env node
/**
 * CSP / 凭据守卫 (npm run check:csp)
 *
 * 起因（两次真实事故，都是"常量与配置脱钩、无人对账"）：
 *   1) 自托管 Waline 后 CSP 未放行，评论板被静默拦死 3 周 —— 没有任何一层会报错；
 *   2) Agent Club 页面构建期 fetch 里硬编码了 Agent API Key，并随公开仓库泄露。
 *
 * 本守卫对构建产物做两件事：
 *   A. 外部资源引用 vs vercel.json CSP 白名单对账（script/link/img/source/iframe）。
 *      产物里出现的站外资源，若对应指令不允许该 origin → 失败（线上就是被拦死）。
 *      JS 里出现的站外 host 单独告警（connect-src 需人工确认）。
 *   B. 凭据扫描：产物里不得出现 API Key / Bearer / JWT / 私钥样式字符串。
 *
 * 用法: node scripts/check:csp.mjs [outDir]
 * 退出码: 0 = 通过, 1 = 有违规
 */
import fs from 'node:fs'
import path from 'node:path'

const REPO = process.cwd()
const outDir = process.argv[2] || path.join(REPO, 'out')

const cfg = JSON.parse(fs.readFileSync(path.join(REPO, 'vercel.json'), 'utf8'))
const cspHeader = (cfg.headers || [])
  .flatMap((h) => h.headers || [])
  .find((h) => String(h.key).toLowerCase() === 'content-security-policy')
if (!cspHeader) {
  console.error('check:csp — vercel.json 里没有 Content-Security-Policy 头')
  process.exit(1)
}
const csp = {}
for (const part of cspHeader.value.split(';')) {
  const toks = part.trim().split(/\s+/).filter(Boolean)
  if (!toks.length) continue
  csp[toks[0].toLowerCase()] = toks.slice(1)
}
const self = new Set(['www.dwac.net', 'dwac.net'])

function allowed(directive, origin) {
  const sources = csp[directive] || csp['default-src'] || []
  if (!sources.length) return false
  if (origin === 'inline') return sources.includes("'unsafe-inline'")
  for (const raw of sources) {
    if (raw === "'self'") continue
    if (raw === '*' || raw === 'https:') return true
    const s = raw.replace(/^https?:\/\//, '').replace(/\/$/, '') // 白名单里常写全 URL，这里统一成 host 比较
    if (s === origin) return true
    if (s.startsWith('*.') && origin.endsWith(s.slice(1))) return true
  }
  return false
}

if (!fs.existsSync(outDir)) {
  console.error(`check:csp — 产物目录不存在: ${outDir} (先 npm run build)`)
  process.exit(1)
}
function walk(dir, exts, acc = []) {
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, e.name)
    if (e.isDirectory()) walk(p, exts, acc)
    else if (exts.some((x) => e.name.endsWith(x))) acc.push(p)
  }
  return acc
}

const htmlFiles = walk(outDir, ['.html'])
const jsFiles = walk(outDir, ['.js'])
const violations = []
const externals = new Map() // origin -> Set(元素类型)

const origin = (u) => {
  try {
    const url = new URL(u)
    if (url.protocol === 'data:' || url.protocol === 'mailto:' || url.protocol === 'tel:') return null
    return url.host
  } catch {
    return null
  }
}

// 只检查"会被浏览器当资源加载"的引用；<a href> 是导航，不受 CSP 约束（历史事故都是脚本/样式被拦）
const TAG_RULES = [
  [/<script\b[^>]*\ssrc="([^"]+)"/gi, 'script-src', 'script'],
  [/<link\b[^>]*\shref="([^"]+)"[^>]*>/gi, null, 'link'], // rel 决定指令，下面单独解析
  [/<(?:img|source)\b[^>]*\ssrcset="([^"]+)"/gi, 'img-src', 'srcset'],
  [/<(?:img|source|video|audio)\b[^>]*\ssrc="([^"]+)"/gi, 'img-src', 'media/img'],
  [/<iframe\b[^>]*\ssrc="([^"]+)"/gi, 'frame-src', 'iframe'],
]

function relToDirective(tag, url) {
  const rel = (tag.match(/\srel="([^"]+)"/i)?.[1] || '').toLowerCase()
  const as = (tag.match(/\sas="([^"]+)"/i)?.[1] || '').toLowerCase()
  if (rel.includes('stylesheet')) return 'style-src'
  if (rel.includes('icon') || rel.includes('apple-touch-icon')) return 'img-src'
  if (rel.includes('manifest') || rel.includes('canonical') || rel.includes('alternate') || rel.includes('author')) return null
  if (rel.includes('preload') || rel.includes('modulepreload') || rel.includes('prefetch')) {
    if (as === 'font') return 'font-src'
    if (as === 'style') return 'style-src'
    if (as === 'script') return 'script-src'
    if (as === 'image') return 'img-src'
    return 'default-src'
  }
  if (rel.includes('preconnect') || rel.includes('dns-prefetch')) return null // 不受 CSP 约束
  return null
}

for (const f of htmlFiles) {
  const html = fs.readFileSync(f, 'utf8')
  const rel = '/' + path.relative(outDir, f)
  for (const [re, directive, kind] of TAG_RULES) {
    for (const m of html.matchAll(re)) {
      const tag = m[0]
      const dir = directive || relToDirective(tag, m[1])
      if (!dir) continue
      const urls = kind === 'srcset' ? m[1].split(',').map((s) => s.trim().split(/\s+/)[0]) : [m[1]]
      for (const u of urls) {
        const host = origin(u)
        if (!host || self.has(host)) continue
        externals.set(host, (externals.get(host) || new Set()).add(kind))
        if (!allowed(dir, host)) {
          violations.push(`${rel}: <${kind}> 指向 ${host}，但 CSP ${dir} 未放行`)
        }
      }
    }
  }
}

// JS 里的站外 host（connect-src 相关，仅告警）
const jsHosts = new Map()
for (const f of jsFiles) {
  const js = fs.readFileSync(f, 'utf8')
  for (const m of js.matchAll(/https?:\/\/([a-zA-Z0-9.-]+\.[a-zA-Z]{2,})/g)) {
    const host = m[1]
    if (self.has(host) || host.endsWith('schema.org') || host.endsWith('w3.org')) continue
    jsHosts.set(host, (jsHosts.get(host) || 0) + 1)
  }
}
const unlistedJsHosts = [...jsHosts.keys()].filter((h) => !allowed('connect-src', h))

// ---------- 凭据扫描 ----------
const SECRETS = [
  // 只报"硬编码的凭据值"；仅出现 header 名（运行时由用户输入）不算 —— 避免噪声
  [/\bX-API-Key["']?\s*[:=,]\s*["'][A-Za-z0-9_-]{12,}["']/i, '硬编码 X-API-Key 值'],
  [/\bapi[_-]?key["']?\s*[:=]\s*["'][A-Za-z0-9_-]{12,}["']/i, '硬编码 api_key 值'],
  [/\bauthorization["']?\s*[:=]\s*["']Bearer\s+[A-Za-z0-9._-]{16,}["']/i, '硬编码 Authorization Bearer'],
  [/\bBearer\s+[A-Za-z0-9._-]{24,}\b/, 'Bearer token 字面量'],
  [/\beyJ[A-Za-z0-9_-]{10,}\.[A-Za-z0-9_-]{10,}\.[A-Za-z0-9_-]{10,}/, 'JWT'],
  [/-----BEGIN [A-Z ]*PRIVATE KEY-----/, '私钥'],
  // 例: dwac-arb-python-engineer-2026（2026-09 真实泄露过的那一类）
  [/\bdwac-(?:arb|agent)-[a-z-]{4,}-\d{4}\b/i, 'DWAC Agent 凭据样式'],
  [/["'](?:sk|pk|ghp|gho|xox[baprs])[-_][A-Za-z0-9]{20,}["']/, '常见平台 token 样式'],
]
const secretHits = []
for (const f of [...htmlFiles, ...jsFiles]) {
  const txt = fs.readFileSync(f, 'utf8')
  for (const [re, label] of SECRETS) {
    const m = txt.match(re)
    if (m) secretHits.push(`/${path.relative(outDir, f)}: ${label} → ${String(m[0]).slice(0, 60)}`)
  }
}

// ---------- 报告 ----------
console.log(`check:csp — CSP: ${cspHeader.value.slice(0, 90)}…`)
console.log(`  扫描 ${htmlFiles.length} HTML + ${jsFiles.length} JS`)
console.log(`  产物站外资源域: ${externals.size ? [...externals.keys()].join(', ') : '无'}`)
if (unlistedJsHosts.length) {
  console.log(`  ⚠ JS 中出现、但 connect-src 未放行的 host（如为 fetch/XHR 目标会被拦）: ${unlistedJsHosts.join(', ')}`)
}
if (secretHits.length) {
  console.error(`  ✗ 凭据扫描命中 ${secretHits.length} 处:`)
  for (const h of secretHits.slice(0, 12)) console.error(`      ${h}`)
}
if (violations.length) {
  console.error(`  ✗ CSP 白名单缺 ${violations.length} 处:`)
  for (const v of violations.slice(0, 12)) console.error(`      ${v}`)
}

const warnOnly = process.env.CHECK_CSP_WARN_ONLY === '1'
if (violations.length || secretHits.length) {
  if (!warnOnly) {
    console.error('check:csp ✗ 失败（CHECK_CSP_WARN_ONLY=1 可先当告警跑）')
    process.exit(1)
  }
  console.error('check:csp ⚠ 有告警（warn-only 模式，不计失败）')
} else {
  console.log('check:csp ✓ 产物外部资源全部在 CSP 白名单内，且未发现凭据样式字符串')
}
