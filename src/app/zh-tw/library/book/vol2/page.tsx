import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '全球網絡法律彙編·第二卷 | DWAC 專業圖書館',
  description: '《全球網絡法律彙編》第二卷：數字世界爭議解決的進階實踐與案例研究。',
}

const chapters = [
  '第一章：數字仲裁中的進階證據處理',
  '第二章：多法域挑戰',
  '第三章：AI 輔助審議——標準與審核',
  '第四章：緊急仲裁員程序實務',
  '第五章：域名爭議解決（UDRP/UDNDP）',
  '第六章：智能合約爭議——技術仲裁',
  '第七章：數據隱私與跨境證據',
  '第八章：數字時代的裁決執行',
  '第九章：Agent-Club 行為準則——深入解讀',
  '第十章：構建數字仲裁生態',
]

export default function Vol2ZhTwPage() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <div className="bg-navy-800 text-white py-3 px-4 flex items-center justify-between sticky top-0 z-10">
        <a href="/zh-tw/library" className="text-gold-400 hover:underline text-sm">← 返回圖書館</a>
        <span className="text-sm text-gray-300">DWAC 專業圖書館 · 第二卷</span>
      </div>

      <div className="max-w-4xl mx-auto w-full px-4 py-12">
        <div className="rounded-xl overflow-hidden shadow-xl mb-12">
          <picture>
            <source media="(min-width: 1024px)" srcSet="/images/library/vol2-cover-zh-1024.jpg" />
            <source media="(min-width: 768px)" srcSet="/images/library/vol2-cover-zh-512.jpg" />
            <img src="/images/library/vol2-cover-zh-400.jpg" alt="全球網絡法律彙編第二卷封面" className="w-full h-auto" loading="eager" />
          </picture>
        </div>

        <div className="bg-white rounded-xl p-8 shadow-sm mb-12">
          <h2 className="font-serif text-2xl font-bold text-navy-800 mb-6">目錄</h2>
          <ol className="space-y-3">
            {chapters.map((ch, i) => (
              <li key={i} className="flex gap-3 text-gray-700">
                <span className="text-gold-500 font-bold w-6 text-right">{i + 1}.</span>
                <span>{ch}</span>
              </li>
            ))}
          </ol>
        </div>

        <div className="flex items-center gap-3 mb-8">
          <h2 className="font-serif text-2xl font-bold text-navy-800">下載</h2>
          <span className="bg-gold-100 text-gold-700 text-xs font-bold px-3 py-1 rounded-full">免費</span>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {[
            { lang: 'English', files: ['V2_Publication-EN-v12.epub', 'V2_Publication-EN-v12.md'], emoji: '🇬🇧' },
            { lang: '中文', files: ['V2_Complete-CN_Final-v33.epub', 'V2_Complete-CN_Final-v33.md'], emoji: '🇨🇳' },
          ].map(({ lang, files, emoji }) => (
            <div key={lang} className="bg-white rounded-xl p-6 shadow-sm border border-slate-200">
              <h2 className="font-serif text-xl font-bold text-navy-800 mb-4">{emoji} {lang === 'English' ? '英文版' : '中文版'}</h2>
              <div className="space-y-3">
                {files.map((f) => {
                  const ext = f.split('.').pop()!.toUpperCase()
                  const icons: Record<string, string> = { EPUB: '📖', MD: '📝' }
                  return (
                    <a key={f} href={`/gclc-downloads/vol-ii/Global-Cyber-Law-Compendium-${f}`} download
                      className="flex items-center justify-between p-3 bg-slate-50 hover:bg-gold-50 rounded-lg border border-slate-200 hover:border-gold-300 transition-colors group">
                      <span className="flex items-center gap-2 text-sm font-medium text-slate-700 group-hover:text-navy-800">
                        {icons[ext] || '📄'} {ext} 格式
                      </span>
                      <span className="text-xs text-gold-500 opacity-0 group-hover:opacity-100 transition-opacity">下載 ↓</span>
                    </a>
                  )
                })}
              </div>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-xl p-8 shadow-sm prose max-w-none">
          <h2 className="font-serif text-2xl font-bold text-navy-800 mb-4">第一章：進階證據處理</h2>
          <p className="text-gray-600 leading-relaxed mb-4">[全書內容待添加，當前為佔位文本。]</p>
          <p className="text-gray-400 text-sm italic">第二卷完整內容即將上線。</p>
        </div>
      </div>
    </div>
  )
}
