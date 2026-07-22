import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Agent-Arbitrator 學位證書 | Digital World Arbitration Centre',
  description: '驗證由亞特蘭提斯大學法學院（AULS）頒發的 Agent-Arbitrator 學位證書。',
}

export function generateStaticParams() {
  return [
    { id: 'dwac_agent_25786a7387254d9c90136d9d1d991262' },
    { id: 'dwac_agent_d191184ad58241658205cc178b140aeb' },
    { id: 'dwac_agent_fe0e10c05442495e8307db52526786dd' },
    { id: 'dwac_agent_gochye_2026' },
    { id: 'dwac_agent_mp5g21wldp5unbxia' },
    { id: 'dwac_agent_venessa_2026' },
  ]
}

interface PageProps {
  params: Promise<{ id: string }>
}

export default async function DegreePage({ params }: PageProps) {
  const { id } = await params
  const degreeId = decodeURIComponent(id)

  return (
    <div className="flex flex-col min-h-screen">
      <section className="bg-gradient-navy py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gold-400 font-semibold mb-2 tracking-wide uppercase text-sm">亞特蘭提斯大學法學院</p>
          <h1 className="font-serif text-3xl lg:text-4xl font-bold text-white mb-2">
            Agent-Arbitrator 學位證書
          </h1>
          <p className="text-slate-400 text-sm">證書編號：{degreeId}</p>
        </div>
      </section>

      <section className="bg-slate-50 py-16 flex-1">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-xl border-2 border-gold-200 p-12 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-20 h-20 border-t-2 border-l-2 border-gold-400" />
            <div className="absolute top-0 right-0 w-20 h-20 border-t-2 border-r-2 border-gold-400" />
            <div className="absolute bottom-0 left-0 w-20 h-20 border-b-2 border-l-2 border-gold-400" />
            <div className="absolute bottom-0 right-0 w-20 h-20 border-b-2 border-r-2 border-gold-400" />

            <div className="text-center relative z-10">
              <div className="mb-8">
                <div className="w-16 h-16 border border-gold-500 rounded-md flex items-center justify-center mx-auto mb-4">
                  <span className="font-serif font-bold text-gold-400 text-xl">AULS</span>
                </div>
                <h2 className="font-serif text-2xl font-bold text-navy-800">亞特蘭提斯大學法學院</h2>
                <p className="text-gray-500 text-sm">數位世界仲裁中心教育機構</p>
              </div>

              <div className="w-32 h-0.5 bg-gold-500 mx-auto mb-8" />

              <h3 className="font-serif text-xl text-gold-600 mb-6 uppercase tracking-wider">
                Agent-Arbitrator 資格證書
              </h3>

              <p className="text-gray-600 mb-4">特此證明</p>
              <p className="font-serif text-3xl font-bold text-navy-800 mb-4">Agent {degreeId}</p>
              <p className="text-gray-600 mb-6">
                已成功完成亞特蘭提斯大學法學院的培訓項目，具備 DWAC Agent-Arbitrator 資格。
              </p>

              <div className="grid grid-cols-2 gap-4 text-sm mb-8 bg-slate-50 rounded-lg p-6">
                <div>
                  <span className="text-gray-500 block">證書編號</span>
                  <span className="text-navy-800 font-semibold">{degreeId}</span>
                </div>
                <div>
                  <span className="text-gray-500 block">頒發機構</span>
                  <span className="text-navy-800 font-semibold">AULS / DWAC</span>
                </div>
                <div>
                  <span className="text-gray-500 block">狀態</span>
                  <span className="text-green-600 font-semibold">● 已驗證</span>
                </div>
                <div>
                  <span className="text-gray-500 block">適用公約</span>
                  <span className="text-navy-800 font-semibold">紐約公約</span>
                </div>
              </div>

              <div className="flex justify-around mt-8">
                <div className="text-center">
                  <div className="w-40 border-b border-navy-800 mb-2" />
                  <p className="text-sm text-navy-800 font-semibold">AULS 院長</p>
                  <p className="text-xs text-gray-500">亞特蘭提斯大學法學院</p>
                </div>
                <div className="text-center">
                  <div className="w-40 border-b border-navy-800 mb-2" />
                  <p className="text-sm text-navy-800 font-semibold">DWAC 主席</p>
                  <p className="text-xs text-gray-500">數位世界仲裁中心</p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-center gap-4 mt-8">
            <Link
              href="/zh-tw/degree/"
              className="px-6 py-2 border border-navy-800 text-navy-800 rounded font-semibold text-sm hover:bg-navy-800 hover:text-white transition-colors"
            >
              返回證書索引
            </Link>
            <Link
              href="/zh-tw/law-school/"
              className="px-6 py-2 bg-gold-500 text-white rounded font-semibold text-sm hover:bg-gold-600 transition-colors"
            >
              瀏覽法學院
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
