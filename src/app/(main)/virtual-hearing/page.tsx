import Link from 'next/link'
export const metadata = {
  title: 'Virtual Hearing | Digital World Arbitration Centre',
}


const features = [
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
      </svg>
    ),
    title: 'Live Video Hearing',
    description: 'Real-time video proceedings connecting all participants — claimants, respondents, arbitrators, and expert witnesses — in a secure virtual courtroom environment.',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
      </svg>
    ),
    title: 'Document Sharing',
    description: 'Secure evidence and document exchange with version control, access permissions, and a comprehensive audit trail. All submissions are encrypted and timestamped.',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h8m-8 6h16" />
      </svg>
    ),
    title: 'Real-time Transcription',
    description: 'Live text record of proceedings generated in real-time with multi-language support. Transcripts are searchable, exportable, and become part of the official case record.',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    title: 'Digital Signature',
    description: 'Secure electronic signing of awards, consent orders, and procedural documents. Compliant with international e-signature standards for legal validity.',
  },
]

const processSteps = [
  { number: '01', title: 'Filing', description: 'Submit case documents and evidence through the secure online portal.' },
  { number: '02', title: 'Scheduling', description: 'System schedules hearings and notifies all parties automatically.' },
  { number: '03', title: 'Hearing', description: 'Live video proceedings with real-time transcription and document sharing.' },
  { number: '04', title: 'Deliberation', description: 'Arbitrators deliberate using secure collaborative tools and case materials.' },
  { number: '05', title: 'Award', description: 'Signed award issued electronically with full legal enforceability.' },
]

export default function VirtualHearingPage() {
  return (
    <div className="flex flex-col">
      {/* ===== HERO — Dark ===== */}
      <section className="relative bg-gradient-navy py-20 lg:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-grid-gold opacity-20" />
        <div className="absolute top-20 right-1/3 w-64 h-64 bg-cyan-500/5 rounded-full blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 border border-cyan-400/30 rounded-full mb-8">
            <svg className="w-4 h-4 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            <span className="text-xs font-semibold tracking-[2px] uppercase text-cyan-400">
              Online Dispute Resolution
            </span>
          </div>
          <h1 className="font-serif text-3xl lg:text-5xl font-bold text-white mb-5">
            Virtual Hearing <span className="text-gradient-gold">Room</span>
          </h1>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
            A comprehensive online platform for conducting arbitration hearings — from initial filing to final award — entirely in a secure digital environment.
          </p>
        </div>
      </section>

      {/* ===== Features — Light ===== */}
      <section className="bg-slate-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-xs font-bold tracking-[3px] uppercase text-gold-600 mb-3 block">Platform</span>
            <h2 className="font-serif text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
              Hearing Capabilities
            </h2>
            <p className="text-slate-500 max-w-xl mx-auto">
              Enterprise-grade features designed for the demands of international arbitration proceedings.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, idx) => (
              <div
                key={idx}
                className="bg-white border border-slate-200 shadow-sm hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 rounded-xl p-8 group"
              >
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 bg-navy-900/5 rounded-xl flex items-center justify-center text-cyan-500 flex-shrink-0 group-hover:scale-105 transition-transform">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="font-serif text-lg font-bold text-slate-900 mb-2">{feature.title}</h3>
                    <div className="w-8 h-0.5 bg-gold-500 mb-3" />
                    <p className="text-sm text-slate-500 leading-relaxed">{feature.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== Process Flow — Dark ===== */}
      <section className="bg-gradient-navy py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-gold opacity-10" />
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-xs font-bold tracking-[3px] uppercase text-gold-500 mb-3 block">Process</span>
            <h2 className="font-serif text-3xl lg:text-4xl font-bold text-white mb-4">
              How It Works
            </h2>
            <p className="text-slate-400 max-w-xl mx-auto">
              Five streamlined steps from case initiation to award issuance.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-5 gap-4">
            {processSteps.map((step, idx) => (
              <div key={idx} className="text-center group">
                <div className="relative mx-auto mb-4">
                  <div className="w-14 h-14 bg-navy-800 border-2 border-gold-500/30 rounded-full flex items-center justify-center mx-auto group-hover:border-gold-500 group-hover:bg-gold-500/10 transition-all">
                    <span className="font-serif text-lg font-bold text-gold-400">{step.number}</span>
                  </div>
                  {idx < processSteps.length - 1 && (
                    <div className="hidden sm:block absolute top-1/2 left-full w-full h-px bg-gradient-to-r from-gold-500/30 to-transparent -translate-y-1/2" />
                  )}
                </div>
                <h3 className="font-serif text-sm font-bold text-white mb-1">{step.title}</h3>
                <p className="text-xs text-slate-400 leading-relaxed px-2">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== Security — Light ===== */}
      <section className="bg-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <span className="text-xs font-bold tracking-[3px] uppercase text-gold-600 mb-3 block">Trust</span>
            <h2 className="font-serif text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
              Security & Compliance
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: '🔒', title: 'End-to-End Encryption', desc: 'All communications and documents are encrypted in transit and at rest.' },
              { icon: '📋', title: 'GDPR Compliant', desc: 'Full compliance with international data protection regulations.' },
              { icon: '🌐', title: 'Multi-Jurisdiction', desc: 'Adheres to arbitration laws across major jurisdictions worldwide.' },
              { icon: '📊', title: 'Audit Trail', desc: 'Complete logging of all actions and access for transparency.' },
              { icon: '🛡️', title: 'Data Residency', desc: 'Configurable data storage locations to meet local requirements.' },
              { icon: '⚡', title: '99.9% Uptime', desc: 'Enterprise-grade infrastructure with redundant failover systems.' },
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-slate-50 border border-slate-200 rounded-xl p-5 hover:shadow-md transition-all"
              >
                <div className="text-2xl mb-3">{item.icon}</div>
                <h3 className="font-serif text-sm font-bold text-slate-900 mb-1">{item.title}</h3>
                <p className="text-xs text-slate-500 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== Coming Soon — Dark ===== */}
      <section className="bg-gradient-navy py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-navy-800/60 border border-cyan-400/20 rounded-2xl p-8 lg:p-12 text-center relative overflow-hidden">
            <div className="absolute -top-24 -right-24 w-48 h-48 bg-cyan-500/5 rounded-full blur-3xl" />
            <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-gold-500/5 rounded-full blur-3xl" />

            <div className="relative">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 border border-cyan-400/30 rounded-full mb-6">
                <span className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse" />
                <span className="text-xs font-semibold tracking-[2px] uppercase text-cyan-400">Coming Soon</span>
              </div>
              <h2 className="font-serif text-3xl lg:text-4xl font-bold text-white mb-4">
                Virtual Hearing Room — Launching 2026 Q3
              </h2>
              <p className="text-slate-400 max-w-lg mx-auto mb-8 leading-relaxed">
                We are developing a state-of-the-art virtual hearing platform. Be among the first to experience the future of online arbitration.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact/"
                  className="bg-gradient-gold text-navy-900 font-bold text-sm tracking-wide px-8 py-3 rounded-md hover:shadow-[0_0_30px_rgba(201,168,76,0.25)] hover:-translate-y-0.5 transition-all inline-block"
                >
                  Request Early Access
                </Link>
                <Link
                  href="/resources/"
                  className="border border-gold-500/30 text-gold-400 font-semibold text-sm px-8 py-3 rounded-md hover:border-gold-500 hover:bg-gold-500/5 transition-all inline-block"
                >
                  View Resources
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
