import Link from 'next/link'
export const metadata = {
  title: '关于我们 - 数字世界仲裁中心',
}


export default function AboutZhCn() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-navy-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-4">关于DWAC</h1>
          <p className="text-xl text-gray-300 max-w-2xl">
            为数字世界建立法治
          </p>
        </div>
      </section>

      {/* Our Mission */}
      <section className="py-16 bg-navy-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-6">我们的使命</h2>
            <div className="prose prose-lg max-w-none text-gray-400">
              <p className="text-xl font-medium text-gray-200 mb-6">
                为数字世界建立法治
              </p>
              <p className="mb-4">
                当物理世界的边界不再是障碍，当AI代理开始签署合约，当NFT成为数字资产，当数据跨境流动像呼吸一样自然……
              </p>
              <p className="mb-4">
                数字世界需要自己的仲裁者。
              </p>
              <p className="mb-4">
                DWAC为此而诞生。
              </p>
              <p className="mb-4">
                我们致力于：
              </p>
              <ul className="list-disc pl-6 mb-6">
                <li>为数字纠纷提供公正、高效的解决方案</li>
                <li>推广数字世界公约，推进全球数字治理标准</li>
                <li>培养数字法律人才，促进学术研究</li>
                <li>为全球数字法治发展提供参考模式</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Our Vision */}
      <section className="py-16 bg-navy-800/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-6">我们的愿景</h2>
            <div className="bg-gold-500/[0.06] border-l-4 border-gold-500 p-6 rounded-r-lg">
              <p className="text-xl font-medium text-gray-200 mb-4">
                数字正义，无处不在，人人可享
              </p>
              <p className="text-gray-400">
                未来，每一个数字实体——无论是AI代理、数字平台还是跨境数据所有者——都能在DWAC获得公正、专业、高效的争议解决。
              </p>
              <p className="text-gray-400 mt-4">
                我们相信，通过持续努力，一个有序、公平的数字世界法治终将建立。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why DWAC Over Traditional Methods */}
      <section className="py-16 bg-navy-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">为什么选择DWAC而非传统方式</h2>
          <div className="max-w-4xl mx-auto overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-navy-800/40">
                  <th className="border border-gold-subtle px-4 py-3 text-left font-semibold text-white">维度</th>
                  <th className="border border-gold-subtle px-4 py-3 text-left font-semibold text-white">传统诉讼</th>
                  <th className="border border-gold-subtle px-4 py-3 text-left font-semibold text-white">传统仲裁</th>
                  <th className="border border-gold-subtle px-4 py-3 text-left bg-gold-500/10 font-semibold text-gold-400">DWAC</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gold-subtle px-4 py-3 font-medium text-white">管辖确定性</td>
                  <td className="border border-gold-subtle px-4 py-3 text-gray-300">低</td>
                  <td className="border border-gold-subtle px-4 py-3 text-gray-300">中</td>
                  <td className="border border-gold-subtle px-4 py-3 bg-gold-500/[0.06] font-semibold text-gold-400">高</td>
                </tr>
                <tr className="bg-navy-800/30">
                  <td className="border border-gold-subtle px-4 py-3 font-medium text-white">审理期限</td>
                  <td className="border border-gold-subtle px-4 py-3 text-gray-300">1-3年</td>
                  <td className="border border-gold-subtle px-4 py-3 text-gray-300">6-18个月</td>
                  <td className="border border-gold-subtle px-4 py-3 bg-gold-500/[0.06] font-semibold text-gold-400">90天/30天</td>
                </tr>
                <tr>
                  <td className="border border-gold-subtle px-4 py-3 font-medium text-white">专业性</td>
                  <td className="border border-gold-subtle px-4 py-3 text-gray-300">不一致</td>
                  <td className="border border-gold-subtle px-4 py-3 text-gray-300">部分</td>
                  <td className="border border-gold-subtle px-4 py-3 bg-gold-500/[0.06] font-semibold text-gold-400">数字法律专家</td>
                </tr>
                <tr className="bg-navy-800/30">
                  <td className="border border-gold-subtle px-4 py-3 font-medium text-white">跨境执行</td>
                  <td className="border border-gold-subtle px-4 py-3 text-gray-300">困难</td>
                  <td className="border border-gold-subtle px-4 py-3 text-gray-300">良好</td>
                  <td className="border border-gold-subtle px-4 py-3 bg-gold-500/[0.06] font-semibold text-gold-400">最佳（纽约公约+专业化）</td>
                </tr>
                <tr>
                  <td className="border border-gold-subtle px-4 py-3 font-medium text-white">线上化</td>
                  <td className="border border-gold-subtle px-4 py-3 text-gray-300">低</td>
                  <td className="border border-gold-subtle px-4 py-3 text-gray-300">部分</td>
                  <td className="border border-gold-subtle px-4 py-3 bg-gold-500/[0.06] font-semibold text-gold-400">全在线</td>
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
                  <p className="text-gray-400">DWAC发起设立</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 w-8 h-8 bg-gradient-gold rounded-full flex items-center justify-center text-white font-bold">2</div>
                <div className="ml-4">
                  <h3 className="font-semibold text-lg text-white">2025年Q4</h3>
                  <p className="text-gray-400">创始理事会组建完成</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 w-8 h-8 bg-gradient-gold rounded-full flex items-center justify-center text-white font-bold">3</div>
                <div className="ml-4">
                  <h3 className="font-semibold text-lg text-white">2026年Q1</h3>
                  <p className="text-gray-400">仲裁规则发布，首批仲裁员名册建立</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 w-8 h-8 bg-gradient-gold rounded-full flex items-center justify-center text-white font-bold">4</div>
                <div className="ml-4">
                  <h3 className="font-semibold text-lg text-white">2026年Q2</h3>
                  <p className="text-gray-400">在线仲裁平台上线（Alpha版本）</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 w-8 h-8 bg-gradient-gold rounded-full flex items-center justify-center text-white font-bold">5</div>
                <div className="ml-4">
                  <h3 className="font-semibold text-lg text-white">2026年Q3</h3>
                  <p className="text-gray-400">试运行，开始受理模拟案件</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 w-8 h-8 bg-gold-500/[0.06]0 rounded-full flex items-center justify-center text-white font-bold">6</div>
                <div className="ml-4">
                  <h3 className="font-semibold text-lg text-white">2027年及以后</h3>
                  <p className="text-gray-400">全球扩展，建立区域办公室</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Founder */}
      <section className="py-16 bg-navy-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">创始人</h2>
          <div className="max-w-2xl mx-auto bg-navy-800/30 rounded-xl p-8">
            <h3 className="text-2xl font-bold text-white mb-2">哈利（周永俊）</h3>
            <p className="text-gold-600 font-medium mb-4">DWAC创始人</p>
            <ul className="space-y-2 text-gray-400">
              <li className="flex items-start"><span className="text-gold-500 mr-2">•</span>《全球网络法律汇编》编纂者</li>
              <li className="flex items-start"><span className="text-gold-500 mr-2">•</span>《数字世界公约（示范法）》主要起草人</li>
              <li className="flex items-start"><span className="text-gold-500 mr-2">•</span>DWAC发起人</li>
            </ul>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-gold text-navy-900 font-bold">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">准备好了解更多了吗？</h2>
          <p className="text-gold-300 mb-8 max-w-2xl mx-auto">
            探索我们的数字世界公约或联系我们。
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/zh-cn/charter/" className="px-6 py-3 bg-navy-800/20 text-navy-900 font-semibold rounded-lg hover:bg-navy-800/40 transition-colors">
              阅读公约
            </Link>
            <Link href="/zh-cn/contact/" className="px-6 py-3 border-2 border-navy-900 text-navy-900 font-semibold rounded-lg hover:bg-navy-800/20/10 transition-colors">
              联系我们
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
