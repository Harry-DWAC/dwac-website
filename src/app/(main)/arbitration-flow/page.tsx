import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Arbitration Process Flow | Digital World Arbitration Centre',
  description: 'Step-by-step guide to the DWAC arbitration process. From filing to enforcement, every step explained.',
}

export default function ArbitrationFlowPage() {
  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="bg-gradient-navy py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-serif text-3xl lg:text-5xl font-bold text-white mb-5">
            Arbitration <span className="text-gradient-gold">Process Flow</span>
          </h1>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
            A step-by-step guide to resolving your digital dispute through DWAC.
          </p>
        </div>
      </section>

      {/* Steps */}
      <section className="bg-white py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {[
              { num: '01', icon: '📝', title: 'File Your Dispute', bg: 'bg-slate-50',
                desc: 'Submit your dispute online through our AI-assisted filing system. Select the dispute type, provide party details, and upload supporting documents.',
                details: ['AI auto-classifies your dispute category', 'Smart form with auto-complete', 'Upload evidence securely', 'Receive case ID immediately'] },
              { num: '02', icon: '🤝', title: 'Tribunal Formation', bg: 'bg-white',
                desc: 'AI matches the best arbitrators for your case based on expertise, jurisdiction, and language. Both parties review and confirm the tribunal panel.',
                details: ['AI-powered arbitrator matching', 'Conflict-of-interest screening', 'Party approval of panel', 'Emergency arbitrator available in 48h'] },
              { num: '03', icon: '📋', title: 'Case Preparation', bg: 'bg-slate-50',
                desc: 'Exchange evidence and submissions through our secure digital platform. AI organizes and tags evidence for efficient review.',
                details: ['Digital evidence room', 'AI evidence categorization', 'Secure document exchange', 'Deadline management system'] },
              { num: '04', icon: '🎥', title: 'Virtual Hearing', bg: 'bg-white',
                desc: 'Attend hearings in our secure virtual courtroom. AI provides real-time transcription, translation, and evidence presentation.',
                details: ['24/7 scheduling across time zones', 'Real-time AI transcription', 'Cross-examination tools', 'Recording & archival'] },
              { num: '05', icon: '📜', title: 'Award & Decision', bg: 'bg-slate-50',
                desc: 'The arbitrator issues a final binding award. AI assists in drafting, but the human arbitrator makes all final decisions.',
                details: ['AI-assisted award drafting', 'Arbitrator review & modification', 'Digital signature & blockchain verification', 'Award delivered electronically'] },
              { num: '06', icon: '⚖️', title: 'Enforcement', bg: 'bg-white',
                desc: 'DWAC awards are enforceable under the New York Convention in 172 countries. Blockchain-verified awards facilitate international enforcement.',
                details: ['NY Convention coverage', 'Blockchain-verifiable award record', 'Enforcement assistance available', 'Appeal procedures where applicable'] },
            ].map((step, i) => (
              <div key={i} className={`${step.bg} rounded-xl p-8 border border-slate-200`}>
                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 bg-gold-500 rounded-full flex items-center justify-center text-navy-900 font-bold text-xl flex-shrink-0">{step.num}</div>
                  <div className="flex-1">
                    <h3 className="font-serif text-2xl font-bold text-navy-800 mb-2">
                      <span className="mr-2">{step.icon}</span>{step.title}
                    </h3>
                    <p className="text-gray-600 mb-4">{step.desc}</p>
                    <ul className="space-y-2">
                      {step.details.map((d, j) => (
                        <li key={j} className="flex items-start text-sm text-gray-500">
                          <span className="text-gold-500 mr-2">✓</span>{d}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="bg-gradient-navy py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-3xl font-bold text-white mb-8">Typical Timeline</h2>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { phase: 'Filing', time: '1–3 days', color: 'text-cyan-400' },
              { phase: 'Formation', time: '5–10 days', color: 'text-gold-400' },
              { phase: 'Hearing', time: '30–60 days', color: 'text-gold-400' },
              { phase: 'Award', time: '7–14 days', color: 'text-cyan-400' },
            ].map((t, i) => (
              <div key={i} className="bg-navy-800/60 rounded-lg p-6">
                <p className={`font-serif text-2xl font-bold ${t.color}`}>{t.time}</p>
                <p className="text-gray-400 mt-1">{t.phase}</p>
              </div>
            ))}
          </div>
          <p className="text-gray-400 mt-6">Total: 30–90 days (compared to 12–18 months at traditional institutions)</p>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-slate-50 py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="font-serif text-3xl font-bold text-slate-900 mb-6">Ready to Start Your Arbitration?</h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/dispute/" className="bg-gradient-gold text-navy-900 font-bold text-sm tracking-wide px-8 py-3 rounded-md hover:shadow-[0_0_30px_rgba(201,168,76,0.25)] hover:-translate-y-0.5 transition-all inline-block">
              File a Dispute
            </Link>
            <Link href="/digital-tribunal/" className="border border-slate-300 text-slate-700 font-semibold text-sm px-8 py-3 rounded-md hover:border-navy-900 hover:text-navy-900 transition-all inline-block">
              Digital Tribunal
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}