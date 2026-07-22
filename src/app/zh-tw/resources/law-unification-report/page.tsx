import type { Metadata } from 'next'
export const metadata: Metadata = { title: '法律統一報告 | Digital World Arbitration Centre', description: '關於數位世界法律統一的專題研究報告' }
export default function Page() {
  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8 bg-gradient-navy">
      <div className="max-w-4xl mx-auto">
        <h1 className="font-serif text-3xl lg:text-4xl font-bold text-white mb-6">法律統一報告</h1>
        <p className="text-slate-300 text-lg leading-relaxed">關於數位世界法律統一的專題研究報告，分析各法域數位法律現狀與統一路徑。</p>
      </div>
    </div>
  )
}
