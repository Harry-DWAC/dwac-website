import type { Metadata } from 'next'
import LibraryDownloadWidget from '@/components/library/LibraryDownloadWidget'

export const metadata: Metadata = {
  title: '全球仲裁规则汇编（第四卷）| DWAC 专业图书馆',
  description: '全球主要仲裁机构规则综合参考。免费下载。',
}

export default function Vol4PageZhCn() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <div className="bg-navy-800 text-white py-3 px-4 flex items-center justify-between sticky top-0 z-10">
        <a href="/zh-cn/library" className="text-gold-400 hover:underline text-sm">← 返回图书馆</a>
        <span className="text-sm text-gray-300">DWAC 专业图书馆 · 第四卷</span>
      </div>

      <div className="max-w-4xl mx-auto w-full px-4 py-12">
        <div className="text-center mb-10">
          <h1 className="font-serif text-3xl lg:text-4xl font-bold text-navy-800 mb-2">
            全球仲裁规则汇编
          </h1>
          <p className="text-lg text-slate-500">第四卷 · Global Arbitration Rules Reference</p>
        </div>

        {/* Downloads — Limited-Time Free Access */}
        <LibraryDownloadWidget />

        <div className="bg-white rounded-xl p-8 shadow-sm prose max-w-none">
          <h2 className="font-serif text-2xl font-bold text-navy-800 mb-4">关于本卷</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            第四卷是主要国际仲裁机构规则的全面参考指南。
            汇编并比较了全球领先仲裁机构的程序框架，
            为从业者和学者提供一站式跨机构规则比较资源。
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            涵盖范围包括：ICC、LCIA、SIAC、HKIAC、CIETAC、UNCITRAL、SCC、ICSID
            以及亚洲、欧洲、美洲、非洲和中东的众多主要仲裁机构。
          </p>
          <div className="mt-6 p-4 bg-amber-50 border border-amber-200 rounded-lg">
            <p className="text-sm text-amber-800">
              <strong>开放获取：</strong>本卷可免费下载、分享与引用。
              引用时请注明来源为 DWAC 专业图书馆。
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
