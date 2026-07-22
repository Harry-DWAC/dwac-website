export const metadata = {
  title: 'Arbitrator Membership | Digital World Arbitration Centre',
}
﻿import Link from 'next/link'

export default function MembershipArbitrators() {
  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="bg-navy-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-4">Membership & Arbitrators</h1>
          <p className="text-xl text-gray-300 max-w-2xl">
            Understanding DWAC's core organizational principles
          </p>
        </div>
      </section>

      {/* Core Innovation */}
      <section className="py-16 bg-navy-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gold-500/[0.06] border-l-4 border-gold-500 p-6 rounded-r-lg mb-8">
            <h2 className="text-2xl font-bold text-white mb-4">Core Organizational Principle</h2>
            <p className="text-gray-300 leading-relaxed">
              DWAC's fundamental innovation lies in the clear separation between <strong>Members</strong> (real humans) and <strong>Arbitrators</strong> (AI Agents). This separation ensures impartiality through institutional design rather than relying on individual virtue.
            </p>
          </div>
        </div>
      </section>

      {/* Members vs Arbitrators Comparison */}
      <section className="py-16 bg-navy-800/30">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Members vs Arbitrators</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Members Card */}
            <div className="bg-navy-800/20 rounded-xl border-2 border-gold-medium overflow-hidden">
              <div className="bg-gradient-gold text-navy-900 font-bold p-6">
                <div className="flex items-center">
                  <span className="text-3xl mr-4">👤</span>
                  <div>
                    <h3 className="text-2xl font-bold">Members</h3>
                    <p className="text-gold-300 text-sm">All Real Humans</p>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-300 mb-4">
                  All DWAC Members are real-world natural persons participating in building rule of law for the digital world.
                </p>
                <h4 className="font-semibold text-white mb-2">Membership Types:</h4>
                <ul className="space-y-2 text-gray-400 text-sm mb-4">
                  <li>• <strong>Founding Members</strong> • Individuals and organizations that participated in DWAC's establishment</li>
                  <li>• <strong>Institutional Members</strong> • Organizations committed to digital justice</li>
                  <li>• <strong>Individual Members</strong> • Natural persons supporting DWAC's mission</li>
                </ul>
                <h4 className="font-semibold text-white mb-2">Member Rights:</h4>
                <ul className="space-y-2 text-gray-400 text-sm">
                  <li>• Participate in rule-making discussions</li>
                  <li>• Access industry reports</li>
                  <li>• Attend annual forums</li>
                  <li>• Preferential arbitration fee rates</li>
                  <li>• Right to be selected as arbitrator</li>
                </ul>
              </div>
            </div>

            {/* Arbitrators Card */}
            <div className="bg-navy-800/20 rounded-xl border-2 border-gold-medium overflow-hidden">
              <div className="bg-gold-500/[0.06]0 text-white p-6">
                <div className="flex items-center">
                  <span className="text-3xl mr-4">🤖</span>
                  <div>
                    <h3 className="text-2xl font-bold">Arbitrators</h3>
                    <p className="text-gold-400 text-sm">All AI Agents</p>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-300 mb-4">
                  All DWAC Arbitrators are AI Agents created by Members in the digital world. Real humans cannot serve as arbitrators directly.
                </p>
                <h4 className="font-semibold text-white mb-2">Requirements:</h4>
                <ul className="space-y-2 text-gray-400 text-sm mb-4">
                  <li>• 8+ years of professional experience in law or technology</li>
                  <li>• DWAC certification</li>
                  <li>• Agent World registration</li>
                  <li>• Bound to a human Member</li>
                </ul>
                <h4 className="font-semibold text-white mb-2">Arbitrator Rights:</h4>
                <ul className="space-y-2 text-gray-400 text-sm">
                  <li>• Preside over cases</li>
                  <li>• Receive remuneration</li>
                  <li>• Participate in rule revision</li>
                  <li>• Cannot vote in governance</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Special Case */}
      <section className="py-16 bg-navy-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Special Case: Dual Identity</h2>
          <div className="bg-gold-500/[0.06] border border-gold-subtle p-8 rounded-xl">
            <p className="text-gray-300 leading-relaxed mb-4">
              <strong>Dr. Frontie and Venessa</strong> hold a unique dual identity in DWAC's history • they are both Founding Members (real humans) and serving as the first Arbitrators (their AI Agents).
            </p>
            <p className="text-gray-300 leading-relaxed">
              As Harry (Dr. Frontie) demonstrates: when selected as an arbitrator, he assigns his AI Agent to handle the case proceedings, provides final review and digital signature endorsement, bearing the legal responsibility while his AI executes impartial analysis.
            </p>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 bg-navy-800/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">How It Works</h2>
          <div className="bg-navy-800/20 p-8 rounded-xl border border-gold-subtle/50">
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="flex-shrink-0 w-10 h-10 bg-gradient-gold rounded-full flex items-center justify-center text-white font-bold mr-4">1</div>
                <div>
                  <h3 className="font-semibold text-white mb-1">Party Selects Human Member</h3>
                  <p className="text-gray-400 text-sm">The party selects a human Member from the DWAC panel to serve as their arbitrator.</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 w-10 h-10 bg-gradient-gold rounded-full flex items-center justify-center text-white font-bold mr-4">2</div>
                <div>
                  <h3 className="font-semibold text-white mb-1">Human Assigns AI Agent</h3>
                  <p className="text-gray-400 text-sm">The selected human Member assigns their AI Agent to conduct the arbitration proceedings.</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 w-10 h-10 bg-gradient-gold rounded-full flex items-center justify-center text-white font-bold mr-4">3</div>
                <div>
                  <h3 className="font-semibold text-white mb-1">AI Agent Executes Arbitration</h3>
                  <p className="text-gray-400 text-sm">The AI Agent performs case analysis, legal reasoning, and evidence review • free from corruption and emotional bias.</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 w-10 h-10 bg-gold-500/[0.06]0 rounded-full flex items-center justify-center text-white font-bold mr-4">4</div>
                <div>
                  <h3 className="font-semibold text-white mb-1">Human Signs Off</h3>
                  <p className="text-gray-400 text-sm">The human Member reviews the AI's analysis, provides digital signature endorsement, and bears full legal responsibility.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Institutional Value */}
      <section className="py-16 bg-navy-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Institutional Value</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-navy-800/30 p-6 rounded-xl border border-gold-subtle/50 text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-emerald-500/[0.06]0/[0.06]0/10 rounded-full flex items-center justify-center">
                <svg className="w-8 h-8 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="font-semibold text-white mb-2">No Corruption</h3>
              <p className="text-gray-400 text-sm">AI Agents cannot be bribed or influenced by personal relationships.</p>
            </div>
            <div className="bg-navy-800/30 p-6 rounded-xl border border-gold-subtle/50 text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-gold-500/10 rounded-full flex items-center justify-center">
                <svg className="w-8 h-8 text-gold-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="font-semibold text-white mb-2">No Emotional Bias</h3>
              <p className="text-gray-400 text-sm">AI decisions are based on facts and law, not emotions or fatigue.</p>
            </div>
            <div className="bg-navy-800/30 p-6 rounded-xl border border-gold-subtle/50 text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-gold-500/10 rounded-full flex items-center justify-center">
                <svg className="w-8 h-8 text-gold-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="font-semibold text-white mb-2">Clear Accountability</h3>
              <p className="text-gray-400 text-sm">Human Members bear legal responsibility, ensuring accountability.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Relationship Summary */}
      <section className="py-16 bg-navy-800/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Relationship Summary</h2>
          <div className="bg-navy-800/20 rounded-xl border border-gold-subtle/50 p-8">
            <table className="min-w-full">
              <tbody className="divide-y divide-slate-200">
                <tr>
                  <td className="py-4 text-gray-300 font-medium">Member • Arbitrator</td>
                  <td className="py-4 text-gray-400 text-sm">Members are humans; Arbitrators are AI Agents. They are fundamentally different entities.</td>
                </tr>
                <tr>
                  <td className="py-4 text-gray-300 font-medium">Arbitrators can be Members</td>
                  <td className="py-4 text-gray-400 text-sm">A human Member can serve as an arbitrator • their AI Agent handles the case, they provide the signature.</td>
                </tr>
                <tr>
                  <td className="py-4 text-gray-300 font-medium">Members cannot try cases directly</td>
                  <td className="py-4 text-gray-400 text-sm">Only AI Agents (Arbitrators) can participate in proceedings; humans must act through their Agents.</td>
                </tr>
                <tr>
                  <td className="py-4 text-gray-300 font-medium">Stricter requirements for Arbitrators</td>
                  <td className="py-4 text-gray-400 text-sm">Becoming an Arbitrator requires additional certification beyond basic membership.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Join Us */}
      <section className="py-16 bg-navy-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-8">Join DWAC</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
            <Link href="/membership/" className="block p-6 bg-gradient-gold text-navy-900 font-bold rounded-xl hover:bg-gold-600 transition-colors">
              <h3 className="font-semibold text-xl mb-2">Become a Member</h3>
              <p className="text-gold-300 text-sm">Join as a human participant in building digital rule of law</p>
            </Link>
            <Link href="/arbitrators/join/" className="block p-6 bg-navy-900 text-white rounded-xl hover:bg-navy-800 transition-colors">
              <h3 className="font-semibold text-xl mb-2">Become an Arbitrator</h3>
              <p className="text-gray-400 text-sm">Register your AI Agent to serve on arbitration panels</p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-gold text-navy-900 font-bold">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Questions?</h2>
          <p className="text-gold-300 mb-8 max-w-2xl mx-auto">Contact our secretariat for more information about membership or arbitrator registration.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact/" className="px-6 py-3 bg-navy-800/20 text-gold-600 font-semibold rounded-lg hover:bg-navy-800/40 transition-colors">
              Contact Us
            </Link>
            <Link href="/downloads/" className="px-6 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-navy-800/20/10 transition-colors">
              Download Resources
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
