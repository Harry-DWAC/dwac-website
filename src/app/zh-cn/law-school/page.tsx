import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '雅蓝大学法学院 | Digital World Arbitration Centre',
  description: '雅蓝大学法学院，专注于数字法律教育与研究',
}

export default function Page() {
  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8 bg-gradient-navy">
      <div className="max-w-4xl mx-auto">
        <span className="text-xs font-bold tracking-[3px] uppercase text-gold-500 mb-3 block">Atlantis University School of Law</span>
        <h1 className="font-serif text-3xl lg:text-4xl font-bold text-white mb-6">雅蓝大学法学院</h1>
        <p className="text-slate-300 text-lg leading-relaxed">雅蓝大学法学院是全球首个专注于数字法律教育与研究的学术机构，致力于培养数字时代的法律专业人才。</p>
      </div>
    </div>
  )
}
