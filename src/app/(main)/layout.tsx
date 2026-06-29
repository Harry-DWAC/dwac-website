import type { Metadata } from 'next'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import ErrorBoundary from '@/components/ErrorBoundary'

export const metadata: Metadata = {
  alternates: {
    canonical: 'https://www.dwac.net',
    languages: {
      'en': 'https://www.dwac.net',
      'zh-CN': 'https://www.dwac.net/zh-cn',
      'zh-TW': 'https://www.dwac.net/zh-tw',
    },
  },
}

export default function MainLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <Navbar lang="en" />
      <main className="flex-1">
        <ErrorBoundary>
          {children}
        </ErrorBoundary>
      </main>
      <Footer lang="en" />
    </>
  )
}
