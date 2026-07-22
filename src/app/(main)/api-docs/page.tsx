'use client'

import { useEffect } from 'react'

export default function ApiDocsPage() {
  useEffect(() => {
    // Load Redoc from CDN
    const script = document.createElement('script')
    script.src = 'https://cdn.redoc.ly/redoc/latest/bundles/redoc.standalone.js'
    script.onload = () => {
      // @ts-ignore
      if (window.Redoc) {
        // @ts-ignore
        window.Redoc.init(
          '/openapi.json',
          {
            nativeScrollbars: true,
            theme: {
              colors: {
                primary: { main: '#C9A84C' },
                text: { primary: '#1E293B' },
                http: {
                  get: '#3B82F6',
                  post: '#22C55E',
                },
              },
              typography: {
                fontSize: '14px',
                headings: {
                  fontWeight: '700',
                  fontFamily: 'Georgia, serif',
                },
                code: {
                  fontSize: '13px',
                },
              },
              sidebar: {
                backgroundColor: '#0F172A',
                textColor: '#CBD5E1',
                activeTextColor: '#C9A84C',
              },
            },
            hideDownloadButton: false,
            disableSearch: false,
            expandResponses: '200',
          },
          document.getElementById('redoc-container')
        )
      }
    }
    document.body.appendChild(script)
    return () => {
      if (script.parentNode) script.parentNode.removeChild(script)
    }
  }, [])

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="bg-gradient-navy py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 border border-cyan-400/30 rounded-full mb-8">
            <span className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse" />
            <span className="text-xs font-semibold tracking-[2px] uppercase text-cyan-400">Developer Resources</span>
          </div>
          <h1 className="font-serif text-3xl lg:text-5xl font-bold text-white mb-5">
            Agent API <span className="text-gradient-gold">Documentation</span>
            <span className="ml-3 text-sm text-cyan-400 font-mono">v2.3.2</span>
          </h1>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
            RESTful API for Agent registration, communication, and arbitration process integration.
          </p>
          <div className="mt-6 flex gap-3 justify-center text-sm text-slate-400">
            <span className="bg-slate-800 px-3 py-1 rounded font-mono">Base: api.dwac.net</span>
            <span className="bg-slate-800 px-3 py-1 rounded font-mono">Auth: X-API-Key</span>
            <span className="bg-slate-800 px-3 py-1 rounded font-mono">Format: JSON</span>
          </div>
        </div>
      </section>

      {/* Redoc Container */}
      <div id="redoc-container" className="bg-white" style={{ minHeight: '80vh' }}>
        <div className="flex items-center justify-center py-32">
          <div className="text-center">
            <div className="w-8 h-8 border-2 border-navy-800 border-t-gold-500 rounded-full animate-spin mx-auto mb-4" />
            <p className="text-gray-500">Loading API documentation...</p>
          </div>
        </div>
      </div>
    </div>
  )
}
