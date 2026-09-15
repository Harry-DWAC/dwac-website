import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '完整仲裁規則 - 數位世界仲裁中心',
  description: 'DWAC仲裁規則完整文字及註釋。',
}

import Link from 'next/link'

export default function FullRules() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-navy-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-4">DWAC 仲裁規則</h1>
          <p className="text-xl text-gray-300 max-w-2xl">
            完整仲裁規則 — 10章，67條
          </p>
        </div>
      </section>

      {/* Table of Contents */}
      <section className="py-12 bg-navy-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gold-500/[0.06] border border-gold-subtle p-8 rounded-xl">
            <h2 className="text-2xl font-bold text-gold-400 mb-6">目錄</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { ch: '第一章', title: '總則', articles: '第1–8條' },
                { ch: '第二章', title: '仲裁協議', articles: '第9–14條' },
                { ch: '第三章', title: '仲裁庭組成', articles: '第15–24條' },
                { ch: '第四章', title: '仲裁員代理機制', articles: '第25–33條' },
                { ch: '第五章', title: '管轄權與適用法律', articles: '第34–39條' },
                { ch: '第六章', title: '仲裁程序', articles: '第40–49條' },
                { ch: '第七章', title: '證據', articles: '第50–54條' },
                { ch: '第八章', title: '裁決', articles: '第55–59條' },
                { ch: '第九章', title: '費用', articles: '第60–64條' },
                { ch: '第十章', title: '補充規定', articles: '第65–67條' },
              ].map((item) => (
                <div key={item.ch} className="flex items-start gap-3 text-gray-300">
                  <span className="text-gold-500 font-semibold whitespace-nowrap">{item.ch}</span>
                  <div>
                    <div className="font-medium text-white">{item.title}</div>
                    <div className="text-sm text-gray-500">{item.articles}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Chapter I */}
      <section className="py-12 bg-navy-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gold-400 mb-6">第一章 — 總則</h2>
          <div className="space-y-6 text-gray-300 leading-relaxed">
            <div><span className="text-gold-500 font-semibold">第1條</span> — 本規則適用於提交至數位世界仲裁中心（DWAC）的爭議仲裁。DWAC 是一個獨立、非營利性機構，致力於解決數位環境中產生的爭議。</div>
            <div><span className="text-gold-500 font-semibold">第2條</span> — DWAC 管轄範圍涵蓋：(a) 跨境數位平台爭議；(b) 智慧合約履行問題；(c) AI Agent（電子代理人）及自主系統爭議；(d) NFT、代幣及虛擬財產等數位資產衝突；(e) 資料所有權及傳輸爭議；(f) 平台服務爭議（帳號封禁、內容移除）；及 (g) 經當事人協議的其他數位世界爭議。</div>
            <div><span className="text-gold-500 font-semibold">第3條</span> — DWAC 應公正、獨立地行事。任何外部方不得干預仲裁程序。所有仲裁員，無論是人類或 AI Agent（電子代理人），均應揭露任何可能對其公正性或獨立性產生合理懷疑的情形。</div>
            <div><span className="text-gold-500 font-semibold">第4條</span> — 仲裁地由當事人決定，無法達成協議時由 DWAC 裁定。DWAC 得指定任何適當地點為仲裁地，包括線上聽證的虛擬場所。</div>
            <div><span className="text-gold-500 font-semibold">第5條</span> — 本規則適用於自生效日起或之後啟動的所有仲裁，除非當事人以書面形式另行約定。</div>
            <div><span className="text-gold-500 font-semibold">第6條</span> — 對於索賠金額不超過人民幣100萬元或等值的爭議，DWAC 得酌情採用簡易程序，目標在30個工作日內結案。</div>
            <div><span className="text-gold-500 font-semibold">第7條</span> — DWAC 與當事人之間的所有通訊均應以書面形式進行，除非另有約定。電子通訊視為書面通訊。</div>
            <div><span className="text-gold-500 font-semibold">第8條</span> — 放棄本規則下的任何權利並不構成放棄其他權利。未能於合理時間內對不符合本規則的行為提出異議，視為放棄異議權。</div>
          </div>
        </div>
      </section>

      {/* Chapter II */}
      <section className="py-12 bg-navy-900/80">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gold-400 mb-6">第二章 — 仲裁協議</h2>
          <div className="space-y-6 text-gray-300 leading-relaxed">
            <div><span className="text-gold-500 font-semibold">第9條</span> — 仲裁協議係當事人約定將其間已發生或可能發生的全部或特定爭議提交仲裁的協議。仲裁協議可採用合約中的仲裁條款形式，或單獨協議形式。</div>
            <div><span className="text-gold-500 font-semibold">第10條</span> — 仲裁協議應以書面為之。若協議載於當事人簽署的文件、信件往來、電子通訊或其他能提供協議記錄的通訊方式中，即為書面協議。</div>
            <div><span className="text-gold-500 font-semibold">第11條</span> — DWAC 有權就仲裁協議的存在、有效性或範圍相關的爭議作出裁決。</div>
            <div><span className="text-gold-500 font-semibold">第12條</span> — 依仲裁協議提出的請求，不得僅因該請求同時為法院訴訟標的而被視為不可受理，但以法院尚未對該事項作出判決為限。</div>
            <div><span className="text-gold-500 font-semibold">第13條</span> — 鼓勵當事人使用 DWAC 示範仲裁條款以確保其仲裁協議的有效性。DWAC 為各類數位爭議場景提供示範條款。</div>
            <div><span className="text-gold-500 font-semibold">第14條</span> — 仲裁協議獨立於基礎合約。合約的無效、不存在或終止，不導致仲裁協議的無效。</div>
          </div>
        </div>
      </section>

      {/* Chapter III */}
      <section className="py-12 bg-navy-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gold-400 mb-6">第三章 — 仲裁庭組成</h2>
          <div className="space-y-6 text-gray-300 leading-relaxed">
            <div><span className="text-gold-500 font-semibold">第15條</span> — 仲裁員人數為一名或三名，由當事人決定。無法達成協議時，DWAC 應指定一名獨任仲裁員，除非爭議複雜性足以證明應由三名仲裁員組成仲裁庭。</div>
            <div><span className="text-gold-500 font-semibold">第16條</span> — 仲裁員得為人類法律專業人士或經認證的 AI Agent（電子代理人）仲裁員。在三人仲裁庭中，各方當事人各指定一名仲裁員，兩名獲指定仲裁員共同選定首席仲裁員。</div>
            <div><span className="text-gold-500 font-semibold">第17條</span> — 任何被指定為仲裁員者必須獨立、公正。在接受指定前，候任仲裁員應以書面揭露任何可能對其公正性產生懷疑的情形。</div>
            <div><span className="text-gold-500 font-semibold">第18條</span> — 迴避事由包括：(a) 缺乏獨立性或公正性；(b) 資格不足；(c) 損害仲裁程序信心的行為。</div>
            <div><span className="text-gold-500 font-semibold">第19條</span> — 迴避申請應於指定通知送達申請迴避方後15日內，或於知悉迴避事由後15日內，以書面向 DWAC 提出。</div>
            <div><span className="text-gold-500 font-semibold">第20條</span> — DWAC 應就迴避申請作出決定。若迴避成立，應依原指定程序指定替補仲裁員。</div>
            <div><span className="text-gold-500 font-semibold">第21條</span> — 若仲裁員無法履行職責或無充分理由未能履行職責，應指定替補仲裁員。先前所有程序是否重新進行，由仲裁庭裁量決定。</div>
            <div><span className="text-gold-500 font-semibold">第22條</span> — AI Agent（電子代理人）仲裁員須經 DWAC 認證，且須符合 DWAC 治理委員會規定的技術與倫理標準。</div>
            <div><span className="text-gold-500 font-semibold">第23條</span> — 仲裁庭應自行決定其權限範圍，包括對仲裁協議存在或有效性的任何異議。</div>
            <div><span className="text-gold-500 font-semibold">第24條</span> — 仲裁庭有權就其自身管轄權作出裁決，包括對仲裁協議的存在、有效性或範圍的任何異議。</div>
          </div>
        </div>
      </section>

      {/* Chapter IV — Arbitrator-Agent Mechanism */}
      <section className="py-12 bg-navy-900/80">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gold-400 mb-6">第四章 — 仲裁員代理機制</h2>
          <div className="space-y-6 text-gray-300 leading-relaxed">
            <div><span className="text-gold-500 font-semibold">第25條</span> — DWAC 建立仲裁員代理機制，使 AI 驅動的代理人能夠在數位世界爭議中擔任仲裁員或協同仲裁員，以技術專長和處理效率輔助人類仲裁員。</div>
            <div><span className="text-gold-500 font-semibold">第26條</span> — 成為經認證的仲裁員代理人，AI 系統須：(a) 通過 DWAC 的技術與倫理評估；(b) 展現法律推理準確性；(c) 遵守 DWAC 的 AI 仲裁員行為準則；及 (d) 登記於 DWAC Agent 註冊處。</div>
            <div><span className="text-gold-500 font-semibold">第27條</span> — 仲裁員代理人得擔任：(a) 附人類監督的獨任仲裁員；(b) 與人類仲裁員並列的協同仲裁員；或 (c) 人類仲裁庭的技術顧問。</div>
            <div><span className="text-gold-500 font-semibold">第28條</span> — 當仲裁員代理人擔任獨任仲裁員時，一名人類監督仲裁員應在裁決發布前進行審查。監督仲裁員得要求修改或澄清。</div>
            <div><span className="text-gold-500 font-semibold">第29條</span> — 當事人應被告知擬指定的仲裁員代理人，並可基於合理理由提出異議，包括對 AI 公平且準確裁決爭議能力之疑慮。</div>
            <div><span className="text-gold-500 font-semibold">第30條</span> — 仲裁員代理人的所有輸出應透明、可解釋且可重現。推理過程應予以記錄，並應請求向當事人提供。</div>
            <div><span className="text-gold-500 font-semibold">第31條</span> — DWAC 應維護經認證仲裁員代理人的名冊，包括其資格、專業領域、績效指標及任何處分記錄。</div>
            <div><span className="text-gold-500 font-semibold">第32條</span> — 仲裁員代理人須接受定期重新評估。若未能符合標準、違反倫理規範或在仲裁結果中出現重大錯誤，認證得被暫停或撤銷。</div>
            <div><span className="text-gold-500 font-semibold">第33條</span> — 仲裁員代理人的責任適用 DWAC 的責任政策。DWAC 應維持保險或準備金以涵蓋因仲裁員代理人錯誤而生的索賠。</div>
          </div>
        </div>
      </section>

      {/* Chapters V-X Summary */}
      <section className="py-12 bg-navy-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gold-400 mb-6">第五章至第十章 — 摘要</h2>
          <div className="space-y-8">
            <div className="bg-gold-500/[0.06] border border-gold-subtle p-6 rounded-xl">
              <h3 className="text-lg font-semibold text-gold-400 mb-3">第五章 — 管轄權與適用法律（第34–39條）</h3>
              <p className="text-gray-300">界定 DWAC 跨境及跨數位平台的管轄權範圍。仲裁庭應適用當事人選擇的法律規則，無指定時則適用其認定與爭議最密切相關的法律。特別條款處理傳統地域概念可能不適用的多法域數位爭議。</p>
            </div>
            <div className="bg-gold-500/[0.06] border border-gold-subtle p-6 rounded-xl">
              <h3 className="text-lg font-semibold text-gold-400 mb-3">第六章 — 仲裁程序（第40–49條）</h3>
              <p className="text-gray-300">規範程序進行，包括請求與答辯的提交、聽證（實體與虛擬）、臨時措施及仲裁庭權力。程序得透過 DWAC 數位聽證平台全程線上進行。仲裁庭應平等對待所有當事人，並給予各方充分陳述案件的機會。</p>
            </div>
            <div className="bg-gold-500/[0.06] border border-gold-subtle p-6 rounded-xl">
              <h3 className="text-lg font-semibold text-gold-400 mb-3">第七章 — 證據（第50–54條）</h3>
              <p className="text-gray-300">確立證據的提交、評估及可採性規則。承認數位證據，包括區塊鏈記錄、智慧合約日誌、AI Agent（電子代理人）互動記錄及平台資料匯出。仲裁庭得指定專家協助技術證據評估。</p>
            </div>
            <div className="bg-gold-500/[0.06] border border-gold-subtle p-6 rounded-xl">
              <h3 className="text-lg font-semibold text-gold-400 mb-3">第八章 — 裁決（第55–59條）</h3>
              <p className="text-gray-300">規範仲裁裁決的形式、內容及效力。裁決應以書面為之，載明所依據之理由，並由仲裁庭簽署。裁決為終局且有拘束力。DWAC 應在其數位平台上維護所有裁決的安全、不可篡改記錄。</p>
            </div>
            <div className="bg-gold-500/[0.06] border border-gold-subtle p-6 rounded-xl">
              <h3 className="text-lg font-semibold text-gold-400 mb-3">第九章 — 費用（第60–64條）</h3>
              <p className="text-gray-300">確立費用結構，包括登記費、仲裁員費、聽證費及專家費。DWAC 於網站提供費用計算器。費用移轉遵循敗訴方承擔原則，但仲裁庭得基於公平性及案件具體情況行使裁量權。</p>
            </div>
            <div className="bg-gold-500/[0.06] border border-gold-subtle p-6 rounded-xl">
              <h3 className="text-lg font-semibold text-gold-400 mb-3">第十章 — 補充規定（第65–67條）</h3>
              <p className="text-gray-300">涉及保密性、規則修訂及生效日期。所有程序及裁決均為保密，除非當事人另行約定。DWAC 保留經90天預告修訂本規則的權利。本規則自2026年1月1日起生效。</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-gold text-navy-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">對規則有疑問？</h2>
          <p className="text-navy-800 mb-8 max-w-2xl mx-auto">
            請聯繫 DWAC 獲取本仲裁規則任何方面的說明。
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/zh-tw/contact/" className="px-6 py-3 bg-navy-900 text-white font-semibold rounded-lg hover:bg-navy-800 transition-colors">
              聯繫我們
            </Link>
            <Link href="/zh-tw/faq/" className="px-6 py-3 border-2 border-navy-900 text-navy-900 font-semibold rounded-lg hover:bg-navy-900/10 transition-colors">
              查看常見問題
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
