import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'DWAC Professional Library (Volume 1) | Digital World Arbitration Centre',
  description: 'Foundational concepts and framework for digital world arbitration.',
}

const chapters = [
  'Chapter 1: Introduction to Digital World Arbitration',
  'Chapter 2: Legal Framework for Digital Disputes',
  'Chapter 3: AI Agents as Arbitrators — Legal Personality',
  'Chapter 4: Evidence in Digital World Arbitration',
  'Chapter 5: Online Hearing Procedures',
  'Chapter 6: Cross-Border Digital Dispute Resolution',
  'Chapter 7: Enforcement of Digital Arbitral Awards',
  'Chapter 8: Ethics for Agent-Arbitrators',
  'Chapter 9: The DWAC Arbitration Rules — An Overview',
  'Chapter 10: Future Directions',
]

export default function Vol1Page() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      {/* Top bar */}
      <div className="bg-navy-800 text-white py-3 px-4 flex items-center justify-between sticky top-0 z-10">
        <a href="/library" className="text-gold-400 hover:underline text-sm">← Back to Library</a>
        <span className="text-sm text-gray-300">DWAC Professional Library · Volume 1</span>
      </div>

      <div className="max-w-4xl mx-auto w-full px-4 py-12">
        {/* Cover */}
        <div className="rounded-xl overflow-hidden shadow-xl mb-12">
          <picture>
            <source media="(min-width: 1024px)" srcSet="/images/library/vol1-cover-1024.jpg" type="image/jpeg" />
            <source media="(min-width: 768px)" srcSet="/images/library/vol1-cover-512.jpg" type="image/jpeg" />
            <img
              src="/images/library/vol1-cover-400.jpg"
              alt="DWAC Professional Library Volume 1 Cover"
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
            { lang: 'English', files: ['V1-EN-v8.epub', 'V1-EN-v8.md'], emoji: '🇬🇧' },
            { lang: '中文', files: ['V1-CN-v25.epub', 'V1-CN-v25.md'], emoji: '🇨🇳' },
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
                      href={`/publications/gclc/vol-i/Global-Cyber-Law-Compendium-${f}`}
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
          <h2 className="font-serif text-2xl font-bold text-navy-800 mb-4">Chapter 1: Introduction</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            [Full book content to be added. This is a placeholder for the complete Volume 1 text.]
          </p>
          <p className="text-gray-400 text-sm italic">
            Content from the deployed Volume 1 reader will be inserted here.
          </p>
        </div>
      </div>
    </div>
  )
}
