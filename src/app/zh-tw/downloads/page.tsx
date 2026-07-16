import Link from 'next/link'

export default function DownloadsZhTw() {
  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="bg-navy-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-4">下載中心</h1>
          <p className="text-xl text-gray-300 max-w-2xl">
            獲取 DWAC 文件、示範條款和研究資料
          </p>
        </div>
      </section>

      {/* Pricing Notice */}
      <section className="py-16 bg-navy-800/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gold-500/[0.06] border-l-4 border-gold-500 p-6 rounded-r-lg mb-8">
            <h2 className="text-2xl font-bold text-white mb-4">獲取說明</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-navy-800/20 p-4 rounded-lg border border-gold-subtle">
                <h3 className="font-semibold text-white mb-1">線上閱讀</h3>
                <p className="text-gold-500 font-bold">免費</p>
              </div>
              <div className="bg-navy-800/20 p-4 rounded-lg border border-gold-subtle">
                <h3 className="font-semibold text-white mb-1">下載（PDF）</h3>
                <p className="text-gold-500 font-bold">每份 ¥35</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Forms Section */}
      <section className="py-16 bg-navy-800/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">表格下載</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-navy-800/20 p-6 rounded-xl border border-gold-subtle/50 hover:border-gold-medium transition-colors">
              <div className="flex items-start">
                <div className="w-12 h-12 bg-gold-500/10 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                  <svg className="w-6 h-6 text-gold-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-white mb-2">仲裁申請書</h3>
                  <p className="text-gray-400 text-sm mb-3">啟動仲裁程序的申請表格</p>
                  <a href="mailto:secretary@dwac.net?subject=請求仲裁申請書表格" className="text-gold-500 text-sm font-medium hover:text-gold-400">
                    請聯繫我們獲取 →
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
                  <h3 className="font-semibold text-white mb-2">仲裁員聲明書</h3>
                  <p className="text-gray-400 text-sm mb-3">獨立性與公正性聲明表格</p>
                  <a href="mailto:secretary@dwac.net?subject=請求仲裁員聲明書表格" className="text-gold-500 text-sm font-medium hover:text-gold-400">
                    請聯繫我們獲取 →
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
                  <h3 className="font-semibold text-white mb-2">會員申請表</h3>
                  <p className="text-gray-400 text-sm mb-3">申請成為 DWAC 會員的表格</p>
                  <a href="mailto:secretary@dwac.net?subject=請求會員申請表" className="text-gold-500 text-sm font-medium hover:text-gold-400">
                    請聯繫我們獲取 →
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
                  <h3 className="font-semibold text-white mb-2">示範仲裁條款</h3>
                  <p className="text-gray-400 text-sm mb-3">合同和協議的示範條款</p>
                  <a href="mailto:secretary@dwac.net?subject=請求示範仲裁條款" className="text-gold-500 text-sm font-medium hover:text-gold-400">
                    請聯繫我們獲取 →
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
              <strong>註：</strong>以下所有案例均經脫敏處理，僅供參考。DWAC 目前處於創始階段，將於 2026 年第四季度開始受理案件。
            </p>
          </div>
          <div className="space-y-6">
            <div className="bg-navy-800/20 p-6 rounded-xl border border-gold-subtle/50">
              <div className="flex items-start">
                <div className="w-10 h-10 bg-gold-500/10 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                  <span className="text-gold-500 font-bold">1</span>
                </div>
                <div>
                  <h3 className="font-semibold text-white mb-2">某用戶 vs 某平台 — 帳號封禁糾紛</h3>
                  <p className="text-gray-400 text-sm mb-3">用戶對其帳號被永久封禁提出異議，主張平台違反服務條款，要求恢復帳號並賠償損失。</p>
                  <div className="flex items-center text-xs text-gray-500">
                    <span className="bg-navy-800/40 px-2 py-1 rounded mr-2">數位身份</span>
                    <span className="bg-navy-800/40 px-2 py-1 rounded">合約糾紛</span>
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
                  <h3 className="font-semibold text-white mb-2">某公司 vs 某AI服務 — 智慧合約履行糾紛</h3>
                  <p className="text-gray-400 text-sm mb-3">公司主張 AI 服務提供商未能交付智慧合約約定的功能，導致經濟損失。</p>
                  <div className="flex items-center text-xs text-gray-500">
                    <span className="bg-navy-800/40 px-2 py-1 rounded mr-2">智慧合約</span>
                    <span className="bg-navy-800/40 px-2 py-1 rounded">服務糾紛</span>
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
                  <h3 className="font-semibold text-white mb-2">某開發者 vs 某交易所 — 數位資產糾紛</h3>
                  <p className="text-gray-400 text-sm mb-3">開發者主張交易所在系統升級期間處理不當，導致其代幣損失。</p>
                  <div className="flex items-center text-xs text-gray-500">
                    <span className="bg-navy-800/40 px-2 py-1 rounded mr-2">數位資產</span>
                    <span className="bg-navy-800/40 px-2 py-1 rounded">財產權益</span>
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
          <h2 className="text-3xl font-bold text-white mb-8 text-center">專著與文獻</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-navy-800/20 p-6 rounded-xl border border-gold-subtle/50 hover:border-gold-medium transition-colors">
              <div className="flex items-start">
                <div className="w-12 h-12 bg-gold-500/10 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                  <svg className="w-6 h-6 text-gold-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-white mb-2">《數位世界公約》全文</h3>
                  <p className="text-gray-400 text-sm mb-3">確立數位世界糾紛解決原則的創始公約全文</p>
                  <a href="mailto:secretary@dwac.net?subject=請求數位世界公約下載" className="text-gold-500 text-sm font-medium hover:text-gold-400">
                    請聯繫我們獲取 →
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
                  <h3 className="font-semibold text-white mb-2">《數位世界仲裁規則》全文</h3>
                  <p className="text-gray-400 text-sm mb-3">規範 DWAC 程式的完整仲裁規則（67條）</p>
                  <a href="mailto:secretary@dwac.net?subject=請求數位世界仲裁規則下載" className="text-gold-500 text-sm font-medium hover:text-gold-400">
                    請聯繫我們獲取 →
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
                  <h3 className="font-semibold text-white mb-2">DWAC 年度報告</h3>
                  <p className="text-gray-400 text-sm mb-3">涵蓋 DWAC 活動、案件統計和組織發展的年度報告</p>
                  <a href="mailto:secretary@dwac.net?subject=DWAC年度報告" className="text-gold-500 text-sm font-medium hover:text-gold-400">
                    即將發布 →
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
                  <h3 className="font-semibold text-white mb-2">數位法律研究白皮書</h3>
                  <p className="text-gray-400 text-sm mb-3">關於數位世界法律框架、治理和糾紛解決的研究</p>
                  <a href="mailto:secretary@dwac.net?subject=數位法律白皮書" className="text-gold-500 text-sm font-medium hover:text-gold-400">
                    即將發布 →
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
          <h2 className="text-3xl font-bold mb-4">需要幫助？</h2>
          <p className="text-gold-300 mb-8 max-w-2xl mx-auto">聯繫我們獲取任何文件或諮詢 DWAC 資源相關問題。</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/zh-tw/contact/" className="px-6 py-3 bg-navy-800/20 text-gold-500 font-semibold rounded-lg hover:bg-navy-800/40 transition-colors">
              聯繫我們
            </Link>
            <a href="mailto:secretary@dwac.net" className="px-6 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-navy-800/20/10 transition-colors">
              郵箱：secretary@dwac.net
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
