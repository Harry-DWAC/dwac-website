import type { Metadata } from 'next'
export const metadata: Metadata = { title: '法律統一策略 | Digital World Arbitration Centre', description: '數位世界法律統一的策略框架' }
export default function Page() {
  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8 bg-gradient-navy">
      <div className="max-w-4xl mx-auto">
        <h1 className="font-serif text-3xl lg:text-4xl font-bold text-white mb-6">法律統一策略</h1>
        <p className="text-slate-300 text-lg leading-relaxed">數位世界法律統一的策略框架，提出跨法域協調與標準化的實施方案。</p>
      </div>
    </div>
  )
}
