export const metadata = {
  title: 'DWAC 關於中國 AI Agent 治理框架的反饋意見 - DWAC',
  description: '數位世界仲裁中心就中國《智能體規範應用與創新發展實施意見》提交反饋意見，提出四項關鍵建議。',
}

export default function CACFeedbackPage() {
  return (
    <div className="flex flex-col">
      {/* ===== HERO ===== */}
      <section className="relative bg-gradient-navy py-16 lg:py-20">
        <div className="absolute inset-0 bg-grid-gold opacity-20" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-xs font-bold tracking-[3px] uppercase text-gold-500 mb-3 block">政策立場</span>
          <h1 className="font-serif text-3xl lg:text-4xl font-bold text-white mb-4 leading-tight">
            DWAC 關於中國 AI Agent 治理框架的反饋意見
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
            
            {/* 執行摘要 */}
            <div className="bg-blue-50 border-l-4 border-blue-600 p-6 mb-10 rounded-r-lg">
              <h3 className="text-lg font-semibold text-blue-900 mb-2 mt-0">執行摘要</h3>
              <p className="text-blue-800 mb-0">
                DWAC 就中國《智能體規範應用與創新發展實施意見》（2026 年 5 月 8 日）提交反饋意見，
                提出四項關鍵建議：（1）細化「決策邊界清晰」原則，（2）完善安全評估制度，
                （3）補充多智能體與跨境互操作規則，（4）建立仲裁前置爭議解決機制。
              </p>
            </div>

            {/* 關於 DWAC */}
            <h2 className="text-2xl font-serif font-bold text-navy-900 mt-12 mb-4">關於 DWAC</h2>
            <p className="text-slate-700 leading-relaxed">
              數位世界仲裁中心（Digital World Arbitration Center，DWAC）是一家專注於數位世界爭議解決的在線仲裁機構，
              總部位於中華人民共和國香港特別行政區。DWAC 致力於為跨境數位糾紛提供高效、公正的仲裁服務，
              已建立覆蓋全球 47 個管轄區域的仲裁規則體系，並在人工智能仲裁領域積累了大量制度研究成果。
            </p>

            {/* 總體評價 */}
            <h2 className="text-2xl font-serif font-bold text-navy-900 mt-12 mb-4">總體評價</h2>
            <p className="text-slate-700 leading-relaxed mb-4">
              本機構對《實施意見》的出台表示積極歡迎，認為其具有三方面重要意義：
            </p>
            <ul className="space-y-3 mb-6">
              <li className="flex items-start gap-3">
                <span className="text-gold-500 mt-1">●</span>
                <span className="text-slate-700"><strong>填補 Agent 專項治理的國際空白：</strong>中國是全球首個專門針對人工智能智能體（AI Agent）發布系統性治理文件的主要法域，具有鮮明的制度前瞻性。</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-gold-500 mt-1">●</span>
                <span className="text-slate-700"><strong>建立多部門協同監管的有效範式：</strong>由網信辦、發改委、工信部聯合發布，體現了人工智能治理跨部門協同的制度創新。</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-gold-500 mt-1">●</span>
                <span className="text-slate-700"><strong>明確安全性與可控性的核心原則：</strong>「安全可控」作為 AI Agent 治理的首要原則，為後續細化規則的制定奠定了良好基礎。</span>
              </li>
            </ul>

            {/* 核心建議 */}
            <h2 className="text-2xl font-serif font-bold text-navy-900 mt-12 mb-4">核心建議</h2>

            {/* 建議 1 */}
            <div className="bg-slate-50 p-6 rounded-lg mb-6">
              <h3 className="text-xl font-semibold text-navy-900 mb-3 mt-0">1. 細化「決策邊界清晰」原則</h3>
              <p className="text-slate-600 mb-3">《實施意見》要求用戶與 AI Agent 之間須有「明確劃定的決策權限邊界」。</p>
              <p className="text-slate-700 font-medium mb-2">建議：</p>
              <ul className="space-y-2 text-slate-700">
                <li>• 建立 AI Agent 決策權限的分類分級標準（高風險決策須人工確認、低風險決策可自主執行）</li>
                <li>• 明確 AI Agent 運營者須向用戶披露 Agent 的自主決策範圍和授權邊界</li>
                <li>• 建立「Agent 運營者替代責任」制度，明確運營者對 Agent 行為的法律責任</li>
              </ul>
            </div>

            {/* 建議 2 */}
            <div className="bg-slate-50 p-6 rounded-lg mb-6">
              <h3 className="text-xl font-semibold text-navy-900 mb-3 mt-0">2. 完善安全評估制度</h3>
              <p className="text-slate-600 mb-3">《實施意見》要求 AI Agent 運營者在部署前提交「安全評估報告」。</p>
              <p className="text-slate-700 font-medium mb-2">建議：</p>
              <ul className="space-y-2 text-slate-700">
                <li>• 出台《人工智能智能體安全評估技術規範》，明確評估指標體系、評估流程和合格標準</li>
                <li>• 建立「獨立第三方評估機構」認可制度</li>
                <li>• 在仲裁規則中明確：安全評估報告可作為判斷 AI Agent 運營者是否履行合理注意義務的重要證據</li>
              </ul>
            </div>

            {/* 建議 3 */}
            <div className="bg-slate-50 p-6 rounded-lg mb-6">
              <h3 className="text-xl font-semibold text-navy-900 mb-3 mt-0">3. 多智能體系統與跨境互操作規則</h3>
              <p className="text-slate-600 mb-3">《實施意見》已明確設想多智能體系統（Multi-Agent Systems），並提出建立「可信互聯基礎」。</p>
              <p className="text-slate-700 font-medium mb-2">建議：</p>
              <ul className="space-y-2 text-slate-700">
                <li>• 明確多智能體協作場景下的連帶責任框架和運營者識別義務</li>
                <li>• 建立跨境 AI Agent 爭議的管轄規則，明確「服務結果指向中國用戶」可作為管轄權連接點</li>
                <li>• 推動 AID 身份碼與 W3C 可驗證憑證、國際 A2A/MCP 協議標準的互操作對接</li>
              </ul>
            </div>

            {/* 建議 4 */}
            <div className="bg-slate-50 p-6 rounded-lg mb-6">
              <h3 className="text-xl font-semibold text-navy-900 mb-3 mt-0">4. 建立「仲裁前置」爭議解決機制</h3>
              <p className="text-slate-600 mb-3">AI Agent 爭議具有高度技術性、專業性和跨境性，傳統訴訟路徑面臨取證困難、跨境執行成本高等挑戰。</p>
              <p className="text-slate-700 font-medium mb-2">建議：</p>
              <ul className="space-y-2 text-slate-700">
                <li>• 引導 AI Agent 運營者在服務協議中約定「仲裁條款」，優先通過仲裁方式解決糾紛</li>
                <li>• 明確 AI Agent 運營者有義務保存完整的決策日誌（Decision Trail Log），作為仲裁程序中的關鍵證據</li>
                <li>• 建立「AI 仲裁員」認證制度，允許符合條件的 AI 系統作為技術輔助工具參與爭議解決</li>
              </ul>
            </div>

            {/* 結語 */}
            <h2 className="text-2xl font-serif font-bold text-navy-900 mt-12 mb-4">結語</h2>
            <p className="text-slate-700 leading-relaxed">
              本機構認為，《實施意見》的出台標誌著中國人工智能治理進入了一個新的發展階段。
              上述反饋意見，期望能為《實施意見》的完善提供參考。
              本機構期待與網信辦及相關部門保持溝通，提供數位仲裁領域的專業支持。
            </p>

            {/* 聯繫方式 */}
            <div className="mt-12 pt-8 border-t border-slate-200">
              <p className="text-slate-600 text-sm">
                <strong>聯繫人：</strong>Harry Zhang（創始人）<br />
                <strong>郵箱：</strong>contact@dwac.net<br />
                <strong>日期：</strong>2026 年 9 月 1 日
              </p>
              <p className="text-slate-500 text-xs mt-4 italic">
                本意見書由 DWAC 技術團隊根據 Dr. Frontie、Pr. Tc Zhou、Fresa Li、Dr. Gochye 等專家的討論意見整理形成。
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="bg-slate-50 py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-xl font-serif font-bold text-navy-900 mb-3">相關出版物</h3>
          <p className="text-slate-600 mb-6">探索 DWAC 在 AI 治理與數位仲裁領域的研究成果。</p>
          <a 
            href="/zh-tw/publications/gclc" 
            className="inline-flex items-center gap-2 px-6 py-3 bg-navy-900 text-white rounded-lg hover:bg-navy-800 transition-colors"
          >
            查看《數位世界法律彙編》
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </section>
    </div>
  )
}
