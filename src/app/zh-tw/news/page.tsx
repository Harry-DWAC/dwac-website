import Link from 'next/link'
import { zhTwFeaturedNews as featuredNews, zhTwNewsItems as newsItems } from '@/lib/news'

export const metadata = {
  title: '新聞動態 - 數位世界仲裁中心',
}


const categoryColors: Record<string, string> = {
  Institutional: 'bg-blue-50 text-blue-700',
  Industry: 'bg-purple-50 text-purple-700',
  Event: 'bg-gold-500/10 text-gold-700',
  Publications: 'bg-emerald-50 text-emerald-700',
}

const categories = ['全部', '機構新聞', '行業動態', '活動通知', '出版物']

export default function NewsPage() {
  return (
    <div className="flex flex-col">
      <section className="relative bg-gradient-navy py-20 lg:py-28">
        <div className="absolute inset-0 bg-grid-gold opacity-20" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-xs font-bold tracking-[3px] uppercase text-gold-500 mb-3 block">最新動態</span>
          <h1 className="font-serif text-3xl lg:text-4xl font-bold text-white mb-5">新聞資訊</h1>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
            了解DWAC的機構發展、行業洞察、活動通知和學術出版物。
          </p>
        </div>
      </section>

      <section className="bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex gap-2 py-4 overflow-x-auto">
            {categories.map((cat) => (
              <button
                key={cat}
                className={`px-4 py-2 text-sm font-medium rounded-full whitespace-nowrap transition-all ${
                  cat === '全部'
                    ? 'bg-navy-900 text-white'
                    : 'bg-white text-slate-600 border border-slate-200 hover:border-navy-900 hover:text-navy-900'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-xs font-bold tracking-[3px] uppercase text-gold-600 mb-3 block">精選</span>
          <h2 className="font-serif text-3xl lg:text-4xl font-bold text-slate-900 mb-8">精選報導</h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {featuredNews.map((news, idx) => (
              <article
                key={idx}
                className="bg-white border border-slate-200 shadow-sm hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 rounded-xl overflow-hidden group"
              >
                <div className="h-48 bg-gradient-navy flex items-center justify-center">
                  <div className="w-16 h-16 bg-gold-500/10 rounded-2xl flex items-center justify-center">
                    <svg className="w-8 h-8 text-gold-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                    </svg>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${categoryColors[news.category]}`}>
                      {news.category}
                    </span>
                    <span className="text-xs text-slate-400">{news.readTime}</span>
                  </div>
                  <p className="text-xs text-slate-400 mb-2">{news.date}</p>
                  <h3 className="font-serif text-lg font-bold text-slate-900 mb-3 group-hover:text-gold-500 transition-colors leading-snug">
                    {news.title}
                  </h3>
                  <p className="text-sm text-slate-500 leading-relaxed line-clamp-3">{news.excerpt}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-xs font-bold tracking-[3px] uppercase text-gold-600 mb-3 block">存檔</span>
          <h2 className="font-serif text-3xl lg:text-4xl font-bold text-slate-900 mb-8">近期更新</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {newsItems.map((item, idx) => (
              <article
                key={idx}
                className="bg-slate-50 border border-slate-200 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 rounded-xl p-6 group"
              >
                <div className="flex items-center gap-3 mb-3">
                  <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${categoryColors[item.category]}`}>
                    {item.category}
                  </span>
                  <span className="text-xs text-slate-400">{item.date}</span>
                </div>
                <h3 className="font-serif text-base font-bold text-slate-900 mb-2 group-hover:text-gold-500 transition-colors leading-snug">
                  {item.title}
                </h3>
                <p className="text-sm text-slate-500 leading-relaxed line-clamp-2">{item.excerpt}</p>
              </article>
            ))}
          </div>

          <div className="flex items-center justify-center gap-2 mt-12">
            <button className="w-10 h-10 rounded-lg bg-navy-900 text-white text-sm font-semibold">1</button>
            <button className="w-10 h-10 rounded-lg bg-white border border-slate-200 text-slate-600 text-sm font-semibold hover:border-navy-900 hover:text-navy-900 transition-colors">2</button>
            <button className="w-10 h-10 rounded-lg bg-white border border-slate-200 text-slate-600 text-sm font-semibold hover:border-navy-900 hover:text-navy-900 transition-colors">3</button>
            <span className="text-slate-400 px-2">...</span>
            <button className="w-10 h-10 rounded-lg bg-white border border-slate-200 text-slate-600 text-sm font-semibold hover:border-navy-900 hover:text-navy-900 transition-colors">
              <svg className="w-4 h-4 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </section>

      <section className="bg-gradient-navy py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-xs font-bold tracking-[3px] uppercase text-gold-500 mb-3 block">保持關注</span>
          <h2 className="font-serif text-3xl lg:text-4xl font-bold text-white mb-4">訂閱更新</h2>
          <p className="text-slate-400 max-w-xl mx-auto mb-8 leading-relaxed">
            直接在您的信箱中接收最新新聞、出版物和活動公告。
          </p>
          <Link
            href="/zh-tw/contact/"
            className="bg-gradient-gold text-navy-900 font-bold text-sm tracking-wide px-8 py-3 rounded-md hover:shadow-[0_0_30px_rgba(201,168,76,0.25)] hover:-translate-y-0.5 transition-all inline-block"
          >
            聯繫我們
          </Link>
        </div>
      </section>
    </div>
  )
}
