import type { Metadata } from 'next'
import SiteShell from '@/components/SiteShell'
import { buildAlternates } from '@/lib/site'

export const metadata: Metadata = {
  alternates: buildAlternates('https://www.dwac.net/zh-tw'),
}

export default function ZhTwLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <SiteShell lang="zh-tw">{children}</SiteShell>
}
