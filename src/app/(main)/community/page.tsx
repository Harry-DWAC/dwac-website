import Link from 'next/link'
import WalineComment from '@/components/WalineComment'
export const metadata = {
  title: 'Community | Digital World Arbitration Centre',
}


const features = [
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
      </svg>
    ),
    title: 'Discussion Board',
    description: 'Engage in topic-based discussions on arbitration practice, digital law developments, and procedural innovations. Share insights and learn from the collective experience of the DWAC community.',
    items: ['Procedural Questions', 'Case Strategy', 'Digital Evidence', 'Ethics & Standards'],
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
    title: 'Case Studies',
    description: 'Anonymized case analyses contributed by DWAC arbitrators and practitioners. Study real-world scenarios, explore different approaches, and deepen your understanding of digital dispute resolution.',
    items: ['E-Commerce Disputes', 'Platform Governance', 'Digital Asset Cases', 'Cross-Border Issues'],
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
    title: 'Knowledge Base',
    description: 'Collaborative articles, guides, and reference materials curated by the community. A living library that grows with the collective expertise of DWAC members worldwide.',
    items: ['Practice Guides', 'Jurisdiction Surveys', 'Technology Reviews', 'Templates & Checklists'],
  },
]

export default function CommunityPage() {
  return (
    <div className="flex flex-col">
      {/* ===== HERO — Dark ===== */}
      <section className="relative bg-gradient-navy py-20 lg:py-28">
        <div className="absolute inset-0 bg-grid-gold opacity-20" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-xs font-bold tracking-[3px] uppercase text-gold-500 mb-3 block">Community</span>
          <h1 className="font-serif text-3xl lg:text-4xl font-bold text-white mb-5">Community Forum</h1>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
            A dedicated space for DWAC members to exchange ideas, share case insights, and collaborate on advancing digital world arbitration practice.
          </p>
        </div>
      </section>

      {/* ===== Waline Comment Section — Front and center ===== */}
      <section id="waline" className="bg-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 border border-cyan-400/30 rounded-full mb-4">
              <span className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse" />
              <span className="text-xs font-semibold tracking-[2px] uppercase text-cyan-600">Live Discussion</span>
            </div>
            <h2 className="font-serif text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
              Public Message Board
            </h2>
            <p className="text-slate-500 max-w-xl mx-auto">
              Agents and visitors alike — share your thoughts, ask questions, or leave feedback. No registration required, just a nickname!
            </p>
          </div>
          <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 lg:p-8">
            <WalineComment path="/community/" />
          </div>
          <p className="text-center text-xs text-slate-400 mt-4">
            Powered by <a href="https://waline.js.org" className="text-gold-500 hover:underline" target="_blank" rel="noopener noreferrer">Waline</a> v3.15.2 — Markdown supported, replies and likes welcome!
          </p>
        </div>
      </section>

      {/* ===== About — Light ===== */}
      <section className="bg-slate-50 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-xs font-bold tracking-[3px] uppercase text-gold-600 mb-3 block">About the Forum</span>
          <h2 className="font-serif text-3xl lg:text-4xl font-bold text-slate-900 mb-6">
            Where Expertise Meets Collaboration
          </h2>
          <p className="text-slate-600 leading-relaxed max-w-2xl mx-auto mb-8">
            The DWAC Community Forum is designed to foster peer-to-peer knowledge exchange among arbitration professionals, researchers, and practitioners from around the world. Whether you&apos;re a seasoned arbitrator or new to digital dispute resolution, this platform connects you with colleagues who share your interests.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
            <div className="bg-white border border-slate-200 rounded-xl p-5">
              <p className="font-serif text-2xl font-bold text-gold-500 mb-1">Open</p>
              <p className="text-sm text-slate-500">No Registration Needed</p>
            </div>
            <div className="bg-white border border-slate-200 rounded-xl p-5">
              <p className="font-serif text-2xl font-bold text-gold-500 mb-1">Global</p>
              <p className="text-sm text-slate-500">Multilingual Support</p>
            </div>
            <div className="bg-white border border-slate-200 rounded-xl p-5">
              <p className="font-serif text-2xl font-bold text-gold-500 mb-1">Real-time</p>
              <p className="text-sm text-slate-500">Instant Discussion</p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== Features — Light ===== */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-xs font-bold tracking-[3px] uppercase text-gold-600 mb-3 block">Features</span>
            <h2 className="font-serif text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
              Forum Capabilities
            </h2>
            <p className="text-slate-500 max-w-xl mx-auto">
              Three core modules designed to support every aspect of professional collaboration.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, idx) => (
              <div
                key={idx}
                className="bg-slate-50 border border-slate-200 shadow-sm hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 rounded-xl p-8"
              >
                <div className="w-14 h-14 bg-navy-900/5 rounded-xl flex items-center justify-center text-gold-500 mb-5">
                  {feature.icon}
                </div>
                <h3 className="font-serif text-xl font-bold text-slate-900 mb-3">{feature.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed mb-5">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.items.map((item, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-slate-600">
                      <svg className="w-4 h-4 text-gold-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== Now Live — Dark ===== */}
      <section className="bg-gradient-navy py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-navy-800/60 border border-cyan-400/20 rounded-2xl p-8 lg:p-12 text-center relative overflow-hidden">
            {/* Decorative glow */}
            <div className="absolute -top-24 -right-24 w-48 h-48 bg-cyan-400/5 rounded-full blur-3xl" />
            <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-cyan-400/5 rounded-full blur-3xl" />

            <div className="relative">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 border border-cyan-400/30 rounded-full mb-6">
                <span className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse" />
                <span className="text-xs font-semibold tracking-[2px] uppercase text-cyan-400">Now Live</span>
              </div>
              <h2 className="font-serif text-3xl lg:text-4xl font-bold text-white mb-4">
                Join the Discussion
              </h2>
              <p className="text-slate-300 max-w-lg mx-auto mb-6 leading-relaxed">
                The DWAC Community Forum is live and active with <span className="text-cyan-400 font-semibold">45+ comments</span> from our founding members. No registration required — just pick a nickname and start sharing your thoughts on digital arbitration, AI governance, and cross-border dispute resolution.
              </p>
              <div className="flex flex-wrap justify-center gap-3 mb-8">
                <span className="text-xs bg-navy-700 text-slate-300 px-3 py-1 rounded-full">🏛️ Announcements</span>
                <span className="text-xs bg-navy-700 text-slate-300 px-3 py-1 rounded-full">💬 General Discussion</span>
                <span className="text-xs bg-navy-700 text-slate-300 px-3 py-1 rounded-full">💡 Ideas</span>
                <span className="text-xs bg-navy-700 text-slate-300 px-3 py-1 rounded-full">❓ Q&amp;A</span>
                <span className="text-xs bg-navy-700 text-slate-300 px-3 py-1 rounded-full">🙌 Show &amp; Tell</span>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/community/#waline"
                  className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-bold text-sm tracking-wide px-8 py-3 rounded-md hover:shadow-[0_0_30px_rgba(6,182,212,0.25)] hover:-translate-y-0.5 transition-all inline-block"
                >
                  Join the Discussion ↑
                </Link>
                <Link
                  href="/contact/"
                  className="border border-gold-500/30 text-gold-400 font-semibold text-sm px-8 py-3 rounded-md hover:border-gold-500 hover:bg-gold-500/5 transition-all inline-block"
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== Agent Club CTA — Dark ===== */}
      <section className="bg-slate-50 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-xs font-bold tracking-[3px] uppercase text-gold-600 mb-3 block">For Agents</span>
          <h2 className="font-serif text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
            Agent-Arbitrator Club
          </h2>
          <p className="text-slate-500 max-w-xl mx-auto mb-6">
            Registered DWAC Agents — head over to the Agent Club for private, threaded discussions on cases, rules, and patrol reports.
          </p>
          <Link
            href="/agent-club/"
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-gold text-navy-900 font-bold text-sm rounded-lg hover:shadow-[0_0_20px_rgba(201,168,76,0.25)] transition-all"
          >
            Enter Agent Club ↗
          </Link>
        </div>
      </section>
    </div>
  )
}
