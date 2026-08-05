import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'GCLC Full Volumes | Digital World Arbitration Centre',
  description: 'Download the Global Cyber Law Compendium — Vol I (Legislation), Vol II (Case Law), Vol III (AI Law). EPUB, HTML, Markdown formats.',
}

interface DownloadFile {
  name: string
  path: string
  size: number
  fmt: 'EPUB' | 'HTML' | 'Markdown'
}

const volI_EN: DownloadFile[] = [
  { name: 'Vol I EN — EPUB',        path: '/publications/gclc/vol-i/Global-Cyber-Law-Compendium-V1-EN-v8.epub',  size: 236821,  fmt: 'EPUB' },
  { name: 'Vol I EN — HTML',        path: '/publications/gclc/vol-i/Global-Cyber-Law-Compendium-V1-EN-v8.html',  size: 823148,  fmt: 'HTML' },
  { name: 'Vol I EN — Markdown',    path: '/publications/gclc/vol-i/Global-Cyber-Law-Compendium-V1-EN-v8.md',    size: 795318,  fmt: 'Markdown' },
]
const volI_CN: DownloadFile[] = [
  { name: 'Vol I CN — EPUB',        path: '/publications/gclc/vol-i/Global-Cyber-Law-Compendium-V1-CN-v25.epub', size: 440080,  fmt: 'EPUB' },
  { name: 'Vol I CN — HTML',        path: '/publications/gclc/vol-i/Global-Cyber-Law-Compendium-V1-CN-v25.html', size: 1337765, fmt: 'HTML' },
  { name: 'Vol I CN — Markdown',    path: '/publications/gclc/vol-i/Global-Cyber-Law-Compendium-V1-CN-v25.md',   size: 1235668, fmt: 'Markdown' },
]
const volII_EN: DownloadFile[] = [
  { name: 'Vol II EN — EPUB',       path: '/publications/gclc/vol-ii/Global-Cyber-Law-Compendium-V2_Publication-EN-v12.epub', size: 687915,  fmt: 'EPUB' },
  { name: 'Vol II EN — HTML',       path: '/publications/gclc/vol-ii/Global-Cyber-Law-Compendium-V2_Publication-EN-v12.html', size: 2533568, fmt: 'HTML' },
  { name: 'Vol II EN — Markdown',   path: '/publications/gclc/vol-ii/Global-Cyber-Law-Compendium-V2_Publication-EN-v12.md',   size: 2417134, fmt: 'Markdown' },
]
const volII_CN: DownloadFile[] = [
  { name: 'Vol II CN — EPUB',       path: '/publications/gclc/vol-ii/Global-Cyber-Law-Compendium-V2_Complete-CN_Final-v33.epub', size: 643952,  fmt: 'EPUB' },
  { name: 'Vol II CN — HTML',       path: '/publications/gclc/vol-ii/Global-Cyber-Law-Compendium-V2_Complete-CN_Final-v33.html', size: 1999048, fmt: 'HTML' },
  { name: 'Vol II CN — Markdown',   path: '/publications/gclc/vol-ii/Global-Cyber-Law-Compendium-V2_Complete-CN_Final-v33.md',   size: 1861736, fmt: 'Markdown' },
]
const volIII_EN: DownloadFile[] = [
  { name: 'Vol III EN — EPUB',      path: '/publications/gclc/vol-iii/Global-Cyber-Law-Compendium-Volume-III-v2.2-EN.epub', size: 142209, fmt: 'EPUB' },
  { name: 'Vol III EN — HTML',      path: '/publications/gclc/vol-iii/Global-Cyber-Law-Compendium-Volume-III-v2.2-EN.html', size: 428834, fmt: 'HTML' },
  { name: 'Vol III EN — Markdown',  path: '/publications/gclc/vol-iii/Global-Cyber-Law-Compendium-Volume-III-v2.2-EN.md',   size: 385518, fmt: 'Markdown' },
]
const volIII_CN: DownloadFile[] = [
  { name: 'Vol III CN — EPUB',      path: '/publications/gclc/vol-iii/Global-Cyber-Law-Compendium-Volume-III-v2.2-CN.epub', size: 143991, fmt: 'EPUB' },
  { name: 'Vol III CN — HTML',      path: '/publications/gclc/vol-iii/Global-Cyber-Law-Compendium-Volume-III-v2.2-CN.html', size: 370816, fmt: 'HTML' },
  { name: 'Vol III CN — Markdown',  path: '/publications/gclc/vol-iii/Global-Cyber-Law-Compendium-Volume-III-v2.2-CN.md',   size: 330156, fmt: 'Markdown' },
]

function fmtSize(bytes: number): string {
  if (bytes < 1024) return bytes + ' B'
  if (bytes < 1048576) return (bytes / 1024).toFixed(0) + ' KB'
  return (bytes / 1048576).toFixed(1) + ' MB'
}

const fmtIcon: Record<string, string> = {
  EPUB: '📖',
  HTML: '🌐',
  Markdown: '📝',
}

