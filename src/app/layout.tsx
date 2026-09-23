import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

export const metadata: Metadata = {
  title: 'DWAC - Digital World Arbitration Centre',
  description: 'The first permanent international arbitration institution dedicated to resolving digital world disputes. Professional, efficient, and globally enforceable arbitration services.',
  keywords: 'arbitration, digital disputes, blockchain, AI disputes, online arbitration, DWAC',
  alternates: {
    canonical: 'https://www.dwac.net',
    languages: {
      'en': 'https://www.dwac.net',
      'zh-CN': 'https://www.dwac.net/zh-cn',
      'zh-TW': 'https://www.dwac.net/zh-tw',
    },
  },
  verification: {
    google: '_STaEeru8O7Ef6K1hfQs8mt7HVtfIQrjF4M4QSj4ink',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.variable}>
      {/* 不再手写 google-site-verification：metadata.verification.google 已生成同一标签，
          手写会导致 <head> 里出现两条重复的验证 meta。 */}
      <body className="min-h-full flex flex-col bg-navy-900 text-gray-200 font-sans antialiased">
        <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-gold-500 focus:text-navy-900 focus:rounded-lg focus:font-semibold">Skip to content</a>
        {/* Background effects */}
        <div className="fixed inset-0 bg-grid pointer-events-none z-0" />
        <div className="fixed -top-48 -left-48 w-[800px] h-[800px] rounded-full bg-navy-500/15 blur-[150px] pointer-events-none z-0" />
        <div className="fixed -bottom-64 -right-48 w-[600px] h-[600px] rounded-full bg-gold-500/[0.06] blur-[120px] pointer-events-none z-0" />
        <div className="relative z-10">
          {children}
        </div>
      </body>
    </html>
  )
}
