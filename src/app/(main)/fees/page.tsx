import Link from 'next/link'
export const metadata = {
  title: 'Fee Schedule - DWAC',
}


export default function Fees() {
  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="bg-navy-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-4">Fee Schedule</h1>
          <p className="text-xl text-gray-300 max-w-2xl">
            DWAC arbitration fees — 50% of CIETAC rates
          </p>
        </div>
      </section>

      {/* Fee Overview */}
      <section className="py-16 bg-navy-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gold-500/[0.06] border-l-4 border-gold-500 p-6 rounded-r-lg mb-8">
            <h2 className="text-2xl font-bold text-white mb-4">Fee Structure</h2>
            <p className="text-gray-300 leading-relaxed">
              DWAC fees are set at 50% of the China International Economic and Trade Arbitration Commission (CIETAC) rates, making professional arbitration accessible for digital world disputes. All fees are quoted in Chinese Yuan (RMB/&yen;).
            </p>
          </div>
        </div>
      </section>

      {/* Filing Fee Table */}
      <section className="py-16 bg-navy-800/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Filing Fee (Registration Fee)</h2>
          <div className="bg-navy-800/20 rounded-xl border border-gold-subtle/50 overflow-hidden mb-8">
            <table className="min-w-full divide-y divide-slate-200">
              <thead className="bg-navy-800/30">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-white">Dispute Amount (RMB)</th>
                  <th className="px-6 py-4 text-center text-sm font-semibold text-white">Filing Fee</th>
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
      <section className="py-16 bg-navy-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Arbitrator Remuneration</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div className="bg-navy-800/30 p-6 rounded-xl border border-gold-subtle/50">
              <h3 className="text-xl font-semibold text-white mb-4">Sole Arbitrator / Presiding Arbitrator</h3>
              <div className="text-3xl font-bold text-gold-600 mb-2">2% &mdash; 5%</div>
              <p className="text-gray-400 text-sm">of the dispute amount</p>
            </div>
            <div className="bg-navy-800/30 p-6 rounded-xl border border-gold-subtle/50">
              <h3 className="text-xl font-semibold text-white mb-4">Three-Member Tribunal</h3>
              <div className="text-3xl font-bold text-gold-600 mb-2">5% &mdash; 10%</div>
              <p className="text-gray-400 text-sm">of the dispute amount</p>
            </div>
          </div>
          <p className="text-gray-400 text-sm text-center">
            Note: Arbitrator remuneration is calculated based on the actual dispute amount and complexity.
          </p>
        </div>
      </section>

      {/* Administrative Fee */}
      <section className="py-16 bg-navy-800/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Administrative Fee</h2>
          <div className="bg-navy-800/20 rounded-xl border border-gold-subtle/50 p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="text-center">
                <h3 className="font-semibold text-white mb-2">Standard Procedure</h3>
                <div className="text-4xl font-bold text-gold-600">&yen;3,000</div>
              </div>
              <div className="text-center">
                <h3 className="font-semibold text-white mb-2">Simplified Procedure</h3>
                <div className="text-4xl font-bold text-gold-600">&yen;1,500</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Payment Schedule */}
      <section className="py-16 bg-navy-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Installment Payment Schedule</h2>
          <div className="bg-gold-500/[0.06] rounded-xl border border-gold-subtle p-8">
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-gold rounded-full flex items-center justify-center text-white font-bold mr-4">1</div>
                <div>
                  <h3 className="font-semibold text-white mb-1">20% Upon Submission</h3>
                  <p className="text-gray-400 text-sm">Payable when submitting the arbitration application and supporting materials.</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-gold rounded-full flex items-center justify-center text-white font-bold mr-4">2</div>
                <div>
                  <h3 className="font-semibold text-white mb-1">40% Upon Hearing Notice</h3>
                  <p className="text-gray-400 text-sm">Payable upon receiving the hearing/mediation notice.</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-gold rounded-full flex items-center justify-center text-white font-bold mr-4">3</div>
                <div>
                  <h3 className="font-semibold text-white mb-1">40% Before Award Delivery</h3>
                  <p className="text-gray-400 text-sm">Remaining balance payable before the award is delivered.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mediation Discount */}
      <section className="py-16 bg-navy-800/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Mediation Success Discount</h2>
          <div className="bg-emerald-500/[0.06] border border-emerald-200 p-8 rounded-xl">
            <div className="text-center">
              <div className="text-5xl font-bold text-emerald-400 mb-4">Special Rate</div>
              <p className="text-xl text-gray-300 mb-4">If mediation succeeds</p>
              <p className="text-gray-400">
                Upon delivery of the mediation settlement, no further fees will be charged.<br />
                The 60% already paid constitutes the full fee.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Fee Reduction */}
      <section className="py-16 bg-navy-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Fee Reduction Policy</h2>
          <div className="bg-navy-800/30 p-8 rounded-xl border border-gold-subtle/50">
            <p className="text-gray-300 leading-relaxed mb-6">
              DWAC offers fee reduction for parties from developing countries and small/micro enterprises. Applicants may submit a fee reduction application with supporting documentation.
            </p>
            <h3 className="font-semibold text-white mb-4">Eligibility:</h3>
            <ul className="space-y-2 text-gray-400">
              <li className="flex items-start">
                <svg className="w-5 h-5 text-gold-500 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Parties from developing countries as classified by the United Nations
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-gold-500 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Small and micro enterprises (SMEs) with annual revenue below threshold
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-gold-500 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Other circumstances warranting fee reduction as determined by DWAC
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Cost Allocation */}
      <section className="py-16 bg-navy-800/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Cost Allocation</h2>
          <div className="bg-navy-800/20 p-8 rounded-xl border border-gold-subtle/50">
            <p className="text-gray-300 leading-relaxed mb-4">
              <strong>General Rule:</strong> The losing party shall bear the costs of the arbitration and compensate the prevailing party for reasonable expenses incurred in connection with the proceedings.
            </p>
            <p className="text-gray-300 leading-relaxed">
              <strong>Exception:</strong> The tribunal may allocate costs differently if it determines that such allocation is appropriate under the circumstances of the case.
            </p>
          </div>
        </div>
      </section>

      {/* Payment Methods */}
      <section className="py-16 bg-navy-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Payment Methods</h2>
          <div className="bg-navy-800/30 p-8 rounded-xl border border-gold-subtle/50">
            <div className="flex items-center justify-center mb-4">
              <svg className="w-12 h-12 text-gold-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
              </svg>
            </div>
            <p className="text-center text-gray-300 font-medium">Bank Transfer</p>
            <p className="text-center text-gray-400 text-sm mt-2">Wire transfer details will be provided upon case acceptance.</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-gold text-navy-900 font-bold">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Questions About Fees?</h2>
          <p className="text-gold-300 mb-8 max-w-2xl mx-auto">Contact our secretariat for detailed fee calculations or fee reduction applications.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact/" className="px-6 py-3 bg-navy-800/20 text-gold-600 font-semibold rounded-lg hover:bg-navy-800/40 transition-colors">
              Contact Us
            </Link>
            <Link href="/tribunal/" className="px-6 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-navy-800/20/10 transition-colors">
              Tribunal Composition
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
