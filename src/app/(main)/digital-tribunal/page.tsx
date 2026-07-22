import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Digital Tribunal | Digital World Arbitration Centre',
  description: 'Experience AI-powered digital arbitration: from case filing to award issuance, every step is transparent, efficient, and fully digitized.',
}

export default function DigitalTribunalPage() {
  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="relative bg-gradient-navy py-20 lg:py-28 overflow-hidden">
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-blue-500 rounded-full filter blur-3xl opacity-5 animate-pulse" />
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-gold-400 rounded-full filter blur-3xl opacity-5" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-block bg-gold-500/20 border border-gold-500/40 text-gold-400 text-sm font-semibold px-4 py-1.5 rounded-full mb-8">
            🔮 Next-Generation Dispute Resolution
          </div>
          <h1 className="font-serif text-5xl md:text-7xl font-bold mb-6 tracking-tight text-white">
            Digital Tribunal
          </h1>
          <p className="text-xl md:text-2xl text-gold-400 mb-4 font-serif italic">
            &ldquo;Justice delayed is justice denied — no matter the distance&rdquo;
          </p>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto mb-12 leading-relaxed">
            DWAC&apos;s Digital Tribunal combines <span className="text-gold-400 font-semibold">AI Agent intelligence</span> with{' '}
            <span className="text-gold-400 font-semibold">human arbitrator expertise</span> to deliver a fully digitized, transparent, and efficient arbitration process — from filing to enforcement.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/dispute" className="bg-gold-500 hover:bg-gold-600 text-navy-900 font-bold py-3.5 px-8 rounded-lg transition-all hover:scale-105 shadow-lg shadow-gold-500/25">
              Apply for Arbitration
            </Link>
            <a href="#process" className="border-2 border-gold-500 text-gold-400 hover:bg-gold-500 hover:text-navy-900 font-bold py-3.5 px-8 rounded-lg transition-all">
              Explore the Process
            </a>
          </div>
          <div className="mt-16 flex flex-wrap justify-center gap-8 text-sm text-gray-400">
            <div className="flex items-center gap-2"><span className="text-gold-500">🔒</span> End-to-End Encrypted</div>
            <div className="flex items-center gap-2"><span className="text-gold-500">⛓️</span> Blockchain-Verifiable</div>
            <div className="flex items-center gap-2"><span className="text-gold-500">🌍</span> Cross-Border Enforcement</div>
            <div className="flex items-center gap-2"><span className="text-gold-500">⚡</span> AI-Assisted Analysis</div>
          </div>
        </div>
      </section>

      {/* Four Steps */}
      <section id="process" className="py-20 md:py-28 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="text-gold-500 font-semibold text-sm uppercase tracking-wider mb-3">How It Works</div>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-navy-900 mb-4">Four Steps to Resolution</h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">From case filing to final award, every step is digitized, transparent, and powered by AI assistance.</p>
          </div>
          <div className="grid md:grid-cols-4 gap-8 relative">
            {[
              { num: '01', icon: '📝', title: 'Case Filing', sub: 'AI-Assisted Submission', desc: 'Submit your dispute online. AI automatically classifies the case type, extracts key claims, and generates a preliminary case summary for the tribunal.', items: ['Smart form with auto-complete', 'AI classifies dispute category', 'Automatic evidence checklist', 'Real-time filing status tracking'] },
              { num: '02', icon: '⚖️', title: 'Tribunal Formation', sub: 'Intelligent Arbitrator Matching', desc: 'AI recommends the most suitable arbitrators based on case type, jurisdiction, expertise, and language preferences. Parties confirm the panel.', items: ['AI-powered arbitrator matching', 'Expertise & jurisdiction filters', 'Conflict-of-interest checks', 'Party approval process'] },
              { num: '03', icon: '🎥', title: 'Virtual Hearing', sub: 'Secure Digital Courtroom', desc: 'Conduct hearings in a secure online room with real-time AI transcription, evidence presentation, and cross-examination — available 24/7 across time zones.', items: ['Real-time AI transcription', 'Digital evidence presentation', 'Cross-examination tools', 'Time-zone friendly scheduling'] },
              { num: '04', icon: '📜', title: 'Award Issuance', sub: 'AI-Drafted, Human-Reviewed', desc: 'AI assists in drafting the award based on hearing records and applicable law. The arbitrator reviews, modifies, and issues the final binding award.', items: ['AI-assisted award drafting', 'Legal precedent analysis', 'Arbitrator review & approval', 'Digital signature & enforcement'] },
            ].map((step) => (
              <div key={step.num} className="group relative">
                <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-gold-300 h-full flex flex-col">
                  <div className="w-14 h-14 bg-gold-500 rounded-full flex items-center justify-center text-navy-900 font-bold text-lg mb-4 mx-auto group-hover:scale-110 transition-transform">{step.num}</div>
                  <div className="text-3xl mb-3 text-center">{step.icon}</div>
                  <h3 className="text-xl font-bold text-navy-900 mb-1 text-center">{step.title}</h3>
                  <p className="text-gold-600 text-sm font-medium mb-3 text-center">{step.sub}</p>
                  <p className="text-gray-600 text-sm mb-4 leading-relaxed flex-grow">{step.desc}</p>
                  <ul className="space-y-1.5 border-t border-gray-100 pt-4">
                    {step.items.map((item, i) => (
                      <li key={i} className="flex items-start text-xs text-gray-500">
                        <span className="text-gold-500 mr-2 mt-0.5">✓</span>{item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AI vs Human */}
      <section className="py-20 md:py-28 px-4 bg-navy-900 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="text-gold-400 font-semibold text-sm uppercase tracking-wider mb-3">AI-Human Collaboration</div>
            <h2 className="font-serif text-4xl md:text-5xl font-bold mb-4">AI Assists. Humans Decide.</h2>
            <p className="text-gray-300 max-w-2xl mx-auto text-lg">AI handles the heavy lifting — analysis, drafting, transcription — while human arbitrators make the final decisions.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="bg-navy-800 p-8 rounded-2xl border border-navy-700">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-blue-500/20 rounded-lg flex items-center justify-center text-xl">🤖</div>
                <h3 className="text-xl font-bold text-blue-400">AI Agent Handles</h3>
              </div>
              <ul className="space-y-3">
                {['Case classification & routing', 'Evidence organization & tagging', 'Real-time transcription & translation', 'Legal precedent research', 'Award draft generation', 'Compliance checks'].map((item, i) => (
                  <li key={i} className="flex items-start text-gray-300"><span className="text-blue-400 mr-3 mt-0.5">▸</span>{item}</li>
                ))}
              </ul>
            </div>
            <div className="bg-navy-800 p-8 rounded-2xl border border-gold-500/30">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-gold-500/20 rounded-lg flex items-center justify-center text-xl">👨‍⚖️</div>
                <h3 className="text-xl font-bold text-gold-400">Human Arbitrator Decides</h3>
              </div>
              <ul className="space-y-3">
                {['Arbitrator panel selection', 'Procedural rulings', 'Evidence admissibility decisions', 'Witness & expert assessment', 'Legal interpretation & reasoning', 'Final award approval & issuance'].map((item, i) => (
                  <li key={i} className="flex items-start text-gray-300"><span className="text-gold-400 mr-3 mt-0.5">▸</span>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-20 md:py-28 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="text-gold-500 font-semibold text-sm uppercase tracking-wider mb-3">The DWAC Advantage</div>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-navy-900 mb-4">Why Digital Arbitration?</h2>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full max-w-5xl mx-auto border-collapse rounded-2xl overflow-hidden shadow-lg">
              <thead>
                <tr>
                  <th className="p-5 text-left bg-gray-100 text-navy-900 font-bold text-lg">Criteria</th>
                  <th className="p-5 text-left bg-gray-100 text-gray-600 font-semibold text-lg">Traditional</th>
                  <th className="p-5 text-left bg-gold-500 text-navy-900 font-bold text-lg">DWAC Digital ✦</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['Duration', '6–18 months', '3–6 months'],
                  ['Cost', '$50,000+', '$10,000–30,000'],
                  ['Transparency', 'Low — limited access', 'High — full audit trail'],
                  ['Accessibility', 'Business hours, physical venue', '24/7 online, global'],
                  ['AI Assistance', 'No', 'Yes — analysis, drafting, transcription'],
                  ['Evidence Mgmt', 'Manual document handling', 'AI-tagged digital evidence room'],
                  ['Enforcement', 'Depends on jurisdiction', 'Blockchain-verifiable awards'],
                  ['Language', 'Single language proceedings', 'AI real-time translation'],
                ].map(([criteria, trad, dwac], i) => (
                  <tr key={i} className={i % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                    <td className="p-4 font-bold text-navy-900 border-b border-gray-100">{criteria}</td>
                    <td className="p-4 text-gray-500 border-b border-gray-100">{trad}</td>
                    <td className="p-4 text-gold-700 font-semibold border-b border-gray-100 bg-gold-50/50">{dwac}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-28 px-4 bg-gradient-to-br from-navy-900 via-navy-800 to-navy-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-5"><div className="absolute top-0 right-0 w-96 h-96 bg-gold-500 rounded-full filter blur-3xl" /></div>
        <div className="relative max-w-4xl mx-auto text-center">
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6">Ready to Experience Next-Gen Dispute Resolution?</h2>
          <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed">
            Join DWAC and let AI + human expertise resolve your disputes efficiently, transparently, and fairly — from anywhere in the world.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Link href="/dispute" className="bg-gold-500 hover:bg-gold-600 text-navy-900 font-bold py-4 px-10 rounded-lg transition-all hover:scale-105 shadow-lg shadow-gold-500/25 text-lg">
              Apply for Arbitration
            </Link>
            <Link href="/contact" className="border-2 border-gray-600 text-gray-300 hover:border-gold-500 hover:text-gold-400 font-bold py-4 px-10 rounded-lg transition-colors text-lg">
              Contact Us
            </Link>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
            {[
              { val: '3–6', label: 'Months Average' },
              { val: '55%+', label: 'Cost Savings' },
              { val: '24/7', label: 'Online Access' },
              { val: '150+', label: 'Jurisdictions' },
            ].map((s, i) => (
              <div key={i} className="text-center">
                <div className="text-3xl font-bold text-gold-400 mb-1">{s.val}</div>
                <div className="text-xs text-gray-400 uppercase tracking-wider">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
