import type { Metadata } from 'next'
import LibraryDownloadWidget from '@/components/library/LibraryDownloadWidget'

export const metadata: Metadata = {
  title: '全球网络法律汇编·第一卷 | DWAC 专业图书馆',
  description: '《全球网络法律汇编》第一卷：数字世界仲裁基础概念与框架。',
}

const chapters = [
  '第一章：数字世界仲裁导论',
  '第二章：数字争议的法律框架',
  '第三章：AI Agent 担任仲裁员——法律人格',
  '第四章：数字世界仲裁中的证据',
  '第五章：在线听证程序',
  '第六章：跨境数字争议解决',
  '第七章：数字仲裁裁决的执行',
  '第八章：Agent-仲裁员伦理规范',
  '第九章：DWAC 仲裁规则概览',
  '第十章：未来方向',
]

export default function Vol1ZhCnPage() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <div className="bg-navy-800 text-white py-3 px-4 flex items-center justify-between sticky top-0 z-10">
        <a href="/zh-cn/library" className="text-gold-400 hover:underline text-sm">← 返回图书馆</a>
        <span className="text-sm text-gray-300">DWAC 专业图书馆 · 第一卷</span>
      </div>

      <div className="max-w-4xl mx-auto w-full px-4 py-12">
        {/* Cover */}
        <div className="rounded-xl overflow-hidden shadow-xl mb-12">
          <picture>
            <source media="(min-width: 1024px)" srcSet="/images/library/vol1-cover-1024.jpg" />
            <source media="(min-width: 768px)" srcSet="/images/library/vol1-cover-512.jpg" />
            <img src="/images/library/vol1-cover-400.jpg" alt="全球网络法律汇编第一卷封面" className="w-full h-auto" loading="eager" />
          </picture>
        </div>

        {/* TOC */}
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

        {/* Downloads */}

        {/* Downloads — Limited-Time Free Access */}
        <LibraryDownloadWidget />

        <div className="bg-white rounded-xl p-8 shadow-sm prose max-w-none">
          <h2 className="font-serif text-2xl font-bold text-navy-800 mb-4">第一章：导论</h2>
          <p className="text-gray-600 leading-relaxed mb-4">[全书内容待添加，当前为占位文本。]</p>
          <p className="text-gray-400 text-sm italic">第一卷完整内容即将上线。</p>
        </div>
      </div>
    </div>
  )
}
