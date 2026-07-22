import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '全球網絡法律彙編·第貳卷 | Digital World Arbitration Centre',
  description: '《全球網絡法律彙編》第貳卷收錄了數位法律領域的核心法律法規、典型案例和學術研究成果，為數位世界法律實踐提供權威參考。',
}

export default function Page() {
  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8 bg-gradient-navy">
      <div className="max-w-4xl mx-auto">
        <span className="text-xs font-bold tracking-[3px] uppercase text-gold-500 mb-3 block">Volume</span>
        <h1 className="font-serif text-3xl lg:text-4xl font-bold text-white mb-6">全球網絡法律彙編</h1>
        <p className="text-slate-300 text-lg leading-relaxed">《全球網絡法律彙編》第貳卷收錄了數位法律領域的核心法律法規、典型案例和學術研究成果，為數位世界法律實踐提供權威參考。</p>
      </div>
    </div>
  )
}
