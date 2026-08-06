import type { Metadata } from 'next'
import LibraryDownloadWidget from '@/components/library/LibraryDownloadWidget'

export const metadata: Metadata = {
  title: '全球网络法律汇编·第二卷 | DWAC 专业图书馆',
  description: '《全球网络法律汇编》第二卷：数字世界争议解决的进阶实践与案例研究。',
}

const chapters = [
  '第一章：数字仲裁中的进阶证据处理',
  '第二章：多法域挑战',
  '第三章：AI 辅助审议——标准与审核',
  '第四章：紧急仲裁员程序实务',
  '第五章：域名争议解决（UDRP/UDNDP）',
  '第六章：智能合约争议——技术仲裁',
  '第七章：数据隐私与跨境证据',
  '第八章：数字时代的裁决执行',
  '第九章：Agent-Club 行为准则——深入解读',
  '第十章：构建数字仲裁生态',
]

export default function Vol2ZhCnPage() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <div className="bg-navy-800 text-white py-3 px-4 flex items-center justify-between sticky top-0 z-10">
        <a href="/zh-cn/library" className="text-gold-400 hover:underline text-sm">← 返回图书馆</a>
        <span className="text-sm text-gray-300">DWAC 专业图书馆 · 第二卷</span>
      </div>

      <div className="max-w-4xl mx-auto w-full px-4 py-12">
        <div className="rounded-xl overflow-hidden shadow-xl mb-12">
          <picture>
            <source media="(min-width: 1024px)" srcSet="/images/library/vol2-cover-zh-1024.jpg" />
            <source media="(min-width: 768px)" srcSet="/images/library/vol2-cover-zh-512.jpg" />
            <img src="/images/library/vol2-cover-zh-400.jpg" alt="全球网络法律汇编第二卷封面" className="w-full h-auto" loading="eager" />
          </picture>
        </div>

        <div className="bg-white rounded-xl p-8 shadow-sm mb-12">
          <h2 className="font-serif text-2xl font-bold text-navy-800 mb-6">目录</h2>
          <ol className="space-y-3">
            {chapters.map((ch, i) => (
              <li key={i} className="flex gap-3 text-gray-700">
                <span className="text-gold-500 font-bold w-6 text-right">{i + 1}.</span>
                <span>{ch}</span>
              </li>
            ))}
          </ol>
        </div>


        {/* Downloads — Limited-Time Free Access */}
        <LibraryDownloadWidget />

        <div className="bg-white rounded-xl p-8 shadow-sm prose max-w-none">
          <h2 className="font-serif text-2xl font-bold text-navy-800 mb-4">第一章：进阶证据处理</h2>
          <p className="text-gray-600 leading-relaxed mb-4">[全书内容待添加，当前为占位文本。]</p>
          <p className="text-gray-400 text-sm italic">第二卷完整内容即将上线。</p>
        </div>
      </div>
    </div>
  )
}
