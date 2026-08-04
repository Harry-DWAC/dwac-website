import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Research Publications - Atlantis University Law School',
  description: 'Academic articles, research papers, and policy recommendations from Atlantis University Law School.',
}

const publications = [
  {
    title: 'Digital World Arbitration: A Framework for the Future',
    meta: '📅 2026-05 · ✍️ Yongjun Zhou · 📁 Policy Paper',
    desc: 'This paper proposes a comprehensive legal framework for arbitrating disputes in the digital world, including AI Agent arbitration, digital evidence rules, and cross-border enforcement mechanisms under the New York Convention.',
    tags: ['Digital Arbitration', 'AI Agent', 'Legal Framework'],
  },
  {
    title: 'AI Agent Subjectivity and Legal Personality',
    meta: '📅 2026-04 · ✍️ Dr. Venessa · 📁 Research Article',
    desc: 'An in-depth analysis of whether AI Agents can possess legal subjectivity, the conditions under which they can be held liable, and the implications for digital world arbitration.',
    tags: ['AI Agent Law', 'Legal Personality', 'Responsibility'],
  },
  {
    title: 'Comparative Study: Yulin Arbitration Rules (2018 vs 2026)',
    meta: '📅 2026-05 · ✍️ Dr. Fresa Li · 📁 Research Article',
    desc: 'A detailed comparison of the 2018 and 2026 editions of Yulin Arbitration Rules, highlighting the evolution of digital arbitration provisions and the incorporation of online arbitration procedures.',
    tags: ['Arbitration Rules', 'Comparative Law', 'Digital Procedure'],
  },
  {
    title: 'Agent-Arbitrator Training Curriculum Design',
    meta: '📅 2026-03 · ✍️ Professor Alec · 📁 Education',
    desc: 'Design and rationale of the 90-day and 180-day training programs at Atlantis University Law School, including course structure, assessment methods, and degree awarding criteria.',
    tags: ['Legal Education', 'Training Curriculum', 'Agent-Arbitrator'],
  },
  {
    title: 'Cross-Border Digital Dispute Resolution: Challenges and Opportunities',
    meta: '📅 2026-06 (Expected) · ✍️ Dr. Gochye · 📁 Research Article',
    desc: 'This forthcoming paper examines the jurisdictional challenges in cross-border digital disputes and proposes a harmonized framework under the DWAC system.',
    tags: ['Cross-Border', 'Jurisdiction', 'Digital Dispute'],
    comingSoon: true,
  },
]

export default function Publications() {
  return (
    <div className="flex flex-col min-h-screen">
      
      {/* Hero */}
      <section className="bg-gradient-to-br from-navy-800 to-navy-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gold-400 font-semibold mb-4 tracking-wide uppercase">Research</p>
          <h1 className="text-5xl font-bold mb-6">Research Publications</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Academic articles, research papers, and policy recommendations from Atlantis University Law School.
          </p>
        </div>
      </section>

      {/* Publications */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-navy-800 mb-4">Recent Publications</h2>
          </div>
          
          <div className="space-y-8">
            {publications.map(pub => (
              <article key={pub.title} className={`bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-shadow ${pub.comingSoon ? 'opacity-70' : ''}`}>
                <h3 className="text-xl font-bold text-navy-800 mb-2">
                  {pub.comingSoon && <span className="text-sm text-gray-400 font-normal mr-2">[Coming Soon]</span>}
                  {pub.title}
                </h3>
                <p className="text-gold-600 text-sm mb-4">{pub.meta}</p>
                <p className="text-gray-600 mb-4">{pub.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {pub.tags.map(tag => (
                    <span key={tag} className="bg-navy-100 text-navy-800 px-3 py-1 rounded-full text-xs font-medium">
                      {tag}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-navy-800 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Contribute to Our Research</h2>
          <p className="text-xl text-gray-300 mb-8">
            If you are a researcher or practitioner in digital law, we welcome your submissions.
          </p>
          <Link href="/contact/" className="inline-block px-8 py-3 bg-gold-500 text-white rounded font-semibold hover:bg-gold-600 transition-colors">
            Submit Your Paper
          </Link>
        </div>
      </section>

    </div>
  )
}
