import type { Metadata } from 'next'
import LibraryDownloadWidget from '@/components/library/LibraryDownloadWidget'

export const metadata: Metadata = {
  title: 'AI Law Compendium (Volume III) | DWAC Professional Library',
  description: 'Legal frameworks and governance models for artificial intelligence in the digital age. Free download in EPUB, HTML, and Markdown formats.',
}


export default function Vol3Page() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <div className="bg-navy-800 text-white py-3 px-4 flex items-center justify-between sticky top-0 z-10">
        <a href="/library" className="text-gold-400 hover:underline text-sm">← Back to Library</a>
        <span className="text-sm text-gray-300">DWAC Professional Library · Volume III</span>
      </div>

      <div className="max-w-4xl mx-auto w-full px-4 py-12">
        {/* Title */}
        <div className="text-center mb-10">
          <h1 className="font-serif text-3xl lg:text-4xl font-bold text-navy-800 mb-2">
            AI Law Compendium
          </h1>
          <p className="text-lg text-slate-500">Volume III · 人工智能法律问题研究</p>
        </div>

        
        {/* Downloads — Limited-Time Free Access */}
        <LibraryDownloadWidget />

{/* Abstract */}
        <div className="bg-white rounded-xl p-8 shadow-sm prose max-w-none">
          <h2 className="font-serif text-2xl font-bold text-navy-800 mb-4">About This Volume</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Volume III of the Global Cyber Law Compendium addresses the rapidly evolving field of artificial intelligence law. 
            It examines the legal frameworks governing AI development and deployment, including regulatory approaches across 
            major jurisdictions, liability models for AI systems, ethical governance frameworks, and the intersection of 
            AI with existing legal doctrines.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            Key topics include: AI regulatory sandboxes, algorithmic transparency requirements, data governance for AI training, 
            intellectual property implications of AI-generated content, and the emerging concept of AI legal personality.
          </p>
          <div className="mt-6 p-4 bg-amber-50 border border-amber-200 rounded-lg">
            <p className="text-sm text-amber-800">
              <strong>Open Access:</strong> This volume is freely available for download, sharing, and citation. 
              Please attribute to DWAC Global Cyber Law Compendium when referencing.
            </p>
          </div>
        </div>

        {/* Table of Contents */}
        <div className="bg-white rounded-xl p-8 shadow-sm mt-8">
          <h2 className="font-serif text-2xl font-bold text-navy-800 mb-6">Table of Contents</h2>
          <ol className="space-y-3 list-decimal list-inside text-gray-700 marker:text-gold-500 marker:font-semibold">
            {[
              { chapter: 'AI 法律概览', desc: 'Artificial intelligence legal overview — definitions, scope, and foundational principles' },
              { chapter: 'AI 治理与监管', desc: 'AI governance and regulation — comparative regulatory frameworks across jurisdictions' },
              { chapter: 'AI 伦理与责任', desc: 'AI ethics and liability — ethical frameworks, accountability models, and tort liability' },
              { chapter: 'AI 与知识产权', desc: 'AI and intellectual property — patent, copyright, and trade secret issues in AI systems' },
              { chapter: 'AI 与数据保护', desc: 'AI and data protection — privacy, data governance, and cross-border data flows' },
              { chapter: 'AI 司法应用', desc: 'AI in judicial applications — automated decision-making, predictive justice, and court technology' },
              { chapter: 'AI 合同法', desc: 'AI contract law — smart contracts, automated negotiation, and contractual validity of AI agents' },
              { chapter: 'AI 侵权法', desc: 'AI tort law — liability allocation, causation, and damages in AI-related harms' },
              { chapter: 'AI 刑法', desc: 'AI criminal law — algorithmic crime, autonomous weapons, and criminal liability' },
              { chapter: 'AI 国际法', desc: 'AI and international law — cross-border governance, treaties, and global AI policy coordination' },
            ].map(({ chapter, desc }) => (
              <li key={chapter} className="pl-1">
                <span className="font-semibold text-navy-800">{chapter}</span>
                <span className="text-gray-500 text-sm ml-2">— {desc}</span>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </div>
  )
}
