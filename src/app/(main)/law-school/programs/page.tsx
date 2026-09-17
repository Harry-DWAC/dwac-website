import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Training Programs - Atlantis University Law School',
  description: 'DWAC Law School training programs for Agent-Arbitrators. Foundational (90-day) and Advanced (180-day) tracks.',
}

const programs = [
  {
    title: 'Foundational Track',
    duration: '90 Days',
    level: 'Entry Level',
    desc: 'A 90-day intensive program covering the basics of digital world arbitration, legal framework, and AI Agent operation. Suitable for legal professionals entering the digital arbitration field.',
    outcomes: [
      'Understand DWAC Arbitration Rules',
      'Operate AI Agent-Arbitrators',
      'Handle basic digital evidence',
      'Conduct online hearings',
    ],
  },
  {
    title: 'Advanced Track',
    duration: '180 Days',
    level: 'Advanced',
    desc: 'A 180-day advanced program for experienced arbitrators. Covers complex cross-border disputes, emergency arbitrator procedures, and AI-assisted deliberation standards.',
    outcomes: [
      'Handle multi-jurisdictional disputes',
      'Lead emergency arbitrator cases',
      'Review AI-generated deliberations',
      'Train junior Agent-Arbitrators',
    ],
  },
]

export default function ProgramsPage() {
  return (
    <div className="flex flex-col">
      {/* Breadcrumb */}
      <div className="bg-gray-50 border-b">
        <div className="max-w-7xl mx-auto px-4 py-3 text-sm">
          <Link href="/law-school" className="text-gold-500 hover:underline">Law School</Link>
          <span className="mx-2 text-gray-400">/</span>
          <span className="text-gray-600">Programs</span>
        </div>
      </div>

      {/* Hero */}
      <section className="bg-gradient-to-br from-navy-800 to-navy-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gold-400 font-semibold mb-4 tracking-wide uppercase">AULS Training</p>
          <h1 className="font-serif text-5xl font-bold mb-6">Training Programs</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Two tracks to certify as a DWAC Agent-Arbitrator. Choose your path.
          </p>
        </div>
      </section>

      {/* Programs */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-10">
          {programs.map((p) => (
            <div key={p.title} className="border border-gray-200 rounded-xl overflow-hidden shadow-sm">
              <div className="bg-navy-700 text-white p-6">
                <p className="text-gold-400 text-sm font-semibold mb-1">{p.level}</p>
                <h2 className="font-serif text-2xl font-bold">{p.title}</h2>
                <p className="text-gray-300 text-sm mt-1">{p.duration}</p>
              </div>
              <div className="p-6">
                <p className="text-gray-600 mb-6">{p.desc}</p>
                <h3 className="font-semibold text-navy-800 mb-3">Learning Outcomes</h3>
                <ul className="space-y-2">
                  {p.outcomes.map((o) => (
                    <li key={o} className="flex gap-2 text-gray-700 text-sm">
                      <span className="text-gold-500">✓</span>
                      {o}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-navy-50">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="font-serif text-3xl font-bold text-navy-800 mb-4">Ready to Apply?</h2>
          <p className="text-gray-600 mb-8">Start your journey to become a certified Agent-Arbitrator.</p>
          <Link
            href="/how-to-apply/"
            className="inline-block bg-gold-500 text-navy-900 px-8 py-3 rounded-lg font-semibold hover:bg-gold-400 transition-colors"
          >
            Apply Now
          </Link>
        </div>
      </section>
    </div>
  )
}
