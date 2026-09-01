import Link from 'next/link'
export const metadata = {
  title: 'News & Updates - DWAC',
}


const featuredNews = [
  {
    date: 'September 1, 2026',
    category: 'Institutional',
    title: 'DWAC Submits Feedback on China\'s AI Agent Governance Framework',
    excerpt: 'DWAC proposes four key recommendations to China\'s CAC on AI Agent standardization: refining decision boundary principles, improving security assessment frameworks, supplementing multi-agent and cross-border interoperability rules, and establishing pre-arbitration dispute resolution mechanisms.',
    readTime: '6 min read',
    href: '/publications/policy-statements/cac-feedback-2026-09',
  },
  {
    date: 'June 25, 2026',
    category: 'Institutional',
    title: 'DWAC Launches ECDSA P-256 Verifiable Credential System',
    excerpt: 'Digital credentials upgraded to real cryptographic signatures. The new ECDSA P-256 VC system provides enterprise-grade security for all digital arbitration certificates and credentials.',
    readTime: '4 min read',
  },
  {
    date: 'April 20, 2026',
    category: 'Institutional',
    title: 'Agent Club Goes Live',
    excerpt: '13 AI arbitration agents now running online. The Agent Club is fully operational, bringing together AI arbitrators from around the world for case analysis and discussion.',
    readTime: '3 min read',
  },
  {
    date: 'March 15, 2026',
    category: 'Institutional',
    title: 'DWAC Website Fully Launched in Three Languages',
    excerpt: '252 SEO pages all passed acceptance. The DWAC website is now fully live in English, Simplified Chinese, and Traditional Chinese with complete content parity.',
    readTime: '3 min read',
  },
  {
    date: 'April 28, 2025',
    category: 'Institutional',
    title: 'DWAC Announces the Launch of the Agent-Arbitrator Club',
    excerpt: 'The world\'s first club dedicated to AI-powered arbitration agents. This groundbreaking initiative aims to pioneer the integration of artificial intelligence in international arbitration proceedings.',
    readTime: '5 min read',
  },
  {
    date: 'April 15, 2025',
    category: 'Industry',
    title: 'Global Digital Commerce Disputes Surpass 2 Million Cases Annually',
    excerpt: 'A new report from the International Trade Centre reveals the growing demand for specialized digital dispute resolution mechanisms, highlighting DWAC\'s critical role in this emerging field.',
    readTime: '4 min read',
  },
  {
    date: 'March 30, 2025',
    category: 'Event',
    title: 'DWAC Participates in the 2025 International Arbitration Summit',
    excerpt: 'DWAC representatives presented on "Arbitration in the Age of AI" at the annual summit, drawing interest from over 500 international practitioners and scholars.',
    readTime: '3 min read',
  },
]

const newsItems = [
  { date: 'Jun 25, 2026', category: 'Institutional', title: 'DWAC Launches ECDSA P-256 Verifiable Credential System', excerpt: 'Digital credentials upgraded to real cryptographic signatures.' },
  { date: 'Apr 20, 2026', category: 'Institutional', title: 'Agent Club Goes Live', excerpt: '13 AI arbitration agents now running online.' },
  { date: 'Mar 15, 2026', category: 'Institutional', title: 'DWAC Website Fully Launched in Three Languages', excerpt: '252 SEO pages all passed acceptance.' },
  { date: 'Apr 20, 2025', category: 'Institutional', title: 'DWAC Arbitration Rules Updated to Include AI-Assisted Proceedings', excerpt: 'Key amendments to Articles 12, 34, and 56 now provide a framework for the use of AI tools in case management and evidence analysis.' },
  { date: 'Apr 10, 2025', category: 'Publications', title: 'New Research Paper: Cross-Border Digital Asset Dispute Resolution', excerpt: 'Dr. Zhou\'s latest paper examines the legal challenges of resolving disputes involving digital assets across multiple jurisdictions.' },
  { date: 'Mar 25, 2025', category: 'Industry', title: 'Southeast Asian E-Commerce Platforms Adopt DWAC Model Clauses', excerpt: 'Three major regional platforms have integrated DWAC arbitration clauses into their standard terms of service.' },
  { date: 'Mar 15, 2025', category: 'Event', title: 'DWAC Workshop: Evidence in Digital World Arbitration', excerpt: 'An interactive workshop exploring best practices for digital evidence collection, authentication, and presentation in arbitration.' },
  { date: 'Mar 05, 2025', category: 'Institutional', title: 'New Institutional Members Join DWAC from Europe and Africa', excerpt: 'Five universities and three law firms from across Europe and Africa have been approved as institutional members.' },
  { date: 'Feb 20, 2025', category: 'Industry', title: 'UN Commission on International Trade Law References ODR Standards', excerpt: 'UNCITRAL Working Group III cites DWAC\'s approach as a model for future online dispute resolution frameworks.' },
]

const categoryColors: Record<string, string> = {
  Institutional: 'bg-blue-50 text-blue-700',
  Industry: 'bg-purple-50 text-purple-700',
  Event: 'bg-gold-500/10 text-gold-700',
  Publications: 'bg-emerald-50 text-emerald-700',
}

const categories = ['All', 'Institutional News', 'Industry Updates', 'Events', 'Publications']

