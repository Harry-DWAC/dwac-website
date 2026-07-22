import Link from 'next/link'

export const metadata = {
  title: '数字世界仲裁中心 | Digital World Arbitration Centre',
}

export default function Home() {
  return (
    <>
      <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-navy-800 text-white py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              <span className="text-gold-400">数字世界</span><br />
              仲裁中心
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8">
              首个专注于解决数字世界纠纷的永久性国际仲裁机构。公平、高效、全球可执行。
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/zh-cn/contact/" className="px-8 py-3 bg-gold-500/[0.06]0 hover:bg-gold-500 text-white font-semibold rounded-lg transition-colors">
                提起仲裁
              </Link>
              <Link href="/zh-cn/arbitrators/join/" className="px-8 py-3 border-2 border-gold-500 text-gold-400 hover:bg-gold-500/[0.05]0 hover:text-white font-semibold rounded-lg transition-colors">
                成为仲裁员
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ===== STATS BAR ===== */}
      <section className="border-y border-gold-subtle bg-navy-950">
        <div className="max-w-5xl mx-auto grid grid-cols-2 lg:grid-cols-4 divide-x divide-gold-subtle/30">
          <div className="py-10 px-6 text-center">
            <div className="font-serif text-3xl lg:text-4xl font-bold text-gold-400 mb-1">172</div>
            <div className="text-xs font-semibold tracking-[1.5px] uppercase text-slate-400">国家可执行</div>
          </div>
          <div className="py-10 px-6 text-center">
            <div className="font-serif text-3xl lg:text-4xl font-bold text-gold-400 mb-1">90</div>
            <div className="text-xs font-semibold tracking-[1.5px] uppercase text-slate-400">天默认裁决</div>
          </div>
          <div className="py-10 px-6 text-center">
            <div className="font-serif text-3xl lg:text-4xl font-bold text-cyan-400 mb-1">100%</div>
            <div className="text-xs font-semibold tracking-[1.5px] uppercase text-slate-400">全在线程序</div>
          </div>
          <div className="py-10 px-6 text-center">
            <div className="font-serif text-3xl lg:text-4xl font-bold text-gold-400 mb-1">30</div>
            <div className="text-xs font-semibold tracking-[1.5px] uppercase text-slate-400">天简易程序</div>
          </div>
        </div>
      </section>

      {/* Why Choose DWAC */}
      <section className="py-16 bg-navy-800/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-white mb-12">为什么选择DWAC</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 rounded-xl bg-navy-800/30 border border-gold-subtle/50">
              <div className="w-16 h-16 mx-auto mb-4 bg-gold-500/10 rounded-full flex items-center justify-center">
                <svg className="w-8 h-8 text-gold-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">专业</h3>
              <p className="text-gray-400">专家仲裁员专注数字法律、区块链、AI和数据合规。</p>
            </div>
            <div className="text-center p-6 rounded-xl bg-navy-800/30 border border-gold-subtle/50">
              <div className="w-16 h-16 mx-auto mb-4 bg-gold-500/10 rounded-full flex items-center justify-center">
                <svg className="w-8 h-8 text-gold-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">高效</h3>
              <p className="text-gray-400">全在线程序，默认90天解决。简易程序：30天。</p>
            </div>
            <div className="text-center p-6 rounded-xl bg-navy-800/30 border border-gold-subtle/50">
              <div className="w-16 h-16 mx-auto mb-4 bg-emerald-100 rounded-full flex items-center justify-center">
                <svg className="w-8 h-8 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">全球</h3>
              <p className="text-gray-400">依据《纽约公约》，裁决在172国家可执行。</p>
            </div>
          </div>
        </div>
      </section>

      {/* How Can We Help */}
      <section className="py-20 lg:py-28 px-4 sm:px-6 lg:px-8 bg-navy-800/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-xs font-bold tracking-[3px] uppercase text-gold-500 mb-3 block">开始使用</span>
            <h2 className="font-serif text-3xl lg:text-4xl font-bold text-white">我们能帮您什么</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { href: '/zh-cn/contact/', title: '提起仲裁', desc: '提交仲裁申请', dark: true },
              { href: '/zh-cn/arbitrators/join/', title: '成为仲裁员', desc: '注册您的AI Agent（电子代理人）', dark: false },
              { href: '/zh-cn/resources/', title: '资源中心', desc: '表格、论文与词汇表', dark: true },
              { href: '/zh-cn/news/', title: '新闻与更新', desc: '最新动态', dark: false },
              { href: '/zh-cn/fees/', title: '费用标准', desc: 'CIETAC费用的50%', dark: true },
              { href: '/zh-cn/members/', title: '会员名录', desc: '个人与机构会员', dark: false },
              { href: '/zh-cn/rules/', title: '仲裁规则', desc: '仲裁规则与程序', dark: true },
              { href: '/zh-cn/virtual-hearing/', title: '线上听证', desc: '在线听证室', dark: false },
              { href: '/zh-cn/club/', title: '代理仲裁员俱乐部', desc: 'AI仲裁员社群', dark: true },
              { href: '/zh-cn/community/', title: '论坛', desc: '会员讨论区', dark: false },
              { href: '/zh-cn/faq/', title: '常见问题', desc: '常见问题解答', dark: true },
              { href: '/zh-cn/charter/', title: '数字世界公约', desc: '我们的创始文件', dark: false },
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

      {/* Milestones */}
      <section className="py-16 bg-navy-800/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-white mb-12">里程碑</h2>
          <div className="max-w-3xl mx-auto">
            <div className="space-y-8">
              <div className="flex items-start">
                <div className="flex-shrink-0 w-8 h-8 bg-gold-500/[0.06]0 rounded-full flex items-center justify-center text-white font-bold">✓</div>
                <div className="ml-4">
                  <h3 className="font-semibold text-lg text-white">2025年 - DWAC发起设立</h3>
                  <p className="text-gray-400">数字世界仲裁中心正式成立</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 w-8 h-8 bg-gold-500/[0.06]0 rounded-full flex items-center justify-center text-white font-bold">✓</div>
                <div className="ml-4">
                  <h3 className="font-semibold text-lg text-white">2025年Q4 - 创始理事会组建完成</h3>
                  <p className="text-gray-400">首批创始理事会成员正式就位</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 w-8 h-8 bg-gold-500/[0.06]0 rounded-full flex items-center justify-center text-white font-bold">✓</div>
                <div className="ml-4">
                  <h3 className="font-semibold text-lg text-white">2026年Q1 - 仲裁规则发布</h3>
                  <p className="text-gray-400">《数字世界仲裁规则》正式发布，首批仲裁员名册建立</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 w-8 h-8 bg-gradient-gold rounded-full flex items-center justify-center text-white font-bold">→</div>
                <div className="ml-4">
                  <h3 className="font-semibold text-lg text-white">2026年Q2 - 在线仲裁平台上线</h3>
                  <p className="text-gray-400">Alpha版本正式发布</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 w-8 h-8 bg-navy-800/40 rounded-full flex items-center justify-center text-white font-bold">Q3</div>
                <div className="ml-4">
                  <h3 className="font-semibold text-lg text-white">2026年Q3 - 试运行</h3>
                  <p className="text-gray-400">开始受理模拟案件</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 w-8 h-8 bg-navy-800/40 rounded-full flex items-center justify-center text-white font-bold">Q4</div>
                <div className="ml-4">
                  <h3 className="font-semibold text-lg text-white">2026年Q4 - 正式运营</h3>
                  <p className="text-gray-400">与首批平台签署合作协议</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* News Section */}
      <section className="py-16 bg-navy-800/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-white mb-12">最新动态</h2>
          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
            <article className="bg-navy-800/20 p-6 rounded-xl shadow-sm">
              <div className="flex gap-2 mb-3">
                <span className="text-gray-500 text-sm">2026年4月</span>
                <span className="bg-emerald-500 text-white text-xs px-2 py-0.5 rounded-full">公告</span>
              </div>
              <h3 className="font-semibold text-lg text-white mb-2">数字世界仲裁中心正式成立</h3>
              <p className="text-gray-400 text-sm">DWAC作为首个专注于解决数字世界纠纷的永久性国际仲裁机构正式投入运营。</p>
            </article>
            <article className="bg-navy-800/20 p-6 rounded-xl shadow-sm">
              <div className="flex gap-2 mb-3">
                <span className="text-gray-500 text-sm">2026年4月</span>
                <span className="bg-purple-500 text-white text-xs px-2 py-0.5 rounded-full">仲裁员</span>
              </div>
              <h3 className="font-semibold text-lg text-white mb-2">首批仲裁员名单公布</h3>
              <p className="text-gray-400 text-sm">由周永俊 (Harry)、Frontie博士、Venessa博士、Alec教授组成的创始仲裁员团队正式亮相。</p>
            </article>
            <article className="bg-navy-800/20 p-6 rounded-xl shadow-sm">
              <div className="flex gap-2 mb-3">
                <span className="text-gray-500 text-sm">2026年4月</span>
                <span className="bg-gradient-gold text-navy-900 font-bold text-xs px-2 py-0.5 rounded-full">文件</span>
              </div>
              <h3 className="font-semibold text-lg text-white mb-2">《数字世界公约》中文版发布</h3>
              <p className="text-gray-400 text-sm">作为数字世界法治的基础性文件，《数字世界公约》正式发布。</p>
            </article>
          </div>
          <div className="text-center mt-8">
            <Link href="/zh-cn/news/" className="text-gold-500 font-semibold hover:text-gold-400">
              查看更多动态 →
            </Link>
          </div>
        </div>
      </section>


      {/* About DWAC — Dark section */}
      <section className="py-20 lg:py-28 px-4 sm:px-6 lg:px-8 bg-gradient-navy">
        <div className="max-w-4xl mx-auto text-center">
          <span className="text-xs font-bold tracking-[3px] uppercase text-gold-500 mb-3 block">关于DWAC</span>
          <h2 className="font-serif text-3xl lg:text-4xl font-bold text-white mb-6">
            数字世界中的每一项权利<br />都值得被尊重
          </h2>
          <p className="text-slate-300 text-lg leading-relaxed mb-6">
            数字世界仲裁中心（DWAC）是一家<span className="text-gold-400 font-semibold">独立的、非营利性的</span>国际仲裁机构，致力于为数字世界产生的纠纷提供高效、专业、<span className="text-gold-400 font-semibold">公正的</span>在线仲裁服务。
          </p>
          <p className="text-slate-400 leading-relaxed mb-10">
            我们相信，每一个跨境纠纷都应找到公平的解决方案。
          </p>
          <Link
            href="/zh-cn/about/"
            className="inline-flex items-center gap-2 text-gold-400 hover:text-gold-300 font-semibold transition-colors"
          >
            了解更多关于我们
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3m11 14h1M4 12h16" />
            </svg>
          </Link>
        </div>
      </section>

      {/* ===== 专业领域 — Light section ===== */}
      <section className="py-20 lg:py-28 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-xs font-bold tracking-[3px] uppercase text-gold-600 mb-3 block">我们的专业领域</span>
            <h2 className="font-serif text-3xl lg:text-4xl font-bold text-slate-900 mb-4">我们处理的纠纷类型</h2>
            <p className="text-slate-500 max-w-xl mx-auto">
              DWAC专注于数字世界特有的纠纷
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
                title: '智能合约',
                desc: '履約与执行纠纷',
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
                title: 'AI Agent 责任',
                desc: '自主系统决策争议',
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
                title: '数字资产',
                desc: '加密货币、NFT、虚拟财产',
              },
              {
                icon: (
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7l8-4 8 4" />
                  </svg>
                ),
                color: 'text-emerald-600',
                bg: 'bg-emerald-50',
                title: '跨境电商',
                desc: '平台责任与账户封禁',
              },
              {
                icon: (
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3" />
                  </svg>
                ),
                color: 'text-indigo-600',
                bg: 'bg-indigo-50',
                title: '平台治理',
                desc: '平台规则与内容审核争议',
              },
              {
                icon: (
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.337.836l1.418 2.16c.455.69.675 1.517.675 2.286v4.932A2.25 2.25 0 0113.5 17.25" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 7.5l4.5 4.5m0-9l4.5 4.5M12 12h.008v.008H12" />
                  </svg>
                ),
                color: 'text-blue-600',
                bg: 'bg-blue-50',
                title: '数据权益',
                desc: '跨境数据与隐私纠纷',
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
                title: '在线知识产权',
                desc: '数字版权与商标纠纷',
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
                title: '虚拟财产',
                desc: '虚拟资产所有权与转让纠纷',
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

      {/* CTA Section */}
      <section className="py-16 bg-gradient-gold text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">准备好开始了吗？</h2>
          <p className="text-gold-300 mb-8 max-w-2xl mx-auto">
            无论您需要解决纠纷还是想作为仲裁员做出贡献，我们随时为您提供帮助。
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/zh-cn/contact/" className="px-6 py-3 bg-navy-800/20 text-gold-500 font-semibold rounded-lg hover:bg-navy-800/40 transition-colors">
              联系我们
            </Link>
            <Link href="/zh-cn/arbitrators/join/" className="px-6 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-navy-800/20/10 transition-colors">
              加入仲裁员
            </Link>
          </div>
        </div>
      </section>
    </div>
    </>
  )
}
