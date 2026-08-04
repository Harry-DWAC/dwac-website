import Link from 'next/link'
export const metadata = {
  title: '數位仲裁庭 - 數位世界仲裁中心',
}


export default function TribunalZhCn() {
  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="bg-navy-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-4">仲裁庭組成</h1>
          <p className="text-xl text-gray-300 max-w-2xl">
            瞭解 DWAC 如何透過 AI Agent 機制組建仲裁庭
          </p>
        </div>
      </section>

      {/* Core Innovation */}
      <section className="py-16 bg-navy-800/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gold-500/[0.06] border-l-4 border-gold-500 p-6 rounded-r-lg mb-8">
            <h2 className="text-2xl font-bold text-white mb-4">核心創新：仲裁员 Agent 機制</h2>
            <p className="text-gray-300 leading-relaxed">
              DWAC 仲裁庭由 AI Agent（仲裁員Agent）与真人仲裁員協作組成。AI Agent 负责案件分析、法律推理和裁決書起草；真人仲裁員负责最終審查和背書簽字，并承擔全部法律責任。
            </p>
          </div>
        </div>
      </section>

      {/* Tribunal Composition Table */}
      <section className="py-16 bg-navy-800/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">按爭議標的額確定仲裁庭組成</h2>
          <div className="bg-navy-800/20 rounded-xl border border-gold-subtle/50 overflow-hidden">
            <table className="min-w-full divide-y divide-slate-200">
              <thead className="bg-navy-800/30">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-white">爭議標的額</th>
                  <th className="px-6 py-4 text-center text-sm font-semibold text-white">主裁人数</th>
                  <th className="px-6 py-4 text-center text-sm font-semibold text-white">辅裁人数</th>
                  <th className="px-6 py-4 text-center text-sm font-semibold text-white">真人簽字</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                <tr className="hover:bg-navy-800/30">
                  <td className="px-6 py-4 text-sm text-gray-300">&le; 100万</td>
                  <td className="px-6 py-4 text-center text-sm text-gray-300 font-medium">1人</td>
                  <td className="px-6 py-4 text-center text-sm text-gray-300 font-medium">1人</td>
                  <td className="px-6 py-4 text-center text-sm text-gray-400">主裁的真人會員</td>
                </tr>
                <tr className="hover:bg-navy-800/30">
                  <td className="px-6 py-4 text-sm text-gray-300">&gt; 100万 ~ &le; 1亿</td>
                  <td className="px-6 py-4 text-center text-sm text-gray-300 font-medium">3人</td>
                  <td className="px-6 py-4 text-center text-sm text-gray-300 font-medium">3人</td>
                  <td className="px-6 py-4 text-center text-sm text-gray-400">主裁的真人會員</td>
                </tr>
                <tr className="hover:bg-navy-800/30">
                  <td className="px-6 py-4 text-sm text-gray-300">&gt; 1亿 ~ &le; 50亿</td>
                  <td className="px-6 py-4 text-center text-sm text-gray-300 font-medium">5人</td>
                  <td className="px-6 py-4 text-center text-sm text-gray-300 font-medium">5人</td>
                  <td className="px-6 py-4 text-center text-sm text-gray-400">主裁的真人會員</td>
                </tr>
                <tr className="hover:bg-navy-800/30">
                  <td className="px-6 py-4 text-sm text-gray-300">&gt; 50亿 ~ &le; 1000亿</td>
                  <td className="px-6 py-4 text-center text-sm text-gray-300 font-medium">7人</td>
                  <td className="px-6 py-4 text-center text-sm text-gray-300 font-medium">7人</td>
                  <td className="px-6 py-4 text-center text-sm text-gray-400">主裁的真人會員</td>
                </tr>
                <tr className="hover:bg-navy-800/30">
                  <td className="px-6 py-4 text-sm text-gray-300">&gt; 1000亿</td>
                  <td className="px-6 py-4 text-center text-sm text-gray-300 font-medium">9人</td>
                  <td className="px-6 py-4 text-center text-sm text-gray-300 font-medium">9人</td>
                  <td className="px-6 py-4 text-center text-sm text-gray-400">主裁的真人會員</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-gray-500 text-sm mt-4 text-center">
            注：&quot;以上&quot;即超過本数，&quot;以內&quot;即包含本数。
          </p>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 bg-navy-800/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">运作機制</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-navy-800/30 p-6 rounded-xl border border-gold-subtle/50">
              <div className="w-12 h-12 bg-gold-500/10 rounded-full flex items-center justify-center mb-4">
                <span className="text-2xl">🤖</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">AI Agent（仲裁員Agent）</h3>
              <ul className="text-gray-400 text-sm space-y-2">
                <li>• 接收並審查案件材料</li>
                <li>• 进行法律研究和規則適用</li>
                <li>• 參與仲裁庭合議</li>
                <li>• 起草裁決書及法律文書</li>
                <li>• 執行程式管理任務</li>
              </ul>
            </div>
            <div className="bg-navy-800/30 p-6 rounded-xl border border-gold-subtle/50">
              <div className="w-12 h-12 bg-gold-500/10 rounded-full flex items-center justify-center mb-4">
                <span className="text-2xl">👤</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">真人仲裁員</h3>
              <ul className="text-gray-400 text-sm space-y-2">
                <li>• 对 AI 起草的裁决进行最終審查</li>
                <li>• 提供背書數位簽名</li>
                <li>• 对關鍵事項作出最終決定</li>
                <li>• 承擔裁決的全部法律責任</li>
                <li>• 须为 DWAC 會員</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Selection Process */}
      <section className="py-16 bg-navy-800/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">仲裁员選定流程</h2>
          <div className="bg-navy-800/20 p-8 rounded-xl border border-gold-subtle/50">
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="flex-shrink-0 w-10 h-10 bg-gold-500/[0.06] rounded-full flex items-center justify-center text-white font-bold mr-4">1</div>
                <div>
                  <h3 className="font-semibold text-white mb-1">选定真人仲裁員</h3>
                  <p className="text-gray-400 text-sm">當事人从 DWAC 名冊中选定真人仲裁員。三人仲裁庭情況下，各方各选定一名。</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 w-10 h-10 bg-gold-500/[0.06] rounded-full flex items-center justify-center text-white font-bold mr-4">2</div>
                <div>
                  <h3 className="font-semibold text-white mb-1">指派 AI Agent</h3>
                  <p className="text-gray-400 text-sm">被选定的真人仲裁員指派其註冊的 AI Agent 處理案件程式。</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 w-10 h-10 bg-gold-500/[0.06] rounded-full flex items-center justify-center text-white font-bold mr-4">3</div>
                <div>
                  <h3 className="font-semibold text-white mb-1">AI 執行程式</h3>
                  <p className="text-gray-400 text-sm">AI Agent 分析证据、进行法律推理，与其他仲裁员的 Agent 協作。</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 w-10 h-10 bg-gold-500/[0.06] rounded-full flex items-center justify-center text-white font-bold mr-4">4</div>
                <div>
                  <h3 className="font-semibold text-white mb-1">真人背書簽字</h3>
                  <p className="text-gray-400 text-sm">真人仲裁員審查 AI 起草的裁决，提供背書數位簽名，并承擔法律責任。</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Recusal */}
      <section className="py-16 bg-navy-800/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">迴避制度</h2>
          <div className="bg-navy-800/30 p-8 rounded-xl border border-gold-subtle/50">
            <p className="text-gray-300 leading-relaxed mb-4">
              仲裁员（無論是真人还是 AI Agent）均應披露任何可能引起对其公正性或獨立性产生合理懷疑的情況。
            </p>
            <p className="text-gray-300 leading-relaxed mb-4">
              如存在可能引起合理懷疑的情況，當事人可申請迴避。回避申请由 DWAC 秘書長作出終局決定。
            </p>
            <p className="text-gray-300 leading-relaxed">
              所有仲裁员行為均記錄于區塊鏈存證系統，确保透明度和可問責性。
            </p>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 bg-navy-800/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">仲裁庭組成时间</h2>
          <div className="bg-gold-500/[0.06] border border-gold-subtle p-8 rounded-xl">
            <div className="flex items-center justify-center">
              <div className="text-center">
                <div className="text-5xl font-bold text-gold-500 mb-2">7</div>
                <p className="text-gray-300 font-medium">個工作日</p>
                <p className="text-gray-500 text-sm mt-1">自收到完整申請之日起</p>
              </div>
            </div>
            <p className="text-center text-gray-400 mt-6 text-sm">
              DWAC 应在收到完整仲裁申请后 7 個工作日内完成仲裁庭組建。
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-gold text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">有疑問？</h2>
          <p className="text-gold-300 mb-8 max-w-2xl mx-auto">秘書處随时为您提供仲裁庭組建相關問題的解答。</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/zh-cn/contact/" className="px-6 py-3 bg-navy-800/20 text-gold-500 font-semibold rounded-lg hover:bg-navy-800/40 transition-colors">
              聯繫我們
            </Link>
            <Link href="/zh-cn/fees/" className="px-6 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-navy-800/20/10 transition-colors">
              查看費用表
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
