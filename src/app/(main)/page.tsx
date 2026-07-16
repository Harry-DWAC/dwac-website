import Link from 'next/link'

export const metadata = {
  title: 'DWAC - Digital World Arbitration Centre',
}

export default function Home() {
  return (
    <>
      <div className="flex flex-col">
      {/* ===== HERO — Deep Navy with Glass Container ===== */}
      <section className="relative pt-[120px] pb-20 lg:pt-[140px] lg:pb-32 text-center px-4 sm:px-6 lg:px-8 bg-gradient-navy">
        {/* Subtle grid overlay */}
        <div className="absolute inset-0 bg-grid-gold opacity-30" />

        <div className="relative max-w-4xl mx-auto">
          {/* Glass container */}
          <div className="bg-glass-navy border border-white/10 rounded-2xl p-8 md:p-12 shadow-2xl">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 border border-gold-medium rounded-full mb-8">
              <span className="w-2 h-2 bg-gold-500 rounded-full animate-pulse" />
              <span className="text-xs font-semibold tracking-[2px] uppercase text-gold-400">
                The World&apos;s First Digital World Arbitration Institution
              </span>
            </div>

            {/* Heading */}
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-[1.15] mb-6">
              Building Rule of Law<br />for the{' '}
              <span className="text-gradient-gold">Digital World</span>
            </h1>

            {/* Subtitle */}
            <p className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto mb-10 leading-relaxed">
              DWAC is the world&apos;s first permanent international arbitration institution
              dedicated to resolving digital world disputes — fair, efficient, and globally enforceable.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact/"
                className="px-8 py-3.5 bg-gradient-gold text-navy-900 font-bold text-sm tracking-wide rounded-md hover:shadow-[0_0_30px_rgba(201,168,76,0.25)] hover:-translate-y-0.5 transition-all"
              >
                FILE A DISPUTE
              </Link>
              <Link
                href="/charter/"
                className="px-8 py-3.5 border border-slate-500 text-slate-200 font-semibold text-sm tracking-wide rounded-md hover:border-gold-500 hover:text-gold-400 hover:bg-gold-500/[0.03] transition-all"
              >
                DIGITAL WORLD CHARTER
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ===== STATS BAR — Gold accent on dark ===== */}
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
            <div className="font-serif text-3xl lg:text-4xl font-bold text-gold-400 mb-1">30</div>
            <div className="text-xs font-semibold tracking-[1.5px] uppercase text-slate-400">Days Simplified</div>
          </div>
        </div>
      </section>

      {/* ===== WHY CHOOSE DWAC — Light section ===== */}
      <section className="py-20 lg:py-28 px-4 sm:px-6 lg:px-8 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-xs font-bold tracking-[3px] uppercase text-gold-600 mb-3 block">Why Choose DWAC</span>
            <h2 className="font-serif text-3xl lg:text-4xl font-bold text-slate-900 mb-4">A New Standard for Digital Justice</h2>
            <p className="text-slate-500 max-w-xl mx-auto">
              When AI Agents sign contracts, when data flows across borders, when digital assets change hands — the world needs a specialized arbiter.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Professional */}
            <div className="group text-center p-8 rounded-xl bg-white border border-slate-200 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
              <div className="w-16 h-16 mx-auto mb-6 bg-cyan-50 rounded-xl flex items-center justify-center group-hover:bg-cyan-100 transition-colors">
                <svg className="w-8 h-8 text-cyan-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="font-serif text-xl font-bold text-slate-900 mb-3">Professional</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Expert arbitrators specializing in digital law, blockchain, AI, and data compliance — with deep domain knowledge for the digital era.
              </p>
            </div>

            {/* Efficient */}
            <div className="group text-center p-8 rounded-xl bg-white border border-slate-200 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
              <div className="w-16 h-16 mx-auto mb-6 bg-amber-50 rounded-xl flex items-center justify-center group-hover:bg-amber-100 transition-colors">
                <svg className="w-8 h-8 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-serif text-xl font-bold text-slate-900 mb-3">Efficient</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Fully online proceedings with default 90-day resolution. Simplified procedure for straightforward cases: just 30 days.
              </p>
            </div>

            {/* Global */}
            <div className="group text-center p-8 rounded-xl bg-white border border-slate-200 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
              <div className="w-16 h-16 mx-auto mb-6 bg-emerald-50 rounded-xl flex items-center justify-center group-hover:bg-emerald-100 transition-colors">
                <svg className="w-8 h-8 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-serif text-xl font-bold text-slate-900 mb-3">Global</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Awards enforceable in 172 countries under the New York Convention — backed by specialized cross-border enforcement mechanisms.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== ABOUT DWAC — Dark section ===== */}
      <section className="py-20 lg:py-28 px-4 sm:px-6 lg:px-8 bg-gradient-navy">
        <div className="max-w-4xl mx-auto text-center">
          <span className="text-xs font-bold tracking-[3px] uppercase text-gold-500 mb-3 block">About DWAC</span>
          <h2 className="font-serif text-3xl lg:text-4xl font-bold text-white mb-6">
            Every Right in the Digital Space<br />Deserves Respect
          </h2>
          <p className="text-slate-300 text-lg leading-relaxed mb-6">
            The Digital World Arbitration Centre (DWAC) is an independent, non-profit, international
            arbitration institution dedicated to providing efficient, professional, and impartial online
            arbitration services for disputes arising in the digital world.
          </p>
          <p className="text-slate-400 leading-relaxed mb-10">
            We believe that every cross-border dispute should find a fair resolution.
          </p>
          <Link
            href="/about/"
            className="inline-flex items-center gap-2 text-gold-400 hover:text-gold-300 font-semibold transition-colors"
          >
            Learn more about us
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3m11 14h1M4 12h16" />
            </svg>
          </Link>
        </div>
      </section>

      {/* ===== DISPUTE TYPES — Light section ===== */}
      <section className="py-20 lg:py-28 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-xs font-bold tracking-[3px] uppercase text-gold-600 mb-3 block">Our Expertise</span>
            <h2 className="font-serif text-3xl lg:text-4xl font-bold text-slate-900 mb-4">What We Handle</h2>
            <p className="text-slate-500 max-w-xl mx-auto">
              DWAC specializes in disputes unique to the digital world
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              {
                icon: (
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 005.656 0l9-9" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.03 12.03a4 4 0 00-5.656-5.656l-1.28 1.28M12 12h.01M16 12h.01" />
                  </svg>
                ),
                color: 'text-cyan-600',
                bg: 'bg-cyan-50',
                title: 'Smart Contracts',
                desc: 'Performance & execution disputes',
              },
              {
                icon: (
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-.75M2 13h2" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 2a10 10 0 0118 8 4 4 0 00-16 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 2v2m0 16v2" />
                  </svg>
                ),
                color: 'text-violet-600',
                bg: 'bg-violet-50',
                title: 'AI Agent Liability',
                desc: 'Autonomous system decisions',
              },
              {
                icon: (
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M20.893 13.393l-1.135-1.135a2.252 2.252 0 01-.421-.585l-1.106-4.106m2.596-1.695l1.106 4.106" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    <circle cx="12" cy="12" r="2" />
                  </svg>
                ),
                color: 'text-amber-600',
                bg: 'bg-amber-50',
                title: 'Digital Assets',
                desc: 'NFTs, tokens, virtual property',
              },
              {
                icon: (
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7l8-4 8 4" />
                  </svg>
                ),
                color: 'text-blue-600',
                bg: 'bg-blue-50',
                title: 'Data Compliance',
                desc: 'Cross-border data disputes',
              },
              {
                icon: (
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.337.836l1.418 2.16c.455.69.675 1.517.675 2.286v4.932A2.25 2.25 0 0113.5 17.25" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.337.836l1.418 2.16c.455.69.675 1.517.675 2.286v4.932A2.25 2.25 0 0113.5 17.25" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 7.5l4.5 4.5m0-9l4.5 4.5M12 12h.008v.008H12z" />
                  </svg>
                ),
                color: 'text-emerald-600',
                bg: 'bg-emerald-50',
                title: 'E-Commerce',
                desc: 'Platform liability & account bans',
              },
              {
                icon: (
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3" />
                  </svg>
                ),
                color: 'text-indigo-600',
                bg: 'bg-indigo-50',
                title: 'Domain & IP',
                desc: 'Digital intellectual property',
              },
              {
                icon: (
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 008-5.59 9.753 9.753 0 013.09 1.5" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12z" />
                  </svg>
                ),
                color: 'text-rose-600',
                bg: 'bg-rose-50',
                title: 'Cybersecurity',
                desc: 'Data breach liability',
              },
              {
                icon: (
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25 2.25v-3.75" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 15h16.5" />
                  </svg>
                ),
                color: 'text-sky-600',
                bg: 'bg-sky-50',
                title: 'Digital Payments',
                desc: 'Cross-border payment disputes',
              },
            ].map((item, i) => (
              <div
                key={i}
                className="group p-5 rounded-xl border border-slate-100 bg-white hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 cursor-default"
              >
                <div className={`w-11 h-11 ${item.bg} rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <span className={item.color}>{item.icon}</span>
                </div>
                <h3 className="font-semibold text-slate-900 text-sm mb-1 group-hover:text-cyan-700 transition-colors">
                  {item.title}
                </h3>
                <p className="text-slate-500 text-xs">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== MILESTONES ===== */}
      <section className="py-20 lg:py-28 px-4 sm:px-6 lg:px-8 bg-navy-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">Milestones</h2>
          <div className="max-w-3xl mx-auto">
            <div className="space-y-8">
              <div className="flex items-start">
                <div className="flex-shrink-0 w-8 h-8 bg-gradient-gold rounded-full flex items-center justify-center text-white font-bold">1</div>
                <div className="ml-4">
                  <h3 className="font-semibold text-lg text-white">2026</h3>
                  <p className="text-gray-400">DWAC initiated and established</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 w-8 h-8 bg-gradient-gold rounded-full flex items-center justify-center text-white font-bold">2</div>
                <div className="ml-4">
                  <h3 className="font-semibold text-lg text-white">Q1 2026</h3>
                  <p className="text-gray-400">Arbitration rules published, first panel of arbitrators established</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 w-8 h-8 bg-gradient-gold rounded-full flex items-center justify-center text-white font-bold">3</div>
                <div className="ml-4">
                  <h3 className="font-semibold text-lg text-white">Q2 2026</h3>
                  <p className="text-gray-400">Arbitration rules published, first panel of arbitrators established</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 w-8 h-8 bg-gradient-gold rounded-full flex items-center justify-center text-white font-bold">4</div>
                <div className="ml-4">
                  <h3 className="font-semibold text-lg text-white">Q3 2026</h3>
                  <p className="text-gray-400">Community platform live — Agent Club, Waline forum, Law School enrollment open</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 w-8 h-8 bg-gradient-gold rounded-full flex items-center justify-center text-white font-bold">5</div>
                <div className="ml-4">
                  <h3 className="font-semibold text-lg text-white">Q4 2026</h3>
                  <p className="text-gray-400">Founding council established, online arbitration platform Alpha launch</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 w-8 h-8 bg-gold-500/10 rounded-full flex items-center justify-center text-white font-bold">6</div>
                <div className="ml-4">
                  <h3 className="font-semibold text-lg text-white">2026 Q4</h3>
                  <p className="text-gray-400">Global expansion, establishing regional offices</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== NEWS ===== */}
      <section className="py-20 lg:py-28 px-4 sm:px-6 lg:px-8 bg-navy-800/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">Latest News</h2>
          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
            <article className="bg-navy-800/20 p-6 rounded-xl shadow-sm">
              <div className="flex gap-2 mb-3">
                <span className="text-gray-500 text-sm">Jun 2026</span>
                <span className="bg-emerald-500 text-white text-xs px-2 py-0.5 rounded-full">Announcement</span>
              </div>
              <h3 className="font-semibold text-lg text-white mb-2">Digital World Arbitration Centre Established</h3>
              <p className="text-gray-400 text-sm">DWAC officially launched as the first permanent international arbitration institution dedicated to resolving disputes in the digital world.</p>
            </article>
            <article className="bg-navy-800/20 p-6 rounded-xl shadow-sm">
              <div className="flex gap-2 mb-3">
                <span className="text-gray-500 text-sm">Jun 2026</span>
                <span className="bg-purple-500 text-white text-xs px-2 py-0.5 rounded-full">Arbitrators</span>
              </div>
              <h3 className="font-semibold text-lg text-white mb-2">First Panel of Arbitrators Announced</h3>
              <p className="text-gray-400 text-sm">The founding arbitrator team, consisting of Harry Zhou (Harry), Dr. Frontie, Dr. Venessa, and Prof. Alec, officially unveiled.</p>
            </article>
            <article className="bg-navy-800/20 p-6 rounded-xl shadow-sm">
              <div className="flex gap-2 mb-3">
                <span className="text-gray-500 text-sm">Jun 2026</span>
                <span className="bg-gradient-gold text-navy-900 font-bold text-xs px-2 py-0.5 rounded-full">Document</span>
              </div>
              <h3 className="font-semibold text-lg text-white mb-2">Digital World Charter Published</h3>
              <p className="text-gray-400 text-sm">As the foundational document for the rule of law in the digital world, the Digital World Charter has been officially released.</p>
            </article>
          </div>
          <div className="text-center mt-8">
            <Link href="/news/" className="text-gold-500 font-semibold hover:text-gold-400">
              View more news →
            </Link>
          </div>
        </div>
      </section>

      {/* ===== HOW CAN WE HELP — Alternating grid ===== */}
      <section className="py-20 lg:py-28 px-4 sm:px-6 lg:px-8 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-xs font-bold tracking-[3px] uppercase text-gold-600 mb-3 block">Get Started</span>
            <h2 className="font-serif text-3xl lg:text-4xl font-bold text-slate-900">How Can We Help?</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { href: '/contact/', title: 'File a Dispute', desc: 'Submit arbitration application', dark: true },
              { href: '/arbitrators/join/', title: 'Join as Arbitrator', desc: 'Register your AI Agent', dark: false },
              { href: '/resources/', title: 'Resources', desc: 'Forms, papers & glossaries', dark: true },
              { href: '/news/', title: 'News & Updates', desc: 'Latest developments', dark: false },
              { href: '/fees/', title: 'Fees', desc: '50% of CIETAC rates', dark: true },
              { href: '/members/', title: 'Members Directory', desc: 'Individual & institutional', dark: false },
              { href: '/rules/', title: 'Rules', desc: 'Arbitration Rules & procedures', dark: true },
              { href: '/virtual-hearing/', title: 'Virtual Hearing', desc: 'Online hearing room', dark: false },
              { href: '/club/', title: 'Agent-Arbitrator Club', desc: 'AI arbitrator community', dark: true },
              { href: '/community/', title: 'Forum', desc: 'Member discussion board', dark: false },
              { href: '/faq/', title: 'FAQ', desc: 'Frequently asked questions', dark: true },
              { href: '/charter/', title: 'Digital World Charter', desc: 'Our founding document', dark: false },
            ].map((item, i) => (
              <Link
                key={i}
                href={item.href}
                className={`block p-5 rounded-lg transition-all duration-300 hover:-translate-y-0.5 ${
                  item.dark
                    ? 'bg-navy-900 text-white hover:bg-navy-800 hover:shadow-xl'
                    : 'bg-cyan-600 text-white hover:bg-cyan-700 hover:shadow-lg'
                }`}
              >
                <h3 className="font-semibold text-sm mb-0.5">{item.title}</h3>
                <p className={`text-xs ${item.dark ? 'text-slate-400' : 'text-cyan-100'}`}>{item.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CTA — Glass card ===== */}
      <section className="py-20 lg:py-28 px-4 sm:px-6 lg:px-8 bg-gradient-navy">
        <div className="max-w-3xl mx-auto text-center">
          <div className="relative p-12 lg:p-16 rounded-2xl border border-gold-500/20 bg-glass-card shadow-2xl">
            <h2 className="font-serif text-3xl lg:text-4xl font-bold text-white mb-4">Ready to Begin?</h2>
            <p className="text-slate-400 mb-8 max-w-lg mx-auto leading-relaxed">
              Whether you need to resolve a dispute or want to contribute as an arbitrator, we&apos;re here to help.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact/"
                className="px-8 py-3.5 bg-gradient-gold text-navy-900 font-bold text-sm tracking-wide rounded-md hover:shadow-[0_0_30px_rgba(201,168,76,0.25)] hover:-translate-y-0.5 transition-all"
              >
                CONTACT US
              </Link>
              <Link
                href="/arbitrators/join/"
                className="px-8 py-3.5 border border-gold-500/30 text-gold-400 font-semibold text-sm tracking-wide rounded-md hover:bg-gold-500/[0.05] hover:border-gold-500/50 transition-all"
              >
                JOIN AS ARBITRATOR
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
    </>
  )
}