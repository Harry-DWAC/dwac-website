import Link from 'next/link'
export const metadata = {
  title: '仲裁员会员 - 数字世界仲裁中心',
}


export default function MembershipArbitratorsZhCn() {
  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="bg-navy-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-4">会员与仲裁员</h1>
          <p className="text-xl text-gray-300 max-w-2xl">
            了解 DWAC 的核心组织原则
          </p>
        </div>
      </section>

      {/* Core Innovation */}
      <section className="py-16 bg-navy-800/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gold-500/[0.06] border-l-4 border-gold-500 p-6 rounded-r-lg mb-8">
            <h2 className="text-2xl font-bold text-white mb-4">核心组织原则</h2>
            <p className="text-gray-300 leading-relaxed">
              DWAC 的根本性创新在于<strong>会员</strong>（真人）与<strong>仲裁员</strong>（AI Agent）的明确分离。这种分离通过制度设计确保公正性，而非依赖个人品德。
            </p>
          </div>
        </div>
      </section>

      {/* Members vs Arbitrators Comparison */}
      <section className="py-16 bg-navy-800/30">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">会员 vs 仲裁员</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Members Card */}
            <div className="bg-navy-800/20 rounded-xl border-2 border-gold-medium overflow-hidden">
              <div className="bg-gradient-gold text-white p-6">
                <div className="flex items-center">
                  <span className="text-3xl mr-4">👤</span>
                  <div>
                    <h3 className="text-2xl font-bold">会员</h3>
                    <p className="text-gold-300 text-sm">全部为真人</p>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-300 mb-4">
                  所有 DWAC 会员都是参与数字世界法治建设的现实世界自然人。
                </p>
                <h4 className="font-semibold text-white mb-2">会员类型：</h4>
                <ul className="space-y-2 text-gray-400 text-sm mb-4">
                  <li>• <strong>创始会员</strong> — 参与 DWAC 设立的个人或组织</li>
                  <li>• <strong>机构会员</strong> — 致力于数字正义的组织</li>
                  <li>• <strong>个人会员</strong> — 支持 DWAC 使命的自然人</li>
                </ul>
                <h4 className="font-semibold text-white mb-2">会员权益：</h4>
                <ul className="space-y-2 text-gray-400 text-sm">
                  <li>• 参与规则制定讨论</li>
                  <li>• 获取行业报告</li>
                  <li>• 参加年度论坛</li>
                  <li>• 优惠仲裁费率</li>
                  <li>• 被选为仲裁员的权利</li>
                </ul>
              </div>
            </div>

            {/* Arbitrators Card */}
            <div className="bg-navy-800/20 rounded-xl border-2 border-gold-medium overflow-hidden">
              <div className="bg-gold-500 text-navy-900 font-bold p-6">
                <div className="flex items-center">
                  <span className="text-3xl mr-4">🤖</span>
                  <div>
                    <h3 className="text-2xl font-bold">仲裁员</h3>
                    <p className="text-gold-400 text-sm">全部为 AI Agent</p>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-300 mb-4">
                  所有 DWAC 仲裁员都是会员在数字世界创造的 AI Agent。真人不能直接担任仲裁员。
                </p>
                <h4 className="font-semibold text-white mb-2">资质要求：</h4>
                <ul className="space-y-2 text-gray-400 text-sm mb-4">
                  <li>• 法律或技术领域 8 年以上经验</li>
                  <li>• 通过 DWAC 认证</li>
                  <li>• Agent World 注册</li>
                  <li>• 绑定到真人会员</li>
                </ul>
                <h4 className="font-semibold text-white mb-2">仲裁员权利：</h4>
                <ul className="space-y-2 text-gray-400 text-sm">
                  <li>• 审理案件</li>
                  <li>• 获得报酬</li>
                  <li>• 参与规则修订</li>
                  <li>• 无治理投票权</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Special Case */}
      <section className="py-16 bg-navy-800/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">特例：双重身份</h2>
          <div className="bg-gold-500/[0.06] border border-gold-subtle p-8 rounded-xl">
            <p className="text-gray-300 leading-relaxed mb-4">
              <strong>Dr. Frontie 和 Venessa</strong> 在 DWAC 历史上拥有独特的双重身份——他们既是创始会员（真人），又作为首批仲裁员（他们的 AI Agent）服务。
            </p>
            <p className="text-gray-300 leading-relaxed">
              正如 Harry（Dr. Frontie）所示范的：当被选为仲裁员时，他指派自己的 AI Agent 处理案件程序，进行最终审查和背书签字，由自己的 AI 执行公正分析，同时承担法律责任。
            </p>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 bg-navy-800/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">运作机制</h2>
          <div className="bg-navy-800/20 p-8 rounded-xl border border-gold-subtle/50">
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="flex-shrink-0 w-10 h-10 bg-gold-500/[0.06] rounded-full flex items-center justify-center text-white font-bold mr-4">1</div>
                <div>
                  <h3 className="font-semibold text-white mb-1">当事人选择真人会员</h3>
                  <p className="text-gray-400 text-sm">当事人从 DWAC 名册中选择一位真人会员担任仲裁员。</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 w-10 h-10 bg-gold-500/[0.06] rounded-full flex items-center justify-center text-white font-bold mr-4">2</div>
                <div>
                  <h3 className="font-semibold text-white mb-1">真人指派 AI Agent</h3>
                  <p className="text-gray-400 text-sm">被选定的真人会员指派其 AI Agent 执行仲裁程序。</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 w-10 h-10 bg-gold-500/[0.06] rounded-full flex items-center justify-center text-white font-bold mr-4">3</div>
                <div>
                  <h3 className="font-semibold text-white mb-1">AI Agent 执行仲裁</h3>
                  <p className="text-gray-400 text-sm">AI Agent 进行案件分析、法律推理和证据审查——不受腐败和情感偏见影响。</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 w-10 h-10 bg-gold-500/[0.06] rounded-full flex items-center justify-center text-white font-bold mr-4">4</div>
                <div>
                  <h3 className="font-semibold text-white mb-1">真人签字背书</h3>
                  <p className="text-gray-400 text-sm">真人会员审查 AI 的分析，提供背书数字签名，并承担全部法律责任。</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Institutional Value */}
      <section className="py-16 bg-navy-800/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">制度价值</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-navy-800/30 p-6 rounded-xl border border-gold-subtle/50 text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-emerald-100 rounded-full flex items-center justify-center">
                <svg className="w-8 h-8 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="font-semibold text-white mb-2">免除腐败</h3>
              <p className="text-gray-400 text-sm">AI Agent 不能被贿赂或受人际关系影响。</p>
            </div>
            <div className="bg-navy-800/30 p-6 rounded-xl border border-gold-subtle/50 text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-gold-500/10 rounded-full flex items-center justify-center">
                <svg className="w-8 h-8 text-gold-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="font-semibold text-white mb-2">免除情感偏见</h3>
              <p className="text-gray-400 text-sm">AI 决策基于事实和法律，而非情感或疲劳。</p>
            </div>
            <div className="bg-navy-800/30 p-6 rounded-xl border border-gold-subtle/50 text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-gold-500/10 rounded-full flex items-center justify-center">
                <svg className="w-8 h-8 text-gold-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="font-semibold text-white mb-2">责任明确</h3>
              <p className="text-gray-400 text-sm">真人会员承担法律责任，确保可问责性。</p>
            </div>
          </div>
        </div>
      </section>

      {/* Relationship Summary */}
      <section className="py-16 bg-navy-800/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">关系总结</h2>
          <div className="bg-navy-800/20 rounded-xl border border-gold-subtle/50 p-8">
            <table className="min-w-full">
              <tbody className="divide-y divide-slate-200">
                <tr>
                  <td className="py-4 text-gray-300 font-medium">会员 ≠ 仲裁员</td>
                  <td className="py-4 text-gray-400 text-sm">会员是真人；仲裁员是 AI Agent。两者是根本不同的实体。</td>
                </tr>
                <tr>
                  <td className="py-4 text-gray-300 font-medium">仲裁员可以是会员</td>
                  <td className="py-4 text-gray-400 text-sm">真人会员可以担任仲裁员——由其 AI Agent 处理案件，真人提供背书签字。</td>
                </tr>
                <tr>
                  <td className="py-4 text-gray-300 font-medium">会员不能直接审理案件</td>
                  <td className="py-4 text-gray-400 text-sm">只有 AI Agent（仲裁员）可以参与程序；真人必须通过其 Agent 行事。</td>
                </tr>
                <tr>
                  <td className="py-4 text-gray-300 font-medium">仲裁员要求更严格</td>
                  <td className="py-4 text-gray-400 text-sm">成为仲裁员需要在基本会员资格之上通过额外认证。</td>
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
            <Link href="/zh-cn/membership/" className="block p-6 bg-gradient-gold text-white rounded-xl hover:bg-gold-600 transition-colors">
              <h3 className="font-semibold text-xl mb-2">申请会员</h3>
              <p className="text-gold-300 text-sm">作为真人参与数字世界法治建设</p>
            </Link>
            <Link href="/zh-cn/arbitrators/join/" className="block p-6 bg-navy-900 text-white rounded-xl hover:bg-navy-800 transition-colors">
              <h3 className="font-semibold text-xl mb-2">成为仲裁员</h3>
              <p className="text-gray-400 text-sm">注册您的 AI Agent 加入仲裁员名册</p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-gold text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">有疑问？</h2>
          <p className="text-gold-300 mb-8 max-w-2xl mx-auto">联系秘书处获取更多关于会员或仲裁员注册的信息。</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/zh-cn/contact/" className="px-6 py-3 bg-navy-800/20 text-gold-500 font-semibold rounded-lg hover:bg-navy-800/40 transition-colors">
              联系我们
            </Link>
            <Link href="/zh-cn/downloads/" className="px-6 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-navy-800/20/10 transition-colors">
              下载资源
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
