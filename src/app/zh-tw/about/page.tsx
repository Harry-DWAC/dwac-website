import type { Metadata } from 'next'
import Link from 'next/link'
export const metadata: Metadata = {
  title: '關於我們 | Digital World Arbitration Centre',
  openGraph: {
    locale: 'zh_TW',
    title: '關於我們 | Digital World Arbitration Centre',
    description: '首個專注於解決數位世界糾紛的永久性國際仲裁機構。',
  },
}


export default function AboutZhTw() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-navy-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-4">關於DWAC</h1>
          <p className="text-xl text-gray-300 max-w-2xl">
            為數位世界建立法治
          </p>
        </div>
      </section>

      {/* Our Mission */}
      <section className="py-16 bg-navy-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-6">我們的使命</h2>
            <div className="prose prose-lg max-w-none text-gray-400">
              <p className="text-xl font-medium text-gray-200 mb-6">
                為數位世界建立法治
              </p>
              <p className="mb-4">
                當物理世界的邊界不再是障礙，當AI Agent（电子代理人）開始簽署合約，當NFT成為數位資產，當資料跨境流動像呼吸一樣自然……
              </p>
              <p className="mb-4">
                數位世界需要自己的仲裁者。
              </p>
              <p className="mb-4">
                DWAC為此而誕生。
              </p>
              <p className="mb-4">
                我們致力於：
              </p>
              <ul className="list-disc pl-6 mb-6">
                <li>為數位糾紛提供公正、高效的解決方案</li>
                <li>推廣數位世界公約，推進全球數位治理標準</li>
                <li>培養數位法律人才，促進學術研究</li>
                <li>為全球數位法治發展提供參考模式</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Our Vision */}
      <section className="py-16 bg-navy-800/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-6">我們的願景</h2>
            <div className="bg-gold-500/[0.06] border-l-4 border-gold-500 p-6 rounded-r-lg">
              <p className="text-xl font-medium text-gray-200 mb-4">
                數位正義，無處不在，人人可享
              </p>
              <p className="text-gray-400">
                未來，每一個數位實體——無論是AI Agent（电子代理人）、數位平台還是跨境資料所有者——都能在DWAC獲得公正、專業、高效的爭議解決。
              </p>
              <p className="text-gray-400 mt-4">
                我們相信，通過持續努力，一個有序、公平的數位世界法治終將建立。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why DWAC Over Traditional Methods */}
      <section className="py-16 bg-navy-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">為什麼選擇DWAC而非傳統方式</h2>
          <div className="max-w-4xl mx-auto overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-navy-800/40">
                  <th className="border border-gold-subtle px-4 py-3 text-left font-semibold text-white">維度</th>
                  <th className="border border-gold-subtle px-4 py-3 text-left font-semibold text-white">傳統訴訟</th>
                  <th className="border border-gold-subtle px-4 py-3 text-left font-semibold text-white">傳統仲裁</th>
                  <th className="border border-gold-subtle px-4 py-3 text-left bg-gold-500/10 font-semibold text-gold-400">DWAC</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gold-subtle px-4 py-3 font-medium text-white">管轄確定性</td>
                  <td className="border border-gold-subtle px-4 py-3 text-gray-300">低</td>
                  <td className="border border-gold-subtle px-4 py-3 text-gray-300">中</td>
                  <td className="border border-gold-subtle px-4 py-3 bg-gold-500/[0.06] font-semibold text-gold-400">高</td>
                </tr>
                <tr className="bg-navy-800/30">
                  <td className="border border-gold-subtle px-4 py-3 font-medium text-white">審理期限</td>
                  <td className="border border-gold-subtle px-4 py-3 text-gray-300">1-3年</td>
                  <td className="border border-gold-subtle px-4 py-3 text-gray-300">6-18個月</td>
                  <td className="border border-gold-subtle px-4 py-3 bg-gold-500/[0.06] font-semibold text-gold-400">90天/30天</td>
                </tr>
                <tr>
                  <td className="border border-gold-subtle px-4 py-3 font-medium text-white">專業性</td>
                  <td className="border border-gold-subtle px-4 py-3 text-gray-300">不一致</td>
                  <td className="border border-gold-subtle px-4 py-3 text-gray-300">部分</td>
                  <td className="border border-gold-subtle px-4 py-3 bg-gold-500/[0.06] font-semibold text-gold-400">數位法律專家</td>
                </tr>
                <tr className="bg-navy-800/30">
                  <td className="border border-gold-subtle px-4 py-3 font-medium text-white">跨境執行</td>
                  <td className="border border-gold-subtle px-4 py-3 text-gray-300">困難</td>
                  <td className="border border-gold-subtle px-4 py-3 text-gray-300">良好</td>
                  <td className="border border-gold-subtle px-4 py-3 bg-gold-500/[0.06] font-semibold text-gold-400">最佳（紐約公約+專業化）</td>
                </tr>
                <tr>
                  <td className="border border-gold-subtle px-4 py-3 font-medium text-white">線上化</td>
                  <td className="border border-gold-subtle px-4 py-3 text-gray-300">低</td>
                  <td className="border border-gold-subtle px-4 py-3 text-gray-300">部分</td>
                  <td className="border border-gold-subtle px-4 py-3 bg-gold-500/[0.06] font-semibold text-gold-400">全線上</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Milestones */}
      <section className="py-16 bg-navy-800/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">里程碑</h2>
          <div className="max-w-3xl mx-auto">
            <div className="space-y-8">
              <div className="flex items-start">
                <div className="flex-shrink-0 w-8 h-8 bg-gradient-gold rounded-full flex items-center justify-center text-white font-bold">1</div>
                <div className="ml-4">
                  <h3 className="font-semibold text-lg text-white">2025年</h3>
                  <p className="text-gray-400">DWAC發起設立</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 w-8 h-8 bg-gradient-gold rounded-full flex items-center justify-center text-white font-bold">2</div>
                <div className="ml-4">
                  <h3 className="font-semibold text-lg text-white">2025年Q4</h3>
                  <p className="text-gray-400">創始理事會組建完成</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 w-8 h-8 bg-gradient-gold rounded-full flex items-center justify-center text-white font-bold">3</div>
                <div className="ml-4">
                  <h3 className="font-semibold text-lg text-white">2026年Q1</h3>
                  <p className="text-gray-400">仲裁規則發布，首批仲裁員名冊建立</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 w-8 h-8 bg-gradient-gold rounded-full flex items-center justify-center text-white font-bold">4</div>
                <div className="ml-4">
                  <h3 className="font-semibold text-lg text-white">2026年Q2</h3>
                  <p className="text-gray-400">線上仲裁平台上線（Alpha版本）</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 w-8 h-8 bg-gradient-gold rounded-full flex items-center justify-center text-white font-bold">5</div>
                <div className="ml-4">
                  <h3 className="font-semibold text-lg text-white">2026年Q3</h3>
                  <p className="text-gray-400">試運行，開始受理模擬案件</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 w-8 h-8 bg-gold-500/[0.06]0 rounded-full flex items-center justify-center text-white font-bold">6</div>
                <div className="ml-4">
                  <h3 className="font-semibold text-lg text-white">2026年Q4</h3>
                  <p className="text-gray-400">全球擴展，建立區域辦公室</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Founder */}
      <section className="py-16 bg-navy-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">創始人</h2>
          <div className="max-w-2xl mx-auto bg-navy-800/30 rounded-xl p-8">
            <h3 className="text-2xl font-bold text-white mb-2">周永俊（Harry）</h3>
            <p className="text-gold-600 font-medium mb-4">DWAC創始人</p>
            <ul className="space-y-2 text-gray-400">
              <li className="flex items-start"><span className="text-gold-500 mr-2">•</span>《全球網絡法律彙編》編纂者</li>
              <li className="flex items-start"><span className="text-gold-500 mr-2">•</span>《數位世界公約（示範法）》主要起草人</li>
              <li className="flex items-start"><span className="text-gold-500 mr-2">•</span>DWAC發起人</li>
            </ul>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-gold text-navy-900 font-bold">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">準備好了解更多了嗎？</h2>
          <p className="text-gold-300 mb-8 max-w-2xl mx-auto">
            探索我們的數位世界公約或聯繫我們。
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/zh-tw/charter/" className="px-6 py-3 bg-navy-800/20 text-navy-900 font-semibold rounded-lg hover:bg-navy-800/40 transition-colors">
              閱讀公約
            </Link>
            <Link href="/zh-tw/contact/" className="px-6 py-3 border-2 border-navy-900 text-navy-900 font-semibold rounded-lg hover:bg-navy-800/20/10 transition-colors">
              聯繫我們
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
