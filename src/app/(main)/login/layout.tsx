import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Login | Digital World Arbitration Centre',
  description: 'Sign in to your DWAC account to manage disputes and access arbitration services.',
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
