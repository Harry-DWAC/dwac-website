#!/usr/bin/env node
/**
 * 站内死链守卫 (npm run check:links)
 *
 * 扫静态导出产物(out/**) 里所有 <a href> / <Link href> 生成的站内链接，
 * 校验目标是否真实存在于导出产物中。静态导出没有服务器路由兜底，
 * 指向不存在路径的链接就是浏览器里的 404 —— 这类死链只会静默出现，
 * 没有任何一层会报错，所以放在构建后单独跑。
 *
 * 用法:
 *   node scripts/check-links.mjs            # 默认扫 out/
 *   node scripts/check-links.mjs <dir>      # 指定目录
 * 退出码: 0 = 无死链, 1 = 有死链(并列出文件与链接)
 */
import fs from 'node:fs'
import path from 'node:path'

const root = process.argv[2] || 'out'
if (!fs.existsSync(root)) {
  console.error(`check:links — 目录不存在: ${root} (先 npm run build)`)
  process.exit(1)
}

function walk(dir, out = []) {
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, e.name)
    if (e.isDirectory()) walk(p, out)
    else out.push(p)
  }
  return out
}

const all = walk(root)
const files = new Set(all.map((p) => '/' + path.relative(root, p)))
const pages = all.filter((p) => p.endsWith('.html'))

const dec = (u) => {
  try { return decodeURIComponent(u) } catch { return u }
}
const exists = (href) => {
  const clean = dec(href).split('#')[0].split('?')[0]
  if (!clean || !clean.startsWith('/')) return true // 站外/锚点/协议链接不检查
  const base = clean.replace(/\/+$/, '')
  return files.has(clean) || files.has(base + '/') || files.has(base + '/index.html') || files.has(base)
}

const dead = new Map()
const noSlash = new Map()
for (const page of pages) {
  const html = fs.readFileSync(page, 'utf8')
  const hrefs = [...html.matchAll(/href="([^"]+)"/g)].map((m) => m[1])
  for (const h of hrefs) {
    if (/^(https?:|mailto:|tel:|#|javascript:)/i.test(h)) continue
    // 尾斜杠守卫：trailingSlash:true 下，指向目录的无尾斜杠链接会多一次 308 跳转
    // 先剥掉 #锚点 / ?查询，再判断路径部分是否以 / 结尾
    const pathPart = dec(h).split('#')[0].split('?')[0]
    if (!pathPart.endsWith('/') && !/\.[a-zA-Z0-9]{2,5}$/.test(pathPart)) {
      const clean = pathPart.replace(/\/+$/, '')
      if (files.has(clean + '/index.html')) {
        if (!noSlash.has(h)) noSlash.set(h, new Set())
        noSlash.get(h).add('/' + path.relative(root, page))
      }
    }
    if (!exists(h)) {
      if (!dead.has(h)) dead.set(h, new Set())
      dead.get(h).add('/' + path.relative(root, page))
    }
  }
}

if (noSlash.size) {
  console.error(`check:links ⚠ ${noSlash.size} 个站内链接缺尾斜杠（会多一跳 308）:`)
  for (const [href, pagesSet] of noSlash.entries()) {
    console.error(`  ${href}  (${pagesSet.size} 页引用，如 ${[...pagesSet][0]})`)
  }
}

if (dead.size === 0) {
  console.log(`check:links ✓ 无站内死链 (扫描 ${pages.length} 页)${noSlash.size ? '，尾斜杠告警见上' : ''}`)
  process.exit(0)
}

console.error(`check:links ✗ 发现 ${dead.size} 个死链目标:`)
for (const [href, pagesSet] of [...dead.entries()].sort((a, b) => b[1].size - a[1].size)) {
  console.error(`  ${href}`)
  for (const p of [...pagesSet].slice(0, 4)) console.error(`      引用页: ${p}`)
  if (pagesSet.size > 4) console.error(`      ...还有 ${pagesSet.size - 4} 页`)
}
process.exit(1)
