import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import ErrorBoundary from '@/components/ErrorBoundary'
import { type Lang } from '@/components/i18n'

/**
 * Shared chrome for the three language route groups.
 *
 * `(main)/layout.tsx`, `zh-cn/layout.tsx` and `zh-tw/layout.tsx` used to carry
 * three near-identical copies of this markup (Navbar + <main id="main-content">
 * + ErrorBoundary + Footer), differing only by the `lang` prop. Keeping them in
 * one place means a chrome change (skip target, error boundary, shell markup)
 * can no longer be applied to one locale and forgotten in the other two.
 */
export default function SiteShell({
  lang = 'en',
  children,
}: {
  lang?: Lang
  children: React.ReactNode
}) {
  return (
    <>
      <Navbar lang={lang} />
      <main id="main-content" className="flex-1">
        <ErrorBoundary>{children}</ErrorBoundary>
      </main>
      <Footer lang={lang} />
    </>
  )
}
