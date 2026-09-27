import type { MetadataRoute } from 'next'
import fs from 'node:fs'
import path from 'node:path'
import vercelConfig from '../../../vercel.json'

/**
 * sitemap 由源码目录自动推导，不再维护手工清单。
 *
 * 背景：旧实现是一份硬编码的 routes 数组，新增页面时很容易漏登记。
 * 实测（2026-09-28）有 46 个真实存在、线上返回 200 的内容页未进 sitemap，
 * 其中包括主导航里的 /faq/、/membership-arbitrators/，以及 /library/book/、
 * /about/certification/、/agents/、/downloads/、/publications/gclc/、
 * /publications/policy-statements/cac-feedback-2026-09/ 等。
 *
 * 规则：
 *  1. src/app 下的目录结构是唯一事实来源（目录 + page.tsx = 一个页面）。
 *  2. 路由组 (main) 不参与 URL 前缀；动态段 [id] 从 generateStaticParams 取字面量。
 *  3. 跳过工具/私有页（api、登录、支付、profile、members、api-docs、404…）。
 *  4. 跳过 vercel.json 已配 301/308 的旧路径——边缘会先命中重定向，
 *     把它们写进 sitemap 等于给爬虫送跳转地址。
 *  5. 三语各自独立枚举，只为真实存在的 zh-cn / zh-tw 页面产出条目，不制造软 404。
 */

const baseUrl = 'https://www.dwac.net'
const APP_DIR = path.join(process.cwd(), 'src', 'app')

/** 不产出 URL 的目录名（工具页 / 私有页 / 三语目录单独枚举） */
const EXCLUDE = new Set([
  'api',
  'profile',
  'payment',
  'login',
  'register',
  'members',
  'api-docs',
  'agent-registry',
  '404',
  'not-found',
  'zh-cn',
  'zh-tw',
])

/** 首页与核心制度页的优先级 */
const HIGH = ['/about/', '/charter/', '/rules/', '/digital-tribunal/']

/** 从 page.tsx 的 generateStaticParams 中抓出字面量 slug */
function staticSlugs(pageFile: string): string[] {
  const src = fs.readFileSync(pageFile, 'utf8')
  const ids: string[] = []
  const re = /id:\s*['"]([^'"]+)['"]/g
  let m: RegExpExecArray | null
  while ((m = re.exec(src)) !== null) ids.push(m[1])
  return ids
}

function collect(dir: string, prefix: string, out: string[] = []): string[] {
  if (!fs.existsSync(dir)) return out
  for (const ent of fs.readdirSync(dir, { withFileTypes: true })) {
    if (!ent.isDirectory()) continue
    const { name } = ent
    const full = path.join(dir, name)

    // 路由组 (main)：不参与 URL，递归时保持当前前缀
    if (name.startsWith('(') && name.endsWith(')')) {
      collect(full, prefix, out)
      continue
    }
    // 动态段：URL 由 generateStaticParams 决定
    if (name.startsWith('[')) {
      const page = path.join(full, 'page.tsx')
      if (fs.existsSync(page)) for (const slug of staticSlugs(page)) out.push(`${prefix}${slug}/`)
      continue
    }
    if (EXCLUDE.has(name)) continue

    const routePath = `${prefix}${name}`
    if (fs.existsSync(path.join(full, 'page.tsx'))) out.push(`${routePath}/`)
    collect(full, `${routePath}/`, out)
  }
  return out
}

/** vercel.json 重定向源 → 精确集合 + 通配前缀 */
function redirectSources(): { exact: Set<string>; wildcard: string[] } {
  const exact = new Set<string>()
  const wildcard: string[] = []
  for (const r of (vercelConfig.redirects ?? []) as { source: string }[]) {
    const src = r.source
    if (src.includes('*')) {
      wildcard.push(`${src.split('*')[0].replace(/\/$/, '')}/`)
    } else {
      exact.add(src.endsWith('/') ? src : `${src}/`)
      exact.add(src.replace(/\/$/, ''))
    }
  }
  return { exact, wildcard }
}

const { exact: R_EXACT, wildcard: R_WILDCARD } = redirectSources()

function isRedirectSource(route: string): boolean {
  if (R_EXACT.has(route) || R_EXACT.has(route.replace(/\/$/, ''))) return true
  return R_WILDCARD.some((w) => route.startsWith(w))
}

function priorityOf(route: string): number {
  const normalised = /^\/zh-(cn|tw)\//.test(route) ? route.replace(/^\/zh-(cn|tw)/, '') : route
  if (normalised === '/') return 1.0
  if (HIGH.includes(normalised)) return 0.9
  return 0.7
}

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = new Set<string>(['/'])
  // 三语各自的首页也要收录：collect() 只产出子页面，不含目录自身的首页
  for (const [dir, prefix] of [['', '/'], ['zh-cn', '/zh-cn/'], ['zh-tw', '/zh-tw/']] as const) {
    const root = dir ? path.join(APP_DIR, dir) : APP_DIR
    for (const route of collect(root, prefix)) routes.add(route)
    if (dir && fs.existsSync(path.join(root, 'page.tsx'))) routes.add(prefix)
  }

  const buildTime = new Date()
  return Array.from(routes)
    .filter((route) => !isRedirectSource(route))
    .sort()
    .map((route) => ({
      url: `${baseUrl}${route}`,
      lastModified: buildTime,
      changeFrequency: 'weekly' as const,
      priority: priorityOf(route),
    }))
}
