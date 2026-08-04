import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Law Resources Library - Atlantis University Law School',
  description: 'Access legal documents, arbitration rules, and research materials for the digital world.',
}

const resources = [
  { icon: '📚', title: 'Arbitration Rules', desc: 'DWAC Arbitration Rules (2026 Edition) and comparative studies.', items: ['DWAC Arbitration Rules (EN/CN)', 'Yulin Arbitration Rules (2018 vs 2026)', 'UNCITRAL Arbitration Rules'] },
  { icon: '📜', title: 'Digital World Charter', desc: 'The constitutional document of the digital world legal system.', items: ['Full Text (EN/CN)', 'Commentary & Analysis', 'Amendment History'] },
  { icon: '📑', title: 'Model Clauses', desc: 'Standard arbitration clauses for digital world disputes.', items: ['Standard Model Clause', 'Short Form Clause', 'Digital World Special Clause'] },
  { icon: '⚖️', title: 'Legal Frameworks', desc: 'Legal frameworks for AI Agent arbitration.', items: ['AI Agent Responsibility Framework', 'Agent-Arbitrator Qualification System', 'Digital Evidence Guidelines'] },
  { icon: '🌐', title: 'International Treaties', desc: 'New York Convention and other enforcement treaties.', items: ['New York Convention (1958)', 'Singapore Convention (2019)', 'Digital Enforcement Protocol (Draft)'] },
  { icon: '🎓', title: 'Training Materials', desc: 'Course materials for 90-day and 180-day training programs.', items: ['Lecture Slides (PDF)', 'Case Studies', 'Assignments & Solutions'] },
]

export default function Resources() {
  return (
    <div className="flex flex-col min-h-screen">
      
      {/* Hero */}
      <section className="bg-gradient-to-br from-navy-800 to-navy-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gold-400 font-semibold mb-4 tracking-wide uppercase">Library</p>
          <h1 className="text-5xl font-bold mb-6">Law Resources Library</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Access legal documents, arbitration rules, and research materials for the digital world.
          </p>
        </div>
      </section>

      {/* Resources Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-navy-800 mb-4">Resource Categories</h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {resources.map(r => (
              <div key={r.title} className="bg-gray-50 rounded-xl p-8 hover:-translate-y-1 hover:shadow-lg transition-all">
                <div className="text-5xl mb-4">{r.icon}</div>
                <h3 className="text-xl font-bold text-navy-800 mb-3">{r.title}</h3>
                <p className="text-gray-600 mb-4">{r.desc}</p>
                <ul className="space-y-2">
                  {r.items.map(item => (
                    <li key={item} className="flex items-start text-gray-600 text-sm">
                      <span className="text-gold-500 mr-2 font-bold">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-navy-800 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Need Specific Resources?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Contact us if you need additional legal materials or research support.
          </p>
          <Link href="/contact/" className="inline-block px-8 py-3 bg-gold-500 text-white rounded font-semibold hover:bg-gold-600 transition-colors">
            Contact Us
          </Link>
        </div>
      </section>

    </div>
  )
}
