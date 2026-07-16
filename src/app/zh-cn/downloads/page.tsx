import Link from 'next/link'

export default function DownloadsZhCn() {
  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="bg-navy-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-4">下载中心</h1>
          <p className="text-xl text-gray-300 max-w-2xl">
            获取 DWAC 文档、示范条款和研究资料
          </p>
        </div>
      </section>

      {/* Pricing Notice */}
      <section className="py-16 bg-navy-800/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gold-500/[0.06] border-l-4 border-gold-500 p-6 rounded-r-lg mb-8">
            <h2 className="text-2xl font-bold text-white mb-4">获取说明</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-navy-800/20 p-4 rounded-lg border border-gold-subtle">
                <h3 className="font-semibold text-white mb-1">在线阅读</h3>
                <p className="text-gold-500 font-bold">免费</p>
              </div>
              <div className="bg-navy-800/20 p-4 rounded-lg border border-gold-subtle">
                <h3 className="font-semibold text-white mb-1">下载（PDF）</h3>
                <p className="text-gold-500 font-bold">每份 ¥35</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Forms Section */}
      <section className="py-16 bg-navy-800/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">表格下载</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-navy-800/20 p-6 rounded-xl border border-gold-subtle/50 hover:border-gold-medium transition-colors">
              <div className="flex items-start">
                <div className="w-12 h-12 bg-gold-500/10 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                  <svg className="w-6 h-6 text-gold-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-white mb-2">仲裁申请书</h3>
                  <p className="text-gray-400 text-sm mb-3">启动仲裁程序的申请表格</p>
                  <a href="mailto:secretary@dwac.net?subject=请求仲裁申请书表格" className="text-gold-500 text-sm font-medium hover:text-gold-400">
                    请联系我们获取 →
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-navy-800/20 p-6 rounded-xl border border-gold-subtle/50 hover:border-gold-medium transition-colors">
              <div className="flex items-start">
                <div className="w-12 h-12 bg-gold-500/10 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                  <svg className="w-6 h-6 text-gold-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-white mb-2">仲裁员声明书</h3>
                  <p className="text-gray-400 text-sm mb-3">独立性与公正性声明表格</p>
                  <a href="mailto:secretary@dwac.net?subject=请求仲裁员声明书表格" className="text-gold-500 text-sm font-medium hover:text-gold-400">
                    请联系我们获取 →
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-navy-800/20 p-6 rounded-xl border border-gold-subtle/50 hover:border-gold-medium transition-colors">
              <div className="flex items-start">
                <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                  <svg className="w-6 h-6 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-white mb-2">会员申请表</h3>
                  <p className="text-gray-400 text-sm mb-3">申请成为 DWAC 会员的表格</p>
                  <a href="mailto:secretary@dwac.net?subject=请求会员申请表" className="text-gold-500 text-sm font-medium hover:text-gold-400">
                    请联系我们获取 →
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-navy-800/20 p-6 rounded-xl border border-gold-subtle/50 hover:border-gold-medium transition-colors">
              <div className="flex items-start">
                <div className="w-12 h-12 bg-navy-800/40 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                  <svg className="w-6 h-6 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-white mb-2">示范仲裁条款</h3>
                  <p className="text-gray-400 text-sm mb-3">合同和协议的示范条款</p>
                  <a href="mailto:secretary@dwac.net?subject=请求示范仲裁条款" className="text-gold-500 text-sm font-medium hover:text-gold-400">
                    请联系我们获取 →
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cases Section */}
      <section className="py-16 bg-navy-800/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">示例案例</h2>
          <div className="bg-navy-800/30 rounded-xl border border-gold-subtle/50 p-6 mb-6">
            <p className="text-gray-400 text-sm">
              <strong>注：</strong>以下所有案例均经脱敏处理，仅供参考。DWAC 目前处于创始阶段，将于 2026 年第四季度开始受理案件。
            </p>
          </div>
          <div className="space-y-6">
            <div className="bg-navy-800/20 p-6 rounded-xl border border-gold-subtle/50">
              <div className="flex items-start">
                <div className="w-10 h-10 bg-gold-500/10 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                  <span className="text-gold-500 font-bold">1</span>
                </div>
                <div>
                  <h3 className="font-semibold text-white mb-2">某用户 vs 某平台 — 账号封禁纠纷</h3>
                  <p className="text-gray-400 text-sm mb-3">用户对其账号被永久封禁提出异议，主张平台违反服务条款，要求恢复账号并赔偿损失。</p>
                  <div className="flex items-center text-xs text-gray-500">
                    <span className="bg-navy-800/40 px-2 py-1 rounded mr-2">数字身份</span>
                    <span className="bg-navy-800/40 px-2 py-1 rounded">合同纠纷</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-navy-800/20 p-6 rounded-xl border border-gold-subtle/50">
              <div className="flex items-start">
                <div className="w-10 h-10 bg-gold-500/10 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                  <span className="text-gold-400 font-bold">2</span>
                </div>
                <div>
                  <h3 className="font-semibold text-white mb-2">某公司 vs 某AI服务 — 智能合约履行纠纷</h3>
                  <p className="text-gray-400 text-sm mb-3">公司主张 AI 服务提供商未能交付智能合约约定的功能，导致经济损失。</p>
                  <div className="flex items-center text-xs text-gray-500">
                    <span className="bg-navy-800/40 px-2 py-1 rounded mr-2">智能合约</span>
                    <span className="bg-navy-800/40 px-2 py-1 rounded">服务纠纷</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-navy-800/20 p-6 rounded-xl border border-gold-subtle/50">
              <div className="flex items-start">
                <div className="w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                  <span className="text-emerald-600 font-bold">3</span>
                </div>
                <div>
                  <h3 className="font-semibold text-white mb-2">某开发者 vs 某交易所 — 数字资产纠纷</h3>
                  <p className="text-gray-400 text-sm mb-3">开发者主张交易所在系统升级期间处理不当，导致其代币损失。</p>
                  <div className="flex items-center text-xs text-gray-500">
                    <span className="bg-navy-800/40 px-2 py-1 rounded mr-2">数字资产</span>
                    <span className="bg-navy-800/40 px-2 py-1 rounded">财产权益</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Publications Section */}
      <section className="py-16 bg-navy-800/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">专著与文献</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-navy-800/20 p-6 rounded-xl border border-gold-subtle/50 hover:border-gold-medium transition-colors">
              <div className="flex items-start">
                <div className="w-12 h-12 bg-gold-500/10 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                  <svg className="w-6 h-6 text-gold-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-white mb-2">《数字世界公约》全文</h3>
                  <p className="text-gray-400 text-sm mb-3">确立数字世界纠纷解决原则的创始公约全文</p>
                  <a href="mailto:secretary@dwac.net?subject=请求数字世界公约下载" className="text-gold-500 text-sm font-medium hover:text-gold-400">
                    请联系我们获取 →
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-navy-800/20 p-6 rounded-xl border border-gold-subtle/50 hover:border-gold-medium transition-colors">
              <div className="flex items-start">
                <div className="w-12 h-12 bg-gold-500/10 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                  <svg className="w-6 h-6 text-gold-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-white mb-2">《数字世界仲裁规则》全文</h3>
                  <p className="text-gray-400 text-sm mb-3">规范 DWAC 程序的完整仲裁规则（67条）</p>
                  <a href="mailto:secretary@dwac.net?subject=请求数字世界仲裁规则下载" className="text-gold-500 text-sm font-medium hover:text-gold-400">
                    请联系我们获取 →
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-navy-800/20 p-6 rounded-xl border border-gold-subtle/50 hover:border-gold-medium transition-colors">
              <div className="flex items-start">
                <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                  <svg className="w-6 h-6 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-white mb-2">DWAC 年度报告</h3>
                  <p className="text-gray-400 text-sm mb-3">涵盖 DWAC 活动、案件统计和组织发展的年度报告</p>
                  <a href="mailto:secretary@dwac.net?subject=DWAC年度报告" className="text-gold-500 text-sm font-medium hover:text-gold-400">
                    即将发布 →
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-navy-800/20 p-6 rounded-xl border border-gold-subtle/50 hover:border-gold-medium transition-colors">
              <div className="flex items-start">
                <div className="w-12 h-12 bg-navy-800/40 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                  <svg className="w-6 h-6 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-white mb-2">数字法律研究白皮书</h3>
                  <p className="text-gray-400 text-sm mb-3">关于数字世界法律框架、治理和纠纷解决的研究</p>
                  <a href="mailto:secretary@dwac.net?subject=数字法律白皮书" className="text-gold-500 text-sm font-medium hover:text-gold-400">
                    即将发布 →
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-gold text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">需要帮助？</h2>
          <p className="text-gold-300 mb-8 max-w-2xl mx-auto">联系我们获取任何文件或咨询 DWAC 资源相关问题。</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/zh-cn/contact/" className="px-6 py-3 bg-navy-800/20 text-gold-500 font-semibold rounded-lg hover:bg-navy-800/40 transition-colors">
              联系我们
            </Link>
            <a href="mailto:secretary@dwac.net" className="px-6 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-navy-800/20/10 transition-colors">
              邮箱：secretary@dwac.net
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
