import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '全球网络法律汇编·第一卷 | Digital World Arbitration Centre',
  description: '《全球网络法律汇编》第一卷收录了数字法律领域的核心法律法规、典型案例和学术研究成果，为数字世界法律实践提供权威参考。',
}

export default function Page() {
  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8 bg-gradient-navy">
      <div className="max-w-4xl mx-auto">
        <span className="text-xs font-bold tracking-[3px] uppercase text-gold-500 mb-3 block">Volume</span>
        <h1 className="font-serif text-3xl lg:text-4xl font-bold text-white mb-6">全球网络法律汇编</h1>
        <p className="text-slate-300 text-lg leading-relaxed">《全球网络法律汇编》第一卷收录了数字法律领域的核心法律法规、典型案例和学术研究成果，为数字世界法律实践提供权威参考。</p>
      </div>
    </div>
  )
}
