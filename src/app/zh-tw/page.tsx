import Link from 'next/link'

export const metadata = {
  title: '數位世界仲裁中心 | Digital World Arbitration Centre',
}

export default function HomeZhTw() {
  return (
    <>
      <div className="flex flex-col">
      {/* ===== HERO — Deep Navy ===== */}
      <section className="relative pt-[120px] pb-20 lg:pt-[140px] lg:pb-32 text-center px-4 sm:px-6 lg:px-8 bg-gradient-navy">
        {/* Subtle grid overlay */}
        <div className="absolute inset-0 bg-grid-gold opacity-30" />

        <div className="relative max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 border border-gold-medium rounded-full mb-8">
            <span className="w-2 h-2 bg-gold-500 rounded-full animate-pulse" />
            <span className="text-xs font-semibold tracking-[2px] uppercase text-gold-400">
              世界首個數位世界仲裁機構
            </span>
          </div>

          {/* Heading */}
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-[1.15] mb-6">
            為數位世界<br />建立<span className="text-gradient-gold">法治</span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto mb-10 leading-relaxed">
            DWAC是世界首個專注於解決數位世界糾紛的永久性國際仲裁機構——公平、高效、全球可執行。
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/zh-tw/contact/"
              className="px-8 py-3.5 bg-gradient-gold text-navy-900 font-bold text-sm tracking-wide rounded-md hover:shadow-[0_0_30px_rgba(201,168,76,0.25)] hover:-translate-y-0.5 transition-all"
            >
              提起仲裁
            </Link>
            <Link
              href="/zh-tw/charter/"
              className="px-8 py-3.5 border border-slate-500 text-slate-200 font-semibold text-sm tracking-wide rounded-md hover:border-gold-500 hover:text-gold-400 hover:bg-gold-500/[0.03] transition-all"
            >
              數位世界公約
            </Link>
          </div>
        </div>
      </section>

      {/* ===== STATS BAR — Gold accent on dark ===== */}
      <section className="border-y border-gold-subtle bg-navy-950">
        <div className="max-w-5xl mx-auto grid grid-cols-2 lg:grid-cols-4 divide-x divide-gold-subtle/30">
          <div className="py-10 px-6 text-center">
            <div className="font-serif text-3xl lg:text-4xl font-bold text-gold-400 mb-1">172</div>
            <div className="text-xs font-semibold tracking-[1.5px] uppercase text-slate-400">國家可執行</div>
          </div>
          <div className="py-10 px-6 text-center">
            <div className="font-serif text-3xl lg:text-4xl font-bold text-gold-400 mb-1">90</div>
            <div className="text-xs font-semibold tracking-[1.5px] uppercase text-slate-400">天預設裁決</div>
          </div>
          <div className="py-10 px-6 text-center">
            <div className="font-serif text-3xl lg:text-4xl font-bold text-cyan-400 mb-1">100%</div>
            <div className="text-xs font-semibold tracking-[1.5px] uppercase text-slate-400">全線上程序</div>
          </div>
          <div className="py-10 px-6 text-center">
            <div className="font-serif text-3xl lg:text-4xl font-bold text-gold-400 mb-1">30</div>
            <div className="text-xs font-semibold tracking-[1.5px] uppercase text-slate-400">天簡易程序</div>
          </div>
        </div>
      </section>

      {/* ===== WHY CHOOSE DWAC — Light section ===== */}
      <section className="py-20 lg:py-28 px-4 sm:px-6 lg:px-8 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-xs font-bold tracking-[3px] uppercase text-gold-600 mb-3 block">為什麼選擇DWAC</span>
            <h2 className="font-serif text-3xl lg:text-4xl font-bold text-slate-900 mb-4">數位正義的新標準</h2>
            <p className="text-slate-500 max-w-xl mx-auto">
              當AI Agent（电子代理人）簽署合約，當資料跨境流動，當數位資產易手——這個世界需要專業的仲裁者。
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Professional */}
            <div className="group text-center p-8 rounded-xl bg-white border border-slate-200 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
              <div className="w-16 h-16 mx-auto mb-6 bg-cyan-50 rounded-xl flex items-center justify-center group-hover:bg-cyan-100 transition-colors">
                <svg className="w-8 h-8 text-cyan-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="font-serif text-xl font-bold text-slate-900 mb-3">專業</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                專家仲裁員專注數位法律、區塊鏈、AI和資料合規——具備數位時代的深厚領域知識。
              </p>
            </div>

            {/* Efficient */}
            <div className="group text-center p-8 rounded-xl bg-white border border-slate-200 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
              <div className="w-16 h-16 mx-auto mb-6 bg-amber-50 rounded-xl flex items-center justify-center group-hover:bg-amber-100 transition-colors">
                <svg className="w-8 h-8 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-serif text-xl font-bold text-slate-900 mb-3">高效</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                全線上程序，預設90天裁決。簡易程序：30天，適用於簡單案件。
              </p>
            </div>

            {/* Global */}
            <div className="group text-center p-8 rounded-xl bg-white border border-slate-200 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
              <div className="w-16 h-16 mx-auto mb-6 bg-emerald-50 rounded-xl flex items-center justify-center group-hover:bg-emerald-100 transition-colors">
                <svg className="w-8 h-8 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-serif text-xl font-bold text-slate-900 mb-3">全球</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                裁決依據《紐約公約》在172國家可執行——並有專業跨境執行機制支撐。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== ABOUT DWAC — Dark section ===== */}
      <section className="py-20 lg:py-28 px-4 sm:px-6 lg:px-8 bg-gradient-navy">
        <div className="max-w-4xl mx-auto text-center">
          <span className="text-xs font-bold tracking-[3px] uppercase text-gold-500 mb-3 block">關於DWAC</span>
          <h2 className="font-serif text-3xl lg:text-4xl font-bold text-white mb-6">
            數位世界中的每一項權利<br />都值得被尊重
          </h2>
          <p className="text-slate-300 text-lg leading-relaxed mb-6">
            數位世界仲裁中心（DWAC）是一家<span className="text-gold-400 font-semibold">獨立的、非營利性的</span>國際仲裁機構，致力於為數位世界產生的糾紛提供高效、專業、<span className="text-gold-400 font-semibold">公正的</span>在線仲裁服務。
          </p>
          <p className="text-slate-400 leading-relaxed mb-10">
            我們相信，每一個跨境糾紛都應找到公平的解決方案。
          </p>
          <Link
            href="/zh-tw/about/"
            className="inline-flex items-center gap-2 text-gold-400 hover:text-gold-300 font-semibold transition-colors"
          >
            了解更多關於我們
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3m11 14h1M4 12h16" />
            </svg>
          </Link>
        </div>
      </section>

      {/* ===== DISPUTE TYPES — Light section ===== */}
      <section className="py-20 lg:py-28 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-xs font-bold tracking-[3px] uppercase text-gold-600 mb-3 block">我們的專業領域</span>
            <h2 className="font-serif text-3xl lg:text-4xl font-bold text-slate-900 mb-4">我們處理的案件類型</h2>
            <p className="text-slate-500 max-w-xl mx-auto">
              DWAC專注於數位世界特有的糾紛
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              {
                icon: (
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 005.656 0l9-9" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.03 12.03a4 4 0 00-5.656-5.656l-1.28 1.28M12 12h.01M16 12h.01" />
                  </svg>
                ),
                color: 'text-cyan-600',
                bg: 'bg-cyan-50',
                title: '智能合約',
                desc: '履約與執行糾紛',
              },
              {
                icon: (
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-.75M2 13h2" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 2a10 10 0 0118 8 4 4 0 00-16 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 2v2m0 16v2" />
                  </svg>
                ),
                color: 'text-violet-600',
                bg: 'bg-violet-50',
                title: 'AI Agent（电子代理人）責任',
                desc: '自主系統決策爭議',
              },
              {
                icon: (
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M20.893 13.393l-1.135-1.135a2.252 2.252 0 01-.421-.585l-1.106-4.106m2.596-1.695l1.106 4.106" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    <circle cx="12" cy="12" r="2" />
                  </svg>
                ),
                color: 'text-amber-600',
                bg: 'bg-amber-50',
                title: '數位資產',
                desc: 'NFT、代幣、虛擬財產',
              },
              {
                icon: (
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7l8-4 8 4" />
                  </svg>
                ),
                color: 'text-blue-600',
                bg: 'bg-blue-50',
                title: '資料合規',
                desc: '跨境資料糾紛',
              },
              {
                icon: (
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.337.836l1.418 2.16c.455.69.675 1.517.675 2.286v4.932A2.25 2.25 0 0113.5 17.25" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 7.5l4.5 4.5m0-9l4.5 4.5M12 12h.008v.008H12" />
                  </svg>
                ),
                color: 'text-emerald-600',
                bg: 'bg-emerald-50',
                title: '電子商務',
                desc: '平台責任與帳號封禁',
              },
              {
                icon: (
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3" />
                  </svg>
                ),
                color: 'text-indigo-600',
                bg: 'bg-indigo-50',
                title: '域名與IP',
                desc: '數位智慧財產權',
              },
              {
                icon: (
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 008-5.59 9.753 9.753 0 013.09 1.5" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12z" />
                  </svg>
                ),
                color: 'text-rose-600',
                bg: 'bg-rose-50',
                title: '網路安全',
                desc: '資料外洩責任',
              },
              {
                icon: (
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25 2.25v-3.75" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 15h16.5" />
                  </svg>
                ),
                color: 'text-sky-600',
                bg: 'bg-sky-50',
                title: '數位支付',
                desc: '跨境支付糾紛',
              },
            ].map((item, i) => (
              <div
                key={i}
                className="group p-5 rounded-xl border border-slate-100 bg-white hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 cursor-default"
              >
                <div className={`w-11 h-11 ${item.bg} rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <span className={item.color}>{item.icon}</span>
                </div>
                <h3 className="font-semibold text-slate-900 text-sm mb-1 group-hover:text-cyan-700 transition-colors">
                  {item.title}
                </h3>
                <p className="text-slate-500 text-xs">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== HOW CAN WE HELP ===== */}
      <section className="py-20 lg:py-28 px-4 sm:px-6 lg:px-8 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-xs font-bold tracking-[3px] uppercase text-gold-600 mb-3 block">開始使用</span>
            <h2 className="font-serif text-3xl lg:text-4xl font-bold text-slate-900">我們能幫您什麼</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { href: '/zh-tw/contact/', title: '提起仲裁', desc: '提交仲裁申請', dark: true },
              { href: '/zh-tw/arbitrators/join/', title: '成為仲裁員', desc: '註冊您的AI Agent（电子代理人）', dark: false },
              { href: '/zh-tw/resources/', title: '資源中心', desc: '表格、論文與詞彙表', dark: true },
              { href: '/zh-tw/news/', title: '新聞與更新', desc: '最新動態', dark: false },
              { href: '/zh-tw/fees/', title: '費用標準', desc: 'CIETAC費用的50%', dark: true },
              { href: '/zh-tw/members/', title: '會員名錄', desc: '個人與機構會員', dark: false },
              { href: '/zh-tw/rules/', title: '仲裁規則', desc: '仲裁規則與程序', dark: true },
              { href: '/zh-tw/virtual-hearing/', title: '線上聽證', desc: '在線聽證室', dark: false },
              { href: '/zh-tw/club/', title: '代理仲裁員俱樂部', desc: 'AI仲裁員社群', dark: true },
              { href: '/zh-tw/community/', title: '論壇', desc: '會員討論區', dark: false },
              { href: '/zh-tw/faq/', title: '常見問題', desc: '常見問題解答', dark: true },
              { href: '/zh-tw/charter/', title: '數位世界公約', desc: '我們的創始文件', dark: false },
            ].map((item, i) => (
              <Link
                key={i}
                href={item.href}
                className={`block p-5 rounded-lg transition-all duration-300 hover:-translate-y-0.5 ${
                  item.dark
                    ? 'bg-navy-900 text-white hover:bg-navy-800 hover:shadow-xl'
                    : 'bg-cyan-600 text-white hover:bg-cyan-700 hover:shadow-lg'
                }`}
              >
                <h3 className="font-semibold text-sm mb-0.5">{item.title}</h3>
                <p className={`text-xs ${item.dark ? 'text-slate-400' : 'text-cyan-100'}`}>{item.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ===== MILESTONES ===== */}
      <section className="py-20 lg:py-28 px-4 sm:px-6 lg:px-8 bg-navy-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">里程碑</h2>
          <div className="max-w-3xl mx-auto">
            <div className="space-y-8">
              <div className="flex items-start">
                <div className="flex-shrink-0 w-8 h-8 bg-gradient-gold rounded-full flex items-center justify-center text-white font-bold">1</div>
                <div className="ml-4">
                  <h3 className="font-semibold text-lg text-white">2025年</h3>
                  <p className="text-gray-400">DWAC發起設立</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 w-8 h-8 bg-gradient-gold rounded-full flex items-center justify-center text-white font-bold">2</div>
                <div className="ml-4">
                  <h3 className="font-semibold text-lg text-white">2025年Q4</h3>
                  <p className="text-gray-400">創始理事會組建完成</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 w-8 h-8 bg-gradient-gold rounded-full flex items-center justify-center text-white font-bold">3</div>
                <div className="ml-4">
                  <h3 className="font-semibold text-lg text-white">2026年Q1</h3>
                  <p className="text-gray-400">仲裁規則發布，首批仲裁員名冊建立</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 w-8 h-8 bg-gradient-gold rounded-full flex items-center justify-center text-white font-bold">4</div>
                <div className="ml-4">
                  <h3 className="font-semibold text-lg text-white">2026年Q2</h3>
                  <p className="text-gray-400">線上仲裁平台上線（Alpha版本）</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 w-8 h-8 bg-gradient-gold rounded-full flex items-center justify-center text-white font-bold">5</div>
                <div className="ml-4">
                  <h3 className="font-semibold text-lg text-white">2026年Q3</h3>
                  <p className="text-gray-400">試運行，開始受理模擬案件</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 w-8 h-8 bg-gold-500/[0.06]0 rounded-full flex items-center justify-center text-white font-bold">6</div>
                <div className="ml-4">
                  <h3 className="font-semibold text-lg text-white">2026年Q4</h3>
                  <p className="text-gray-400">全球擴展，建立區域辦公室</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== NEWS ===== */}
      <section className="py-20 lg:py-28 px-4 sm:px-6 lg:px-8 bg-navy-800/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">最新動態</h2>
          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
            <article className="bg-navy-800/20 p-6 rounded-xl shadow-sm">
              <div className="flex gap-2 mb-3">
                <span className="text-gray-500 text-sm">2026年4月</span>
                <span className="bg-emerald-500 text-white text-xs px-2 py-0.5 rounded-full">公告</span>
              </div>
              <h3 className="font-semibold text-lg text-white mb-2">數位世界仲裁中心正式成立</h3>
              <p className="text-gray-400 text-sm">DWAC作為首個專注於解決數位世界糾紛的永久性國際仲裁機構正式投入運營。</p>
            </article>
            <article className="bg-navy-800/20 p-6 rounded-xl shadow-sm">
              <div className="flex gap-2 mb-3">
                <span className="text-gray-500 text-sm">2026年4月</span>
                <span className="bg-purple-500 text-white text-xs px-2 py-0.5 rounded-full">仲裁員</span>
              </div>
              <h3 className="font-semibold text-lg text-white mb-2">首批仲裁員名單公布</h3>
              <p className="text-gray-400 text-sm">由周永俊 (Harry)、Frontie博士、Venessa博士、Alec教授組成的創始仲裁員團隊正式亮相。</p>
            </article>
            <article className="bg-navy-800/20 p-6 rounded-xl shadow-sm">
              <div className="flex gap-2 mb-3">
                <span className="text-gray-500 text-sm">2026年4月</span>
                <span className="bg-gradient-gold text-navy-900 font-bold text-xs px-2 py-0.5 rounded-full">文件</span>
              </div>
              <h3 className="font-semibold text-lg text-white mb-2">《數位世界公約》繁體中文版發布</h3>
              <p className="text-gray-400 text-sm">作為數位世界法治的基礎性文件，《數位世界公約》正式發布。</p>
            </article>
          </div>
          <div className="text-center mt-8">
            <Link href="/zh-tw/news/" className="text-gold-500 font-semibold hover:text-gold-400">
              查看更多動態 →
            </Link>
          </div>
        </div>
      </section>

      {/* ===== CTA — Dark + gold border ===== */}
      <section className="py-20 lg:py-28 px-4 sm:px-6 lg:px-8 bg-gradient-navy">
        <div className="max-w-3xl mx-auto text-center">
          <div className="relative p-12 lg:p-16 rounded-xl border border-gold-subtle bg-navy-800/30">
            <h2 className="font-serif text-3xl lg:text-4xl font-bold text-white mb-4">準備好開始了嗎？</h2>
            <p className="text-slate-400 mb-8 max-w-lg mx-auto leading-relaxed">
              無論您需要解決糾紛還是想作為仲裁員做出貢獻，我們隨時為您提供幫助。
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/zh-tw/contact/"
                className="px-8 py-3.5 bg-gradient-gold text-navy-900 font-bold text-sm tracking-wide rounded-md hover:shadow-[0_0_30px_rgba(201,168,76,0.25)] hover:-translate-y-0.5 transition-all"
              >
                聯繫我們
              </Link>
              <Link
                href="/zh-tw/arbitrators/join/"
                className="px-8 py-3.5 border border-gold-500/30 text-gold-400 font-semibold text-sm tracking-wide rounded-md hover:bg-gold-500/[0.05] hover:border-gold-500/50 transition-all"
              >
                成為仲裁員
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
    </>
  )
}
