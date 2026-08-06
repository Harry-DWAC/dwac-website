import type { Metadata } from 'next'
import LibraryDownloadWidget from '@/components/library/LibraryDownloadWidget'

export const metadata: Metadata = {
  title: '人工智慧法律彙編（第三卷）| DWAC 專業圖書館',
  description: '人工智慧在數位時代的法律框架與治理模式。免費下載 EPUB、HTML、Markdown 格式。',
}


export default function Vol3PageZhTw() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <div className="bg-navy-800 text-white py-3 px-4 flex items-center justify-between sticky top-0 z-10">
        <a href="/zh-tw/library" className="text-gold-400 hover:underline text-sm">← 返回圖書館</a>
        <span className="text-sm text-gray-300">DWAC 專業圖書館 · 第三卷</span>
      </div>

      <div className="max-w-4xl mx-auto w-full px-4 py-12">
        <div className="text-center mb-10">
          <h1 className="font-serif text-3xl lg:text-4xl font-bold text-navy-800 mb-2">
            人工智慧法律彙編
          </h1>
          <p className="text-lg text-slate-500">第三卷 · AI Law Compendium</p>
        </div>

        {/* Downloads — Limited-Time Free Access */}
        <LibraryDownloadWidget />

        <div className="bg-white rounded-xl p-8 shadow-sm prose max-w-none">
          <h2 className="font-serif text-2xl font-bold text-navy-800 mb-4">關於本卷</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            《全球網路法彙編》第三卷聚焦快速發展的人工智慧法律領域。
            涵蓋主要法域的AI監管框架、AI系統責任模型、倫理治理框架、
            以及AI與現有法律體系的交叉問題。
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            關鍵議題包括：AI監管沙盒、演算法透明度要求、AI訓練資料治理、
            AI生成內容的智慧財產權影響、以及新興的AI法律人格概念。
          </p>
          <div className="mt-6 p-4 bg-amber-50 border border-amber-200 rounded-lg">
            <p className="text-sm text-amber-800">
              <strong>開放獲取：</strong>本卷可免費下載、分享與引用。
              引用時請註明來源為 DWAC《全球網路法彙編》。
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
