import type { Metadata } from 'next'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: '仲裁員-Agent 框架 - DWAC',
  description: '定義人工智慧 Agent 在數位世界仲裁中的能力邊界和責任歸屬。',
}

export default function Framework() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar lang="zh-tw" />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-navy-800 to-navy-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-6">仲裁員-Agent 框架</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            定義人工智慧 Agent 在數位世界仲裁中的能力邊界和責任歸屬。
          </p>
        </div>
      </section>

      {/* Framework Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-navy-800 mb-4">核心框架</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              仲裁中人機協作的三支柱方法
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Pillar 1: Capacity Boundary */}
            <div className="bg-gray-50 rounded-lg p-8 hover:shadow-lg transition-shadow border border-gray-100">
              <div className="text-5xl mb-6">🤖</div>
              <h3 className="text-2xl font-bold text-navy-800 mb-4">能力邊界</h3>
              <p className="text-gray-600 mb-6">
                明確界定人工智慧 Agent 可以和不可以獨立完成的事項。
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-gold-500 mr-2">✔</span>
                  <span className="text-gray-700">資料分析與模式識別</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gold-500 mr-2">✔</span>
                  <span className="text-gray-700">檔案起草準備</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gold-500 mr-2">✔</span>
                  <span className="text-gray-700">證據分類與審查</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gold-500 mr-2">✔</span>
                  <span className="text-gray-700">庭審日程協調</span>
                </li>
              </ul>
            </div>

            {/* Pillar 2: Human Accountability */}
            <div className="bg-gray-50 rounded-lg p-8 hover:shadow-lg transition-shadow border border-gray-100">
              <div className="text-5xl mb-6">⚖️</div>
              <h3 className="text-2xl font-bold text-navy-800 mb-4">人類問責制</h3>
              <p className="text-gray-600 mb-6">
                確保人類仲裁員保留最終權威和責任。
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-gold-500 mr-2">✔</span>
                  <span className="text-gray-700">最終決策權</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gold-500 mr-2">✔</span>
                  <span className="text-gray-700">修改 AI 建議的權利</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gold-500 mr-2">✔</span>
                  <span className="text-gray-700">責任由人類仲裁員承擔</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gold-500 mr-2">✔</span>
                  <span className="text-gray-700">職業責任保險覆蓋</span>
                </li>
              </ul>
            </div>

            {/* Pillar 3: Transparency */}
            <div className="bg-gray-50 rounded-lg p-8 hover:shadow-lg transition-shadow border border-gray-100">
              <div className="text-5xl mb-6">🔍</div>
              <h3 className="text-2xl font-bold text-navy-800 mb-4">透明度</h3>
              <p className="text-gray-600 mb-6">
                仲裁過程中 AI 參與的完整審計追蹤。
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-gold-500 mr-2">✔</span>
                  <span className="text-gray-700">所有程式中披露 AI 使用情況</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gold-500 mr-2">✔</span>
                  <span className="text-gray-700">演算法決策解釋</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gold-500 mr-2">✔</span>
                  <span className="text-gray-700">人工干預記錄</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gold-500 mr-2">✔</span>
                  <span className="text-gray-700">完整審計追蹤儲存</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Agent Capabilities */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-navy-800 mb-8">Agent 能力與限制</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg p-6 border-l-4 border-green-500">
              <h3 className="text-xl font-bold text-navy-800 mb-4 flex items-center">
                <span className="text-green-500 mr-2">✓</span> AI Agent 可以做
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li>• 分析合同條款並識別潛在問題</li>
                <li>• 研究適用的先例和法規</li>
                <li>• 起草附有推理的裁決草案</li>
                <li>• 整理和總結證據提交</li>
                <li>• 生成案件管理報告</li>
                <li>• 提供程式建議</li>
                <li>• 計算建議的費用分配</li>
              </ul>
            </div>
            
            <div className="bg-white rounded-lg p-6 border-l-4 border-red-500">
              <h3 className="text-xl font-bold text-navy-800 mb-4 flex items-center">
                <span className="text-red-500 mr-2">✗</span> AI Agent 不能做
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li>• 獨立做出具有約束力的決定</li>
                <li>• 未經人工審查即釋出裁決</li>
                <li>• 放棄當事人權利或接受管轄</li>
                <li>• 直接談判或和解爭議</li>
                <li>• 未經授權訪問敏感證據</li>
                <li>• 取代人類仲裁員的判斷</li>
                <li>• 單方面修改程式規則</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Accountability Chain */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-navy-800 mb-8">責任鏈條</h2>
          
          <div className="space-y-8">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-navy-800 mb-4">1. AI 建議層</h3>
              <p className="text-gray-600 mb-4">
                AI Agent 提供建議和分析，並明確標註為 AI 生成。每項 AI 輸出都包含置信度指標和使用方法說明。
              </p>
              <div className="bg-white p-4 rounded border-l-4 border-gold-500">
                <p className="text-sm text-gray-600 italic">
                  "此分析由 AI 生成。在做出任何決定之前，應由人類仲裁員審查。"
                </p>
              </div>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-navy-800 mb-4">2. 人工審查層</h3>
              <p className="text-gray-600 mb-4">
                所有 AI 建議必須由認證的人類仲裁員審查和批准。任何修改都需記錄理由。
              </p>
              <ul className="text-gray-600 space-y-2">
                <li>• 人類仲裁員審查所有 AI 生成的草案</li>
                <li>• 對 AI 建議的更改均有記錄</li>
                <li>• 最終批准僅由人類仲裁員做出</li>
              </ul>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-navy-800 mb-4">3. 人類最終決定</h3>
              <p className="text-gray-600 mb-4">
                最終決定（包括裁決和程式令）始終由人類仲裁員做出。未經人類批准，AI 無法覆蓋或影響最終決定。
              </p>
              <div className="bg-white p-4 rounded border-l-4 border-navy-700">
                <p className="text-sm text-gray-600">
                  <strong>示例：</strong>如果 AI 建議某種費用分配，人類仲裁員會審查該建議，可能會修改，然後釋出最終費用令。
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-white border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-navy-800 mb-6">
            準備好體驗 AI 輔助仲裁了嗎？
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            我們的仲裁員-Agent 已準備好以速度、準確性和完全的問責制處理您的案件。
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/zh-cn/arbitration/" className="px-8 py-3 bg-gold-500 text-white rounded font-semibold hover:bg-gold-600 transition-colors">
              開始仲裁
            </Link>
            <Link href="/zh-cn/arbitrators/" className="px-8 py-3 border-2 border-gold-500 text-gold-600 rounded font-semibold hover:bg-gold-50 transition-colors">
              認識我們的仲裁員
            </Link>
          </div>
        </div>
      </section>

      <Footer lang="zh-tw" />
    </div>
  )
}
