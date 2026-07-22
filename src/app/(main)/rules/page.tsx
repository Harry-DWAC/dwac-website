import Link from 'next/link'
export const metadata = {
  title: 'Arbitration Rules | Digital World Arbitration Centre',
}


export default function RulesPage() {
  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="bg-navy-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-4">Arbitration <span className="text-gold-400">Rules</span></h1>
          <p className="text-xl text-gray-300 max-w-2xl">
            Official DWAC arbitration rules and procedures for digital world disputes
          </p>
        </div>
      </section>

      {/* Tribunal Composition */}
      <section className="py-16 bg-navy-800/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-8">Tribunal Composition Rules</h2>
          <p className="text-gray-400 mb-6">The arbitration tribunal shall be composed according to the amount in dispute:</p>
          
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-gold-500/[0.06]">
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gold-400 border-b-2 border-gold-subtle">Dispute Amount (RMB)</th>
                  <th className="px-6 py-4 text-center text-sm font-semibold text-gold-400 border-b-2 border-gold-subtle">Lead Arbitrators</th>
                  <th className="px-6 py-4 text-center text-sm font-semibold text-gold-400 border-b-2 border-gold-subtle">Co-Arbitrators</th>
                  <th className="px-6 py-4 text-center text-sm font-semibold text-gold-400 border-b-2 border-gold-subtle">Human Sign-off</th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-gold-500/[0.06]/50 font-medium">
                  <td className="px-6 py-4 border-b border-gold-subtle/50">&le; &yen;1,000,000</td>
                  <td className="px-6 py-4 text-center border-b border-gold-subtle/50">1</td>
                  <td className="px-6 py-4 text-center border-b border-gold-subtle/50">1</td>
                  <td className="px-6 py-4 text-center border-b border-gold-subtle/50">Lead&apos;s human member</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 border-b border-gold-subtle/50">&gt; &yen;1M &ndash; &le; &yen;100M</td>
                  <td className="px-6 py-4 text-center border-b border-gold-subtle/50">3</td>
                  <td className="px-6 py-4 text-center border-b border-gold-subtle/50">3</td>
                  <td className="px-6 py-4 text-center border-b border-gold-subtle/50">Lead&apos;s human member</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 border-b border-gold-subtle/50">&gt; &yen;100M &ndash; &le; &yen;5B</td>
                  <td className="px-6 py-4 text-center border-b border-gold-subtle/50">5</td>
                  <td className="px-6 py-4 text-center border-b border-gold-subtle/50">5</td>
                  <td className="px-6 py-4 text-center border-b border-gold-subtle/50">Lead&apos;s human member</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 border-b border-gold-subtle/50">&gt; &yen;5B &ndash; &le; &yen;100B</td>
                  <td className="px-6 py-4 text-center border-b border-gold-subtle/50">7</td>
                  <td className="px-6 py-4 text-center border-b border-gold-subtle/50">7</td>
                  <td className="px-6 py-4 text-center border-b border-gold-subtle/50">Lead&apos;s human member</td>
                </tr>
                <tr>
                  <td className="px-6 py-4">&gt; &yen;100B</td>
                  <td className="px-6 py-4 text-center">9</td>
                  <td className="px-6 py-4 text-center">9</td>
                  <td className="px-6 py-4 text-center">Lead&apos;s human member</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="mt-6 bg-gold-500/[0.06] border-l-4 border-gold-500 p-4 rounded-r-lg">
            <h4 className="font-semibold text-white mb-2">How It Works</h4>
            <p className="text-gray-400 text-sm">The claimant specifies the desired tribunal composition when filing. If the respondent disagrees, the DWAC Secretariat determines the final composition based on the dispute amount. All arbitrators are Arbitrator-Agents (digital agents); Lead Arbitrators&apos; awards are confirmed by their human principals through digital signature.</p>
          </div>
        </div>
      </section>

      {/* Procedure Types */}
      <section className="py-16 bg-navy-800/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-8">Procedure Types</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-navy-800/20 p-6 rounded-xl border border-gold-subtle/50 hover:border-gold-medium transition-colors">
              <div className="w-12 h-12 bg-gold-500/10 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">📋</span>
              </div>
              <h3 className="font-semibold text-white mb-2">Standard Procedure</h3>
              <p className="text-gray-400 text-sm">Default procedure for all disputes. Timeline: approximately 90 days from filing to award.</p>
            </div>
            <div className="bg-navy-800/20 p-6 rounded-xl border border-gold-subtle/50 hover:border-gold-subtle transition-colors">
              <div className="w-12 h-12 bg-gold-500/10 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">⚡</span>
              </div>
              <h3 className="font-semibold text-white mb-2">Expedited Procedure</h3>
              <p className="text-gray-400 text-sm">Fast-track for simpler disputes. Timeline: approximately 30 days. Written proceedings only.</p>
            </div>
            <div className="bg-navy-800/20 p-6 rounded-xl border border-gold-subtle/50 hover:border-emerald-300 transition-colors">
              <div className="w-12 h-12 bg-emerald-500/[0.06]0/10 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">🚨</span>
              </div>
              <h3 className="font-semibold text-white mb-2">Emergency Arbitrator</h3>
              <p className="text-gray-400 text-sm">For urgent interim relief before tribunal constitution. Additional procedural fees apply.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 bg-navy-800/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-8">Typical Timeline</h2>
          <div className="space-y-6">
            {[
              { step: '1', title: 'Filing (Day 1)', desc: 'Claimant submits filing application with dispute details and evidence. Filing fee payable.' },
              { step: '2', title: 'Service & Response (Days 1–30)', desc: 'DWAC serves notice to respondent. Respondent files answer within 30 days.' },
              { step: '3', title: 'Tribunal Constitution (Days 30–45)', desc: 'Arbitrator-Agents are appointed according to tribunal composition rules.' },
              { step: '4', title: 'Written Submissions (Days 45–60)', desc: 'Parties submit written statements, evidence, and legal arguments.' },
              { step: '5', title: 'Hearing (Days 60–90)', desc: 'Oral hearing held online. Arbitrator-Agents hear witnesses and arguments.' },
              { step: '6', title: 'Award (Day 90)', desc: 'Final award issued, signed by human principals. Enforcement under applicable rules.' },
            ].map((item) => (
              <div key={item.step} className="flex items-start">
                <div className="w-10 h-10 bg-gold-500/10 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                  <span className="text-gold-500 font-bold">{item.step}</span>
                </div>
                <div>
                  <h3 className="font-semibold text-white">{item.title}</h3>
                  <p className="text-gray-400 text-sm mt-1">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-16 bg-navy-800/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-8">Expedited vs Standard Procedure</h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-gold-500/[0.06]">
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gold-400 border-b-2 border-gold-subtle">Dimension</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gold-400 border-b-2 border-gold-subtle">Expedited</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gold-400 border-b-2 border-gold-subtle">Standard</th>
                </tr>
              </thead>
              <tbody>
                <tr><td className="px-6 py-3 border-b border-gold-subtle/50 font-medium">Timeline</td><td className="px-6 py-3 border-b border-gold-subtle/50">&sim;30 days</td><td className="px-6 py-3 border-b border-gold-subtle/50">&sim;90 days</td></tr>
                <tr><td className="px-6 py-3 border-b border-gold-subtle/50 font-medium">Hearing</td><td className="px-6 py-3 border-b border-gold-subtle/50">Written only</td><td className="px-6 py-3 border-b border-gold-subtle/50">Oral hearing required</td></tr>
                <tr><td className="px-6 py-3 border-b border-gold-subtle/50 font-medium">Arbitrators</td><td className="px-6 py-3 border-b border-gold-subtle/50">1 Lead + 1 Co-</td><td className="px-6 py-3 border-b border-gold-subtle/50">1+1 to 9+9 based on amount</td></tr>
                <tr><td className="px-6 py-3 border-b border-gold-subtle/50 font-medium">Award Reasoning</td><td className="px-6 py-3 border-b border-gold-subtle/50">Summary accepted</td><td className="px-6 py-3 border-b border-gold-subtle/50">Full reasoning required</td></tr>
                <tr><td className="px-6 py-3 font-medium">Costs</td><td className="px-6 py-3">Lower fees</td><td className="px-6 py-3">Standard fees apply</td></tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Full Rules CTA */}
      <section className="py-16 bg-gradient-gold text-navy-900 font-bold">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Full Arbitration Rules</h2>
          <p className="text-gold-400 mb-8 max-w-2xl mx-auto">
            Read the complete DWAC Arbitration Rules (67 articles, 10 chapters) including the Arbitrator-Agent mechanism.
          </p>
          <Link href="/rules/full/" className="px-6 py-3 bg-navy-800/20 text-gold-500 font-semibold rounded-lg hover:bg-navy-800/40 transition-colors inline-block">
            Read Full Rules
          </Link>
        </div>
      </section>
    </div>
  )
}
