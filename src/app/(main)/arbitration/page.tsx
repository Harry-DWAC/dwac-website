import Link from 'next/link'
export const metadata = {
  title: 'Arbitration | Digital World Arbitration Centre',
}


export default function Arbitration() {
  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="bg-gradient-navy text-white pt-[120px] pb-16 lg:pt-[140px] lg:pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <span className="text-xs font-bold tracking-[3px] uppercase text-gold-500 mb-3 block">Professional Dispute Resolution</span>
          <h1 className="font-serif text-4xl lg:text-5xl font-bold mb-6">Arbitration Services</h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
            DWAC provides efficient, professional, and globally enforceable arbitration for disputes arising in the digital world.
          </p>
        </div>
      </section>

      {/* Why Arbitration */}
      <section className="py-20 lg:py-28 px-4 sm:px-6 lg:px-8 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-xs font-bold tracking-[3px] uppercase text-gold-600 mb-3 block">Why Choose DWAC</span>
            <h2 className="font-serif text-3xl lg:text-4xl font-bold text-slate-900 mb-4">The DWAC Advantage</h2>
            <p className="text-slate-500 max-w-xl mx-auto">
              Specialized expertise for the digital age, with the enforceability of traditional arbitration.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="group text-center p-8 rounded-xl bg-white border border-slate-200 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
              <div className="w-16 h-16 mx-auto mb-6 bg-cyan-50 rounded-xl flex items-center justify-center group-hover:bg-cyan-100 transition-colors">
                <svg className="w-8 h-8 text-cyan-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="font-serif text-xl font-bold text-slate-900 mb-3">Globally Enforceable</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Awards enforceable in 172 countries under the New York Convention, with specialized cross-border mechanisms.
              </p>
            </div>

            <div className="group text-center p-8 rounded-xl bg-white border border-slate-200 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
              <div className="w-16 h-16 mx-auto mb-6 bg-amber-50 rounded-xl flex items-center justify-center group-hover:bg-amber-100 transition-colors">
                <svg className="w-8 h-8 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-serif text-xl font-bold text-slate-900 mb-3">Fast & Efficient</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Default 90-day resolution. Simplified procedure for straightforward cases: just 30 days. Fully online proceedings.
              </p>
            </div>

            <div className="group text-center p-8 rounded-xl bg-white border border-slate-200 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
              <div className="w-16 h-16 mx-auto mb-6 bg-emerald-50 rounded-xl flex items-center justify-center group-hover:bg-emerald-100 transition-colors">
                <svg className="w-8 h-8 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-.75M2 13h2" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 2a10 10 0 0118 8 4 4 0 00-16 0z" />
                </svg>
              </div>
              <h3 className="font-serif text-xl font-bold text-slate-900 mb-3">AI-Powered</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Innovative Arbitrator-Agent mechanism combines AI efficiency with human expertise and accountability.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What We Handle */}
      <section className="py-20 lg:py-28 px-4 sm:px-6 lg:px-8 bg-navy-900">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-xs font-bold tracking-[3px] uppercase text-gold-500 mb-3 block">Our Expertise</span>
            <h2 className="font-serif text-3xl lg:text-4xl font-bold text-white mb-4">What We Handle</h2>
            <p className="text-slate-400 max-w-xl mx-auto">
              DWAC specializes in disputes unique to the digital world
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            <div className="group p-5 rounded-xl border border-gold-subtle/30 bg-navy-800/30 hover:bg-navy-800/50 transition-all duration-300">
              <h3 className="font-semibold text-white text-sm mb-2">Smart Contracts</h3>
              <p className="text-slate-400 text-xs">Performance & execution disputes</p>
            </div>
            <div className="group p-5 rounded-xl border border-gold-subtle/30 bg-navy-800/30 hover:bg-navy-800/50 transition-all duration-300">
              <h3 className="font-semibold text-white text-sm mb-2">AI Agent Liability</h3>
              <p className="text-slate-400 text-xs">Autonomous system decisions</p>
            </div>
            <div className="group p-5 rounded-xl border border-gold-subtle/30 bg-navy-800/30 hover:bg-navy-800/50 transition-all duration-300">
              <h3 className="font-semibold text-white text-sm mb-2">Digital Assets</h3>
              <p className="text-slate-400 text-xs">NFTs, tokens, virtual property</p>
            </div>
            <div className="group p-5 rounded-xl border border-gold-subtle/30 bg-navy-800/30 hover:bg-navy-800/50 transition-all duration-300">
              <h3 className="font-semibold text-white text-sm mb-2">Data Compliance</h3>
              <p className="text-slate-400 text-xs">Cross-border data disputes</p>
            </div>
            <div className="group p-5 rounded-xl border border-gold-subtle/30 bg-navy-800/30 hover:bg-navy-800/50 transition-all duration-300">
              <h3 className="font-semibold text-white text-sm mb-2">E-Commerce</h3>
              <p className="text-slate-400 text-xs">Platform liability & account bans</p>
            </div>
            <div className="group p-5 rounded-xl border border-gold-subtle/30 bg-navy-800/30 hover:bg-navy-800/50 transition-all duration-300">
              <h3 className="font-semibold text-white text-sm mb-2">Domain & IP</h3>
              <p className="text-slate-400 text-xs">Digital intellectual property</p>
            </div>
            <div className="group p-5 rounded-xl border border-gold-subtle/30 bg-navy-800/30 hover:bg-navy-800/50 transition-all duration-300">
              <h3 className="font-semibold text-white text-sm mb-2">Cybersecurity</h3>
              <p className="text-slate-400 text-xs">Data breach liability</p>
            </div>
            <div className="group p-5 rounded-xl border border-gold-subtle/30 bg-navy-800/30 hover:bg-navy-800/50 transition-all duration-300">
              <h3 className="font-semibold text-white text-sm mb-2">Digital Payments</h3>
              <p className="text-slate-400 text-xs">Cross-border payment disputes</p>
            </div>
          </div>
        </div>
      </section>

      {/* The Process */}
      <section className="py-20 lg:py-28 px-4 sm:px-6 lg:px-8 bg-slate-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-xs font-bold tracking-[3px] uppercase text-gold-600 mb-3 block">How It Works</span>
            <h2 className="font-serif text-3xl lg:text-4xl font-bold text-slate-900 mb-4">The Arbitration Process</h2>
          </div>

          <div className="space-y-6">
            <div className="flex items-start gap-4 p-6 bg-white rounded-xl border border-slate-200">
              <div className="flex-shrink-0 w-10 h-10 bg-gradient-gold rounded-full flex items-center justify-center text-navy-900 font-bold">1</div>
              <div>
                <h3 className="font-semibold text-slate-900 mb-1">Submit Request</h3>
                <p className="text-slate-500 text-sm">File your arbitration application with supporting documentation through our contact form or email.</p>
              </div>
            </div>
            <div className="flex items-start gap-4 p-6 bg-white rounded-xl border border-slate-200">
              <div className="flex-shrink-0 w-10 h-10 bg-gradient-gold rounded-full flex items-center justify-center text-navy-900 font-bold">2</div>
              <div>
                <h3 className="font-semibold text-slate-900 mb-1">Tribunal Formation</h3>
                <p className="text-slate-500 text-sm">DWAC constitutes the tribunal within 7 working days, assigning Arbitrator-Agents and human arbitrators.</p>
              </div>
            </div>
            <div className="flex items-start gap-4 p-6 bg-white rounded-xl border border-slate-200">
              <div className="flex-shrink-0 w-10 h-10 bg-gradient-gold rounded-full flex items-center justify-center text-navy-900 font-bold">3</div>
              <div>
                <h3 className="font-semibold text-slate-900 mb-1">Proceedings</h3>
                <p className="text-slate-500 text-sm">AI Agents analyze evidence, conduct legal research, and draft documents. Human arbitrators provide oversight.</p>
              </div>
            </div>
            <div className="flex items-start gap-4 p-6 bg-white rounded-xl border border-slate-200">
              <div className="flex-shrink-0 w-10 h-10 bg-gradient-gold rounded-full flex items-center justify-center text-navy-900 font-bold">4</div>
              <div>
                <h3 className="font-semibold text-slate-900 mb-1">Award & Enforcement</h3>
                <p className="text-slate-500 text-sm">Human arbitrator reviews and signs the award. Enforceable in 172 countries under the New York Convention.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="border-y border-gold-subtle bg-navy-950">
        <div className="max-w-5xl mx-auto grid grid-cols-2 lg:grid-cols-4 divide-x divide-gold-subtle/30">
          <div className="py-10 px-6 text-center">
            <div className="font-serif text-3xl lg:text-4xl font-bold text-gold-400 mb-1">172</div>
            <div className="text-xs font-semibold tracking-[1.5px] uppercase text-slate-400">Countries Enforceable</div>
          </div>
          <div className="py-10 px-6 text-center">
            <div className="font-serif text-3xl lg:text-4xl font-bold text-gold-400 mb-1">90</div>
            <div className="text-xs font-semibold tracking-[1.5px] uppercase text-slate-400">Days Default Resolution</div>
          </div>
          <div className="py-10 px-6 text-center">
            <div className="font-serif text-3xl lg:text-4xl font-bold text-cyan-400 mb-1">100%</div>
            <div className="text-xs font-semibold tracking-[1.5px] uppercase text-slate-400">Online Proceedings</div>
          </div>
          <div className="py-10 px-6 text-center">
            <div className="font-serif text-3xl lg:text-4xl font-bold text-gold-400 mb-1">50%</div>
            <div className="text-xs font-semibold tracking-[1.5px] uppercase text-slate-400">Of CIETAC Rates</div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 lg:py-28 px-4 sm:px-6 lg:px-8 bg-gradient-navy">
        <div className="max-w-3xl mx-auto text-center">
          <div className="relative p-12 lg:p-16 rounded-xl border border-gold-subtle bg-navy-800/30">
            <h2 className="font-serif text-3xl lg:text-4xl font-bold text-white mb-4">Ready to Begin?</h2>
            <p className="text-slate-400 mb-8 max-w-lg mx-auto leading-relaxed">
              Whether you need to resolve a dispute or want to learn more about our services, we&apos;re here to help.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact/" className="px-8 py-3.5 bg-gradient-gold text-navy-900 font-bold text-sm tracking-wide rounded-md hover:shadow-[0_0_30px_rgba(201,168,76,0.25)] hover:-translate-y-0.5 transition-all">
                FILE A DISPUTE
              </Link>
              <Link href="/rules/" className="px-8 py-3.5 border border-gold-500/30 text-gold-400 font-semibold text-sm tracking-wide rounded-md hover:bg-gold-500/[0.05] hover:border-gold-500/50 transition-all">
                VIEW RULES
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
