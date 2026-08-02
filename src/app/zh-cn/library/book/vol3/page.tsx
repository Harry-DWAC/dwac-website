import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '人工智能法律汇编（第三卷）| DWAC 专业图书馆',
  description: '人工智能在数字时代的法律框架与治理模式。免费下载 EPUB、HTML、Markdown 格式。',
}

const gclcBase = '/publications/gclc/vol-iii/Global-Cyber-Law-Compendium-Volume-III'

export default function Vol3PageZhCn() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <div className="bg-navy-800 text-white py-3 px-4 flex items-center justify-between sticky top-0 z-10">
        <a href="/zh-cn/library" className="text-gold-400 hover:underline text-sm">← 返回图书馆</a>
        <span className="text-sm text-gray-300">DWAC 专业图书馆 · 第三卷</span>
      </div>

      <div className="max-w-4xl mx-auto w-full px-4 py-12">
        <div className="text-center mb-10">
          <h1 className="font-serif text-3xl lg:text-4xl font-bold text-navy-800 mb-2">
            人工智能法律汇编
          </h1>
          <p className="text-lg text-slate-500">第三卷 · AI Law Compendium</p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {[
            { lang: 'English', files: ['v2.2-EN.epub', 'v2.2-EN.md'], emoji: '🇬🇧' },
            { lang: '中文', files: ['v2.2-CN.epub', 'v2.2-CN.md'], emoji: '🇨🇳' },
          ].map(({ lang, files, emoji }) => (
            <div key={lang} className="bg-white rounded-xl p-6 shadow-sm border border-slate-200">
              <h2 className="font-serif text-xl font-bold text-navy-800 mb-4">{emoji} {lang} 版</h2>
              <div className="space-y-3">
                {files.map((f) => {
                  const fmt = f.split('.').slice(-1)[0].toUpperCase()
                  const icons: Record<string, string> = { EPUB: '📖', HTML: '🌐', MD: '📝' }
                  return (
                    <a
                      key={f}
                      href={`${gclcBase}-${f}`}
                      download
                      className="flex items-center justify-between p-3 bg-slate-50 hover:bg-gold-50 rounded-lg border border-slate-200 hover:border-gold-300 transition-colors group"
                    >
                      <span className="flex items-center gap-2 text-sm font-medium text-slate-700 group-hover:text-navy-800">
                        {icons[fmt] || '📄'} {fmt} 格式
                      </span>
                      <span className="text-xs text-gold-500 group-hover:translate-x-0.5 transition-transform">下载 →</span>
                    </a>
                  )
                })}
              </div>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-xl p-8 shadow-sm prose max-w-none">
          <h2 className="font-serif text-2xl font-bold text-navy-800 mb-4">关于本卷</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            《全球网络法汇编》第三卷聚焦快速发展的人工智能法律领域。
            涵盖主要法域的AI监管框架、AI系统责任模型、伦理治理框架、
            以及AI与现有法律体系的交叉问题。
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            关键议题包括：AI监管沙盒、算法透明度要求、AI训练数据治理、
            AI生成内容的知识产权影响、以及新兴的AI法律人格概念。
          </p>
          <div className="mt-6 p-4 bg-amber-50 border border-amber-200 rounded-lg">
            <p className="text-sm text-amber-800">
              <strong>开放获取：</strong>本卷可免费下载、分享与引用。
              引用时请注明来源为 DWAC《全球网络法汇编》。
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
