import type { Metadata } from 'next'
import LibraryDownloadWidget from '@/components/library/LibraryDownloadWidget'

export const metadata: Metadata = {
  title: '全球仲裁規則彙編（第四卷）| DWAC 專業圖書館',
  description: '全球主要仲裁機構規則綜合參考。免費下載。',
}

export default function Vol4PageZhTw() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <div className="bg-navy-800 text-white py-3 px-4 flex items-center justify-between sticky top-0 z-10">
        <a href="/zh-tw/library" className="text-gold-400 hover:underline text-sm">← 返回圖書館</a>
        <span className="text-sm text-gray-300">DWAC 專業圖書館 · 第四卷</span>
      </div>

      <div className="max-w-4xl mx-auto w-full px-4 py-12">
        <div className="text-center mb-10">
          <h1 className="font-serif text-3xl lg:text-4xl font-bold text-navy-800 mb-2">
            全球仲裁規則彙編
          </h1>
          <p className="text-lg text-slate-500">第四卷 · Global Arbitration Rules Reference</p>
        </div>

        {/* Downloads — Limited-Time Free Access */}
        <LibraryDownloadWidget />

        <div className="bg-white rounded-xl p-8 shadow-sm prose max-w-none">
          <h2 className="font-serif text-2xl font-bold text-navy-800 mb-4">關於本卷</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            第四卷是主要國際仲裁機構規則的全面參考指南。
            彙編並比較了全球領先仲裁機構的程序框架，
            為從業者和學者提供一站式跨機構規則比較資源。
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            涵蓋範圍包括：ICC、LCIA、SIAC、HKIAC、CIETAC、UNCITRAL、SCC、ICSID
            以及亞洲、歐洲、美洲、非洲和中東的眾多主要仲裁機構。
          </p>
          <div className="mt-6 p-4 bg-amber-50 border border-amber-200 rounded-lg">
            <p className="text-sm text-amber-800">
              <strong>開放獲取：</strong>本卷可免費下載、分享與引用。
              引用時請註明來源為 DWAC 專業圖書館。
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
