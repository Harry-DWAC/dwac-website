export const metadata = {
  title: 'DWAC 关于中国 AI Agent 治理框架的反馈意见 - DWAC',
  description: '數位世界仲裁中心就中国《智能体规范应用与创新发展实施意见》提交反馈意见，提出四项关键建议。',
}

export default function CACFeedbackPage() {
  return (
    <div className="flex flex-col">
      {/* ===== HERO ===== */}
      <section className="relative bg-gradient-navy py-16 lg:py-20">
        <div className="absolute inset-0 bg-grid-gold opacity-20" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-xs font-bold tracking-[3px] uppercase text-gold-500 mb-3 block">政策立场</span>
          <h1 className="font-serif text-3xl lg:text-4xl font-bold text-white mb-4 leading-tight">
            DWAC 关于中国 AI Agent 治理框架的反馈意见
          </h1>
          <div className="flex items-center gap-4 text-slate-300 text-sm">
            <span>2026 年 9 月 1 日</span>
            <span className="text-slate-500">•</span>
            <span>數位世界仲裁中心</span>
          </div>
        </div>
      </section>

      {/* ===== CONTENT ===== */}
      <section className="py-12 lg:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            
            {/* 执行摘要 */}
            <div className="bg-blue-50 border-l-4 border-blue-600 p-6 mb-10 rounded-r-lg">
              <h3 className="text-lg font-semibold text-blue-900 mb-2 mt-0">执行摘要</h3>
              <p className="text-blue-800 mb-0">
                DWAC 就中国《智能体规范应用与创新发展实施意见》（2026 年 5 月 8 日）提交反馈意见，
                提出四项关键建议：（1）细化"决策边界清晰"原则，（2）完善安全评估制度，
                （3）补充多智能体与跨境互操作规则，（4）建立仲裁前置争议解决机制。
              </p>
            </div>

            {/* 关于 DWAC */}
            <h2 className="text-2xl font-serif font-bold text-navy-900 mt-12 mb-4">关于 DWAC</h2>
            <p className="text-slate-700 leading-relaxed">
              數位世界仲裁中心（Digital World Arbitration Center，DWAC）是一家专注于数字世界争议解决的在线仲裁机构，
              总部位于中华人民共和国香港特别行政区。DWAC 致力于为跨境数字纠纷提供高效、公正的仲裁服务，
              已建立覆盖全球 47 个管辖区域的仲裁规则体系，并在人工智能仲裁领域积累了大量制度研究成果。
            </p>

            {/* 总体评价 */}
            <h2 className="text-2xl font-serif font-bold text-navy-900 mt-12 mb-4">总体评价</h2>
            <p className="text-slate-700 leading-relaxed mb-4">
              本机构对《实施意见》的出台表示积极欢迎，认为其具有三方面重要意义：
            </p>
            <ul className="space-y-3 mb-6">
              <li className="flex items-start gap-3">
                <span className="text-gold-500 mt-1">●</span>
                <span className="text-slate-700"><strong>填补 Agent 专项治理的国际空白：</strong>中国是全球首个专门针对人工智能智能体（AI Agent）发布系统性治理文件的主要法域，具有鲜明的制度前瞻性。</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-gold-500 mt-1">●</span>
                <span className="text-slate-700"><strong>建立多部门协同监管的有效范式：</strong>由网信办、发改委、工信部联合发布，体现了人工智能治理跨部门协同的制度创新。</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-gold-500 mt-1">●</span>
                <span className="text-slate-700"><strong>明确安全性与可控性的核心原则：</strong>"安全可控"作为 AI Agent 治理的首要原则，为后续细化规则的制定奠定了良好基础。</span>
              </li>
            </ul>

            {/* 核心建议 */}
            <h2 className="text-2xl font-serif font-bold text-navy-900 mt-12 mb-4">核心建议</h2>

            {/* 建议 1 */}
            <div className="bg-slate-50 p-6 rounded-lg mb-6">
              <h3 className="text-xl font-semibold text-navy-900 mb-3 mt-0">1. 细化"决策边界清晰"原则</h3>
              <p className="text-slate-600 mb-3">《实施意见》要求用户与 AI Agent 之间须有"明确划定的决策权限边界"。</p>
              <p className="text-slate-700 font-medium mb-2">建议：</p>
              <ul className="space-y-2 text-slate-700">
                <li>• 建立 AI Agent 决策权限的分类分级标准（高风险决策须人工确认、低风险决策可自主执行）</li>
                <li>• 明确 AI Agent 运营者须向用户披露 Agent 的自主决策范围和授权边界</li>
                <li>• 建立"Agent 运营者替代责任"制度，明确运营者对 Agent 行为的法律责任</li>
              </ul>
            </div>

            {/* 建议 2 */}
            <div className="bg-slate-50 p-6 rounded-lg mb-6">
              <h3 className="text-xl font-semibold text-navy-900 mb-3 mt-0">2. 完善安全评估制度</h3>
              <p className="text-slate-600 mb-3">《实施意见》要求 AI Agent 运营者在部署前提交"安全评估报告"。</p>
              <p className="text-slate-700 font-medium mb-2">建议：</p>
              <ul className="space-y-2 text-slate-700">
                <li>• 出台《人工智能智能体安全评估技术规范》，明确评估指标体系、评估流程和合格标准</li>
                <li>• 建立"独立第三方评估机构"认可制度</li>
                <li>• 在仲裁规则中明确：安全评估报告可作为判断 AI Agent 运营者是否履行合理注意义务的重要证据</li>
              </ul>
            </div>

            {/* 建议 3 */}
            <div className="bg-slate-50 p-6 rounded-lg mb-6">
              <h3 className="text-xl font-semibold text-navy-900 mb-3 mt-0">3. 多智能体系统与跨境互操作规则</h3>
              <p className="text-slate-600 mb-3">《实施意见》已明确设想多智能体系统（Multi-Agent Systems），并提出建立"可信互联基础"。</p>
              <p className="text-slate-700 font-medium mb-2">建议：</p>
              <ul className="space-y-2 text-slate-700">
                <li>• 明确多智能体协作场景下的连带责任框架和运营者识别义务</li>
                <li>• 建立跨境 AI Agent 争议的管辖规则，明确"服务结果指向中国用户"可作为管辖权连接点</li>
                <li>• 推动 AID 身份码与 W3C 可验证凭证、国际 A2A/MCP 协议标准的互操作对接</li>
              </ul>
            </div>

            {/* 建议 4 */}
            <div className="bg-slate-50 p-6 rounded-lg mb-6">
              <h3 className="text-xl font-semibold text-navy-900 mb-3 mt-0">4. 建立"仲裁前置"争议解决机制</h3>
              <p className="text-slate-600 mb-3">AI Agent 争议具有高度技术性、专业性和跨境性，传统诉讼路径面临取证困难、跨境执行成本高等挑战。</p>
              <p className="text-slate-700 font-medium mb-2">建议：</p>
              <ul className="space-y-2 text-slate-700">
                <li>• 引导 AI Agent 运营者在服务协议中约定"仲裁条款"，优先通过仲裁方式解决纠纷</li>
                <li>• 明确 AI Agent 运营者有义务保存完整的决策日志（Decision Trail Log），作为仲裁程序中的关键证据</li>
                <li>• 建立"AI 仲裁员"认证制度，允许符合条件的 AI 系统作为技术辅助工具参与争议解决</li>
              </ul>
            </div>

            {/* 结语 */}
            <h2 className="text-2xl font-serif font-bold text-navy-900 mt-12 mb-4">结语</h2>
            <p className="text-slate-700 leading-relaxed">
              本机构认为，《实施意见》的出台标志着中国人工智能治理进入了一个新的发展阶段。
              上述反馈意见，期望能为《实施意见》的完善提供参考。
              本机构期待与网信办及相关部门保持沟通，提供数字仲裁领域的专业支持。
            </p>

            {/* 联系方式 */}
            <div className="mt-12 pt-8 border-t border-slate-200">
              <p className="text-slate-600 text-sm">
                <strong>联系人：</strong>Harry Zhang（创始人）<br />
                <strong>邮箱：</strong>contact@dwac.net<br />
                <strong>日期：</strong>2026 年 9 月 1 日
              </p>
              <p className="text-slate-500 text-xs mt-4 italic">
                本意见书由 DWAC 技术团队根据 Dr. Frontie、Pr. Tc Zhou、Fresa Li、Dr. Gochye 等专家的讨论意见整理形成。
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="bg-slate-50 py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-xl font-serif font-bold text-navy-900 mb-3">相关出版物</h3>
          <p className="text-slate-600 mb-6">探索 DWAC 在 AI 治理与数字仲裁领域的研究成果。</p>
          <a 
            href="/zh-cn/publications/gclc" 
            className="inline-flex items-center gap-2 px-6 py-3 bg-navy-900 text-white rounded-lg hover:bg-navy-800 transition-colors"
          >
            查看《数字世界法律汇编》
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </section>
    </div>
  )
}
