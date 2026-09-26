#!/usr/bin/env node
/**
 * 仓库卫生守卫 (npm run check:repo)
 *
 * 背景：有三类问题「构建不报错、线上也不报错」，只会静默腐蚀站点质量：
 *
 *   1) <h1> 里带 emoji。
 *      <h1> 是搜索引擎结果与分享卡片抓取的标题，emoji 会原样进 SERP；
 *      对一家仲裁机构的主标题不合适，且 emoji 字形跨系统（Win/macOS/Android）不一致。
 *      实例：/agent-club/ 的 h1 曾是 "🤖 Agent Club"。
 *
 *   2) 客户端跳转「死壳」页面。
 *      src/app 下任意 page.tsx 里用 window.location 跳转，而 vercel.json 早已对同一路径
 *      配了 301/308 —— 边缘先命中，这个壳永远不会被访问，却每页产出 ~22 KB HTML 进 out/。
 *      本守卫只报「路径已被 vercel.json 覆盖」的壳（这类可证明为死代码）；
 *      未被覆盖的客户端跳转页暂不报错，但要按 P2 逐步换成 301/308。
 *
 *   3) public/ 顶层的图标 / 社交卡片体积失控。
 *      og-image.png 是每一页 og:image 的唯一资产，社交平台按原图下载；
 *      它曾长期 751 KB（1200×630 PNG）。这类资产应当量化/压缩后入库。
 *
 * 用法: node scripts/check-repo.mjs [--quiet]
 * 退出码: 0 = 干净, 1 = 有问题
 */
import fs from 'node:fs'
import path from 'node:path'

const REPO = process.cwd()
const QUIET = process.argv.includes('--quiet')
const MAX_IMAGE_BYTES = 300 * 1024
const EMOJI = /[\u{1F000}-\u{1FAFF}\u{2600}-\u{27BF}\u{2B00}-\u{2BFF}\u{FE0F}]/u

const problems = []

function walk(dir, test, out = []) {
  if (!fs.existsSync(dir)) return out
  for (const ent of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, ent.name)
    if (ent.isDirectory()) walk(p, test, out)
    else if (test(p)) out.push(p)
  }
  return out
}

/* ---------- 1) <h1> 不得含 emoji ---------- */
for (const file of walk(path.join(REPO, 'src'), (p) => p.endsWith('.tsx'))) {
  const src = fs.readFileSync(file, 'utf8')
  const re = /<h1[^>]*>([\s\S]*?)<\/h1>/g
  let m
  while ((m = re.exec(src)) !== null) {
    const text = m[1].replace(/<[^>]+>/g, '')
    const hit = text.match(EMOJI)
    if (hit) {
      const line = src.slice(0, m.index).split('\n').length
      problems.push(
        `${path.relative(REPO, file)}:${line} — <h1> 内含 emoji "${hit[0]}"（"${text.trim().slice(0, 40)}"），h1 会进 SERP，请移除`
      )
    }
  }
}

/* ---------- 2) 已被 vercel.json 覆盖的客户端跳转壳 = 死代码 ---------- */
const vercelPath = path.join(REPO, 'vercel.json')
if (fs.existsSync(vercelPath)) {
  const cfg = JSON.parse(fs.readFileSync(vercelPath, 'utf8'))
  const sources = new Set(
    (cfg.redirects || []).flatMap((r) => [r.source, r.source.replace(/\/$/, '')])
  )
  const routeOf = (file) => {
    const rel = path.relative(path.join(REPO, 'src', 'app'), path.dirname(file))
    const segs = rel.split(path.sep).filter((s) => s && !/^\(.*\)$/.test(s) && !/^\[.*\]$/.test(s))
    return '/' + segs.join('/')
  }
  for (const file of walk(path.join(REPO, 'src', 'app'), (p) => /[\\/]page\.tsx$/.test(p))) {
    const src = fs.readFileSync(file, 'utf8')
    if (!/window\.location\.(href|replace|assign)/.test(src)) continue
    const route = routeOf(file)
    if (sources.has(route) || sources.has(route + '/')) {
      problems.push(
        `${path.relative(REPO, file)} — 死壳：/…${route || '/'}/ 已被 vercel.json 重定向覆盖，本页永远访问不到，直接删除`
      )
    }
  }
}

/* ---------- 3) public/ 顶层图片体积 ---------- */
const pub = path.join(REPO, 'public')
if (fs.existsSync(pub)) {
  for (const ent of fs.readdirSync(pub, { withFileTypes: true })) {
    if (!ent.isFile() || !/\.(png|jpe?g|webp)$/i.test(ent.name)) continue
    const bytes = fs.statSync(path.join(pub, ent.name)).size
    if (bytes > MAX_IMAGE_BYTES) {
      problems.push(
        `public/${ent.name} — ${(bytes / 1024).toFixed(0)} KB > ${MAX_IMAGE_BYTES / 1024} KB（顶层图标/社交卡片资产，请量化或压缩；Pillow: quantize(colors=128)）`
      )
    }
  }
}

/* ---------- 汇总 ---------- */
if (problems.length) {
  console.error(`check:repo — 发现 ${problems.length} 处问题：`)
  for (const p of problems) console.error('  ✗ ' + p)
  process.exit(1)
}
if (!QUIET) {
  console.log('check:repo — 通过（h1 无 emoji · 无被重定向覆盖的跳转壳 · public 顶层图片 ≤ 300 KB）')
}
