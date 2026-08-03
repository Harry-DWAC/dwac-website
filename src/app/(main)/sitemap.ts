import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.dwac.net'

  const routes = [
    '/', '/about/', '/charter/', '/contact/',
    '/dispute/', '/how-to-apply/', '/rules/', '/fees/',
    '/fee-calculator/', '/model-clause/', '/virtual-hearing/',
    '/arbitration/', '/digital-tribunal/', '/club/',
    '/arbitrators/', '/privacy/', '/terms/',
    '/resources/law/', '/cases/',
    '/login/', '/register/',
    // New pages added June 2026
    '/library/', '/library/book/vol1/', '/library/book/vol2/', '/library/book/vol3/', '/library/book/vol4/',
    '/community/', '/law-school/', '/agent-club/',
    '/publications/', '/publications/gclc/',
    '/agent-registry/', '/api-docs/', '/services/',
    '/expertise/', '/tribunal/', '/membership/',
    '/news/', '/why-dwac/', '/framework/',
    '/evidence-guidance/', '/members/', '/arbitration-flow/',
    '/degree/', '/resources/', '/arbitrators/join/',
    '/rules/full/', '/law-school/courses/', '/law-school/programs/',
    '/law-school/resources/', '/law-school/publications/',
    '/law-school/community/', '/law-school/student-record/',
    // Resources pages
    '/resources/contracts/', '/resources/forms/',
    '/resources/law-unification-report/', '/resources/law-unification-strategy/',
    '/payment/', '/forum/',
    // Individual profile pages
    '/profile/harry/', '/profile/dr-frontie/', '/profile/dr-venessa/',
    '/profile/prof-alec/', '/profile/fresa-li/', '/profile/dr-gochye/',
    '/profile/tc-zhou/',
  ]

  const entries: MetadataRoute.Sitemap = []

  for (const route of routes) {
    const priority = route === '' ? 1.0 : ['/about/', '/charter/', '/rules/', '/digital-tribunal/'].includes(route) ? 0.9 : 0.7
    entries.push({
      url: `${baseUrl}${route}`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority,
    })
    entries.push({
      url: `${baseUrl}/zh-cn${route}`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: priority * 0.9,
    })
    entries.push({
      url: `${baseUrl}/zh-tw${route}`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: priority * 0.9,
    })
  }

  return entries
}
