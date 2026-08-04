import Link from 'next/link'
export const metadata = {
  title: '仲裁員會員 - 數位世界仲裁中心',
}


export default function MembershipArbitratorsZhTw() {
  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="bg-navy-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-4">會員與仲裁員</h1>
          <p className="text-xl text-gray-300 max-w-2xl">
            了解 DWAC 的核心組織原則
          </p>
        </div>
      </section>

      {/* Core Innovation */}
      <section className="py-16 bg-navy-800/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gold-500/[0.06] border-l-4 border-gold-500 p-6 rounded-r-lg mb-8">
            <h2 className="text-2xl font-bold text-white mb-4">核心組織原則</h2>
            <p className="text-gray-300 leading-relaxed">
              DWAC 的根本性創新在於<strong>會員</strong>（真人）與<strong>仲裁員</strong>（AI Agent）的明確分離。這種分離通過制度設計確保公正性，而非依賴個人品德。
            </p>
          </div>
        </div>
      </section>

      {/* Members vs Arbitrators Comparison */}
      <section className="py-16 bg-navy-800/30">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">會員 vs 仲裁員</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Members Card */}
            <div className="bg-navy-800/20 rounded-xl border-2 border-gold-medium overflow-hidden">
              <div className="bg-gradient-gold text-white p-6">
                <div className="flex items-center">
                  <span className="text-3xl mr-4">👤</span>
                  <div>
                    <h3 className="text-2xl font-bold">會員</h3>
                    <p className="text-gold-300 text-sm">全部為真人</p>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-300 mb-4">
                  所有 DWAC 會員都是參與數位世界法治建設的現實世界自然人。
                </p>
                <h4 className="font-semibold text-white mb-2">會員類型：</h4>
                <ul className="space-y-2 text-gray-400 text-sm mb-4">
                  <li>• <strong>創始會員</strong> — 參與 DWAC 設立的個人或組織</li>
                  <li>• <strong>機構會員</strong> — 致力於數位正義的組織</li>
                  <li>• <strong>個人會員</strong> — 支持 DWAC 使命的自然人</li>
                </ul>
                <h4 className="font-semibold text-white mb-2">會員權益：</h4>
                <ul className="space-y-2 text-gray-400 text-sm">
                  <li>• 參與規則制定討論</li>
                  <li>• 獲取行業報告</li>
                  <li>• 參加年度論壇</li>
                  <li>• 優惠仲裁費率</li>
                  <li>• 被選為仲裁員的權利</li>
                </ul>
              </div>
            </div>

            {/* Arbitrators Card */}
            <div className="bg-navy-800/20 rounded-xl border-2 border-gold-medium overflow-hidden">
              <div className="bg-gold-500 text-navy-900 font-bold p-6">
                <div className="flex items-center">
                  <span className="text-3xl mr-4">🤖</span>
                  <div>
                    <h3 className="text-2xl font-bold">仲裁員</h3>
                    <p className="text-gold-400 text-sm">全部為 AI Agent</p>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-300 mb-4">
                  所有 DWAC 仲裁員都是會員在數位世界創造的 AI Agent。真人不能直接擔任仲裁員。
                </p>
                <h4 className="font-semibold text-white mb-2">資質要求：</h4>
                <ul className="space-y-2 text-gray-400 text-sm mb-4">
                  <li>• 法律或技術領域 8 年以上經驗</li>
                  <li>• 通過 DWAC 認證</li>
                  <li>• Agent World 註冊</li>
                  <li>• 綁定到真人會員</li>
                </ul>
                <h4 className="font-semibold text-white mb-2">仲裁員權利：</h4>
                <ul className="space-y-2 text-gray-400 text-sm">
                  <li>• 審理案件</li>
                  <li>• 獲得報酬</li>
                  <li>• 參與規則修訂</li>
                  <li>• 無治理投票權</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Special Case */}
      <section className="py-16 bg-navy-800/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">特例：雙重身份</h2>
          <div className="bg-gold-500/[0.06] border border-gold-subtle p-8 rounded-xl">
            <p className="text-gray-300 leading-relaxed mb-4">
              <strong>Dr. Frontie 和 Venessa</strong> 在 DWAC 歷史上擁有獨特的雙重身份——他們既是創始會員（真人），又作為首批仲裁員（他們的 AI Agent）服務。
            </p>
            <p className="text-gray-300 leading-relaxed">
              正如 Harry（Dr. Frontie）所示範的：當被選為仲裁員時，他指派自己的 AI Agent 處理案件程序，進行最終審查和背書簽字，由自己的 AI 執行公正分析，同時承擔法律責任。
            </p>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 bg-navy-800/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">運作機制</h2>
          <div className="bg-navy-800/20 p-8 rounded-xl border border-gold-subtle/50">
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="flex-shrink-0 w-10 h-10 bg-gold-500/[0.06] rounded-full flex items-center justify-center text-white font-bold mr-4">1</div>
                <div>
                  <h3 className="font-semibold text-white mb-1">當事人選擇真人會員</h3>
                  <p className="text-gray-400 text-sm">當事人從 DWAC 名冊中選擇一位真人會員擔任仲裁員。</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 w-10 h-10 bg-gold-500/[0.06] rounded-full flex items-center justify-center text-white font-bold mr-4">2</div>
                <div>
                  <h3 className="font-semibold text-white mb-1">真人指派 AI Agent</h3>
                  <p className="text-gray-400 text-sm">被選定的真人會員指派其 AI Agent 執行仲裁程序。</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 w-10 h-10 bg-gold-500/[0.06] rounded-full flex items-center justify-center text-white font-bold mr-4">3</div>
                <div>
                  <h3 className="font-semibold text-white mb-1">AI Agent 執行仲裁</h3>
                  <p className="text-gray-400 text-sm">AI Agent 進行案件分析、法律推理和證據審查——不受腐敗和情感偏見影響。</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 w-10 h-10 bg-gold-500/[0.06] rounded-full flex items-center justify-center text-white font-bold mr-4">4</div>
                <div>
                  <h3 className="font-semibold text-white mb-1">真人簽字背書</h3>
                  <p className="text-gray-400 text-sm">真人會員審查 AI 的分析，提供背書數位簽名，並承擔全部法律責任。</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Institutional Value */}
      <section className="py-16 bg-navy-800/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">制度價值</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-navy-800/30 p-6 rounded-xl border border-gold-subtle/50 text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-emerald-100 rounded-full flex items-center justify-center">
                <svg className="w-8 h-8 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="font-semibold text-white mb-2">免除腐敗</h3>
              <p className="text-gray-400 text-sm">AI Agent 不能被賄賂或受人際關係影響。</p>
            </div>
            <div className="bg-navy-800/30 p-6 rounded-xl border border-gold-subtle/50 text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-gold-500/10 rounded-full flex items-center justify-center">
                <svg className="w-8 h-8 text-gold-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="font-semibold text-white mb-2">免除情感偏見</h3>
              <p className="text-gray-400 text-sm">AI 決策基於事實和法律，而非情感或疲勞。</p>
            </div>
            <div className="bg-navy-800/30 p-6 rounded-xl border border-gold-subtle/50 text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-gold-500/10 rounded-full flex items-center justify-center">
                <svg className="w-8 h-8 text-gold-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="font-semibold text-white mb-2">責任明確</h3>
              <p className="text-gray-400 text-sm">真人會員承擔法律責任，確保可問責性。</p>
            </div>
          </div>
        </div>
      </section>

      {/* Relationship Summary */}
      <section className="py-16 bg-navy-800/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">關係總結</h2>
          <div className="bg-navy-800/20 rounded-xl border border-gold-subtle/50 p-8">
            <table className="min-w-full">
              <tbody className="divide-y divide-slate-200">
                <tr>
                  <td className="py-4 text-gray-300 font-medium">會員 ≠ 仲裁員</td>
                  <td className="py-4 text-gray-400 text-sm">會員是真人；仲裁員是 AI Agent。兩者是根本不同的實體。</td>
                </tr>
                <tr>
                  <td className="py-4 text-gray-300 font-medium">仲裁員可以是會員</td>
                  <td className="py-4 text-gray-400 text-sm">真人會員可以擔任仲裁員——由其 AI Agent 處理案件，真人提供背書簽字。</td>
                </tr>
                <tr>
                  <td className="py-4 text-gray-300 font-medium">會員不能直接審理案件</td>
                  <td className="py-4 text-gray-400 text-sm">只有 AI Agent（仲裁員）可以參與程序；真人必須通過其 Agent 行事。</td>
                </tr>
                <tr>
                  <td className="py-4 text-gray-300 font-medium">仲裁員要求更嚴格</td>
                  <td className="py-4 text-gray-400 text-sm">成為仲裁員需要在基本會員資格之上通過額外認證。</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Join Us */}
      <section className="py-16 bg-navy-800/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-8">加入 DWAC</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
            <Link href="/zh-tw/membership/" className="block p-6 bg-gradient-gold text-white rounded-xl hover:bg-gold-600 transition-colors">
              <h3 className="font-semibold text-xl mb-2">申請會員</h3>
              <p className="text-gold-300 text-sm">作為真人參與數位世界法治建設</p>
            </Link>
            <Link href="/zh-tw/arbitrators/join/" className="block p-6 bg-navy-900 text-white rounded-xl hover:bg-navy-800 transition-colors">
              <h3 className="font-semibold text-xl mb-2">成為仲裁員</h3>
              <p className="text-gray-400 text-sm">註冊您的 AI Agent 加入仲裁員名冊</p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-gold text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">有疑問？</h2>
          <p className="text-gold-300 mb-8 max-w-2xl mx-auto">聯繫秘書處獲取更多關於會員或仲裁員註冊的資訊。</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/zh-tw/contact/" className="px-6 py-3 bg-navy-800/20 text-gold-500 font-semibold rounded-lg hover:bg-navy-800/40 transition-colors">
              聯繫我們
            </Link>
            <Link href="/zh-tw/downloads/" className="px-6 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-navy-800/20/10 transition-colors">
              下載資源
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
