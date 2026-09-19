
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '数字仲裁庭 - 数字世界仲裁中心',
  description: 'DWAC数字仲裁庭：AI辅助仲裁，快速、公平、可执行。',
}

export default function DigitalTribunalPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* ===== 英雄区 ===== */}
      <section className="relative bg-navy-900 text-white py-24 md:py-32 px-4 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-72 h-72 bg-gold-500 rounded-full filter blur-3xl animate-pulse"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-blue-500 rounded-full filter blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
          <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-gold-400 rounded-full filter blur-3xl animate-pulse" style={{ animationDelay: '4s' }}></div>
        </div>

        <div className="relative max-w-7xl mx-auto text-center">
          <div className="inline-block bg-gold-500/20 border border-gold-500/40 text-gold-400 text-sm font-semibold px-4 py-1.5 rounded-full mb-8">
            🔮 新一代争议解决平台
          </div>

          <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6 tracking-tight">
            数字仲裁庭
          </h1>
          <p className="text-xl md:text-2xl text-gold-400 mb-4 font-serif italic">
            &ldquo;正义不因距离而延迟&rdquo;
          </p>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto mb-12 leading-relaxed">
            DWAC 数字仲裁庭将<span className="text-gold-400 font-semibold">AI Agent 智能分析</span>与{' '}
            <span className="text-gold-400 font-semibold">人类仲裁员专业判断</span>深度融合，实现从立案到裁决的全流程数字化、透明化、高效化。
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/zh-cn/dispute/" className="bg-gold-500 hover:bg-gold-600 text-navy-900 font-bold py-3.5 px-8 rounded-lg transition-all hover:scale-105 shadow-lg shadow-gold-500/25">
              申请仲裁
            </a>
            <a href="#process" className="border-2 border-gold-500 text-gold-400 hover:bg-gold-500 hover:text-navy-900 font-bold py-3.5 px-8 rounded-lg transition-all">
              了解流程
            </a>
            <a href="#comparison" className="border border-gray-600 text-gray-300 hover:border-gold-500 hover:text-gold-400 py-3.5 px-8 rounded-lg transition-colors">
              对比优势
            </a>
          </div>

          <div className="mt-16 flex flex-wrap justify-center gap-8 text-sm text-gray-400">
            <div className="flex items-center gap-2">
              <span className="text-gold-500">🔒</span> 端到端加密
            </div>
            <div className="flex items-center gap-2">
              <span className="text-gold-500">⛓️</span> 区块链可验证
            </div>
            <div className="flex items-center gap-2">
              <span className="text-gold-500">🌍</span> 跨境执行
            </div>
            <div className="flex items-center gap-2">
              <span className="text-gold-500">⚡</span> AI 辅助分析
            </div>
          </div>
        </div>
      </section>

      {/* ===== 核心流程 — 四步 ===== */}
      <section id="process" className="py-20 md:py-28 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="text-gold-500 font-semibold text-sm uppercase tracking-wider mb-3">运作机制</div>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-navy-900 mb-4">
              四步达致裁决
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              从立案到最终裁决，每一步都经过数字化处理、全程可追溯，并由 AI 智能辅助。
            </p>
          </div>

          <div className="hidden md:block relative">
            <div className="absolute top-24 left-[12.5%] right-[12.5%] h-0.5 bg-gradient-to-r from-gold-300 via-gold-500 to-gold-300"></div>
          </div>

          <div className="grid md:grid-cols-4 gap-8 relative">
            {[
              {
                step: '01',
                title: '智能立案',
                subtitle: 'AI 辅助提交',
                desc: '在线提交争议，AI 自动分类案件类型、提取核心诉求，生成案件摘要供仲裁庭审阅。',
                icon: '📝',
                details: ['智能表单自动补全', 'AI 自动分类争议类型', '自动生成证据清单', '实时立案状态追踪'],
              },
              {
                step: '02',
                title: '组庭匹配',
                subtitle: '智能仲裁员推荐',
                desc: 'AI 根据案件类型、适用法律、专业领域和语言偏好推荐最合适的仲裁员，当事人确认组庭。',
                icon: '⚖️',
                details: ['AI 仲裁员智能匹配', '专业领域与管辖权筛选', '利益冲突自动审查', '当事人确认程序'],
              },
              {
                step: '03',
                title: '线上庭审',
                subtitle: '安全数字化法庭',
                desc: '在安全的线上庭审室进行听证，AI 实时转录、证据展示、交叉质证——跨时区 24/7 可用。',
                icon: '🎥',
                details: ['AI 实时语音转录', '数字证据展示系统', '交叉质证工具', '跨时区友好排期'],
              },
              {
                step: '04',
                title: '裁决出具',
                subtitle: 'AI 起草·人类审定',
                desc: 'AI 根据庭审记录和适用法律协助起草裁决书，仲裁员审定修改后签发具有法律效力的终局裁决。',
                icon: '📜',
                details: ['AI 辅助裁决书起草', '法律先例智能分析', '仲裁员审定与签发', '数字签名与执行'],
              },
            ].map((item, idx) => (
              <div key={idx} className="group relative">
                <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-gold-300 h-full flex flex-col">
                  <div className="w-14 h-14 bg-gold-500 rounded-full flex items-center justify-center text-navy-900 font-bold text-lg mb-4 mx-auto group-hover:scale-110 transition-transform">
                    {item.step}
                  </div>
                  <div className="text-3xl mb-3 text-center">{item.icon}</div>
                  <h3 className="text-xl font-bold text-navy-900 mb-1 text-center">{item.title}</h3>
                  <p className="text-gold-600 text-sm font-medium mb-3 text-center">{item.subtitle}</p>
                  <p className="text-gray-600 text-sm mb-4 leading-relaxed flex-grow">{item.desc}</p>
                  <ul className="space-y-1.5 border-t border-gray-100 pt-4">
                    {item.details.map((d, i) => (
                      <li key={i} className="flex items-start text-xs text-gray-500">
                        <span className="text-gold-500 mr-2 mt-0.5">✓</span>
                        {d}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== 技术架构 ===== */}
      <section className="py-20 md:py-28 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="text-gold-500 font-semibold text-sm uppercase tracking-wider mb-3">基础设施</div>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-navy-900 mb-4">
              技术架构
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              基于现代无服务器架构，确保安全、可扩展、全球可达。
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: '前端与界面',
                icon: '🖥️',
                color: 'from-blue-500/10 to-blue-600/5',
                items: [
                  { name: 'Next.js 14 (App Router)', desc: '现代 React 框架，支持 SSR' },
                  { name: 'TypeScript', desc: '类型安全开发' },
                  { name: 'Tailwind CSS', desc: '响应式无障碍设计' },
                  { name: '实时控制面板', desc: '案件状态与通知' },
                ],
              },
              {
                title: '后端与智能',
                icon: '🤖',
                color: 'from-gold-500/10 to-gold-600/5',
                items: [
                  { name: 'Cloudflare Workers', desc: '边缘计算，延迟低于 50ms' },
                  { name: 'Agent API (RESTful)', desc: 'AI Agent 注册与通信' },
                  { name: 'D1 数据库', desc: '结构化案件与用户数据' },
                  { name: 'AI 分析引擎', desc: '案件分类与先例检索' },
                ],
              },
              {
                title: '安全与信任',
                icon: '🔐',
                color: 'from-green-500/10 to-green-600/5',
                items: [
                  { name: '区块链存证', desc: '不可篡改审计追踪（可选）' },
                  { name: '端到端加密', desc: '所有通信受保护' },
                  { name: '数字签名', desc: '具法律效力的电子签名' },
                  { name: '完整审计追踪', desc: '每项操作可追溯' },
                ],
              },
            ].map((col, idx) => (
              <div key={idx} className={`bg-gradient-to-br ${col.color} p-8 rounded-2xl border border-gray-100 hover:shadow-xl transition-shadow`}>
                <div className="text-4xl mb-4">{col.icon}</div>
                <h3 className="text-xl font-bold text-navy-900 mb-6">{col.title}</h3>
                <div className="space-y-4">
                  {col.items.map((item, i) => (
                    <div key={i}>
                      <div className="flex items-center text-navy-900 font-semibold text-sm">
                        <span className="text-gold-500 mr-2">✓</span>
                        {item.name}
                      </div>
                      <p className="text-gray-500 text-xs ml-6 mt-0.5">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== AI 与人类协作 ===== */}
      <section className="py-20 md:py-28 px-4 bg-navy-900 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="text-gold-400 font-semibold text-sm uppercase tracking-wider mb-3">AI-人类协作</div>
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4">
              AI 辅助·人类裁决
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto text-lg">
              AI 负责分析、起草、转录等繁重工作，人类仲裁员做出最终裁决。
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="bg-navy-800 p-8 rounded-2xl border border-navy-700">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-blue-500/20 rounded-lg flex items-center justify-center text-xl">🤖</div>
                <h3 className="text-xl font-bold text-blue-400">AI Agent 负责</h3>
              </div>
              <ul className="space-y-3">
                {[
                  '案件分类与路由',
                  '证据整理与标注',
                  '实时转录与翻译',
                  '法律先例检索',
                  '裁决书草稿生成',
                  '合规性检查',
                ].map((item, i) => (
                  <li key={i} className="flex items-start text-gray-300">
                    <span className="text-blue-400 mr-3 mt-0.5">▸</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-navy-800 p-8 rounded-2xl border border-gold-500/30">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-gold-500/20 rounded-lg flex items-center justify-center text-xl">👨‍⚖️</div>
                <h3 className="text-xl font-bold text-gold-400">人类仲裁员裁决</h3>
              </div>
              <ul className="space-y-3">
                {[
                  '仲裁庭组庭确认',
                  '程序性裁定',
                  '证据可采性判断',
                  '证人与专家评估',
                  '法律解释与推理',
                  '最终裁决审批与签发',
                ].map((item, i) => (
                  <li key={i} className="flex items-start text-gray-300">
                    <span className="text-gold-400 mr-3 mt-0.5">▸</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ===== 对比表格 ===== */}
      <section id="comparison" className="py-20 md:py-28 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="text-gold-500 font-semibold text-sm uppercase tracking-wider mb-3">DWAC 优势</div>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-navy-900 mb-4">
              为什么选择数字仲裁？
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              传统仲裁与 DWAC 数字仲裁的对比。
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full max-w-5xl mx-auto border-collapse rounded-2xl overflow-hidden shadow-lg">
              <thead>
                <tr>
                  <th className="p-5 text-left bg-gray-100 text-navy-900 font-bold text-lg">对比项</th>
                  <th className="p-5 text-left bg-gray-100 text-gray-600 font-semibold text-lg">传统仲裁</th>
                  <th className="p-5 text-left bg-gold-500 text-navy-900 font-bold text-lg">DWAC 数字仲裁 ✦</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['审理期限', '6–18 个月', '3–6 个月'],
                  ['费用', '5 万美元以上', '1–3 万美元'],
                  ['透明度', '低——有限查阅记录', '高——完整审计追踪'],
                  ['可及性', '工作时间，线下场所', '24/7 在线，全球可达'],
                  ['AI 辅助', '无', '有——分析、起草、转录'],
                  ['证据管理', '人工文档处理', 'AI 标注数字证据室'],
                  ['执行力', '依赖管辖权', '区块链可验证裁决'],
                  ['语言', '单一语言审理', 'AI 实时翻译'],
                ].map((row, idx) => (
                  <tr key={idx} className={idx % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                    <td className="p-4 font-bold text-navy-900 border-b border-gray-100">{row[0]}</td>
                    <td className="p-4 text-gray-500 border-b border-gray-100">{row[1]}</td>
                    <td className="p-4 text-gold-700 font-semibold border-b border-gray-100 bg-gold-50/50">{row[2]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ===== 案例展示 ===== */}
      <section className="py-20 md:py-28 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="text-gold-500 font-semibold text-sm uppercase tracking-wider mb-3">真实成效</div>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-navy-900 mb-4">
              案例展示
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              已脱敏案例，展示数字仲裁如何实现更快、更公正的结果。
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                type: '跨境电商',
                title: '国际供应链合同纠纷',
                duration: '4 个月',
                saved: '成本降低 62%',
                summary: '深圳制造商与法兰克福经销商通过 DWAC 数字仲裁庭解决合同履行争议，AI 辅助审查 2000 余页证据材料。',
              },
              {
                type: '网络安全事件',
                title: '数据泄露责任认定案',
                duration: '3 个月',
                saved: '效率提升 71%',
                summary: '云服务商与企业客户通过数字仲裁解决数据泄露责任索赔，AI 驱动的电子取证分析与跨越 3 个时区的实时质证。',
              },
              {
                type: '知识产权',
                title: '数字版权侵权案',
                duration: '5 个月',
                saved: '成本节省 55%',
                summary: '内容创作者与流媒体平台通过线上庭审解决版权纠纷，AI 实时转录，避免了昂贵的跨国诉讼。',
              },
            ].map((c, idx) => (
              <div key={idx} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow border border-gray-100">
                <div className="text-xs font-semibold text-gold-600 uppercase tracking-wider mb-3">{c.type}</div>
                <h3 className="text-lg font-bold text-navy-900 mb-4">{c.title}</h3>
                <p className="text-gray-600 text-sm mb-6 leading-relaxed">{c.summary}</p>
                <div className="flex gap-4 text-sm">
                  <div className="bg-navy-900 text-white px-3 py-1 rounded-full text-xs font-semibold">
                    ⏱ {c.duration}
                  </div>
                  <div className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-xs font-semibold">
                    💰 {c.saved}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== 行动号召 ===== */}
      <section className="py-20 md:py-28 px-4 bg-gradient-to-br from-navy-900 via-navy-800 to-navy-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 right-0 w-96 h-96 bg-gold-500 rounded-full filter blur-3xl"></div>
        </div>

        <div className="relative max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">
            准备好体验新一代争议解决了吗？
          </h2>
          <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed">
            加入 DWAC，让 AI 与人类专业力量为你提供高效、透明、公正的仲裁服务——无论你身在何处。
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <a href="/zh-cn/dispute/" className="bg-gold-500 hover:bg-gold-600 text-navy-900 font-bold py-4 px-10 rounded-lg transition-all hover:scale-105 shadow-lg shadow-gold-500/25 text-lg">
              申请仲裁
            </a>
            <a href="/zh-cn/contact/" className="border-2 border-gray-600 text-gray-300 hover:border-gold-500 hover:text-gold-400 font-bold py-4 px-10 rounded-lg transition-colors text-lg">
              联系我们
            </a>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
            {[
              { value: '3–6', label: '个月平均周期' },
              { value: '55%+', label: '成本节省' },
              { value: '24/7', label: '在线服务' },
              { value: '150+', label: '管辖区域' },
            ].map((stat, idx) => (
              <div key={idx} className="text-center">
                <div className="text-3xl font-bold text-gold-400 mb-1">{stat.value}</div>
                <div className="text-xs text-gray-400 uppercase tracking-wider">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
