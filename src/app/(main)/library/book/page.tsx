import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Professional Library — DWAC',
  description: 'DWAC Professional Library — four authoritative volumes on digital world law, arbitration, and AI governance.',
}

const books = [
  {
    href: '/library/book/vol1/',
    vol: 'Volume I',
    title: 'Legislative Compilation',
    subtitle: '世界各国关于网络空间的立法汇编',
    desc: 'Comprehensive compilation of cyberspace legislation from jurisdictions worldwide.',
    cover: '/images/library/vol1-cover.jpg',
    files: [
      { label: 'EN EPUB', href: '/publications/gclc/vol-i/Global-Cyber-Law-Compendium-V1-EN-v8.epub' },
      { label: 'CN EPUB', href: '/publications/gclc/vol-i/Global-Cyber-Law-Compendium-V1-CN-v25.epub' },
      { label: 'EN Markdown', href: '/publications/gclc/vol-i/Global-Cyber-Law-Compendium-V1-EN-v8.md' },
      { label: 'CN Markdown', href: '/publications/gclc/vol-i/Global-Cyber-Law-Compendium-V1-CN-v25.md' },
    ],
  },
  {
    href: '/library/book/vol2/',
    vol: 'Volume II',
    title: 'Case Law Collection',
    subtitle: '世界各地涉网纠纷案例研究',
    desc: 'Case studies of internet-related disputes from jurisdictions around the world.',
    cover: '/images/library/vol2-cover-en.jpg',
    files: [
      { label: 'EN EPUB', href: '/publications/gclc/vol-ii/Global-Cyber-Law-Compendium-V2_Publication-EN-v12.epub' },
      { label: 'CN EPUB', href: '/publications/gclc/vol-ii/Global-Cyber-Law-Compendium-V2_Complete-CN_Final-v33.epub' },
      { label: 'EN Markdown', href: '/publications/gclc/vol-ii/Global-Cyber-Law-Compendium-V2_Publication-EN-v12.md' },
      { label: 'CN Markdown', href: '/publications/gclc/vol-ii/Global-Cyber-Law-Compendium-V2_Complete-CN_Final-v33.md' },
    ],
  },
  {
    href: '/library/book/vol3/',
    vol: 'Volume III',
    title: 'AI Law Compendium',
    subtitle: '人工智能法律问题研究',
    desc: 'Legal frameworks and governance models for artificial intelligence in the digital age.',
    cover: '/images/library/vol3-cover.jpg',
    files: [
      { label: 'EN EPUB', href: '/publications/gclc/vol-iii/Global-Cyber-Law-Compendium-Volume-III-v2.2-EN.epub' },
      { label: 'CN EPUB', href: '/publications/gclc/vol-iii/Global-Cyber-Law-Compendium-Volume-III-v2.2-CN.epub' },
      { label: 'EN Markdown', href: '/publications/gclc/vol-iii/Global-Cyber-Law-Compendium-Volume-III-v2.2-EN.md' },
      { label: 'CN Markdown', href: '/publications/gclc/vol-iii/Global-Cyber-Law-Compendium-Volume-III-v2.2-CN.md' },
    ],
  },
  {
    href: '/library/book/vol4/',
    vol: 'Volume IV',
    title: 'Global Arbitration Rules Reference',
    subtitle: '全球仲裁规则汇编',
    desc: 'A comprehensive reference of arbitration rules from major institutions worldwide.',
    cover: '/images/library/vol4-cover.jpg',
    files: [
      { label: 'EN EPUB', href: '/publications/library/Global-Arbitration-Rules-Reference-Book.epub' },
      { label: 'EN Markdown', href: '/publications/library/Global-Arbitration-Rules-Reference-Book.md' },
    ],
  },
]

export default function BookIndexPage() {
  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="bg-gradient-navy py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gold-400 font-semibold mb-4 tracking-wide uppercase">DWAC Professional Library</p>
          <h1 className="font-serif text-4xl lg:text-5xl font-bold text-white mb-4">
            Professional Library
          </h1>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto">
            Four authoritative volumes on digital world law, arbitration, AI governance, and global arbitration rules.
          </p>
        </div>
      </section>

      {/* Books Grid */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {books.map((book) => (
              <div
                key={book.href}
                className="bg-white border border-slate-200 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col"
              >
                {/* Cover + Info */}
                <Link href={book.href} className="p-6 pb-4 flex gap-5 group">
                  <div className="w-24 h-32 bg-navy-100 rounded-lg overflow-hidden flex-shrink-0">
                    <img
                      src={book.cover}
                      alt={book.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <span className="inline-block px-2 py-0.5 bg-gold-100 text-gold-700 text-xs font-bold rounded mb-1">
                      {book.vol}
                    </span>
                    <h2 className="font-serif text-xl font-bold text-navy-800 mb-0.5 group-hover:text-gold-600 transition-colors">
                      {book.title}
                    </h2>
                    <p className="text-sm text-gold-600 mb-1">{book.subtitle}</p>
                    <p className="text-xs text-slate-500 line-clamp-2">{book.desc}</p>
                    <span className="inline-flex items-center gap-1 text-gold-500 text-xs font-semibold mt-2 group-hover:gap-2 transition-all">
                      View details
                      <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </span>
                  </div>
                </Link>

                {/* Download Links */}
                <div className="px-6 pb-5 pt-2 border-t border-slate-100 mt-auto">
                  <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">Download</p>
                  <div className="flex flex-wrap gap-2">
                    {book.files.map((f) => (
                      <a
                        key={f.label}
                        href={f.href}
                        download
                        className="inline-flex items-center gap-1 px-2.5 py-1 bg-slate-100 hover:bg-gold-50 text-xs text-slate-600 hover:text-gold-700 rounded-md border border-slate-200 hover:border-gold-300 transition-colors"
                      >
                        {f.label.endsWith('EPUB') ? '📖' : '📝'}
                        {f.label}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer note */}
      <section className="py-12 bg-navy-900 text-center">
        <p className="text-slate-400 text-sm">
          All volumes are open access. Free download, share, and cite with attribution to DWAC.
        </p>
      </section>
    </div>
  )
}
