import Link from 'next/link'
export const metadata = {
  title: 'Digital Tribunal - DWAC',
}


export default function Tribunal() {
  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="bg-navy-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-4">Tribunal Composition</h1>
          <p className="text-xl text-gray-300 max-w-2xl">
            Understanding how DWAC forms arbitration tribunals with AI Agents
          </p>
        </div>
      </section>

      {/* Core Innovation */}
      <section className="py-16 bg-navy-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gold-500/[0.06] border-l-4 border-gold-500 p-6 rounded-r-lg mb-8">
            <h2 className="text-2xl font-bold text-white mb-4">Core Innovation: Arbitrator-Agent Mechanism</h2>
            <p className="text-gray-300 leading-relaxed">
              DWAC&apos;s arbitration tribunals consist of AI Agents (Arbitrator-Agents) and real human arbitrators working together. The AI Agents handle case analysis, legal reasoning, and award drafting; the real human arbitrators provide final review and digital signature endorsement, bearing full legal responsibility.
            </p>
          </div>
        </div>
      </section>

      {/* Tribunal Composition Table */}
      <section className="py-16 bg-navy-800/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Tribunal Composition by Dispute Amount</h2>
          <div className="bg-navy-800/20 rounded-xl border border-gold-subtle/50 overflow-hidden">
            <table className="min-w-full divide-y divide-slate-200">
              <thead className="bg-navy-800/30">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-white">Dispute Amount</th>
                  <th className="px-6 py-4 text-center text-sm font-semibold text-white">Presiding Arbitrators</th>
                  <th className="px-6 py-4 text-center text-sm font-semibold text-white">Co-Arbitrators</th>
                  <th className="px-6 py-4 text-center text-sm font-semibold text-white">Human Signature</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                <tr className="hover:bg-navy-800/30">
                  <td className="px-6 py-4 text-sm text-gray-300">&le; RMB 1,000,000</td>
                  <td className="px-6 py-4 text-center text-sm text-gray-300 font-medium">1 Agent</td>
                  <td className="px-6 py-4 text-center text-sm text-gray-300 font-medium">1 Agent</td>
                  <td className="px-6 py-4 text-center text-sm text-gray-400">Presiding Arbitrator&apos;s Human</td>
                </tr>
                <tr className="hover:bg-navy-800/30">
                  <td className="px-6 py-4 text-sm text-gray-300">&gt; RMB 1M to &le; RMB 100M</td>
                  <td className="px-6 py-4 text-center text-sm text-gray-300 font-medium">3 Agents</td>
                  <td className="px-6 py-4 text-center text-sm text-gray-300 font-medium">3 Agents</td>
                  <td className="px-6 py-4 text-center text-sm text-gray-400">Presiding Arbitrator&apos;s Human</td>
                </tr>
                <tr className="hover:bg-navy-800/30">
                  <td className="px-6 py-4 text-sm text-gray-300">&gt; RMB 100M to &le; RMB 5B</td>
                  <td className="px-6 py-4 text-center text-sm text-gray-300 font-medium">5 Agents</td>
                  <td className="px-6 py-4 text-center text-sm text-gray-300 font-medium">5 Agents</td>
                  <td className="px-6 py-4 text-center text-sm text-gray-400">Presiding Arbitrator&apos;s Human</td>
                </tr>
                <tr className="hover:bg-navy-800/30">
                  <td className="px-6 py-4 text-sm text-gray-300">&gt; RMB 5B to &le; RMB 100B</td>
                  <td className="px-6 py-4 text-center text-sm text-gray-300 font-medium">7 Agents</td>
                  <td className="px-6 py-4 text-center text-sm text-gray-300 font-medium">7 Agents</td>
                  <td className="px-6 py-4 text-center text-sm text-gray-400">Presiding Arbitrator&apos;s Human</td>
                </tr>
                <tr className="hover:bg-navy-800/30">
                  <td className="px-6 py-4 text-sm text-gray-300">&gt; RMB 100B</td>
                  <td className="px-6 py-4 text-center text-sm text-gray-300 font-medium">9 Agents</td>
                  <td className="px-6 py-4 text-center text-sm text-gray-300 font-medium">9 Agents</td>
                  <td className="px-6 py-4 text-center text-sm text-gray-400">Presiding Arbitrator&apos;s Human</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-gray-500 text-sm mt-4 text-center">
            Note: &quot;Above&quot; means exceeding the current threshold; &quot;within&quot; means including the threshold amount. M = million, B = billion.
          </p>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 bg-navy-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">How It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-navy-800/30 p-6 rounded-xl border border-gold-subtle/50">
              <div className="w-12 h-12 bg-gold-500/10 rounded-full flex items-center justify-center mb-4">
                <span className="text-2xl">🤖</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">AI Agent (Arbitrator-Agent)</h3>
              <ul className="text-gray-400 text-sm space-y-2">
                <li>• Receives and reviews case materials</li>
                <li>• Conducts legal research and analysis</li>
                <li>• Participates in tribunal deliberation</li>
                <li>• Drafts award and legal documents</li>
                <li>• Executes case management tasks</li>
              </ul>
            </div>
            <div className="bg-navy-800/30 p-6 rounded-xl border border-gold-subtle/50">
              <div className="w-12 h-12 bg-gold-500/10 rounded-full flex items-center justify-center mb-4">
                <span className="text-2xl">👤</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Human Arbitrator</h3>
              <ul className="text-gray-400 text-sm space-y-2">
                <li>• Final review of AI-drafted awards</li>
                <li>• Endorsement digital signature</li>
                <li>• Final decision on key matters</li>
                <li>• Bears full legal responsibility</li>
                <li>• Must be a DWAC Member</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Selection Process */}
      <section className="py-16 bg-navy-800/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Arbitrator Selection</h2>
          <div className="bg-navy-800/20 p-8 rounded-xl border border-gold-subtle/50">
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="flex-shrink-0 w-10 h-10 bg-gradient-gold rounded-full flex items-center justify-center text-white font-bold mr-4">1</div>
                <div>
                  <h3 className="font-semibold text-white mb-1">Select Real Human Arbitrator</h3>
                  <p className="text-gray-400 text-sm">Parties select a real human arbitrator from the DWAC panel. Each party selects one for three-member tribunals.</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 w-10 h-10 bg-gradient-gold rounded-full flex items-center justify-center text-white font-bold mr-4">2</div>
                <div>
                  <h3 className="font-semibold text-white mb-1">AI Agent Assignment</h3>
                  <p className="text-gray-400 text-sm">The selected human arbitrator assigns their registered AI Agent to handle the case proceedings.</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 w-10 h-10 bg-gradient-gold rounded-full flex items-center justify-center text-white font-bold mr-4">3</div>
                <div>
                  <h3 className="font-semibold text-white mb-1">AI Conducts Proceedings</h3>
                  <p className="text-gray-400 text-sm">The AI Agent analyzes evidence, conducts legal reasoning, and collaborates with other arbitrators&apos; Agents.</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 w-10 h-10 bg-gold-500/[0.06] rounded-full flex items-center justify-center text-white font-bold mr-4">4</div>
                <div>
                  <h3 className="font-semibold text-white mb-1">Human Endorsement</h3>
                  <p className="text-gray-400 text-sm">The human arbitrator reviews the AI-drafted award, provides endorsement digital signature, and bears legal responsibility.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Recusal */}
      <section className="py-16 bg-navy-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Recusal & Disclosure</h2>
          <div className="bg-navy-800/30 p-8 rounded-xl border border-gold-subtle/50">
            <p className="text-gray-300 leading-relaxed mb-4">
              Arbitrators (both human and AI Agents) shall disclose any circumstances likely to give rise to justifiable doubts as to their impartiality or independence.
            </p>
            <p className="text-gray-300 leading-relaxed mb-4">
              Parties may request recusal if circumstances exist that give rise to justifiable doubts. The DWAC Secretary General shall make the final decision on any challenge.
            </p>
            <p className="text-gray-300 leading-relaxed">
              All arbitrator conduct is recorded on the blockchain notarization system for transparency and accountability.
            </p>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 bg-navy-800/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Tribunal Formation Timeline</h2>
          <div className="bg-gold-500/[0.06] border border-gold-subtle p-8 rounded-xl">
            <div className="flex items-center justify-center">
              <div className="text-center">
                <div className="text-5xl font-bold text-gold-600 mb-2">7</div>
                <p className="text-gray-300 font-medium">Working Days</p>
                <p className="text-gray-500 text-sm mt-1">From receipt of complete application</p>
              </div>
            </div>
            <p className="text-center text-gray-400 mt-6 text-sm">
              DWAC shall constitute the tribunal within 7 working days of receiving the complete arbitration application.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-gold text-navy-900 font-bold">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Have Questions?</h2>
          <p className="text-gold-300 mb-8 max-w-2xl mx-auto">Our secretariat is available to assist with any questions about tribunal formation.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact/" className="px-6 py-3 bg-navy-800/20 text-gold-600 font-semibold rounded-lg hover:bg-navy-800/40 transition-colors">
              Contact Us
            </Link>
            <Link href="/fees/" className="px-6 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-navy-800/20/10 transition-colors">
              View Fee Schedule
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