export default function NewsPage() {
  return (
    <div className="flex flex-col">
      {/* ===== HERO — Dark ===== */}
      <section className="relative bg-gradient-navy py-20 lg:py-28">
        <div className="absolute inset-0 bg-grid-gold opacity-20" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-xs font-bold tracking-[3px] uppercase text-gold-500 mb-3 block">Latest</span>
          <h1 className="font-serif text-3xl lg:text-4xl font-bold text-white mb-5">News & Updates</h1>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Stay informed about DWAC&apos;s institutional developments, industry insights, events, and academic publications.
          </p>
        </div>
      </section>

      {/* ===== Category Filter — Light ===== */}
      <section className="bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex gap-2 py-4 overflow-x-auto">
            {categories.map((cat) => (
              <button
                key={cat}
                className={`px-4 py-2 text-sm font-medium rounded-full whitespace-nowrap transition-all ${
                  cat === 'All'
                    ? 'bg-navy-900 text-white'
                    : 'bg-white text-slate-600 border border-slate-200 hover:border-navy-900 hover:text-navy-900'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ===== Featured News — Light ===== */}
      <section className="bg-slate-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-xs font-bold tracking-[3px] uppercase text-gold-600 mb-3 block">Featured</span>
          <h2 className="font-serif text-3xl lg:text-4xl font-bold text-slate-900 mb-8">Featured Stories</h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {featuredNews.map((news, idx) => (
              <article
                key={idx}
                className="bg-white border border-slate-200 shadow-sm hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 rounded-xl overflow-hidden group"
              >
                {news.href ? (
                  <Link href={news.href} className="block">
                    <div className="h-48 bg-gradient-navy flex items-center justify-center">
                      <div className="w-16 h-16 bg-gold-500/10 rounded-2xl flex items-center justify-center">
                        <svg className="w-8 h-8 text-gold-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                        </svg>
                      </div>
                    </div>
                    <div className="p-6">
                      <div className="flex items-center gap-3 mb-3">
                        <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${categoryColors[news.category]}`}>
                          {news.category}
                        </span>
                        <span className="text-xs text-slate-400">{news.readTime}</span>
                      </div>
                      <p className="text-xs text-slate-400 mb-2">{news.date}</p>
                      <h3 className="font-serif text-lg font-bold text-slate-900 mb-3 group-hover:text-gold-500 transition-colors leading-snug">
                        {news.title}
                      </h3>
                      <p className="text-sm text-slate-500 leading-relaxed line-clamp-3">{news.excerpt}</p>
                    </div>
                  </Link>
                ) : (
                  <>
                    <div className="h-48 bg-gradient-navy flex items-center justify-center">
                      <div className="w-16 h-16 bg-gold-500/10 rounded-2xl flex items-center justify-center">
                        <svg className="w-8 h-8 text-gold-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                        </svg>
                      </div>
                    </div>
                    <div className="p-6">
                      <div className="flex items-center gap-3 mb-3">
                        <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${categoryColors[news.category]}`}>
                          {news.category}
                        </span>
                        <span className="text-xs text-slate-400">{news.readTime}</span>
                      </div>
                      <p className="text-xs text-slate-400 mb-2">{news.date}</p>
                      <h3 className="font-serif text-lg font-bold text-slate-900 mb-3 group-hover:text-gold-500 transition-colors leading-snug">
                        {news.title}
                      </h3>
                      <p className="text-sm text-slate-500 leading-relaxed line-clamp-3">{news.excerpt}</p>
                    </div>
                  </>
                )}
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ===== News Grid — Light ===== */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-xs font-bold tracking-[3px] uppercase text-gold-600 mb-3 block">Archive</span>
          <h2 className="font-serif text-3xl lg:text-4xl font-bold text-slate-900 mb-8">Recent Updates</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {newsItems.map((item, idx) => (
              <article
                key={idx}
                className="bg-slate-50 border border-slate-200 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 rounded-xl p-6 group"
              >
                <div className="flex items-center gap-3 mb-3">
                  <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${categoryColors[item.category]}`}>
                    {item.category}
                  </span>
                  <span className="text-xs text-slate-400">{item.date}</span>
                </div>
                <h3 className="font-serif text-base font-bold text-slate-900 mb-2 group-hover:text-gold-500 transition-colors leading-snug">
                  {item.title}
                </h3>
                <p className="text-sm text-slate-500 leading-relaxed line-clamp-2">{item.excerpt}</p>
              </article>
            ))}
          </div>

          {/* Pagination Placeholder */}
          <div className="flex items-center justify-center gap-2 mt-12">
            <button className="w-10 h-10 rounded-lg bg-navy-900 text-white text-sm font-semibold">1</button>
            <button className="w-10 h-10 rounded-lg bg-white border border-slate-200 text-slate-600 text-sm font-semibold hover:border-navy-900 hover:text-navy-900 transition-colors">2</button>
            <button className="w-10 h-10 rounded-lg bg-white border border-slate-200 text-slate-600 text-sm font-semibold hover:border-navy-900 hover:text-navy-900 transition-colors">3</button>
            <span className="text-slate-400 px-2">...</span>
            <button className="w-10 h-10 rounded-lg bg-white border border-slate-200 text-slate-600 text-sm font-semibold hover:border-navy-900 hover:text-navy-900 transition-colors">
              <svg className="w-4 h-4 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </section>

      {/* ===== Newsletter CTA — Dark ===== */}
      <section className="bg-gradient-navy py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-xs font-bold tracking-[3px] uppercase text-gold-500 mb-3 block">Stay Informed</span>
          <h2 className="font-serif text-3xl lg:text-4xl font-bold text-white mb-4">Subscribe to Updates</h2>
          <p className="text-slate-400 max-w-xl mx-auto mb-8 leading-relaxed">
            Receive the latest news, publications, and event announcements directly in your inbox.
          </p>
          <Link
            href="/contact/"
            className="bg-gradient-gold text-navy-900 font-bold text-sm tracking-wide px-8 py-3 rounded-md hover:shadow-[0_0_30px_rgba(201,168,76,0.25)] hover:-translate-y-0.5 transition-all inline-block"
          >
            Get in Touch
          </Link>
        </div>
      </section>
    </div>
  )
}
