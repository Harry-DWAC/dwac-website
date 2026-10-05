import type { Metadata } from 'next'
import SiteShell from '@/components/SiteShell'
import { buildAlternates } from '@/lib/site'

export const metadata: Metadata = {
  alternates: buildAlternates('https://www.dwac.net'),
}

export default function MainLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <SiteShell lang="en">{children}</SiteShell>
}
