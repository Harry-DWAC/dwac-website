import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'DWAC Professional Library (Volume 2) - DWAC',
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
        <div className="rounded-xl overflow-hidden shadow-xl mb-12 relative">
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
          <div className="absolute inset-0 bg-navy-900/10 backdrop-blur-[2px] pointer-events-none" />
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
