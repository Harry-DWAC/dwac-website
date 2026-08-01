import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '專業圖書館 — DWAC',
  description: 'DWAC 專業圖書館——四卷數位世界法律、仲裁與人工智慧治理權威出版物。',
}

const books = [
  {
    href: '/zh-tw/library/book/vol1/',
    vol: '第一卷',
    title: '立法彙編',
    subtitle: '世界各國關於網路空間的立法彙編',
    desc: '全球各法域網路空間立法的全面彙編。',
    cover: '/images/library/vol1-cover.jpg',
    files: [
      { label: 'EN EPUB', href: '/publications/gclc/vol-i/Global-Cyber-Law-Compendium-V1-EN-v8.epub' },
      { label: 'CN EPUB', href: '/publications/gclc/vol-i/Global-Cyber-Law-Compendium-V1-CN-v25.epub' },
      { label: 'EN Markdown', href: '/publications/gclc/vol-i/Global-Cyber-Law-Compendium-V1-EN-v8.md' },
      { label: 'CN Markdown', href: '/publications/gclc/vol-i/Global-Cyber-Law-Compendium-V1-CN-v25.md' },
    ],
  },
  {
    href: '/zh-tw/library/book/vol2/',
    vol: '第二卷',
    title: '案例研究',
    subtitle: '世界各地涉網糾紛案例研究',
    desc: '世界各地的網際網路相關爭議與數位仲裁案例研究。',
    cover: '/images/library/vol2-cover-en.jpg',
    files: [
      { label: 'EN EPUB', href: '/publications/gclc/vol-ii/Global-Cyber-Law-Compendium-V2_Publication-EN-v12.epub' },
      { label: 'CN EPUB', href: '/publications/gclc/vol-ii/Global-Cyber-Law-Compendium-V2_Complete-CN_Final-v33.epub' },
      { label: 'EN Markdown', href: '/publications/gclc/vol-ii/Global-Cyber-Law-Compendium-V2_Publication-EN-v12.md' },
      { label: 'CN Markdown', href: '/publications/gclc/vol-ii/Global-Cyber-Law-Compendium-V2_Complete-CN_Final-v33.md' },
    ],
  },
  {
    href: '/zh-tw/library/book/vol3/',
    vol: '第三卷',
    title: '人工智慧法律',
    subtitle: '人工智慧法律問題研究',
    desc: '人工智慧在數位時代的法律框架與治理模式研究。',
    cover: '/images/library/vol3-cover.jpg',
    files: [
      { label: 'EN EPUB', href: '/publications/gclc/vol-iii/Global-Cyber-Law-Compendium-Volume-III-v2.2-EN.epub' },
      { label: 'CN EPUB', href: '/publications/gclc/vol-iii/Global-Cyber-Law-Compendium-Volume-III-v2.2-CN.epub' },
      { label: 'EN Markdown', href: '/publications/gclc/vol-iii/Global-Cyber-Law-Compendium-Volume-III-v2.2-EN.md' },
      { label: 'CN Markdown', href: '/publications/gclc/vol-iii/Global-Cyber-Law-Compendium-Volume-III-v2.2-CN.md' },
    ],
  },
  {
    href: '/zh-tw/library/book/vol4/',
    vol: '第四卷',
    title: '全球仲裁規則彙編',
    subtitle: '全球仲裁規則彙編',
    desc: '全球主要仲裁機構的仲裁規則綜合參考。',
    cover: '/images/library/vol4-cover.jpg',
    files: [
      { label: 'EN EPUB', href: '/publications/library/Global-Arbitration-Rules-Reference-Book.epub' },
      { label: 'EN Markdown', href: '/publications/library/Global-Arbitration-Rules-Reference-Book.md' },
    ],
  },
]

export default function BookIndexPageZhTw() {
  return (
    <div className="flex flex-col">
      <section className="bg-gradient-navy py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gold-400 font-semibold mb-4 tracking-wide uppercase">DWAC 專業圖書館</p>
          <h1 className="font-serif text-4xl lg:text-5xl font-bold text-white mb-4">
            專業圖書館
          </h1>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto">
            四卷數位世界法律、仲裁、人工智慧治理與全球仲裁規則的權威出版物。
          </p>
        </div>
      </section>

      <section className="py-20 bg-slate-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {books.map((book) => (
              <div
                key={book.href}
                className="bg-white border border-slate-200 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col"
              >
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
                      檢視詳情
                      <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </span>
                  </div>
                </Link>

                <div className="px-6 pb-5 pt-2 border-t border-slate-100 mt-auto">
                  <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">下載</p>
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

      <section className="py-12 bg-navy-900 text-center">
        <p className="text-slate-400 text-sm">
          全部卷冊開放獲取。免費下載、分享與引用，需註明來源為 DWAC。
        </p>
      </section>
    </div>
  )
}
