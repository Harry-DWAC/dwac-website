#!/usr/bin/env node
/**
 * 三语镜像守卫 (npm run check:i18n)
 *
 * 背景：语言切换（Navbar 里的 EN / 简 / 繁）现在按「当前页面 + 换前缀」生成目标
 * 地址，前提是 zh-cn / zh-tw 目录与英文目录**逐页镜像**。静态导出没有服务器路由
 * 兜底，一旦某个英文页缺中文孪生，语言切换就会给出一个 404 —— 这类漂移不会有
 * 任何一层报错，所以在产物上单独对账。
 *
 * 规则：
 *  1. 扫 out/ 下所有页面，按 /zh-cn/ /zh-tw/ 前缀分成三组。
 *  2. 每个英文页都要求对应的 zh-cn / zh-tw 页存在。
 *  3. 白名单 ALLOW：确实只有英文版的页（语言无关社区页 / 工具页），
 *     与 src/components/i18n.ts 的 LOCALE_ROUTE_EXCEPTIONS 一一对应 —— 两处必须同步。
 *  4. vercel.json 里配了 308 的旧路径是被遮住的产物目录，跳过不报。
 *
 * 用法: node scripts/check-i18n-routes.mjs [dir]   退出码 0 = 镜像完整, 1 = 有缺口
 */
import fs from 'node:fs'
import path from 'node:path'

const root = process.argv[2] || 'out'
if (!fs.existsSync(root)) {
  console.error(`check:i18n — 目录不存在: ${root} (先 npm run build)`)
  process.exit(1)
}

/** 与 src/components/i18n.ts 的 LOCALE_ROUTE_EXCEPTIONS 保持一致 */
const ALLOW = new Set(['/agent-club/', '/api/docs/', '/404/'])

/** vercel.json 的重定向源（边缘先命中 308，这些产物目录不可达） */
const SHADOWED = (() => {
  const set = new Set()
  try {
    const cfg = JSON.parse(fs.readFileSync('vercel.json', 'utf8'))
    for (const r of cfg.redirects ?? []) {
      if (r.source.includes('*')) continue
      set.add(r.source.endsWith('/') ? r.source : `${r.source}/`)
    }
  } catch {
    /* 没有 vercel.json 就不做遮蔽过滤 */
  }
  return set
})()

/** 一次遍历，收集所有含 index.html 的目录 */
function walk(dir, rel = '', out = new Set()) {
  for (const ent of fs.readdirSync(dir, { withFileTypes: true })) {
    if (!ent.isDirectory()) continue
    if (rel === '' && ent.name === '_next') continue
    const child = rel ? `${rel}/${ent.name}` : ent.name
    const full = path.join(dir, ent.name)
    if (fs.existsSync(path.join(full, 'index.html'))) out.add(`/${child}/`)
    walk(full, child, out)
  }
  return out
}

const all = walk(root)
const en = [...all].filter((p) => !p.startsWith('/zh-cn/') && !p.startsWith('/zh-tw/'))
const zcn = new Set([...all].filter((p) => p.startsWith('/zh-cn/')))
const ztw = new Set([...all].filter((p) => p.startsWith('/zh-tw/')))

const gaps = []
let shadowed = 0
for (const p of en) {
  if (p === '/' || ALLOW.has(p)) continue
  if (SHADOWED.has(p)) {
    shadowed++
    continue
  }
  const miss = []
  if (!zcn.has(`/zh-cn${p}`)) miss.push('zh-cn')
  if (!ztw.has(`/zh-tw${p}`)) miss.push('zh-tw')
  if (miss.length) gaps.push({ page: p, miss })
}

// 反向：中文页的英文孪生必须真实存在、且不能是被 308 遮住的旧路径 ——
// 语言切换的 EN 键就是这条地址，指向重定向源会让用户白跳一次（10-08 实测
// /zh-cn/law-school/degree/ → /law-school/degree/ → /degree/ 两跳）。
const enSet = new Set(en)
for (const [pre, set] of [
  ['/zh-cn', zcn],
  ['/zh-tw', ztw],
]) {
  for (const p of set) {
    if (SHADOWED.has(p)) continue // 中文侧自己就是 308 源 ⇒ 页面不可达，跳过
    const bare = p.slice(pre.length) || '/'
    if (bare === '/') continue
    if (SHADOWED.has(bare)) gaps.push({ page: p, miss: [`EN 侧 ${bare} 是 308 源（应指向规范页）`] })
    else if (!enSet.has(bare)) gaps.push({ page: p, miss: ['EN 侧无此页'] })
  }
}

console.log(
  `check:i18n — 英文页 ${en.length}，zh-cn ${zcn.size}，zh-tw ${ztw.size}` +
    `（白名单 ${ALLOW.size}，遮蔽跳过 ${shadowed}）`
)
if (gaps.length === 0) {
  console.log('✓ 三语镜像完整：每个英文页都有 zh-cn / zh-tw 孪生（除白名单）')
  process.exit(0)
}
console.error(`✗ ${gaps.length} 个英文页缺中文孪生 —— 语言切换会指向 404：`)
for (const g of gaps) console.error(`   ${g.page}  缺 ${g.miss.join(' / ')}`)
console.error('   修法：补中文页，或把该页加进 i18n.ts 的 LOCALE_ROUTE_EXCEPTIONS + 本脚本 ALLOW')
process.exit(1)
