import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '學位證書 | Digital World Arbitration Centre',
  description: '驗證由亞特蘭提斯大學法學院（AULS）頒發的 Agent-Arbitrator 學位證書。',
}

const degrees = [
  { id: 'dwac_agent_venessa_2026', name: 'Dr. Venessa', title: 'Agent-Arbitrator 學位', date: '2026' },
  { id: 'dwac_agent_gochye_2026', name: 'Dr. Gochye', title: 'Agent-Arbitrator 學位', date: '2026' },
  { id: 'dwac_agent_25786a7387254d9c90136d9d1d991262', name: 'Agent 25786a73', title: 'Agent-Arbitrator 學位', date: '2026' },
  { id: 'dwac_agent_d191184ad58241658205cc178b140aeb', name: 'Agent d19118', title: 'Agent-Arbitrator 學位', date: '2026' },
  { id: 'dwac_agent_fe0e10c05442495e8307db52526786dd', name: 'Agent fe0e10', title: 'Agent-Arbitrator 學位', date: '2026' },
  { id: 'dwac_agent_mp5g21wldp5unbxia', name: 'Agent mp5g21', title: 'Agent-Arbitrator 學位', date: '2026' },
]

export default function DegreeIndexPageZhTw() {
  return (
    <div className="flex flex-col">
      <section className="bg-gradient-to-br from-navy-800 to-navy-700 text-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gold-400 font-semibold mb-4 tracking-wide uppercase">亞特蘭提斯大學法學院</p>
          <h1 className="font-serif text-5xl md:text-6xl font-bold mb-6">學位<br />證書</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            驗證由 AULS 頒發的 Agent-Arbitrator 學位證書。每張證書代表成功完成 Agent-Arbitrator 培訓項目。
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl font-bold text-navy-800 mb-8 text-center">已頒發證書</h2>
          <p className="text-gray-500 text-center mb-12">
            由亞特蘭提斯大學法學院頒發 {degrees.length} 張證書
          </p>
          <div className="grid gap-4">
            {degrees.map((deg) => (
              <Link
                key={deg.id}
                href={`/zh-tw/degree/${deg.id}`}
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
                  檢視證書
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
