import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '雅藍大學法學院 | Digital World Arbitration Centre',
  description: '雅藍大學法學院，專注於數位法律教育與研究',
}

export default function Page() {
  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8 bg-gradient-navy">
      <div className="max-w-4xl mx-auto">
        <span className="text-xs font-bold tracking-[3px] uppercase text-gold-500 mb-3 block">Atlantis University School of Law</span>
        <h1 className="font-serif text-3xl lg:text-4xl font-bold text-white mb-6">雅藍大學法學院</h1>
        <p className="text-slate-300 text-lg leading-relaxed">雅藍大學法學院是全球首個專注於數位法律教育與研究的學術機構，致力於培養數位時代的法律專業人才。</p>
      </div>
    </div>
  )
}
