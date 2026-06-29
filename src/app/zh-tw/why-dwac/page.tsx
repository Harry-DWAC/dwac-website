import type { Metadata } from 'next'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: '為什麼選擇 DWAC - 數位世界仲裁中心',
  description: '將 DWAC 與國際主要仲裁機構進行比較。瞭解為何我們提供更快、更實惠的 AI 輔助爭議解決服務。',
}

export default function WhyDWAC() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar lang="zh-tw" />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-navy-800 to-navy-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-6">為什麼選擇 DWAC？</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            比較各仲裁機構，幫助您為爭議選擇最佳解決方案。
          </p>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-navy-800 mb-4">DWAC 與其他仲裁機構對比</h2>
            <p className="text-xl text-gray-600">
              瞭解我們與國際主要仲裁機構的對比情況。
            </p>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-navy-800 text-white">
                  <th className="p-4 text-left font-semibold">標準</th>
                  <th className="p-4 text-center font-semibold bg-gold-500 text-white">DWAC</th>
                  <th className="p-4 text-center font-semibold">ICC</th>
                  <th className="p-4 text-center font-semibold">SIAC</th>
                  <th className="p-4 text-center font-semibold">WIPO</th>
                  <th className="p-4 text-center font-semibold">HKIAC</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr className="hover:bg-gray-50">
                  <td className="p-4 font-semibold text-navy-800">線上仲裁</td>
                  <td className="p-4 text-center bg-gold-50 font-semibold text-green-600">✔ 100% 線上</td>
                  <td className="p-4 text-center text-yellow-600">⚠ 部分</td>
                  <td className="p-4 text-center text-yellow-600">⚠ 部分</td>
                  <td className="p-4 text-center text-red-500">✘ 有限</td>
                  <td className="p-4 text-center text-yellow-600">⚠ 部分</td>
                </tr>
                <tr className="hover:bg-gray-50 bg-gray-50">
                  <td className="p-4 font-semibold text-navy-800">平均時長</td>
                  <td className="p-4 text-center bg-gold-50 font-semibold text-green-600">30-90 天</td>
                  <td className="p-4 text-center">12-18 個月</td>
                  <td className="p-4 text-center">6-12 個月</td>
                  <td className="p-4 text-center">12-18 個月</td>
                  <td className="p-4 text-center">9-15 個月</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="p-4 font-semibold text-navy-800">成本節省</td>
                  <td className="p-4 text-center bg-gold-50 font-semibold text-green-600">節省 50-70%</td>
                  <td className="p-4 text-center">高</td>
                  <td className="p-4 text-center">中高</td>
                  <td className="p-4 text-center">高</td>
                  <td className="p-4 text-center">中高</td>
                </tr>
                <tr className="hover:bg-gray-50 bg-gray-50">
                  <td className="p-4 font-semibold text-navy-800">AI 輔助</td>
                  <td className="p-4 text-center bg-gold-50 font-semibold text-green-600">✔ 是</td>
                  <td className="p-4 text-center text-red-500">✘ 否</td>
                  <td className="p-4 text-center text-red-500">✘ 否</td>
                  <td className="p-4 text-center text-red-500">✘ 否</td>
                  <td className="p-4 text-center text-red-500">✘ 否</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="p-4 font-semibold text-navy-800">多語言支援</td>
                  <td className="p-4 text-center bg-gold-50 font-semibold text-green-600">✔ 20+ 語言</td>
                  <td className="p-4 text-center text-green-600">✔ 多語言</td>
                  <td className="p-4 text-center text-yellow-600">⚠ 有限</td>
                  <td className="p-4 text-center text-green-600">✔ 多語言</td>
                  <td className="p-4 text-center text-yellow-600">⚠ 有限</td>
                </tr>
                <tr className="hover:bg-gray-50 bg-gray-50">
                  <td className="p-4 font-semibold text-navy-800">紐約公約執行</td>
                  <td className="p-4 text-center bg-gold-50 font-semibold text-green-600">✔ 是</td>
                  <td className="p-4 text-center text-green-600">✔ 是</td>
                  <td className="p-4 text-center text-green-600">✔ 是</td>
                  <td className="p-4 text-center text-green-600">✔ 是</td>
                  <td className="p-4 text-center text-green-600">✔ 是</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="p-4 font-semibold text-navy-800">緊急仲裁員</td>
                  <td className="p-4 text-center bg-gold-50 font-semibold text-green-600">✔ 48小時決定</td>
                  <td className="p-4 text-center text-green-600">✔ 是</td>
                  <td className="p-4 text-center text-green-600">✔ 是</td>
                  <td className="p-4 text-center text-red-500">✘ 否</td>
                  <td className="p-4 text-center text-green-600">✔ 是</td>
                </tr>
                <tr className="hover:bg-gray-50 bg-gray-50">
                  <td className="p-4 font-semibold text-navy-800">域名爭議</td>
                  <td className="p-4 text-center bg-gold-50 font-semibold text-green-600">✔ 專業</td>
                  <td className="p-4 text-center text-red-500">✘ 否</td>
                  <td className="p-4 text-center text-red-500">✘ 否</td>
                  <td className="p-4 text-center text-green-600">✔ 是</td>
                  <td className="p-4 text-center text-red-500">✘ 否</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="p-4 font-semibold text-navy-800">AI Agent 責任</td>
                  <td className="p-4 text-center bg-gold-50 font-semibold text-green-600">✔ 專業</td>
                  <td className="p-4 text-center text-red-500">✘ 否</td>
                  <td className="p-4 text-center text-red-500">✘ 否</td>
                  <td className="p-4 text-center text-red-500">✘ 否</td>
                  <td className="p-4 text-center text-red-500">✘ 否</td>
                </tr>
                <tr className="hover:bg-gray-50 bg-gray-50">
                  <td className="p-4 font-semibold text-navy-800">24/7 運營</td>
                  <td className="p-4 text-center bg-gold-50 font-semibold text-green-600">✔ 是</td>
                  <td className="p-4 text-center text-red-500">✘ 否</td>
                  <td className="p-4 text-center text-red-500">✘ 否</td>
                  <td className="p-4 text-center text-red-500">✘ 否</td>
                  <td className="p-4 text-center text-red-500">✘ 否</td>
                </tr>
              </tbody>
            </table>
          </div>
          
          <p className="text-center text-gray-600 mt-8 text-lg">
            ✅ <strong>DWAC 優勢：</strong>100% 線上、AI 輔助、更快（30-90 天）、節省 50-70% 費用、專業處理 AI Agent 爭議。
          </p>
        </div>
      </section>

      {/* Key Advantages */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-navy-800 mb-4">選擇 DWAC 的關鍵優勢</h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="text-xl font-bold text-navy-800 mb-2">速度</h3>
              <p className="text-gray-600">
                平均 30-90 天解決爭議，而傳統機構需要 12-18 個月。
              </p>
            </div>
            
            <div className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="text-4xl mb-4">💰</div>
              <h3 className="text-xl font-bold text-navy-800 mb-2">成本效益</h3>
              <p className="text-gray-600">
                由於 AI 輔助流程，費用比 ICC、SIAC 或 WIPO 低 50-70%。
              </p>
            </div>
            
            <div className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="text-4xl mb-4">🤖</div>
              <h3 className="text-xl font-bold text-navy-800 mb-2">AI 輔助</h3>
              <p className="text-gray-600">
                我們的仲裁員-Agent 分析證據、起草決定並加速流程。
              </p>
            </div>
            
            <div className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="text-4xl mb-4">🌐</div>
              <h3 className="text-xl font-bold text-navy-800 mb-2">全球線上</h3>
              <p className="text-gray-600">
                100% 線上流程，隨時隨地可訪問，24/7 全天候服務。無需旅行。
              </p>
            </div>
            
            <div className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="text-4xl mb-4">🔒</div>
              <h3 className="text-xl font-bold text-navy-800 mb-2">保密性</h3>
              <p className="text-gray-600">
                所有程式均保密，所有文件均採用端到端加密。
              </p>
            </div>
            
            <div className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="text-4xl mb-4">⚖️</div>
              <h3 className="text-xl font-bold text-navy-800 mb-2">可執行性</h3>
              <p className="text-gray-600">
                裁決可根據《紐約公約》在 170 多個國家執行。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-16 bg-navy-800 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <blockquote className="text-2xl italic mb-6">
            "DWAC 在 45 天內解決了我們的跨境域名爭議，成本僅為傳統仲裁的一小部分。線上流程非常順暢。"
          </blockquote>
          <cite className="text-gold-400 not-italic">— 周永軍博士，DWAC 創始人</cite>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-navy-800 mb-6">
            準備好體驗 DWAC 的優勢了嗎？
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            今天線上提交您的爭議，獲得更快、更實惠的解決方案。
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/zh-cn/arbitration/how-to-apply/" className="px-8 py-3 bg-gold-500 text-white rounded font-semibold hover:bg-gold-600 transition-colors">
              提交爭議
            </Link>
            <Link href="/zh-cn/contact/" className="px-8 py-3 border-2 border-gold-500 text-gold-600 rounded font-semibold hover:bg-gold-50 transition-colors">
              聯絡我們
            </Link>
          </div>
        </div>
      </section>

      <Footer lang="zh-tw" />
    </div>
  )
}
