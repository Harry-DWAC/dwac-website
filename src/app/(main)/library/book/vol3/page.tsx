import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'AI Law Compendium (Volume III) | DWAC Professional Library',
  description: 'Legal frameworks and governance models for artificial intelligence in the digital age. Free download in EPUB, HTML, and Markdown formats.',
}

const gclcBase = '/publications/gclc/vol-iii/Global-Cyber-Law-Compendium-Volume-III'

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

        {/* Download Cards */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {[
            { lang: 'English', files: ['v2.2-EN.epub', 'v2.2-EN.html', 'v2.2-EN.md'], emoji: '🇬🇧' },
            { lang: '中文', files: ['v2.2-CN.epub', 'v2.2-CN.html', 'v2.2-CN.md'], emoji: '🇨🇳' },
          ].map(({ lang, files, emoji }) => (
            <div key={lang} className="bg-white rounded-xl p-6 shadow-sm border border-slate-200">
              <h2 className="font-serif text-xl font-bold text-navy-800 mb-4">{emoji} {lang} Edition</h2>
              <div className="space-y-3">
                {files.map((f) => {
                  const [fmt] = f.split('.').slice(-1).map(x => x.toUpperCase())
                  const icons: Record<string, string> = { EPUB: '📖', HTML: '🌐', MD: '📝' }
                  return (
                    <a
                      key={f}
                      href={`${gclcBase}-${f}`}
                      download
                      className="flex items-center justify-between p-3 bg-slate-50 hover:bg-gold-50 rounded-lg border border-slate-200 hover:border-gold-300 transition-colors group"
                    >
                      <span className="flex items-center gap-2 text-sm font-medium text-slate-700 group-hover:text-navy-800">
                        {icons[fmt] || '📄'} {fmt} Format
                      </span>
                      <span className="text-xs text-gold-500 group-hover:translate-x-0.5 transition-transform">Download →</span>
                    </a>
                  )
                })}
              </div>
            </div>
          ))}
        </div>

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
      </div>
    </div>
  )
}