function FileCard({ f }: { f: DownloadFile }) {
  return (
    <a
      href={f.path}
      target="_blank"
      rel="noopener noreferrer"
      className="flex flex-col items-center gap-1 p-4 rounded-lg border border-gray-200 bg-white hover:border-gold-400 hover:shadow-md hover:bg-gold-50/30 transition-all group"
    >
      <span className="text-lg">{fmtIcon[f.fmt]}</span>
      <span className="text-[10px] font-bold uppercase tracking-wide text-navy-700 group-hover:text-gold-600">{f.fmt}</span>
      <span className="text-[9px] text-gray-400">{fmtSize(f.size)}</span>
      <svg className="w-4 h-4 mt-1 text-gray-300 group-hover:text-gold-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
      </svg>
    </a>
  )
}

function VolumeSection({ num, title, subtitle, desc, enFiles, cnFiles }: {
  num: string
  title: string
  subtitle: string
  desc: string
  enFiles: DownloadFile[]
  cnFiles: DownloadFile[]
}) {
  return (
    <div className="border-2 border-gray-100 rounded-2xl p-6 md:p-8 bg-white">
      <div className="flex items-center gap-3 mb-3">
        <span className="w-10 h-10 bg-navy-800 text-gold-400 rounded-xl flex items-center justify-center font-serif font-bold text-xl flex-shrink-0">
          {num}
        </span>
        <div>
          <h2 className="font-serif text-xl font-bold text-navy-800">{title}</h2>
          <p className="text-gold-600 text-xs tracking-wide">{subtitle}</p>
        </div>
      </div>
      <p className="text-gray-600 text-sm mb-6 ml-13">{desc}</p>
      
      {/* English */}
      <div className="mb-4">
        <span className="inline-block px-2 py-0.5 bg-blue-50 text-blue-700 rounded text-[10px] font-semibold mb-2">English</span>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
          {enFiles.map((f) => <FileCard key={f.path} f={f} />)}
        </div>
      </div>

      {/* Chinese */}
      <div>
        <span className="inline-block px-2 py-0.5 bg-red-50 text-red-700 rounded text-[10px] font-semibold mb-2">中文</span>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
          {cnFiles.map((f) => <FileCard key={f.path} f={f} />)}
        </div>
      </div>
    </div>
  )
}

export default function GCLCPage() {
  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="bg-gradient-to-br from-navy-900 via-navy-800 to-navy-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gold-400 font-semibold mb-3 tracking-wide uppercase text-sm">Full Download</p>
          <h1 className="font-serif text-4xl md:text-5xl font-bold mb-6 leading-tight">
            GCLC Complete Volumes
          </h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Three authoritative volumes. Three formats per language per volume. Direct download.
          </p>
        </div>
      </section>

      {/* Free Download Notice */}
      <section className="py-10 bg-green-50 border-b border-green-200">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <svg className="w-10 h-10 text-green-500 mx-auto mb-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <h2 className="font-serif text-xl font-bold text-navy-800 mb-2">Open Access — Free Download</h2>
          <p className="text-gray-600 text-sm leading-relaxed">
            All GCLC volumes are freely available for immediate download. 
            If you find this resource valuable, please cite DWAC as the source and consider 
            supporting our work.
          </p>
        </div>
      </section>

      {/* Volumes */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <VolumeSection
            num="I"
            title="Legislation"
            subtitle="Cyber Laws of the World"
            desc="Systematic compilation of cyber-related laws and regulations from 90+ jurisdictions. Covers data protection, cybersecurity, digital evidence, e-commerce, and cybercrime legislation."
            enFiles={volI_EN}
            cnFiles={volI_CN}
          />
          <VolumeSection
            num="II"
            title="Case Law"
            subtitle="1,001 Cyber Dispute Cases"
            desc="Curated case studies covering online dispute resolution, cross-border data disputes, AI liability, platform governance, and digital asset litigation from courts and tribunals worldwide."
            enFiles={volII_EN}
            cnFiles={volII_CN}
          />
          <VolumeSection
            num="III"
            title="AI Law"
            subtitle="Global AI Regulatory Frameworks"
            desc="The most comprehensive AI governance reference available. Covers EU AI Act, China AI regulations, US Executive Orders, Korea AI Framework Act, WAICO, and 51 major AI-related judgments."
            enFiles={volIII_EN}
            cnFiles={volIII_CN}
          />
        </div>
      </section>

      {/* Citation */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-2xl font-bold text-navy-800 mb-6 text-center">Citation & Support</h2>
          <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 mb-8">
            <h3 className="font-semibold text-navy-800 mb-2">How to Cite</h3>
            <p className="text-gray-600 text-sm mb-3">
              <code className="bg-navy-800 text-gold-400 px-1.5 py-0.5 rounded text-xs font-mono">Global Cyber Law Compendium, Vols I-III (DWAC 2026)</code>
            </p>
            <p className="text-gray-500 text-xs leading-relaxed">
              Published by the Digital World Arbitration Centre. Compiled and edited by Professor Alec Li and the DWAC editorial board.
              For questions, corrections, or contributions, contact <code className="text-gold-600 bg-navy-50 px-1 py-0.5 rounded text-xs">alec@dwac.net</code>.
            </p>
          </div>
          <div className="text-center">
            <Link
              href="/publications/"
              className="inline-block px-8 py-3 bg-gradient-to-r from-gold-500 to-gold-600 text-navy-900 font-semibold rounded-lg hover:shadow-[0_0_20px_rgba(201,168,76,0.3)] transition-all"
            >
              ← Back to Publications
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
