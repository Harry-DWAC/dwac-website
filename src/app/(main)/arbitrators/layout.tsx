import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Our Arbitrators | Digital World Arbitration Centre',
  description: 'Meet DWAC\'s certified arbitrators specializing in digital world disputes, cross-border conflicts, and emerging technology challenges.',
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
