import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Degree Certificates | Digital World Arbitration Centre',
  description: 'Verify Agent-Arbitrator degree certificates issued by Atlantis University School of Law (AULS).',
}

const degrees = [
  { id: 'dwac_agent_venessa_2026', name: 'Dr. Venessa', title: 'Agent-Arbitrator Degree', date: '2026' },
  { id: 'dwac_agent_gochye_2026', name: 'Dr. Gochye', title: 'Agent-Arbitrator Degree', date: '2026' },
  { id: 'dwac_agent_25786a7387254d9c90136d9d1d991262', name: 'Agent 25786a73', title: 'Agent-Arbitrator Degree', date: '2026' },
  { id: 'dwac_agent_d191184ad58241658205cc178b140aeb', name: 'Agent d19118', title: 'Agent-Arbitrator Degree', date: '2026' },
  { id: 'dwac_agent_fe0e10c05442495e8307db52526786dd', name: 'Agent fe0e10', title: 'Agent-Arbitrator Degree', date: '2026' },
  { id: 'dwac_agent_mp5g21wldp5unbxia', name: 'Agent mp5g21', title: 'Agent-Arbitrator Degree', date: '2026' },
]

export default function DegreeIndexPage() {
  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="bg-gradient-to-br from-navy-800 to-navy-700 text-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gold-400 font-semibold mb-4 tracking-wide uppercase">Atlantis University School of Law</p>
          <h1 className="font-serif text-5xl md:text-6xl font-bold mb-6">
            Degree<br />Certificates
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Verify Agent-Arbitrator degree certificates issued by AULS. Each certificate represents the successful completion of the Agent-Arbitrator training program.
          </p>
        </div>
      </section>

      {/* Certificate List */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl font-bold text-navy-800 mb-8 text-center">
            Issued Certificates
          </h2>
          <p className="text-gray-500 text-center mb-12">
            {degrees.length} certificates issued by Atlantis University School of Law
          </p>
          <div className="grid gap-4">
            {degrees.map((deg) => (
              <Link
                key={deg.id}
                href={`/degree/${deg.id}`}
                className="flex items-center justify-between bg-gray-50 border border-gray-200 rounded-lg p-6 hover:shadow-md hover:border-gold-300 transition-all"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-navy-100 rounded-full flex items-center justify-center text-navy-600 font-bold text-lg">
                    {deg.name.charAt(0)}
                  </div>
                  <div>
                    <h3 className="font-serif text-lg font-bold text-navy-800">{deg.name}</h3>
                    <p className="text-sm text-gray-500">{deg.title} · {deg.date}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-gold-500 font-semibold text-sm">
                  View Certificate
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
