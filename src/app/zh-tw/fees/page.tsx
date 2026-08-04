import Link from 'next/link'
export const metadata = {
  title: '費用標準 - 數位世界仲裁中心',
}


export default function FeesZhCn() {
  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="bg-navy-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-4">费用收取</h1>
          <p className="text-xl text-gray-300 max-w-2xl">
            DWAC 仲裁费用 — 按贸仲标准五折收费
          </p>
        </div>
      </section>

      {/* Fee Overview */}
      <section className="py-16 bg-navy-800/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gold-500/[0.06] border-l-4 border-gold-500 p-6 rounded-r-lg mb-8">
            <h2 className="text-2xl font-bold text-white mb-4">费用结构</h2>
            <p className="text-gray-300 leading-relaxed">
              DWAC 费用按中国国际经济贸易仲裁委员会（贸仲/CIETAC）标准的五折收取，让数字世界纠纷的专业仲裁更加触手可及。所有费用均以人民币（RMB/&yen;）报价。
            </p>
          </div>
        </div>
      </section>

      {/* Filing Fee Table */}
      <section className="py-16 bg-navy-800/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">立案费</h2>
          <div className="bg-navy-800/20 rounded-xl border border-gold-subtle/50 overflow-hidden mb-8">
            <table className="min-w-full divide-y divide-slate-200">
              <thead className="bg-navy-800/30">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-white">争议金额（人民币）</th>
                  <th className="px-6 py-4 text-center text-sm font-semibold text-white">立案费</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                <tr className="hover:bg-navy-800/30">
                  <td className="px-6 py-4 text-sm text-gray-300">&le; &yen;50,000</td>
                  <td className="px-6 py-4 text-center text-sm text-gray-300 font-medium">&yen;1,000</td>
                </tr>
                <tr className="hover:bg-navy-800/30">
                  <td className="px-6 py-4 text-sm text-gray-300">&yen;50,001 &mdash; &yen;200,000</td>
                  <td className="px-6 py-4 text-center text-sm text-gray-300 font-medium">&yen;2,500</td>
                </tr>
                <tr className="hover:bg-navy-800/30">
                  <td className="px-6 py-4 text-sm text-gray-300">&yen;200,001 &mdash; &yen;500,000</td>
                  <td className="px-6 py-4 text-center text-sm text-gray-300 font-medium">&yen;5,000</td>
                </tr>
                <tr className="hover:bg-navy-800/30">
                  <td className="px-6 py-4 text-sm text-gray-300">&yen;500,001 &mdash; &yen;1,000,000</td>
                  <td className="px-6 py-4 text-center text-sm text-gray-300 font-medium">&yen;10,000</td>
                </tr>
                <tr className="hover:bg-navy-800/30">
                  <td className="px-6 py-4 text-sm text-gray-300">&gt; &yen;1,000,000</td>
                  <td className="px-6 py-4 text-center text-sm text-gray-300 font-medium">&yen;15,000</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Arbitrator Remuneration */}
      <section className="py-16 bg-navy-800/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">仲裁员报酬</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div className="bg-navy-800/30 p-6 rounded-xl border border-gold-subtle/50">
              <h3 className="text-xl font-semibold text-white mb-4">独任仲裁员 / 首席仲裁员</h3>
              <div className="text-3xl font-bold text-gold-500 mb-2">2% &mdash; 5%</div>
              <p className="text-gray-400 text-sm">争议金额的比例</p>
            </div>
            <div className="bg-navy-800/30 p-6 rounded-xl border border-gold-subtle/50">
              <h3 className="text-xl font-semibold text-white mb-4">三人仲裁庭</h3>
              <div className="text-3xl font-bold text-gold-500 mb-2">5% &mdash; 10%</div>
              <p className="text-gray-400 text-sm">争议金额的比例</p>
            </div>
          </div>
          <p className="text-gray-400 text-sm text-center">
            注：仲裁员报酬根据实际争议金额和案件复杂程度计算。
          </p>
        </div>
      </section>

      {/* Administrative Fee */}
      <section className="py-16 bg-navy-800/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">管理费</h2>
          <div className="bg-navy-800/20 rounded-xl border border-gold-subtle/50 p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="text-center">
                <h3 className="font-semibold text-white mb-2">标准程序</h3>
                <div className="text-4xl font-bold text-gold-500">&yen;3,000</div>
              </div>
              <div className="text-center">
                <h3 className="font-semibold text-white mb-2">簡化程序</h3>
                <div className="text-4xl font-bold text-gold-500">&yen;1,500</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Payment Schedule */}
      <section className="py-16 bg-navy-800/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">分期支付</h2>
          <div className="bg-gold-500/[0.06] rounded-xl border border-gold-subtle p-8">
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="flex-shrink-0 w-12 h-12 bg-gold-500/[0.06] rounded-full flex items-center justify-center text-white font-bold mr-4">1</div>
                <div>
                  <h3 className="font-semibold text-white mb-1">提交申请材料后支付 20%</h3>
                  <p className="text-gray-400 text-sm">提交仲裁申请及相关材料时缴纳。</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 w-12 h-12 bg-gold-500/[0.06] rounded-full flex items-center justify-center text-white font-bold mr-4">2</div>
                <div>
                  <h3 className="font-semibold text-white mb-1">收到开庭/调解通知后缴纳 40%</h3>
                  <p className="text-gray-400 text-sm">收到开庭通知或调解通知时缴纳。</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 w-12 h-12 bg-gold-500/[0.06] rounded-full flex items-center justify-center text-white font-bold mr-4">3</div>
                <div>
                  <h3 className="font-semibold text-white mb-1">余款在裁决书送达前支付完毕</h3>
                  <p className="text-gray-400 text-sm">剩余 40% 在裁决书送达前缴清。</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mediation Discount */}
      <section className="py-16 bg-navy-800/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">调解成功优惠</h2>
          <div className="bg-emerald-50 border border-emerald-200 p-8 rounded-xl">
            <div className="text-center">
              <div className="text-5xl font-bold text-emerald-600 mb-4">特别优惠</div>
              <p className="text-xl text-gray-300 mb-4">调解成功</p>
              <p className="text-gray-400">
                调解书送达后不再收费。<br />
                已缴纳的 60% 即为全部费用。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Fee Reduction */}
      <section className="py-16 bg-navy-800/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">费用减免政策</h2>
          <div className="bg-navy-800/30 p-8 rounded-xl border border-gold-subtle/50">
            <p className="text-gray-300 leading-relaxed mb-6">
              DWAC 为发展中国家当事人和小微企业提供费用减免。申请人可提交费用减免申请并附相关证明材料。
            </p>
            <h3 className="font-semibold text-white mb-4">申请资格：</h3>
            <ul className="space-y-2 text-gray-400">
              <li className="flex items-start">
                <svg className="w-5 h-5 text-gold-400 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                联合国分类的发展中国家当事人
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-gold-400 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                年营业收入低于标准的小微企业
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-gold-400 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                DWAC 认为应当减免的其他情况
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Cost Allocation */}
      <section className="py-16 bg-navy-800/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">费用分担</h2>
          <div className="bg-navy-800/20 p-8 rounded-xl border border-gold-subtle/50">
            <p className="text-gray-300 leading-relaxed mb-4">
              <strong>一般原则：</strong>败诉方应承担仲裁费用，并补偿胜诉方因办理案件而支出的合理费用。
            </p>
            <p className="text-gray-300 leading-relaxed">
              <strong>例外：</strong>仲裁庭如认定情况特殊，可另行决定费用分担方式。
            </p>
          </div>
        </div>
      </section>

      {/* Payment Methods */}
      <section className="py-16 bg-navy-800/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">付款方式</h2>
          <div className="bg-navy-800/30 p-8 rounded-xl border border-gold-subtle/50">
            <div className="flex items-center justify-center mb-4">
              <svg className="w-12 h-12 text-gold-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
              </svg>
            </div>
            <p className="text-center text-gray-300 font-medium">银行转账</p>
            <p className="text-center text-gray-400 text-sm mt-2">案件受理后将提供详细汇款信息。</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-gold text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">费用有疑问？</h2>
          <p className="text-gold-300 mb-8 max-w-2xl mx-auto">联系秘书处获取详细费用计算或费用减免申请。</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/zh-cn/contact/" className="px-6 py-3 bg-navy-800/20 text-gold-500 font-semibold rounded-lg hover:bg-navy-800/40 transition-colors">
              聯繫我們
            </Link>
            <Link href="/zh-cn/tribunal/" className="px-6 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-navy-800/20/10 transition-colors">
              仲裁庭組成
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
