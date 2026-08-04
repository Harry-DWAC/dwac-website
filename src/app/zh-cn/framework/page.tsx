import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: '仲裁员-Agent 框架 - DWAC',
  description: '定义人工智能 Agent 在数字世界仲裁中的能力边界和责任归属。',
}

export default function Framework() {
  return (
    <div className="flex flex-col min-h-screen">
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-navy-800 to-navy-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-6">仲裁员-Agent 框架</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            定义人工智能 Agent 在数字世界仲裁中的能力边界和责任归属。
          </p>
        </div>
      </section>

      {/* Framework Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-navy-800 mb-4">核心框架</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              仲裁中人机协作的三支柱方法
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Pillar 1: Capacity Boundary */}
            <div className="bg-gray-50 rounded-lg p-8 hover:shadow-lg transition-shadow border border-gray-100">
              <div className="text-5xl mb-6">🤖</div>
              <h3 className="text-2xl font-bold text-navy-800 mb-4">能力边界</h3>
              <p className="text-gray-600 mb-6">
                明确界定人工智能 Agent 可以和不可以独立完成的事项。
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-gold-500 mr-2">✔</span>
                  <span className="text-gray-700">数据分析与模式识别</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gold-500 mr-2">✔</span>
                  <span className="text-gray-700">文件起草准备</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gold-500 mr-2">✔</span>
                  <span className="text-gray-700">证据分类与审查</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gold-500 mr-2">✔</span>
                  <span className="text-gray-700">庭审日程协调</span>
                </li>
              </ul>
            </div>

            {/* Pillar 2: Human Accountability */}
            <div className="bg-gray-50 rounded-lg p-8 hover:shadow-lg transition-shadow border border-gray-100">
              <div className="text-5xl mb-6">⚖️</div>
              <h3 className="text-2xl font-bold text-navy-800 mb-4">人类问责制</h3>
              <p className="text-gray-600 mb-6">
                确保人类仲裁员保留最终权威和责任。
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-gold-500 mr-2">✔</span>
                  <span className="text-gray-700">最终决策权</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gold-500 mr-2">✔</span>
                  <span className="text-gray-700">修改 AI 建议的权利</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gold-500 mr-2">✔</span>
                  <span className="text-gray-700">责任由人类仲裁员承担</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gold-500 mr-2">✔</span>
                  <span className="text-gray-700">职业责任保险覆盖</span>
                </li>
              </ul>
            </div>

            {/* Pillar 3: Transparency */}
            <div className="bg-gray-50 rounded-lg p-8 hover:shadow-lg transition-shadow border border-gray-100">
              <div className="text-5xl mb-6">🔍</div>
              <h3 className="text-2xl font-bold text-navy-800 mb-4">透明度</h3>
              <p className="text-gray-600 mb-6">
                仲裁过程中 AI 参与的完整审计追踪。
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-gold-500 mr-2">✔</span>
                  <span className="text-gray-700">所有程序中披露 AI 使用情况</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gold-500 mr-2">✔</span>
                  <span className="text-gray-700">算法决策解释</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gold-500 mr-2">✔</span>
                  <span className="text-gray-700">人工干预记录</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gold-500 mr-2">✔</span>
                  <span className="text-gray-700">完整审计追踪保存</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Agent Capabilities */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-navy-800 mb-8">Agent 能力与限制</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg p-6 border-l-4 border-green-500">
              <h3 className="text-xl font-bold text-navy-800 mb-4 flex items-center">
                <span className="text-green-500 mr-2">✓</span> AI Agent 可以做
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li>• 分析合同条款并识别潜在问题</li>
                <li>• 研究适用的先例和法规</li>
                <li>• 起草附有推理的裁决草案</li>
                <li>• 整理和总结证据提交</li>
                <li>• 生成案件管理报告</li>
                <li>• 提供程序建议</li>
                <li>• 计算建议的费用分配</li>
              </ul>
            </div>
            
            <div className="bg-white rounded-lg p-6 border-l-4 border-red-500">
              <h3 className="text-xl font-bold text-navy-800 mb-4 flex items-center">
                <span className="text-red-500 mr-2">✗</span> AI Agent 不能做
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li>• 独立做出具有约束力的决定</li>
                <li>• 未经人工审查即发布裁决</li>
                <li>• 放弃当事人权利或接受管辖</li>
                <li>• 直接谈判或和解争议</li>
                <li>• 未经授权访问敏感证据</li>
                <li>• 取代人类仲裁员的判断</li>
                <li>• 单方面修改程序规则</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Accountability Chain */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-navy-800 mb-8">责任链条</h2>
          
          <div className="space-y-8">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-navy-800 mb-4">1. AI 建议层</h3>
              <p className="text-gray-600 mb-4">
                AI Agent 提供建议和分析，并明确标注为 AI 生成。每项 AI 输出都包含置信度指标和使用方法说明。
              </p>
              <div className="bg-white p-4 rounded border-l-4 border-gold-500">
                <p className="text-sm text-gray-600 italic">
                  "此分析由 AI 生成。在做出任何决定之前，应由人类仲裁员审查。"
                </p>
              </div>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-navy-800 mb-4">2. 人工审查层</h3>
              <p className="text-gray-600 mb-4">
                所有 AI 建议必须由认证的人类仲裁员审查和批准。任何修改都需记录理由。
              </p>
              <ul className="text-gray-600 space-y-2">
                <li>• 人类仲裁员审查所有 AI 生成的草案</li>
                <li>• 对 AI 建议的更改均有记录</li>
                <li>• 最终批准仅由人类仲裁员做出</li>
              </ul>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-navy-800 mb-4">3. 人类最终决定</h3>
              <p className="text-gray-600 mb-4">
                最终决定（包括裁决和程序令）始终由人类仲裁员做出。未经人类批准，AI 无法覆盖或影响最终决定。
              </p>
              <div className="bg-white p-4 rounded border-l-4 border-navy-700">
                <p className="text-sm text-gray-600">
                  <strong>示例：</strong>如果 AI 建议某种费用分配，人类仲裁员会审查该建议，可能会修改，然后发布最终费用令。
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
            准备好体验 AI 辅助仲裁了吗？
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            我们的仲裁员-Agent 已准备好以速度、准确性和完全的问责制处理您的案件。
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/zh-cn/arbitration/" className="px-8 py-3 bg-gold-500 text-white rounded font-semibold hover:bg-gold-600 transition-colors">
              开始仲裁
            </Link>
            <Link href="/zh-cn/arbitrators/" className="px-8 py-3 border-2 border-gold-500 text-gold-600 rounded font-semibold hover:bg-gold-50 transition-colors">
              认识我们的仲裁员
            </Link>
          </div>
        </div>
      </section>

    </div>
  )
}
