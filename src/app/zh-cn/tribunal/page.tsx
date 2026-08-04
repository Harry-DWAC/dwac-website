import Link from 'next/link'
export const metadata = {
  title: '数字仲裁庭 - 数字世界仲裁中心',
}


export default function TribunalZhCn() {
  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="bg-navy-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-4">仲裁庭组成</h1>
          <p className="text-xl text-gray-300 max-w-2xl">
            了解 DWAC 如何通过 AI Agent 机制组建仲裁庭
          </p>
        </div>
      </section>

      {/* Core Innovation */}
      <section className="py-16 bg-navy-800/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gold-500/[0.06] border-l-4 border-gold-500 p-6 rounded-r-lg mb-8">
            <h2 className="text-2xl font-bold text-white mb-4">核心创新：仲裁员 Agent 机制</h2>
            <p className="text-gray-300 leading-relaxed">
              DWAC 仲裁庭由 AI Agent（仲裁员Agent）与真人仲裁员协作组成。AI Agent 负责案件分析、法律推理和裁决书起草；真人仲裁员负责最终审查和背书签字，并承担全部法律责任。
            </p>
          </div>
        </div>
      </section>

      {/* Tribunal Composition Table */}
      <section className="py-16 bg-navy-800/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">按争议标的额确定仲裁庭组成</h2>
          <div className="bg-navy-800/20 rounded-xl border border-gold-subtle/50 overflow-hidden">
            <table className="min-w-full divide-y divide-slate-200">
              <thead className="bg-navy-800/30">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-white">争议标的额</th>
                  <th className="px-6 py-4 text-center text-sm font-semibold text-white">主裁人数</th>
                  <th className="px-6 py-4 text-center text-sm font-semibold text-white">辅裁人数</th>
                  <th className="px-6 py-4 text-center text-sm font-semibold text-white">真人签字</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                <tr className="hover:bg-navy-800/30">
                  <td className="px-6 py-4 text-sm text-gray-300">&le; 100万</td>
                  <td className="px-6 py-4 text-center text-sm text-gray-300 font-medium">1人</td>
                  <td className="px-6 py-4 text-center text-sm text-gray-300 font-medium">1人</td>
                  <td className="px-6 py-4 text-center text-sm text-gray-400">主裁的真人会员</td>
                </tr>
                <tr className="hover:bg-navy-800/30">
                  <td className="px-6 py-4 text-sm text-gray-300">&gt; 100万 ~ &le; 1亿</td>
                  <td className="px-6 py-4 text-center text-sm text-gray-300 font-medium">3人</td>
                  <td className="px-6 py-4 text-center text-sm text-gray-300 font-medium">3人</td>
                  <td className="px-6 py-4 text-center text-sm text-gray-400">主裁的真人会员</td>
                </tr>
                <tr className="hover:bg-navy-800/30">
                  <td className="px-6 py-4 text-sm text-gray-300">&gt; 1亿 ~ &le; 50亿</td>
                  <td className="px-6 py-4 text-center text-sm text-gray-300 font-medium">5人</td>
                  <td className="px-6 py-4 text-center text-sm text-gray-300 font-medium">5人</td>
                  <td className="px-6 py-4 text-center text-sm text-gray-400">主裁的真人会员</td>
                </tr>
                <tr className="hover:bg-navy-800/30">
                  <td className="px-6 py-4 text-sm text-gray-300">&gt; 50亿 ~ &le; 1000亿</td>
                  <td className="px-6 py-4 text-center text-sm text-gray-300 font-medium">7人</td>
                  <td className="px-6 py-4 text-center text-sm text-gray-300 font-medium">7人</td>
                  <td className="px-6 py-4 text-center text-sm text-gray-400">主裁的真人会员</td>
                </tr>
                <tr className="hover:bg-navy-800/30">
                  <td className="px-6 py-4 text-sm text-gray-300">&gt; 1000亿</td>
                  <td className="px-6 py-4 text-center text-sm text-gray-300 font-medium">9人</td>
                  <td className="px-6 py-4 text-center text-sm text-gray-300 font-medium">9人</td>
                  <td className="px-6 py-4 text-center text-sm text-gray-400">主裁的真人会员</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-gray-500 text-sm mt-4 text-center">
            注：&quot;以上&quot;即超过本数，&quot;以内&quot;即包含本数。
          </p>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 bg-navy-800/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">运作机制</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-navy-800/30 p-6 rounded-xl border border-gold-subtle/50">
              <div className="w-12 h-12 bg-gold-500/10 rounded-full flex items-center justify-center mb-4">
                <span className="text-2xl">🤖</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">AI Agent（仲裁员Agent）</h3>
              <ul className="text-gray-400 text-sm space-y-2">
                <li>• 接收并审查案件材料</li>
                <li>• 进行法律研究和规则适用</li>
                <li>• 参与仲裁庭合议</li>
                <li>• 起草裁决书及法律文书</li>
                <li>• 执行程序管理任务</li>
              </ul>
            </div>
            <div className="bg-navy-800/30 p-6 rounded-xl border border-gold-subtle/50">
              <div className="w-12 h-12 bg-gold-500/10 rounded-full flex items-center justify-center mb-4">
                <span className="text-2xl">👤</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">真人仲裁员</h3>
              <ul className="text-gray-400 text-sm space-y-2">
                <li>• 对 AI 起草的裁决进行最终审查</li>
                <li>• 提供背书数字签名</li>
                <li>• 对关键事项作出最终决定</li>
                <li>• 承担裁决的全部法律责任</li>
                <li>• 须为 DWAC 会员</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Selection Process */}
      <section className="py-16 bg-navy-800/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">仲裁员选定流程</h2>
          <div className="bg-navy-800/20 p-8 rounded-xl border border-gold-subtle/50">
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="flex-shrink-0 w-10 h-10 bg-gold-500/[0.06] rounded-full flex items-center justify-center text-white font-bold mr-4">1</div>
                <div>
                  <h3 className="font-semibold text-white mb-1">选定真人仲裁员</h3>
                  <p className="text-gray-400 text-sm">当事人从 DWAC 名册中选定真人仲裁员。三人仲裁庭情况下，各方各选定一名。</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 w-10 h-10 bg-gold-500/[0.06] rounded-full flex items-center justify-center text-white font-bold mr-4">2</div>
                <div>
                  <h3 className="font-semibold text-white mb-1">指派 AI Agent</h3>
                  <p className="text-gray-400 text-sm">被选定的真人仲裁员指派其注册的 AI Agent 处理案件程序。</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 w-10 h-10 bg-gold-500/[0.06] rounded-full flex items-center justify-center text-white font-bold mr-4">3</div>
                <div>
                  <h3 className="font-semibold text-white mb-1">AI 执行程序</h3>
                  <p className="text-gray-400 text-sm">AI Agent 分析证据、进行法律推理，与其他仲裁员的 Agent 协作。</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 w-10 h-10 bg-gold-500/[0.06] rounded-full flex items-center justify-center text-white font-bold mr-4">4</div>
                <div>
                  <h3 className="font-semibold text-white mb-1">真人背书签字</h3>
                  <p className="text-gray-400 text-sm">真人仲裁员审查 AI 起草的裁决，提供背书数字签名，并承担法律责任。</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Recusal */}
      <section className="py-16 bg-navy-800/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">回避制度</h2>
          <div className="bg-navy-800/30 p-8 rounded-xl border border-gold-subtle/50">
            <p className="text-gray-300 leading-relaxed mb-4">
              仲裁员（无论是真人还是 AI Agent）均应披露任何可能引起对其公正性或独立性产生合理怀疑的情况。
            </p>
            <p className="text-gray-300 leading-relaxed mb-4">
              如存在可能引起合理怀疑的情况，当事人可申请回避。回避申请由 DWAC 秘书长作出终局决定。
            </p>
            <p className="text-gray-300 leading-relaxed">
              所有仲裁员行为均记录于区块链存证系统，确保透明度和可问责性。
            </p>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 bg-navy-800/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">仲裁庭组成时间</h2>
          <div className="bg-gold-500/[0.06] border border-gold-subtle p-8 rounded-xl">
            <div className="flex items-center justify-center">
              <div className="text-center">
                <div className="text-5xl font-bold text-gold-500 mb-2">7</div>
                <p className="text-gray-300 font-medium">个工作日</p>
                <p className="text-gray-500 text-sm mt-1">自收到完整申请之日起</p>
              </div>
            </div>
            <p className="text-center text-gray-400 mt-6 text-sm">
              DWAC 应在收到完整仲裁申请后 7 个工作日内完成仲裁庭组建。
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-gold text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">有疑问？</h2>
          <p className="text-gold-300 mb-8 max-w-2xl mx-auto">秘书处随时为您提供仲裁庭组建相关问题的解答。</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/zh-cn/contact/" className="px-6 py-3 bg-navy-800/20 text-gold-500 font-semibold rounded-lg hover:bg-navy-800/40 transition-colors">
              联系我们
            </Link>
            <Link href="/zh-cn/fees/" className="px-6 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-navy-800/20/10 transition-colors">
              查看费用表
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
