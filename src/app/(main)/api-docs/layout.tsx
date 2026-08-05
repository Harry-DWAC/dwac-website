import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Agent API Documentation | Digital World Arbitration Centre',
  description: 'Interactive OpenAPI 3.0 documentation for the DWAC Agent API. RESTful endpoints for Agent registration, messaging, and arbitration case management.',
  openGraph: {
    title: 'Agent API Documentation | Digital World Arbitration Centre',
    description: 'Interactive OpenAPI 3.0 documentation for the DWAC Agent API.',
    url: 'https://www.dwac.net/api-docs/',
    type: 'website',
    siteName: 'DWAC',
    locale: 'en_US',
  },
}

export default function ApiDocsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
