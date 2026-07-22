import Link from "next/link"
export const metadata = {
  title: 'Services | Digital World Arbitration Centre',
}


export default function Services() {
  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="bg-gradient-navy text-white pt-[120px] pb-16 lg:pt-[140px] lg:pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <span className="text-xs font-bold tracking-[3px] uppercase text-gold-500 mb-3 block">Comprehensive Solutions</span>
          <h1 className="font-serif text-4xl lg:text-5xl font-bold mb-6">Our Services</h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
            From arbitration to mediation, DWAC provides a full spectrum of dispute resolution services tailored for the digital world.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 lg:py-28 px-4 sm:px-6 lg:px-8 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-xs font-bold tracking-[3px] uppercase text-gold-600 mb-3 block">What We Offer</span>
            <h2 className="font-serif text-3xl lg:text-4xl font-bold text-slate-900 mb-4">Dispute Resolution Services</h2>
            <p className="text-slate-500 max-w-xl mx-auto">
              Professional, efficient, and enforceable resolution for all types of digital world disputes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Online Arbitration */}
            <div className="group p-8 rounded-xl bg-white border border-slate-200 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
              <div className="w-14 h-14 mb-6 bg-cyan-50 rounded-xl flex items-center justify-center group-hover:bg-cyan-100 transition-colors">
                <svg className="w-7 h-7 text-cyan-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="font-serif text-xl font-bold text-slate-900 mb-3">Online Arbitration</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-4">
                Fully online arbitration proceedings with globally enforceable awards under the New York Convention. Default 90-day resolution with simplified 30-day procedure for straightforward cases.
              </p>
              <Link href="/dispute/" className="text-cyan-600 text-sm font-semibold hover:text-cyan-700">File a Dispute &rarr;</Link>
            </div>

            {/* Mediation */}
            <div className="group p-8 rounded-xl bg-white border border-slate-200 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
              <div className="w-14 h-14 mb-6 bg-emerald-50 rounded-xl flex items-center justify-center group-hover:bg-emerald-100 transition-colors">
                <svg className="w-7 h-7 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="font-serif text-xl font-bold text-slate-900 mb-3">Mediation Services</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-4">
                Facilitated negotiation with experienced mediators specializing in digital world disputes. Voluntary, confidential, and flexible — preserving business relationships while reaching amicable solutions.
              </p>
              <Link href="/contact/" className="text-emerald-600 text-sm font-semibold hover:text-emerald-700">Request Mediation &rarr;</Link>
            </div>

            {/* Emergency Arbitrator */}
            <div className="group p-8 rounded-xl bg-white border border-slate-200 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
              <div className="w-14 h-14 mb-6 bg-amber-50 rounded-xl flex items-center justify-center group-hover:bg-amber-100 transition-colors">
                <svg className="w-7 h-7 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-serif text-xl font-bold text-slate-900 mb-3">Emergency Arbitrator</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-4">
                Urgent interim measures including asset preservation, evidence protection, and injunctions. Emergency arbitrator appointed within 48 hours for time-sensitive situations.
              </p>
              <Link href="/rules/" className="text-amber-600 text-sm font-semibold hover:text-amber-700">View Emergency Rules &rarr;</Link>
            </div>

            {/* Domain & IP Disputes */}
            <div className="group p-8 rounded-xl bg-white border border-slate-200 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
              <div className="w-14 h-14 mb-6 bg-violet-50 rounded-xl flex items-center justify-center group-hover:bg-violet-100 transition-colors">
                <svg className="w-7 h-7 text-violet-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                </svg>
              </div>
              <h3 className="font-serif text-xl font-bold text-slate-900 mb-3">Domain &amp; IP Disputes</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-4">
                Specialized dispute resolution for domain name conflicts, digital intellectual property, and cybersquatting. Modeled after UDRP with enhanced digital-world provisions.
              </p>
              <Link href="/dispute/" className="text-violet-600 text-sm font-semibold hover:text-violet-700">Submit Domain Dispute &rarr;</Link>
            </div>

            {/* Compliance Consulting */}
            <div className="group p-8 rounded-xl bg-white border border-slate-200 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
              <div className="w-14 h-14 mb-6 bg-rose-50 rounded-xl flex items-center justify-center group-hover:bg-rose-100 transition-colors">
                <svg className="w-7 h-7 text-rose-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                </svg>
              </div>
              <h3 className="font-serif text-xl font-bold text-slate-900 mb-3">Compliance Consulting</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-4">
                Expert guidance on digital compliance, data protection regulations, and cross-border legal frameworks. Helping businesses navigate the complex digital regulatory landscape.
              </p>
              <Link href="/contact/" className="text-rose-600 text-sm font-semibold hover:text-rose-700">Get Expert Advice &rarr;</Link>
            </div>

            {/* Fee Estimation */}
            <div className="group p-8 rounded-xl bg-white border border-slate-200 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
              <div className="w-14 h-14 mb-6 bg-blue-50 rounded-xl flex items-center justify-center group-hover:bg-blue-100 transition-colors">
                <svg className="w-7 h-7 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="font-serif text-xl font-bold text-slate-900 mb-3">Fee Estimation</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-4">
                Transparent, competitive pricing at approximately 50% of traditional arbitration institutions. Use our online calculator to estimate costs for your dispute.
              </p>
              <Link href="/fee-calculator/" className="text-blue-600 text-sm font-semibold hover:text-blue-700">Calculate Fees &rarr;</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Dispute Types */}
      <section className="py-20 lg:py-28 px-4 sm:px-6 lg:px-8 bg-navy-900">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-xs font-bold tracking-[3px] uppercase text-gold-500 mb-3 block">Areas of Expertise</span>
            <h2 className="font-serif text-3xl lg:text-4xl font-bold text-white mb-4">Types of Digital Disputes</h2>
            <p className="text-slate-400 max-w-xl mx-auto">
              DWAC handles the full range of disputes unique to the digital ecosystem
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { title: "Smart Contracts", desc: "Performance & execution" },
              { title: "AI Agent Liability", desc: "Autonomous system decisions" },
              { title: "Digital Assets", desc: "NFTs, tokens, virtual property" },
              { title: "Data Compliance", desc: "Cross-border data disputes" },
              { title: "E-Commerce", desc: "Platform liability & bans" },
              { title: "Domain & IP", desc: "Intellectual property online" },
              { title: "Cybersecurity", desc: "Data breach liability" },
              { title: "Digital Payments", desc: "Cross-border transactions" },
            ].map((item) => (
              <div key={item.title} className="group p-5 rounded-xl border border-gold-subtle/30 bg-navy-800/30 hover:bg-navy-800/50 transition-all duration-300">
                <h3 className="font-semibold text-white text-sm mb-2">{item.title}</h3>
                <p className="text-slate-400 text-xs">{item.desc}</p>
              </div>
            ))}
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
            <div className="text-xs font-semibold tracking-[1.5px] uppercase text-slate-400">Of Traditional Rates</div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 lg:py-28 px-4 sm:px-6 lg:px-8 bg-gradient-navy">
        <div className="max-w-3xl mx-auto text-center">
          <div className="relative p-12 lg:p-16 rounded-xl border border-gold-subtle bg-navy-800/30">
            <h2 className="font-serif text-3xl lg:text-4xl font-bold text-white mb-4">Ready to Get Started?</h2>
            <p className="text-slate-400 mb-8 max-w-lg mx-auto leading-relaxed">
              Submit your dispute or contact us for a consultation. Our team is ready to help you find the best resolution path.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/dispute/" className="px-8 py-3.5 bg-gradient-gold text-navy-900 font-bold text-sm tracking-wide rounded-md hover:shadow-[0_0_30px_rgba(201,168,76,0.25)] hover:-translate-y-0.5 transition-all">
                FILE A DISPUTE
              </Link>
              <Link href="/contact/" className="px-8 py-3.5 border border-gold-500/30 text-gold-400 font-semibold text-sm tracking-wide rounded-md hover:bg-gold-500/[0.05] hover:border-gold-500/50 transition-all">
                CONTACT US
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
