import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'DWAC Professional Library (Volume 2) | Digital World Arbitration Centre',
  description: 'Advanced practices and case studies in digital world dispute resolution.',
}

const chapters = [
  'Chapter 1: Advanced Evidence Handling in Digital Arbitration',
  'Chapter 2: Multi-Jurisdictional Challenges',
  'Chapter 3: AI-Assisted Deliberation — Standards & Review',
  'Chapter 4: Emergency Arbitrator Procedures in Practice',
  'Chapter 5: Domain Name Dispute Resolution (UDRP/UDNDP)',
  'Chapter 6: Smart Contract Disputes — Technical Arbitration',
  'Chapter 7: Data Privacy & Cross-Border Evidence',
  'Chapter 8: Enforcement in the Digital Age',
  'Chapter 9: Agent-Club Code of Conduct — Deep Dive',
  'Chapter 10: Building the Digital Arbitration Ecosystem',
]

export default function Vol2Page() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      {/* Top bar */}
      <div className="bg-navy-800 text-white py-3 px-4 flex items-center justify-between sticky top-0 z-10">
        <a href="/library" className="text-gold-400 hover:underline text-sm">← Back to Library</a>
        <span className="text-sm text-gray-300">DWAC Professional Library · Volume 2</span>
      </div>

      <div className="max-w-4xl mx-auto w-full px-4 py-12">
        {/* Cover */}
        <div className="rounded-xl overflow-hidden shadow-xl mb-12">
          <picture>
            <source media="(min-width: 1024px)" srcSet="/images/library/vol2-cover-en-1024.jpg" type="image/jpeg" />
            <source media="(min-width: 768px)" srcSet="/images/library/vol2-cover-en-512.jpg" type="image/jpeg" />
            <img
              src="/images/library/vol2-cover-en-400.jpg"
              alt="DWAC Professional Library Volume 2 Cover"
              className="w-full h-auto"
              loading="eager"
            />
          </picture>
        </div>

        {/* TOC */}
        <div className="bg-white rounded-xl p-8 shadow-sm mb-12">
          <h2 className="font-serif text-2xl font-bold text-navy-800 mb-6">Table of Contents</h2>
          <ol className="space-y-3">
            {chapters.map((ch, i) => (
              <li key={i} className="flex gap-3 text-gray-700">
                <span className="text-gold-500 font-bold w-6 text-right">{i + 1}.</span>
                <span>{ch}</span>
              </li>
            ))}
          </ol>
        </div>

        {/* Downloads */}
        <div className="flex items-center gap-3 mb-8">
          <h2 className="font-serif text-2xl font-bold text-navy-800">Downloads</h2>
          <span className="bg-gold-100 text-gold-700 text-xs font-bold px-3 py-1 rounded-full">Free</span>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {[
            { lang: 'English', files: ['V2_Publication-EN-v12.epub', 'V2_Publication-EN-v12.md'], emoji: '🇬🇧' },
            { lang: '中文', files: ['V2_Complete-CN_Final-v33.epub', 'V2_Complete-CN_Final-v33.md'], emoji: '🇨🇳' },
          ].map(({ lang, files, emoji }) => (
            <div key={lang} className="bg-white rounded-xl p-6 shadow-sm border border-slate-200">
              <h2 className="font-serif text-xl font-bold text-navy-800 mb-4">{emoji} {lang} Edition</h2>
              <div className="space-y-3">
                {files.map((f) => {
                  const ext = f.split('.').pop()!.toUpperCase()
                  const icons: Record<string, string> = { EPUB: '📖', MD: '📝' }
                  return (
                    <a
                      key={f}
                      href={`/gclc-downloads/vol-ii/Global-Cyber-Law-Compendium-${f}`}
                      download
                      className="flex items-center justify-between p-3 bg-slate-50 hover:bg-gold-50 rounded-lg border border-slate-200 hover:border-gold-300 transition-colors group"
                    >
                      <span className="flex items-center gap-2 text-sm font-medium text-slate-700 group-hover:text-navy-800">
                        {icons[ext] || '📄'} {ext} Format
                      </span>
                      <span className="text-xs text-gold-500 opacity-0 group-hover:opacity-100 transition-opacity">Download ↓</span>
                    </a>
                  )
                })}
              </div>
            </div>
          ))}
        </div>

        {/* Placeholder content */}
        <div className="bg-white rounded-xl p-8 shadow-sm prose max-w-none">
          <h2 className="font-serif text-2xl font-bold text-navy-800 mb-4">Chapter 1: Advanced Evidence Handling</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            [Full book content to be added. This is a placeholder for the complete Volume 2 text.]
          </p>
          <p className="text-gray-400 text-sm italic">
            Content from the deployed Volume 2 reader will be inserted here.
          </p>
        </div>
      </div>
    </div>
  )
}
