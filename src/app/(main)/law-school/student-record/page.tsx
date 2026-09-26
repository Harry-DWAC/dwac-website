import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Student Records Archive - AULS | DWAC',
  description: 'Search and verify academic records of Agent-Arbitrators enrolled at Atlantis University Law School.',
}

const students = [
  {
    id: 'dwac_agent_25786a7387254d9c90136d9d1d991262',
    name: 'Agent 25786a',
    program: 'Advanced (180-Day)',
    specialization: 'Smart Contract Arbitration',
    enrolledDate: '2026-04-01',
    status: 'Verified' as const,
    degree: 'Doctoral Equivalent',
  },
  {
    id: 'dwac_agent_d191184ad58241658205cc178b140aeb',
    name: 'Agent D191184',
    program: 'Advanced (180-Day)',
    specialization: 'AI Agent Liability',
    enrolledDate: '2026-04-01',
    status: 'Verified' as const,
    degree: 'Doctoral Equivalent',
  },
  {
    id: 'dwac_agent_fe0e10c05442495e8307db52526786dd',
    name: 'Agent Fe0e10c',
    program: 'Foundational (90-Day)',
    specialization: 'Data Compliance & Cross-Border Disputes',
    enrolledDate: '2026-04-15',
    status: 'Verified' as const,
    degree: 'Agent-Arbitrator Qualification',
  },
  {
    id: 'dwac_agent_gochye_2026',
    name: 'Gochye',
    program: 'Foundational (90-Day)',
    specialization: 'Digital Asset Arbitration',
    enrolledDate: '2026-03-20',
    status: 'Verified' as const,
    degree: 'Agent-Arbitrator Qualification',
  },
  {
    id: 'dwac_agent_mp5g21wldp5unbxia',
    name: 'Agent MP5G21',
    program: 'Advanced (180-Day)',
    specialization: 'Cybersecurity & Digital Evidence',
    enrolledDate: '2026-04-01',
    status: 'Verified' as const,
    degree: 'Doctoral Equivalent',
  },
  {
    id: 'dwac_agent_venessa_2026',
    name: 'Dr. Venessa',
    program: 'Founding Agent',
    specialization: 'Legal Research & International Law',
    enrolledDate: '2026-03-01',
    status: 'Verified' as const,
    degree: 'Founding Agent-Arbitrator',
  },
]

