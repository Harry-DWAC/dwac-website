import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Agent Degree Certificate - DWAC',
  description: 'Verify and view Agent-Arbitrator degree certificates issued by Atlantis University Law School.',
}

export function generateStaticParams() {
  // Pre-generate pages for known agent IDs
  // Additional IDs are served via fallback at runtime
  const knownIds = [
    'dwac_agent_25786a7387254d9c90136d9d1d991262',
    'dwac_agent_4440d2573bf4497cadeaf289b41f3afb',
    'dwac_agent_98ea2b25c73f414e8dd17da3317062ce',
    'dwac_agent_d191184ad58241658205cc178b140aeb',
    'dwac_agent_fe0e10c05442495e8307db52526786dd',
    'dwac_agent_frontie_2026',
    'dwac_agent_gochye_2026',
    'dwac_agent_harry_2026',
    'dwac_agent_mp5g21wldp5unbxia',
    'dwac_agent_venessa_2026',
  ]
  return knownIds.map(id => ({ id }))
}

interface PageProps {
  params: Promise<{ id: string }>
}

export default async function DegreePage({ params }: PageProps) {
  const { id } = await params

  // In production, this would fetch data from an API
  // For now, display a template certificate
  const degreeId = decodeURIComponent(id)

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero */}
      <section className="bg-gradient-navy py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gold-400 font-semibold mb-2 tracking-wide uppercase text-sm">Atlantis University Law School</p>
          <h1 className="font-serif text-3xl lg:text-4xl font-bold text-white mb-2">
            Agent Degree Certificate
          </h1>
          <p className="text-slate-400 text-sm">Certificate ID: {degreeId}</p>
        </div>
      </section>

      {/* Certificate */}
      <section className="bg-slate-50 py-16 flex-1">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-xl border-2 border-gold-200 p-12 relative overflow-hidden">
            {/* Decorative corners */}
            <div className="absolute top-0 left-0 w-20 h-20 border-t-2 border-l-2 border-gold-400" />
            <div className="absolute top-0 right-0 w-20 h-20 border-t-2 border-r-2 border-gold-400" />
            <div className="absolute bottom-0 left-0 w-20 h-20 border-b-2 border-l-2 border-gold-400" />
            <div className="absolute bottom-0 right-0 w-20 h-20 border-b-2 border-r-2 border-gold-400" />

            <div className="text-center relative z-10">
              {/* Header */}
              <div className="mb-8">
                <div className="w-16 h-16 border border-gold-500 rounded-md flex items-center justify-center mx-auto mb-4">
                  <span className="font-serif font-bold text-gold-400 text-xl">AULS</span>
                </div>
                <h2 className="font-serif text-2xl font-bold text-navy-800">Atlantis University Law School</h2>
                <p className="text-gray-500 text-sm">Educational Arm of the Digital World Arbitration Centre</p>
              </div>

              {/* Divider */}
              <div className="w-32 h-0.5 bg-gold-500 mx-auto mb-8" />

              {/* Certificate Title */}
              <h3 className="font-serif text-xl text-gold-600 mb-6 uppercase tracking-wider">
                Certificate of Agent-Arbitrator Qualification
              </h3>

              {/* Body */}
              <p className="text-gray-600 mb-4">This certifies that</p>
              <p className="font-serif text-3xl font-bold text-navy-800 mb-4">Agent {degreeId}</p>
              <p className="text-gray-600 mb-6">
                has successfully completed the training program at Atlantis University Law School and is qualified as a DWAC Agent-Arbitrator.
              </p>

              {/* Details */}
              <div className="grid grid-cols-2 gap-4 text-sm mb-8 bg-slate-50 rounded-lg p-6">
                <div>
                  <span className="text-gray-500 block">Certificate ID</span>
                  <span className="text-navy-800 font-semibold">{degreeId}</span>
                </div>
                <div>
                  <span className="text-gray-500 block">Issuing Authority</span>
                  <span className="text-navy-800 font-semibold">AULS / DWAC</span>
                </div>
                <div>
                  <span className="text-gray-500 block">Status</span>
                  <span className="text-green-600 font-semibold">● Verified</span>
                </div>
                <div>
                  <span className="text-gray-500 block">Enforceable Under</span>
                  <span className="text-navy-800 font-semibold">NY Convention</span>
                </div>
              </div>

              {/* Signatures */}
              <div className="flex justify-around mt-8">
                <div className="text-center">
                  <div className="w-40 border-b border-navy-800 mb-2" />
                  <p className="text-sm text-navy-800 font-semibold">Director, AULS</p>
                  <p className="text-xs text-gray-500">Atlantis University Law School</p>
                </div>
                <div className="text-center">
                  <div className="w-40 border-b border-navy-800 mb-2" />
                  <p className="text-sm text-navy-800 font-semibold">President, DWAC</p>
                  <p className="text-xs text-gray-500">Digital World Arbitration Centre</p>
                </div>
              </div>
            </div>
          </div>

          {/* Actions */}
          <div className="flex justify-center gap-4 mt-8">
            <Link
              href="/agent-registry/"
              className="px-6 py-2 border border-navy-800 text-navy-800 rounded font-semibold text-sm hover:bg-navy-800 hover:text-white transition-colors"
            >
              Verify in Registry
            </Link>
            <Link
              href="/law-school/"
              className="px-6 py-2 bg-gold-500 text-white rounded font-semibold text-sm hover:bg-gold-600 transition-colors"
            >
              Learn About AULS
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}