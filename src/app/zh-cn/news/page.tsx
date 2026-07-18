import Link from 'next/link'
export const metadata = {
  title: '新闻动态 - 数字世界仲裁中心',
}


const featuredNews = [
  {
    date: '2026年6月25日',
    category: 'Institutional',
    title: 'DWAC 推出 ECDSA P-256 凭证签名系统',
    excerpt: '数字凭证已升级为真实密码学签名。全新的 ECDSA P-256 VC 系统为所有数字仲裁证书和凭证提供企业级安全保护。',
    readTime: '4分钟阅读',
  },
  {
    date: '2026年4月20日',
    category: 'Institutional',
    title: 'Agent Club 正式运行',
    excerpt: '10位AI仲裁Agent在线运行。Agent Club 现已全面运营，汇聚全球AI仲裁员进行案例分析和讨论。',
    readTime: '3分钟阅读',
  },
  {
    date: '2026年3月15日',
    category: 'Institutional',
    title: 'DWAC 网站三语版本全面上线',
    excerpt: '252页SEO全部通过验收。DWAC网站现已全面支持英文、简体中文和繁体中文，内容完全同步。',
    readTime: '3分钟阅读',
  },
  {
    date: '2025年4月28日',
    category: 'Institutional',
    title: 'DWAC宣布成立智能仲裁员俱乐部',
    excerpt: '全球首个专注于AI驱动仲裁代理的俱乐部。这一开创性举措旨在推动人工智能在国际仲裁程序中的整合应用。',
    readTime: '5分钟阅读',
  },
  {
    date: '2025年4月15日',
    category: 'Industry',
    title: '全球数字商务争议年案件量突破200万件',
    excerpt: '国际贸易中心发布的新报告揭示了专业数字争议解决机制日益增长的需求，凸显了DWAC在这一新兴领域的关键作用。',
    readTime: '4分钟阅读',
  },
  {
    date: '2025年3月30日',
    category: 'Event',
    title: 'DWAC参加2025年国际仲裁峰会',
    excerpt: 'DWAC代表在年度峰会上就"AI时代的仲裁"发表演讲，吸引了超过500名国际从业者和学者的关注。',
    readTime: '3分钟阅读',
  },
]

const newsItems = [
  { date: '2026年6月25日', category: 'Institutional', title: 'DWAC 推出 ECDSA P-256 凭证签名系统', excerpt: '数字凭证已升级为真实密码学签名。' },
  { date: '2026年4月20日', category: 'Institutional', title: 'Agent Club 正式运行', excerpt: '10位AI仲裁Agent在线运行。' },
  { date: '2026年3月15日', category: 'Institutional', title: 'DWAC 网站三语版本全面上线', excerpt: '252页SEO全部通过验收。' },
  { date: '2025年4月20日', category: 'Institutional', title: 'DWAC仲裁规则更新：纳入AI辅助程序条款', excerpt: '对第12、34和56条的关键修订现已为AI工具在案件管理和证据分析中的使用提供了框架。' },
  { date: '2025年4月10日', category: 'Publications', title: '新研究论文：跨境数字资产争议解决', excerpt: '周博士的最新论文探讨了涉及多司法管辖区数字资产争议解决的法律挑战。' },
  { date: '2025年3月25日', category: 'Industry', title: '东南亚电商平台采用DWAC示范条款', excerpt: '三大区域平台已将DWAC仲裁条款纳入其标准服务条款。' },
  { date: '2025年3月15日', category: 'Event', title: 'DWAC研讨会：数字世界仲裁中的证据', excerpt: '一场探索数字证据收集、认证和出示最佳实践的互动研讨会。' },
  { date: '2025年3月5日', category: 'Institutional', title: '来自欧洲和非洲的新机构会员加入DWAC', excerpt: '来自欧洲和非洲的五所大学和三家律师事务所已被批准为机构会员。' },
  { date: '2025年2月20日', category: 'Industry', title: '联合国国际贸易法委员会引用ODR标准', excerpt: 'UNCITRAL第三工作组引用DWAC的方法作为未来在线争议解决框架的范例。' },
]

const categoryColors: Record<string, string> = {
  Institutional: 'bg-blue-50 text-blue-700',
  Industry: 'bg-purple-50 text-purple-700',
  Event: 'bg-gold-500/10 text-gold-700',
  Publications: 'bg-emerald-50 text-emerald-700',
}

const categories = ['全部', '机构新闻', '行业动态', '活动通知', '出版物']

export default function NewsPage() {
  return (
    <div className="flex flex-col">
      {/* ===== HERO — Dark ===== */}
      <section className="relative bg-gradient-navy py-20 lg:py-28">
        <div className="absolute inset-0 bg-grid-gold opacity-20" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-xs font-bold tracking-[3px] uppercase text-gold-500 mb-3 block">最新动态</span>
          <h1 className="font-serif text-3xl lg:text-4xl font-bold text-white mb-5">新闻资讯</h1>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
            了解DWAC的机构发展、行业洞察、活动通知和学术出版物。
          </p>
        </div>
      </section>

      {/* ===== Category Filter — Light ===== */}
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

      {/* ===== Featured News — Light ===== */}
      <section className="bg-slate-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-xs font-bold tracking-[3px] uppercase text-gold-600 mb-3 block">精选</span>
          <h2 className="font-serif text-3xl lg:text-4xl font-bold text-slate-900 mb-8">精选报道</h2>
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

      {/* ===== News Grid — Light ===== */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-xs font-bold tracking-[3px] uppercase text-gold-600 mb-3 block">存档</span>
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

          {/* Pagination Placeholder */}
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

      {/* ===== Newsletter CTA — Dark ===== */}
      <section className="bg-gradient-navy py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-xs font-bold tracking-[3px] uppercase text-gold-500 mb-3 block">保持关注</span>
          <h2 className="font-serif text-3xl lg:text-4xl font-bold text-white mb-4">订阅更新</h2>
          <p className="text-slate-400 max-w-xl mx-auto mb-8 leading-relaxed">
            直接在您的邮箱中接收最新新闻、出版物和活动公告。
          </p>
          <Link
            href="/zh-cn/contact/"
            className="bg-gradient-gold text-navy-900 font-bold text-sm tracking-wide px-8 py-3 rounded-md hover:shadow-[0_0_30px_rgba(201,168,76,0.25)] hover:-translate-y-0.5 transition-all inline-block"
          >
            联系我们
          </Link>
        </div>
      </section>
    </div>
  )
}
