import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import ErrorBoundary from '@/components/ErrorBoundary'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  alternates: {
    canonical: 'https://www.dwac.net/zh-tw',
    languages: {
      'en': 'https://www.dwac.net',
      'zh-CN': 'https://www.dwac.net/zh-cn',
      'zh-TW': 'https://www.dwac.net/zh-tw',
    },
  },
}

export default function ZhTwLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <Navbar lang="zh-tw" />
      <main className="flex-1">
        <ErrorBoundary>
          {children}
        </ErrorBoundary>
      </main>
      <Footer lang="zh-tw" />
    </>
  )
}
