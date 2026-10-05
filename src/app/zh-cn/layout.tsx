import type { Metadata } from 'next'
import SiteShell from '@/components/SiteShell'
import { buildAlternates } from '@/lib/site'

export const metadata: Metadata = {
  alternates: buildAlternates('https://www.dwac.net/zh-cn'),
}

export default function ZhCnLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <SiteShell lang="zh-cn">{children}</SiteShell>
}