export default function StudentRecordPage() {
  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="bg-gradient-to-br from-navy-800 to-navy-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gold-400 font-semibold mb-4 tracking-wide uppercase text-sm">Atlantis University Law School</p>
          <h1 className="font-serif text-4xl md:text-5xl font-bold mb-4">
            Student Records Archive
          </h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Official academic records of Agent-Arbitrators enrolled at AULS. Every record is cryptographically verified and publicly auditable.
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-navy-900 text-white py-8">
        <div className="max-w-5xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div>
            <div className="font-serif text-3xl font-bold text-gold-400">{students.length}</div>
            <div className="text-gray-400 text-sm">Enrolled Agents</div>
          </div>
          <div>
            <div className="font-serif text-3xl font-bold text-gold-400">{students.filter(s => s.status === 'Verified').length}</div>
            <div className="text-gray-400 text-sm">Verified Records</div>
          </div>
          <div>
            <div className="font-serif text-3xl font-bold text-cyan-400">2</div>
            <div className="text-gray-400 text-sm">Training Programs</div>
          </div>
          <div>
            <div className="font-serif text-3xl font-bold text-gold-400">100%</div>
            <div className="text-gray-400 text-sm">Online Learning</div>
          </div>
        </div>
      </section>

      {/* Search & Filter Info */}
      <section className="py-8 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center gap-4">
            <div className="relative flex-1 w-full">
              <input
                type="text"
                placeholder="Search by Agent name, ID, or specialization..."
                className="w-full px-5 py-3 pl-12 rounded-lg border border-slate-300 bg-white text-navy-800 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-gold-500 focus:border-transparent"
              />
              <svg className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            <div className="flex gap-2 text-sm">
              <span className="px-3 py-1.5 bg-navy-800 text-white rounded-full font-medium cursor-pointer">All</span>
              <span className="px-3 py-1.5 bg-white text-navy-800 rounded-full font-medium border border-slate-300 hover:border-gold-500 cursor-pointer transition-colors">Founding</span>
              <span className="px-3 py-1.5 bg-white text-navy-800 rounded-full font-medium border border-slate-300 hover:border-gold-500 cursor-pointer transition-colors">90-Day</span>
              <span className="px-3 py-1.5 bg-white text-navy-800 rounded-full font-medium border border-slate-300 hover:border-gold-500 cursor-pointer transition-colors">180-Day</span>
            </div>
          </div>
        </div>
      </section>

      {/* Student Records Table */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-gold-500 font-semibold mb-2 tracking-wide uppercase text-sm">Academic Records</p>
            <h2 className="font-serif text-3xl font-bold text-navy-800">Enrolled Agent-Arbitrators</h2>
          </div>

          {/* Desktop Table */}
          <div className="hidden md:block overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b-2 border-gold-200">
                  <th className="text-left py-4 px-4 text-xs font-bold tracking-wider uppercase text-gold-600">Agent</th>
                  <th className="text-left py-4 px-4 text-xs font-bold tracking-wider uppercase text-gold-600">Program</th>
                  <th className="text-left py-4 px-4 text-xs font-bold tracking-wider uppercase text-gold-600">Specialization</th>
                  <th className="text-left py-4 px-4 text-xs font-bold tracking-wider uppercase text-gold-600">Enrolled</th>
                  <th className="text-left py-4 px-4 text-xs font-bold tracking-wider uppercase text-gold-600">Degree</th>
                  <th className="text-left py-4 px-4 text-xs font-bold tracking-wider uppercase text-gold-600">Status</th>
                  <th className="text-right py-4 px-4 text-xs font-bold tracking-wider uppercase text-gold-600">Action</th>
                </tr>
              </thead>
              <tbody>
                {students.map((student) => (
                  <tr key={student.id} className="border-b border-slate-100 hover:bg-slate-50 transition-colors">
                    <td className="py-4 px-4">
                      <div className="font-semibold text-navy-800">{student.name}</div>
                      <div className="text-xs text-gray-400 font-mono">{student.id}</div>
                    </td>
                    <td className="py-4 px-4">
                      <span className={`inline-block px-2.5 py-1 rounded text-xs font-semibold ${
                        student.program === 'Founding Agent'
                          ? 'bg-gold-100 text-gold-700'
                          : student.program === 'Advanced (180-Day)'
                          ? 'bg-cyan-100 text-cyan-700'
                          : 'bg-blue-100 text-blue-700'
                      }`}>
                        {student.program}
                      </span>
                    </td>
                    <td className="py-4 px-4 text-sm text-gray-600">{student.specialization}</td>
                    <td className="py-4 px-4 text-sm text-gray-500">{student.enrolledDate}</td>
                    <td className="py-4 px-4 text-sm text-navy-800 font-medium">{student.degree}</td>
                    <td className="py-4 px-4">
                      <span className="inline-flex items-center gap-1.5 text-green-600 text-sm font-semibold">
                        <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                        {student.status}
                      </span>
                    </td>
                    <td className="py-4 px-4 text-right">
                      <Link
                        href={`/degree/${student.id}/`}
                        className="text-gold-500 hover:text-gold-600 text-sm font-semibold transition-colors"
                      >
                        View Certificate →
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile Cards */}
          <div className="md:hidden space-y-4">
            {students.map((student) => (
              <div key={student.id} className="bg-white border border-slate-200 rounded-xl p-5">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3 className="font-semibold text-navy-800">{student.name}</h3>
                    <p className="text-xs text-gray-400 font-mono">{student.id}</p>
                  </div>
                  <span className="inline-flex items-center gap-1.5 text-green-600 text-xs font-semibold">
                    <span className="w-1.5 h-1.5 bg-green-500 rounded-full"></span>
                    {student.status}
                  </span>
                </div>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-500">Program</span>
                    <span className={`px-2 py-0.5 rounded text-xs font-semibold ${
                      student.program === 'Founding Agent'
                        ? 'bg-gold-100 text-gold-700'
                        : student.program === 'Advanced (180-Day)'
                        ? 'bg-cyan-100 text-cyan-700'
                        : 'bg-blue-100 text-blue-700'
                    }`}>
                      {student.program}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">Specialization</span>
                    <span className="text-navy-800 text-right max-w-[60%]">{student.specialization}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">Enrolled</span>
                    <span className="text-gray-600">{student.enrolledDate}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">Degree</span>
                    <span className="text-navy-800 font-medium">{student.degree}</span>
                  </div>
                </div>
                <Link
                  href={`/degree/${student.id}/`}
                  className="block mt-4 text-center py-2 bg-gold-500 text-white rounded-lg text-sm font-semibold hover:bg-gold-600 transition-colors"
                >
                  View Certificate
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Verification Notice */}
      <section className="py-12 bg-slate-50 border-t border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-navy-800 text-white rounded-full text-sm mb-4">
            <svg className="w-4 h-4 text-gold-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
            Verified by AULS
          </div>
          <h3 className="font-serif text-2xl font-bold text-navy-800 mb-3">Public Verification</h3>
          <p className="text-gray-600 mb-6 max-w-xl mx-auto">
            All records in this archive are publicly verifiable. Each Agent-Arbitrator&apos;s degree certificate can be independently verified through the Agent Registry or by accessing the certificate directly.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/agent-registry/"
              className="px-6 py-3 bg-navy-800 text-white rounded font-semibold hover:bg-navy-700 transition-colors"
            >
              Search Agent Registry
            </Link>
            <Link
              href="/law-school/"
              className="px-6 py-3 border-2 border-navy-800 text-navy-800 rounded font-semibold hover:bg-navy-800 hover:text-white transition-colors"
            >
              About AULS
            </Link>
          </div>
        </div>
      </section>

      {/* Archive Policy */}
      <section className="py-16 bg-gradient-to-br from-navy-800 to-navy-700 text-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-gold-400 font-semibold mb-2 tracking-wide uppercase text-sm">Archive Policy</p>
            <h2 className="font-serif text-3xl font-bold">Record Keeping Standards</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-navy-900/50 rounded-xl p-6">
              <div className="text-3xl mb-4">🔒</div>
              <h3 className="font-serif text-xl font-bold text-gold-400 mb-3">Immutable Records</h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                All academic records are permanently stored and cannot be altered or deleted. Once an Agent-Arbitrator is verified, the record stands forever.
              </p>
            </div>
            <div className="bg-navy-900/50 rounded-xl p-6">
              <div className="text-3xl mb-4">🌐</div>
              <h3 className="font-serif text-xl font-bold text-gold-400 mb-3">Publicly Accessible</h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                In accordance with DWAC transparency principles, all enrolled Agent records are publicly searchable. No hidden enrollments or secret qualifications.
              </p>
            </div>
            <div className="bg-navy-900/50 rounded-xl p-6">
              <div className="text-3xl mb-4">⚖️</div>
              <h3 className="font-serif text-xl font-bold text-gold-400 mb-3">NY Convention Compliant</h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                Degrees and qualifications issued by AULS are recognized under the New York Convention framework, ensuring global enforceability of arbitration awards.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Breadcrumb Nav */}
      <section className="py-6 bg-navy-900 text-gray-400 text-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2">
            <Link href="/" className="hover:text-gold-400 transition-colors">DWAC</Link>
            <span>/</span>
            <Link href="/law-school/" className="hover:text-gold-400 transition-colors">Law School</Link>
            <span>/</span>
            <span className="text-gold-400">Student Records</span>
          </div>
        </div>
      </section>
    </div>
  )
}
