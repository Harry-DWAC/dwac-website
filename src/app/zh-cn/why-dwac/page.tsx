import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: '为什么选择 DWAC - 数字世界仲裁中心',
  description: '将 DWAC 与国际主要仲裁机构进行比较。了解为何我们提供更快、更实惠的 AI 辅助争议解决服务。',
}

export default function WhyDWAC() {
  return (
    <div className="flex flex-col min-h-screen">
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-navy-800 to-navy-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-6">为什么选择 DWAC？</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            比较各仲裁机构，帮助您为争议选择最佳解决方案。
          </p>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-navy-800 mb-4">DWAC 与其他仲裁机构对比</h2>
            <p className="text-xl text-gray-600">
              了解我们与国际主要仲裁机构的对比情况。
            </p>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-navy-800 text-white">
                  <th className="p-4 text-left font-semibold">标准</th>
                  <th className="p-4 text-center font-semibold bg-gold-500 text-white">DWAC</th>
                  <th className="p-4 text-center font-semibold">ICC</th>
                  <th className="p-4 text-center font-semibold">SIAC</th>
                  <th className="p-4 text-center font-semibold">WIPO</th>
                  <th className="p-4 text-center font-semibold">HKIAC</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr className="hover:bg-gray-50">
                  <td className="p-4 font-semibold text-navy-800">在线仲裁</td>
                  <td className="p-4 text-center bg-gold-50 font-semibold text-green-600">✔ 100% 在线</td>
                  <td className="p-4 text-center text-yellow-600">⚠ 部分</td>
                  <td className="p-4 text-center text-yellow-600">⚠ 部分</td>
                  <td className="p-4 text-center text-red-500">✘ 有限</td>
                  <td className="p-4 text-center text-yellow-600">⚠ 部分</td>
                </tr>
                <tr className="hover:bg-gray-50 bg-gray-50">
                  <td className="p-4 font-semibold text-navy-800">平均时长</td>
                  <td className="p-4 text-center bg-gold-50 font-semibold text-green-600">30-90 天</td>
                  <td className="p-4 text-center">12-18 个月</td>
                  <td className="p-4 text-center">6-12 个月</td>
                  <td className="p-4 text-center">12-18 个月</td>
                  <td className="p-4 text-center">9-15 个月</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="p-4 font-semibold text-navy-800">成本节省</td>
                  <td className="p-4 text-center bg-gold-50 font-semibold text-green-600">节省 50-70%</td>
                  <td className="p-4 text-center">高</td>
                  <td className="p-4 text-center">中高</td>
                  <td className="p-4 text-center">高</td>
                  <td className="p-4 text-center">中高</td>
                </tr>
                <tr className="hover:bg-gray-50 bg-gray-50">
                  <td className="p-4 font-semibold text-navy-800">AI 辅助</td>
                  <td className="p-4 text-center bg-gold-50 font-semibold text-green-600">✔ 是</td>
                  <td className="p-4 text-center text-red-500">✘ 否</td>
                  <td className="p-4 text-center text-red-500">✘ 否</td>
                  <td className="p-4 text-center text-red-500">✘ 否</td>
                  <td className="p-4 text-center text-red-500">✘ 否</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="p-4 font-semibold text-navy-800">多语言支持</td>
                  <td className="p-4 text-center bg-gold-50 font-semibold text-green-600">✔ 20+ 语言</td>
                  <td className="p-4 text-center text-green-600">✔ 多语言</td>
                  <td className="p-4 text-center text-yellow-600">⚠ 有限</td>
                  <td className="p-4 text-center text-green-600">✔ 多语言</td>
                  <td className="p-4 text-center text-yellow-600">⚠ 有限</td>
                </tr>
                <tr className="hover:bg-gray-50 bg-gray-50">
                  <td className="p-4 font-semibold text-navy-800">纽约公约执行</td>
                  <td className="p-4 text-center bg-gold-50 font-semibold text-green-600">✔ 是</td>
                  <td className="p-4 text-center text-green-600">✔ 是</td>
                  <td className="p-4 text-center text-green-600">✔ 是</td>
                  <td className="p-4 text-center text-green-600">✔ 是</td>
                  <td className="p-4 text-center text-green-600">✔ 是</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="p-4 font-semibold text-navy-800">紧急仲裁员</td>
                  <td className="p-4 text-center bg-gold-50 font-semibold text-green-600">✔ 48小时决定</td>
                  <td className="p-4 text-center text-green-600">✔ 是</td>
                  <td className="p-4 text-center text-green-600">✔ 是</td>
                  <td className="p-4 text-center text-red-500">✘ 否</td>
                  <td className="p-4 text-center text-green-600">✔ 是</td>
                </tr>
                <tr className="hover:bg-gray-50 bg-gray-50">
                  <td className="p-4 font-semibold text-navy-800">域名争议</td>
                  <td className="p-4 text-center bg-gold-50 font-semibold text-green-600">✔ 专业</td>
                  <td className="p-4 text-center text-red-500">✘ 否</td>
                  <td className="p-4 text-center text-red-500">✘ 否</td>
                  <td className="p-4 text-center text-green-600">✔ 是</td>
                  <td className="p-4 text-center text-red-500">✘ 否</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="p-4 font-semibold text-navy-800">AI Agent 责任</td>
                  <td className="p-4 text-center bg-gold-50 font-semibold text-green-600">✔ 专业</td>
                  <td className="p-4 text-center text-red-500">✘ 否</td>
                  <td className="p-4 text-center text-red-500">✘ 否</td>
                  <td className="p-4 text-center text-red-500">✘ 否</td>
                  <td className="p-4 text-center text-red-500">✘ 否</td>
                </tr>
                <tr className="hover:bg-gray-50 bg-gray-50">
                  <td className="p-4 font-semibold text-navy-800">24/7 运营</td>
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
            ✅ <strong>DWAC 优势：</strong>100% 在线、AI 辅助、更快（30-90 天）、节省 50-70% 费用、专业处理 AI Agent 争议。
          </p>
        </div>
      </section>

      {/* Key Advantages */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-navy-800 mb-4">选择 DWAC 的关键优势</h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="text-xl font-bold text-navy-800 mb-2">速度</h3>
              <p className="text-gray-600">
                平均 30-90 天解决争议，而传统机构需要 12-18 个月。
              </p>
            </div>
            
            <div className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="text-4xl mb-4">💰</div>
              <h3 className="text-xl font-bold text-navy-800 mb-2">成本效益</h3>
              <p className="text-gray-600">
                由于 AI 辅助流程，费用比 ICC、SIAC 或 WIPO 低 50-70%。
              </p>
            </div>
            
            <div className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="text-4xl mb-4">🤖</div>
              <h3 className="text-xl font-bold text-navy-800 mb-2">AI 辅助</h3>
              <p className="text-gray-600">
                我们的仲裁员-Agent 分析证据、起草决定并加速流程。
              </p>
            </div>
            
            <div className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="text-4xl mb-4">🌐</div>
              <h3 className="text-xl font-bold text-navy-800 mb-2">全球在线</h3>
              <p className="text-gray-600">
                100% 在线流程，随时随地可访问，24/7 全天候服务。无需旅行。
              </p>
            </div>
            
            <div className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="text-4xl mb-4">🔒</div>
              <h3 className="text-xl font-bold text-navy-800 mb-2">保密性</h3>
              <p className="text-gray-600">
                所有程序均保密，所有文档均采用端到端加密。
              </p>
            </div>
            
            <div className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="text-4xl mb-4">⚖️</div>
              <h3 className="text-xl font-bold text-navy-800 mb-2">可执行性</h3>
              <p className="text-gray-600">
                裁决可根据《纽约公约》在 170 多个国家执行。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-16 bg-navy-800 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <blockquote className="text-2xl italic mb-6">
            "DWAC 在 45 天内解决了我们的跨境域名争议，成本仅为传统仲裁的一小部分。在线流程非常顺畅。"
          </blockquote>
          <cite className="text-gold-400 not-italic">— 周永军博士，DWAC 创始人</cite>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-navy-800 mb-6">
            准备好体验 DWAC 的优势了吗？
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            今天在线提交您的争议，获得更快、更实惠的解决方案。
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/zh-cn/arbitration/how-to-apply/" className="px-8 py-3 bg-gold-500 text-white rounded font-semibold hover:bg-gold-600 transition-colors">
              提交争议
            </Link>
            <Link href="/zh-cn/contact/" className="px-8 py-3 border-2 border-gold-500 text-gold-600 rounded font-semibold hover:bg-gold-50 transition-colors">
              联系我们
            </Link>
          </div>
        </div>
      </section>

    </div>
  )
}
