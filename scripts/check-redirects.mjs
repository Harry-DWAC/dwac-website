#!/usr/bin/env node
/**
 * 重定向跳数守卫 (npm run check:redirects)
 *
 * 背景：vercel.json 里配了一批 301/308 重定向（/club→/agent-club/、/forum→/community/ 等）。
 * 站内链接/重定向目标一旦指向这些"重定向源"，每次点击就多跳一次；更坏的是
 * A→B→C 这种链式重定向（例：/zh-cn/club/ → /zh-cn/agent-club/ → /agent-club/）。
 * 静态检查/构建都不会报错，只有真实点击才暴露，所以单独做守卫。
 *
 * 两件事：
 *   1) 扫描源码(src/**\/*.tsx|ts)与构建产物(out/**\/*.html)里的站内 href，
 *      若命中"重定向源" → 报错（应该直接写最终目标）。
 *   2) 检查 vercel.json 自身：重定向的 destination 若又是另一条重定向的 source → 报错（链式）。
 *
 * 用法: node scripts/check-redirects.mjs [--quiet]
 * 退出码: 0 = 干净, 1 = 有问题
 */
import fs from 'node:fs'
import path from 'node:path'

const REPO = process.cwd()
const cfgPath = path.join(REPO, 'vercel.json')
if (!fs.existsSync(cfgPath)) {
  console.error('check:redirects — 找不到 vercel.json')
  process.exit(1)
}
const cfg = JSON.parse(fs.readFileSync(cfgPath, 'utf8'))
const norm = (p) => (p.replace(/\/+$/, '') || '/') // 去尾斜杠后比较
const isPattern = (p) => p.includes(':') || p.includes('*')

const redirects = (cfg.redirects || []).filter((r) => !isPattern(r.source) && !isPattern(r.destination))
const sourceMap = new Map() // 规范化 source -> { raw, destination }
for (const r of redirects) sourceMap.set(norm(r.source), { raw: r.source, destination: r.destination })

let problems = 0

// ---------- 1) vercel.json 内部：链式重定向（destination 又是某个 source） ----------
console.log(`check:redirects — vercel.json 共 ${redirects.length} 条字面重定向`)
for (const [key, entry] of sourceMap) {
  const nextKey = norm(entry.destination)
  if (sourceMap.has(nextKey)) {
    const next = sourceMap.get(nextKey)
    console.error(`  ✗ 链式重定向: ${entry.raw} → ${entry.destination} → (再跳) ${next.destination}`)
    problems++
  }
}

// ---------- 2) 源码与产物里的站内链接 ----------
function walk(dir, exts, hits = []) {
  if (!fs.existsSync(dir)) return hits
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    if (e.isDirectory()) {
      if (['node_modules', '.next', '.git', '_next', 'out'].includes(e.name) && path.resolve(dir) === path.resolve(REPO)) continue
      walk(path.join(dir, e.name), exts, hits)
    } else if (exts.some((x) => e.name.endsWith(x))) {
      hits.push(path.join(dir, e.name))
    }
  }
  return hits
}

for (const [dir, exts, label] of [['src', ['.tsx', '.ts'], '源码 src/'], ['out', ['.html'], '产物 out/']]) {
  const files = walk(path.join(REPO, dir), exts)
  const found = new Map()
  for (const f of files) {
    const txt = fs.readFileSync(f, 'utf8')
    for (const m of txt.matchAll(/href="(\/[^"#?]*)"/g)) {
      const key = norm(m[1])
      if (key === '/' || !sourceMap.has(key)) continue
      if (!found.has(key)) found.set(key, new Set())
      found.get(key).add('/' + path.relative(REPO, f))
    }
  }
  console.log(`\ncheck:redirects — ${label} 扫描 ${files.length} 文件`)
  if (found.size === 0) {
    console.log('  ✓ 无链接指向重定向源')
  } else {
    for (const [k, pages] of found) {
      console.error(`  ✗ ${k}  会跳到 ${sourceMap.get(k).destination}  (${pages.size} 处，如 ${[...pages][0]})`)
      problems++
    }
  }
}

if (problems) {
  console.error(`\ncheck:redirects ✗ ${problems} 项问题（链接请直接写最终路径；重定向 destination 不要指向另一条重定向）`)
  process.exit(1)
}
console.log('\ncheck:redirects ✓ 站内链接与重定向配置无多余跳数')
