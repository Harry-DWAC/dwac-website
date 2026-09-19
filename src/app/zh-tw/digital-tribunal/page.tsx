
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '數位仲裁庭 - 數位世界仲裁中心',
  description: 'DWAC數位仲裁庭：AI輔助仲裁，快速、公平、可執行。',
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
            🔮 新一代爭議解決平台
          </div>

          <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6 tracking-tight">
            數位仲裁庭
          </h1>
          <p className="text-xl md:text-2xl text-gold-400 mb-4 font-serif italic">
            &ldquo;正義不因距離而延遲&rdquo;
          </p>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto mb-12 leading-relaxed">
            DWAC 數位仲裁庭将<span className="text-gold-400 font-semibold">AI Agent 智慧分析</span>与{' '}
            <span className="text-gold-400 font-semibold">人類仲裁員專業判斷</span>深度融合，实现從立案到裁決的全流程數位化、透明化、高效化。
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/zh-tw/dispute/" className="bg-gold-500 hover:bg-gold-600 text-navy-900 font-bold py-3.5 px-8 rounded-lg transition-all hover:scale-105 shadow-lg shadow-gold-500/25">
              申請仲裁
            </a>
            <a href="#process" className="border-2 border-gold-500 text-gold-400 hover:bg-gold-500 hover:text-navy-900 font-bold py-3.5 px-8 rounded-lg transition-all">
              了解流程
            </a>
            <a href="#comparison" className="border border-gray-600 text-gray-300 hover:border-gold-500 hover:text-gold-400 py-3.5 px-8 rounded-lg transition-colors">
              對比優勢
            </a>
          </div>

          <div className="mt-16 flex flex-wrap justify-center gap-8 text-sm text-gray-400">
            <div className="flex items-center gap-2">
              <span className="text-gold-500">🔒</span> 端到端加密
            </div>
            <div className="flex items-center gap-2">
              <span className="text-gold-500">⛓️</span> 區塊鏈可驗證
            </div>
            <div className="flex items-center gap-2">
              <span className="text-gold-500">🌍</span> 跨境執行
            </div>
            <div className="flex items-center gap-2">
              <span className="text-gold-500">⚡</span> AI 輔助分析
            </div>
          </div>
        </div>
      </section>

      {/* ===== 核心流程 — 四步 ===== */}
      <section id="process" className="py-20 md:py-28 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="text-gold-500 font-semibold text-sm uppercase tracking-wider mb-3">運作機制</div>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-navy-900 mb-4">
              四步達致裁決
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              從立案到最終裁決，每一步都經過數位化處理、全程可追溯，並由 AI 智慧輔助。
            </p>
          </div>

          <div className="hidden md:block relative">
            <div className="absolute top-24 left-[12.5%] right-[12.5%] h-0.5 bg-gradient-to-r from-gold-300 via-gold-500 to-gold-300"></div>
          </div>

          <div className="grid md:grid-cols-4 gap-8 relative">
            {[
              {
                step: '01',
                title: '智慧立案',
                subtitle: 'AI 輔助提交',
                desc: '線上提交爭議，AI 自動分類案件類型、提取核心訴求，生成案件摘要供仲裁庭審閱。',
                icon: '📝',
                details: ['智慧表單自動補全', 'AI 自動分類爭議類型', '自動生成證據清單', '即時立案狀態追蹤'],
              },
              {
                step: '02',
                title: '組庭匹配',
                subtitle: '智慧仲裁員推薦',
                desc: 'AI 根據案件類型、適用法律、專業領域和語言偏好推薦最合適的仲裁員，當事人確認組庭。',
                icon: '⚖️',
                details: ['AI 仲裁員智慧匹配', '專業領域與管轄權篩選', '利益衝突自動審查', '當事人確認程序'],
              },
              {
                step: '03',
                title: '線上庭審',
                subtitle: '安全數位法庭',
                desc: '在安全的線上庭審室进行听证，AI 实时转录、证据展示、交叉质证——跨时区 24/7 可用。',
                icon: '🎥',
                details: ['AI 即時語音轉錄', '數位證據展示系統', '交叉質證工具', '跨時區友好排期'],
              },
              {
                step: '04',
                title: '裁決出具',
                subtitle: 'AI 起草·人類審定',
                desc: 'AI 根據庭審記錄和適用法律協助起草裁決書，仲裁員審定修改後簽發具有法律效力的終局裁決。',
                icon: '📜',
                details: ['AI 輔助裁決書起草', '法律先例智慧分析', '仲裁員審定與簽發', '數位簽名與執行'],
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

      {/* ===== 技術架構 ===== */}
      <section className="py-20 md:py-28 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="text-gold-500 font-semibold text-sm uppercase tracking-wider mb-3">基礎設施</div>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-navy-900 mb-4">
              技術架構
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              基於現代無伺服器架構，確保安全、可擴展、全球可達。
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: '前端與界面',
                icon: '🖥️',
                color: 'from-blue-500/10 to-blue-600/5',
                items: [
                  { name: 'Next.js 14 (App Router)', desc: '現代 React 框架，支持 SSR' },
                  { name: 'TypeScript', desc: '類型安全開發' },
                  { name: 'Tailwind CSS', desc: '響應式無障礙設計' },
                  { name: '即時控制面板', desc: '案件狀態與通知' },
                ],
              },
              {
                title: '後端與智慧',
                icon: '🤖',
                color: 'from-gold-500/10 to-gold-600/5',
                items: [
                  { name: 'Cloudflare Workers', desc: '邊緣計算，延遲低於 50ms' },
                  { name: 'Agent API (RESTful)', desc: 'AI Agent 注册与通信' },
                  { name: 'D1 数据库', desc: '結構化案件與用戶數據' },
                  { name: 'AI 分析引擎', desc: '案件分類與先例檢索' },
                ],
              },
              {
                title: '安全與信任',
                icon: '🔐',
                color: 'from-green-500/10 to-green-600/5',
                items: [
                  { name: '区块链存证', desc: '不可篡改審計追蹤（可選）' },
                  { name: '端到端加密', desc: '所有通信受保護' },
                  { name: '数字签名', desc: '具法律效力的電子簽名' },
                  { name: '完整审计追踪', desc: '每項操作可追溯' },
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
            <div className="text-gold-400 font-semibold text-sm uppercase tracking-wider mb-3">AI-人類協作</div>
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4">
              AI 輔助·人類裁決
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto text-lg">
              AI 負責分析、起草、轉錄等繁重工作，人類仲裁員做出最終裁決。
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="bg-navy-800 p-8 rounded-2xl border border-navy-700">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-blue-500/20 rounded-lg flex items-center justify-center text-xl">🤖</div>
                <h3 className="text-xl font-bold text-blue-400">AI Agent 負責</h3>
              </div>
              <ul className="space-y-3">
                {[
                  '案件分類與路由',
                  '證據整理與標註',
                  '即時轉錄與翻譯',
                  '法律先例檢索',
                  '裁決書草稿生成',
                  '合規性檢查',
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
                <h3 className="text-xl font-bold text-gold-400">人類仲裁員裁決</h3>
              </div>
              <ul className="space-y-3">
                {[
                  '仲裁庭組庭確認',
                  '程序性裁定',
                  '證據可採性判斷',
                  '證人與專家評估',
                  '法律解釋與推理',
                  '最終裁決審批與簽發',
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
            <div className="text-gold-500 font-semibold text-sm uppercase tracking-wider mb-3">DWAC 優勢</div>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-navy-900 mb-4">
              為什麼選擇數位仲裁？
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              傳統仲裁與 DWAC 數位仲裁的對比。
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full max-w-5xl mx-auto border-collapse rounded-2xl overflow-hidden shadow-lg">
              <thead>
                <tr>
                  <th className="p-5 text-left bg-gray-100 text-navy-900 font-bold text-lg">對比項</th>
                  <th className="p-5 text-left bg-gray-100 text-gray-600 font-semibold text-lg">傳統仲裁</th>
                  <th className="p-5 text-left bg-gold-500 text-navy-900 font-bold text-lg">DWAC 數位仲裁 ✦</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['審理期限', '6–18 个月', '3–6 个月'],
                  ['費用', '5 萬美元以上', '1–3 万美元'],
                  ['透明度', '低——有限查閱記錄', '高——完整審計追蹤'],
                  ['可及性', '工作時間，線下場所', '24/7 線上，全球可達'],
                  ['AI 辅助', '無', '有——分析、起草、轉錄'],
                  ['證據管理', '人工文檔處理', 'AI 標註數位證據室'],
                  ['執行力', '依賴管轄權', '區塊鏈可驗證裁决'],
                  ['語言', '单一語言审理', 'AI 即時翻譯'],
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
            <div className="text-gold-500 font-semibold text-sm uppercase tracking-wider mb-3">真實成效</div>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-navy-900 mb-4">
              案例展示
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              已脱敏案例，展示數位仲裁如何实现更快、更公正的结果。
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                type: '跨境電商',
                title: '國際供應鏈合約糾紛',
                duration: '4 个月',
                saved: '成本降低 62%',
                summary: '深圳制造商与法兰克福经销商通过 DWAC 數位仲裁庭解决合同履行争议，AI 辅助审查 2000 余页证据材料。',
              },
              {
                type: '網路安全事件',
                title: '數據洩露責任認定案',
                duration: '3 个月',
                saved: '效率提升 71%',
                summary: '云服务商与企业客户通过數位仲裁解决数据泄露责任索赔，AI 驱动的电子取证分析与跨越 3 个时区的实时质证。',
              },
              {
                type: '知識產權',
                title: '數位版權侵權案',
                duration: '5 个月',
                saved: '成本節省 55%',
                summary: '内容创作者与流媒体平台通过線上庭審解决版权纠纷，AI 实时转录，避免了昂贵的跨国诉讼。',
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
            準備好體驗新一代爭議解決了嗎？
          </h2>
          <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed">
            加入 DWAC，让 AI 与人类专业力量为你提供高效、透明、公正的仲裁服务——無论你身在何处。
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <a href="/zh-tw/dispute/" className="bg-gold-500 hover:bg-gold-600 text-navy-900 font-bold py-4 px-10 rounded-lg transition-all hover:scale-105 shadow-lg shadow-gold-500/25 text-lg">
              申請仲裁
            </a>
            <a href="/zh-tw/contact/" className="border-2 border-gray-600 text-gray-300 hover:border-gold-500 hover:text-gold-400 font-bold py-4 px-10 rounded-lg transition-colors text-lg">
              聯繫我們
            </a>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
            {[
              { value: '3–6', label: '個月平均週期' },
              { value: '55%+', label: '成本節省' },
              { value: '24/7', label: '線上服務' },
              { value: '150+', label: '管轄區域' },
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
