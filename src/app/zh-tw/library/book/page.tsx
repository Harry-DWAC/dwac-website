import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '專業圖書館 — DWAC',
  description: 'DWAC 專業圖書館——數位世界法律與仲裁權威出版物。',
}

const books = [
  {
    href: '/zh-tw/library/book/vol1/',
    title: '第一卷',
    subtitle: '世界各國關於網路空間的立法彙編',
    desc: '全球各法域網路空間立法的全面彙編。',
    cover: '/images/library/vol1-cover.jpg',
  },
  {
    href: '/zh-tw/library/book/vol2/',
    title: '第二卷',
    subtitle: '世界各地涉網糾紛案例研究',
    desc: '來自世界各地的網際網路相關爭議案例研究。',
    cover: '/images/library/vol2-cover-tw.jpg',
  },
]

export default function BookIndexPage() {
  return (
    <div className="flex flex-col">
      <section className="bg-gradient-navy py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 border border-gold-500/30 rounded-full mb-8">
            <span className="w-2 h-2 bg-gold-500 rounded-full" />
            <span className="text-xs font-bold tracking-[3px] uppercase text-gold-400">Professional Library</span>
          </div>
          <h1 className="font-serif text-4xl lg:text-5xl font-bold text-white mb-5">專業圖書館</h1>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
            DWAC 核心出版物——系統梳理全球網路空間法律框架與爭議解決實踐。
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {books.map((book) => (
              <Link
                key={book.href}
                href={book.href}
                className="group bg-slate-50 rounded-2xl overflow-hidden border border-slate-200 hover:border-gold-500/50 hover:shadow-[0_0_30px_rgba(201,168,76,0.1)] transition-all"
              >
                <div className="p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="w-10 h-10 rounded-lg bg-gradient-gold flex items-center justify-center text-navy-900 font-bold text-sm">{book.title.slice(1, 3)}</span>
                    <span className="text-xs font-bold tracking-[2px] uppercase text-gold-600">{book.title}</span>
                  </div>
                  <h3 className="font-serif text-2xl font-bold text-slate-900 mb-3 group-hover:text-gold-700 transition-colors">
                    {book.subtitle}
                  </h3>
                  <p className="text-gray-500 leading-relaxed mb-6">{book.desc}</p>
                  <span className="inline-flex items-center text-gold-600 font-semibold text-sm group-hover:translate-x-1 transition-transform">
                    瀏覽目錄 →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-slate-50">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h2 className="font-serif text-2xl font-bold text-slate-900 mb-4">關於本叢書</h2>
          <p className="text-gray-500 max-w-2xl mx-auto leading-relaxed">
            DWAC 專業圖書館為法律從業者、政策制定者和學者提供系統化的網路法律資源。每卷由 DWAC 研究團隊編撰，持續更新，反映全球網路空間法律的最新發展。
          </p>
          <div className="mt-8">
            <Link
              href="/zh-tw/"
              className="inline-flex items-center px-6 py-3 border border-slate-300 text-slate-700 font-semibold rounded-lg hover:border-gold-500 hover:text-gold-600 transition-all"
            >
              ← 返回首頁
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
