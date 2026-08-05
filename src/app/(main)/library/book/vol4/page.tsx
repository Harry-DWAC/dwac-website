import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Global Arbitration Rules Reference (Volume IV) | DWAC Professional Library',
  description: 'A comprehensive reference of arbitration rules from major institutions worldwide. Free download.',
}

export default function Vol4Page() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <div className="bg-navy-800 text-white py-3 px-4 flex items-center justify-between sticky top-0 z-10">
        <a href="/library" className="text-gold-400 hover:underline text-sm">← Back to Library</a>
        <span className="text-sm text-gray-300">DWAC Professional Library · Volume IV</span>
      </div>

      <div className="max-w-4xl mx-auto w-full px-4 py-12">
        {/* Title */}
        <div className="text-center mb-10">
          <h1 className="font-serif text-3xl lg:text-4xl font-bold text-navy-800 mb-2">
            Global Arbitration Rules Reference
          </h1>
          <p className="text-lg text-slate-500">Volume IV · 全球仲裁规则汇编</p>
        </div>

        {/* Download Cards */}
        <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-200 mb-12 max-w-md mx-auto">
          <h2 className="font-serif text-xl font-bold text-navy-800 mb-4 text-center">Download</h2>
          <div className="space-y-3">
            {[
              { href: '/publications/library/Global-Arbitration-Rules-Reference-Book.epub', fmt: 'EPUB', icon: '📖' },
              { href: '/publications/library/Global-Arbitration-Rules-Reference-Book.md', fmt: 'Markdown', icon: '📝' },
            ].map(({ href, fmt, icon }) => (
              <a
                key={fmt}
                href={href}
                download
                className="flex items-center justify-between p-3 bg-slate-50 hover:bg-gold-50 rounded-lg border border-slate-200 hover:border-gold-300 transition-colors group"
              >
                <span className="flex items-center gap-2 text-sm font-medium text-slate-700 group-hover:text-navy-800">
                  {icon} {fmt} Format
                </span>
                <span className="text-xs text-gold-500 group-hover:translate-x-0.5 transition-transform">Download →</span>
              </a>
            ))}
          </div>
        </div>

        {/* Abstract */}
        <div className="bg-white rounded-xl p-8 shadow-sm prose max-w-none">
          <h2 className="font-serif text-2xl font-bold text-navy-800 mb-4">About This Volume</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Volume IV is a comprehensive reference guide to arbitration rules from major arbitration institutions worldwide. 
            It compiles and compares the procedural frameworks of leading arbitral bodies, providing practitioners and 
            scholars with a one-stop resource for cross-institutional rule comparison.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            Coverage includes: ICC, LCIA, SIAC, HKIAC, CIETAC, UNCITRAL, SCC, ICSID, and many other major arbitral 
            institutions across Asia, Europe, the Americas, Africa, and the Middle East.
          </p>
          <div className="mt-6 p-4 bg-amber-50 border border-amber-200 rounded-lg">
            <p className="text-sm text-amber-800">
              <strong>Open Access:</strong> This volume is freely available for download, sharing, and citation. 
              Please attribute to DWAC Professional Library when referencing.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
