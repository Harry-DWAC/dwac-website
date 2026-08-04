import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'GCLC 全卷下载 | 数字世界仲裁中心',
  description: '下载全球网络法汇编 — 第一卷（立法）、第二卷（案例）、第三卷（AI法）。EPUB、HTML、Markdown 格式。',
}

interface DownloadFile {
  name: string
  path: string
  size: number
  fmt: 'EPUB' | 'HTML' | 'Markdown'
}

const volI_EN: DownloadFile[] = [
  { name: 'Vol I EN — EPUB',        path: '/gclc-downloads/vol-i/Global-Cyber-Law-Compendium-V1-EN-v8.epub',  size: 236821,  fmt: 'EPUB' },  { name: 'Vol I EN — Markdown',    path: '/gclc-downloads/vol-i/Global-Cyber-Law-Compendium-V1-EN-v8.md',    size: 795318,  fmt: 'Markdown' },
]
const volI_CN: DownloadFile[] = [
  { name: 'Vol I 中文 — EPUB',       path: '/gclc-downloads/vol-i/Global-Cyber-Law-Compendium-V1-CN-v25.epub', size: 440080,  fmt: 'EPUB' },  { name: 'Vol I 中文 — Markdown',   path: '/gclc-downloads/vol-i/Global-Cyber-Law-Compendium-V1-CN-v25.md',   size: 1235668, fmt: 'Markdown' },
]
const volII_EN: DownloadFile[] = [
  { name: 'Vol II EN — EPUB',       path: '/gclc-downloads/vol-ii/Global-Cyber-Law-Compendium-V2_Publication-EN-v12.epub', size: 687915,  fmt: 'EPUB' },  { name: 'Vol II EN — Markdown',   path: '/gclc-downloads/vol-ii/Global-Cyber-Law-Compendium-V2_Publication-EN-v12.md',   size: 2417134, fmt: 'Markdown' },
]
const volII_CN: DownloadFile[] = [
  { name: 'Vol II 中文 — EPUB',      path: '/gclc-downloads/vol-ii/Global-Cyber-Law-Compendium-V2_Complete-CN_Final-v33.epub', size: 643952,  fmt: 'EPUB' },  { name: 'Vol II 中文 — Markdown',  path: '/gclc-downloads/vol-ii/Global-Cyber-Law-Compendium-V2_Complete-CN_Final-v33.md',   size: 1861736, fmt: 'Markdown' },
]
const volIII_EN: DownloadFile[] = [
  { name: 'Vol III EN — EPUB',      path: '/gclc-downloads/vol-iii/Global-Cyber-Law-Compendium-Volume-III-v2.2-EN.epub', size: 142209, fmt: 'EPUB' },  { name: 'Vol III EN — Markdown',  path: '/gclc-downloads/vol-iii/Global-Cyber-Law-Compendium-Volume-III-v2.2-EN.md',   size: 385518, fmt: 'Markdown' },
]
const volIII_CN: DownloadFile[] = [
  { name: 'Vol III 中文 — EPUB',     path: '/gclc-downloads/vol-iii/Global-Cyber-Law-Compendium-Volume-III-v2.2-CN.epub', size: 143991, fmt: 'EPUB' },  { name: 'Vol III 中文 — Markdown', path: '/gclc-downloads/vol-iii/Global-Cyber-Law-Compendium-Volume-III-v2.2-CN.md',   size: 330156, fmt: 'Markdown' },
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

export default function GCLCPageZH() {
  return (
    <div className="flex flex-col">
      <section className="bg-gradient-to-br from-navy-900 via-navy-800 to-navy-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gold-400 font-semibold mb-3 tracking-wide uppercase text-sm">全部下载</p>
          <h1 className="font-serif text-4xl md:text-5xl font-bold mb-6 leading-tight">
            GCLC 全卷下载
          </h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            三卷权威汇编。每卷三种格式，中英文双语，免费开放下载。
          </p>
        </div>
      </section>

      <section className="py-10 bg-green-50 border-b border-green-200">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-xl font-bold text-navy-800 mb-2">开放获取 · 免费下载</h2>
          <p className="text-gray-600 text-sm leading-relaxed">
            全部 GCLC 卷册免费开放下载。如对您的研究或工作有所助益，请注明引用来源为 DWAC。
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
                <p className="text-gold-600 text-xs tracking-wide">世界各国网络空间立法</p>
              </div>
            </div>
            <p className="text-gray-600 text-sm mb-6 ml-13">系统汇编 90 余个国家和地区的网络法律与法规，涵盖数据保护、网络安全、数字证据、电子商务和网络犯罪立法。</p>
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
                <p className="text-gold-600 text-xs tracking-wide">1001 涉网纠纷案例</p>
              </div>
            </div>
            <p className="text-gray-600 text-sm mb-6 ml-13">精选全球案例，涵盖在线争议解决、跨境数据纠纷、AI 责任、平台治理和数字资产诉讼。</p>
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
                <p className="text-gold-600 text-xs tracking-wide">全球人工智能监管框架</p>
              </div>
            </div>
            <p className="text-gray-600 text-sm mb-6 ml-13">最全面的 AI 治理参考，涵盖欧盟 AI 法案、中国 AI 法规、美国行政令、韩国 AI 框架法、WAICO 及 51 个 AI 相关判决。</p>
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
          <h2 className="font-serif text-2xl font-bold text-navy-800 mb-6 text-center">引用与支持</h2>
          <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 mb-8">
            <h3 className="font-semibold text-navy-800 mb-2">引用格式</h3>
            <p className="text-gray-600 text-sm mb-3">
              <code className="bg-navy-800 text-gold-400 px-1.5 py-0.5 rounded text-xs font-mono">《全球网络法汇编》卷一至三（DWAC 2026）</code>
            </p>
            <p className="text-gray-500 text-xs leading-relaxed">
              数字世界仲裁中心出版。由 Professor Alec Li 和 DWAC 编委会编撰。
              如有问题、更正或贡献，请联系 <code className="text-gold-600 bg-navy-50 px-1 py-0.5 rounded text-xs">alec@dwac.net</code>。
            </p>
          </div>
          <div className="text-center">
            <Link href="/zh-cn/publications/" className="inline-block px-8 py-3 bg-gradient-to-r from-gold-500 to-gold-600 text-navy-900 font-semibold rounded-lg hover:shadow-[0_0_20px_rgba(201,168,76,0.3)] transition-all">
              ← 返回出版物
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
