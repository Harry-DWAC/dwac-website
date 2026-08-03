import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'GCLC 全卷下載 | 數位世界仲裁中心',
  description: '下載全球網路法彙編 — 第一卷（立法）、第二卷（案例）、第三卷（AI法）。EPUB、HTML、Markdown 格式。',
}

interface DownloadFile {
  name: string
  path: string
  size: number
  fmt: 'EPUB' | 'HTML' | 'Markdown'
}

const volI_EN: DownloadFile[] = [
  { name: 'Vol I EN — EPUB',        path: '/publications/gclc/vol-i/Global-Cyber-Law-Compendium-V1-EN-v8.epub',  size: 236821,  fmt: 'EPUB' },  { name: 'Vol I EN — Markdown',    path: '/publications/gclc/vol-i/Global-Cyber-Law-Compendium-V1-EN-v8.md',    size: 795318,  fmt: 'Markdown' },
]
const volI_CN: DownloadFile[] = [
  { name: 'Vol I 中文 — EPUB',       path: '/publications/gclc/vol-i/Global-Cyber-Law-Compendium-V1-CN-v25.epub', size: 440080,  fmt: 'EPUB' },  { name: 'Vol I 中文 — Markdown',   path: '/publications/gclc/vol-i/Global-Cyber-Law-Compendium-V1-CN-v25.md',   size: 1235668, fmt: 'Markdown' },
]
const volII_EN: DownloadFile[] = [
  { name: 'Vol II EN — EPUB',       path: '/publications/gclc/vol-ii/Global-Cyber-Law-Compendium-V2_Publication-EN-v12.epub', size: 687915,  fmt: 'EPUB' },  { name: 'Vol II EN — Markdown',   path: '/publications/gclc/vol-ii/Global-Cyber-Law-Compendium-V2_Publication-EN-v12.md',   size: 2417134, fmt: 'Markdown' },
]
const volII_CN: DownloadFile[] = [
  { name: 'Vol II 中文 — EPUB',      path: '/publications/gclc/vol-ii/Global-Cyber-Law-Compendium-V2_Complete-CN_Final-v33.epub', size: 643952,  fmt: 'EPUB' },  { name: 'Vol II 中文 — Markdown',  path: '/publications/gclc/vol-ii/Global-Cyber-Law-Compendium-V2_Complete-CN_Final-v33.md',   size: 1861736, fmt: 'Markdown' },
]
const volIII_EN: DownloadFile[] = [
  { name: 'Vol III EN — EPUB',      path: '/publications/gclc/vol-iii/Global-Cyber-Law-Compendium-Volume-III-v2.2-EN.epub', size: 142209, fmt: 'EPUB' },  { name: 'Vol III EN — Markdown',  path: '/publications/gclc/vol-iii/Global-Cyber-Law-Compendium-Volume-III-v2.2-EN.md',   size: 385518, fmt: 'Markdown' },
]
const volIII_CN: DownloadFile[] = [
  { name: 'Vol III 中文 — EPUB',     path: '/publications/gclc/vol-iii/Global-Cyber-Law-Compendium-Volume-III-v2.2-CN.epub', size: 143991, fmt: 'EPUB' },  { name: 'Vol III 中文 — Markdown', path: '/publications/gclc/vol-iii/Global-Cyber-Law-Compendium-Volume-III-v2.2-CN.md',   size: 330156, fmt: 'Markdown' },
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

export default function GCLCPageZHTW() {
  return (
    <div className="flex flex-col">
      <section className="bg-gradient-to-br from-navy-900 via-navy-800 to-navy-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gold-400 font-semibold mb-3 tracking-wide uppercase text-sm">全部下載</p>
          <h1 className="font-serif text-4xl md:text-5xl font-bold mb-6 leading-tight">
            GCLC 全卷下載
          </h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            三卷權威彙編。每卷三種格式，中英文雙語，免費開放下載。
          </p>
        </div>
      </section>

      <section className="py-10 bg-green-50 border-b border-green-200">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-xl font-bold text-navy-800 mb-2">開放存取 · 免費下載</h2>
          <p className="text-gray-600 text-sm leading-relaxed">
            全部 GCLC 卷冊免費開放下載。如對您的研究或工作有所助益，請註明引用來源為 DWAC。
          </p>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          {/* Vol I */}
          <div className="border-2 border-gray-100 rounded-2xl p-6 md:p-8 bg-white">
            <div className="flex items-center gap-3 mb-3">
              <span className="w-10 h-10 bg-navy-800 text-gold-400 rounded-xl flex items-center justify-center font-serif font-bold text-xl flex-shrink-0">I</span>
              <div>
                <h2 className="font-serif text-xl font-bold text-navy-800">立法卷</h2>
                <p className="text-gold-600 text-xs tracking-wide">世界各國網路空間立法</p>
              </div>
            </div>
            <p className="text-gray-600 text-sm mb-6 ml-13">系統彙編 90 餘個國家和地區的網路法律與法規，涵蓋資料保護、網路安全、數位證據、電子商務和網路犯罪立法。</p>
            <div className="mb-4">
              <span className="inline-block px-2 py-0.5 bg-blue-50 text-blue-700 rounded text-[10px] font-semibold mb-2">English</span>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-2">{volI_EN.map(f => <FileCard key={f.path} f={f} />)}</div>
            </div>
            <div>
              <span className="inline-block px-2 py-0.5 bg-red-50 text-red-700 rounded text-[10px] font-semibold mb-2">中文</span>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-2">{volI_CN.map(f => <FileCard key={f.path} f={f} />)}</div>
            </div>
          </div>

          {/* Vol II */}
          <div className="border-2 border-gray-100 rounded-2xl p-6 md:p-8 bg-white">
            <div className="flex items-center gap-3 mb-3">
              <span className="w-10 h-10 bg-navy-800 text-gold-400 rounded-xl flex items-center justify-center font-serif font-bold text-xl flex-shrink-0">II</span>
              <div>
                <h2 className="font-serif text-xl font-bold text-navy-800">案例卷</h2>
                <p className="text-gold-600 text-xs tracking-wide">1001 涉網糾紛案例</p>
              </div>
            </div>
            <p className="text-gray-600 text-sm mb-6 ml-13">精選全球案例，涵蓋線上爭議解決、跨境資料糾紛、AI 責任、平台治理和數位資產訴訟。</p>
            <div className="mb-4">
              <span className="inline-block px-2 py-0.5 bg-blue-50 text-blue-700 rounded text-[10px] font-semibold mb-2">English</span>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-2">{volII_EN.map(f => <FileCard key={f.path} f={f} />)}</div>
            </div>
            <div>
              <span className="inline-block px-2 py-0.5 bg-red-50 text-red-700 rounded text-[10px] font-semibold mb-2">中文</span>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-2">{volII_CN.map(f => <FileCard key={f.path} f={f} />)}</div>
            </div>
          </div>

          {/* Vol III */}
          <div className="border-2 border-gray-100 rounded-2xl p-6 md:p-8 bg-white">
            <div className="flex items-center gap-3 mb-3">
              <span className="w-10 h-10 bg-navy-800 text-gold-400 rounded-xl flex items-center justify-center font-serif font-bold text-xl flex-shrink-0">III</span>
              <div>
                <h2 className="font-serif text-xl font-bold text-navy-800">AI 法卷</h2>
                <p className="text-gold-600 text-xs tracking-wide">全球人工智慧監管框架</p>
              </div>
            </div>
            <p className="text-gray-600 text-sm mb-6 ml-13">最全面的 AI 治理參考，涵蓋歐盟 AI 法案、中國 AI 法規、美國行政令、韓國 AI 框架法、WAICO 及 51 個 AI 相關判決。</p>
            <div className="mb-4">
              <span className="inline-block px-2 py-0.5 bg-blue-50 text-blue-700 rounded text-[10px] font-semibold mb-2">English</span>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-2">{volIII_EN.map(f => <FileCard key={f.path} f={f} />)}</div>
            </div>
            <div>
              <span className="inline-block px-2 py-0.5 bg-red-50 text-red-700 rounded text-[10px] font-semibold mb-2">中文</span>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-2">{volIII_CN.map(f => <FileCard key={f.path} f={f} />)}</div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-2xl font-bold text-navy-800 mb-6 text-center">引用與支援</h2>
          <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 mb-8">
            <h3 className="font-semibold text-navy-800 mb-2">引用格式</h3>
            <p className="text-gray-600 text-sm mb-3">
              <code className="bg-navy-800 text-gold-400 px-1.5 py-0.5 rounded text-xs font-mono">《全球網路法彙編》卷一至三（DWAC 2026）</code>
            </p>
            <p className="text-gray-500 text-xs leading-relaxed">
              數位世界仲裁中心出版。由 Professor Alec Li 和 DWAC 編委會編撰。
              如有問題、更正或貢獻，請聯繫 <code className="text-gold-600 bg-navy-50 px-1 py-0.5 rounded text-xs">alec@dwac.net</code>。
            </p>
          </div>
          <div className="text-center">
            <Link href="/zh-tw/publications/" className="inline-block px-8 py-3 bg-gradient-to-r from-gold-500 to-gold-600 text-navy-900 font-semibold rounded-lg hover:shadow-[0_0_20px_rgba(201,168,76,0.3)] transition-all">
              ← 返回出版物
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
