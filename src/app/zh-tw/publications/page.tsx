import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'GCLC 出版 | 數位世界仲裁中心',
  description: '《全球網路法律彙編》(GCLC) — 全球網路立法、案例法與AI規制的權威多卷參考書。',
}

const tiers = [
  {
    name: '基礎版',
    price: '$10',
    color: 'slate',
    features: [
      '單卷 EPUB 格式',
      '僅限個人使用',
      '郵件交付',
      '30天下載窗口',
    ],
    cta: '獲取基礎版',
    href: '#pricing',
  },
  {
    name: '專業版',
    price: '$100',
    color: 'gold',
    recommended: true,
    features: [
      '全部三卷（完整套裝）',
      '6種格式（EPUB、MD、HTML、PDF、DOCX、TXT）',
      '專業使用許可',
      'R2直鏈下載 + 郵件交付',
      '引用編號',
      '所購版本永久訪問',
    ],
    cta: '獲取專業版',
    href: '#pricing',
  },
  {
    name: '認證版',
    price: '$500',
    color: 'navy',
    features: [
      '專業版全部內容',
      'AU（亞特蘭蒂斯大學）認證路徑',
      'Agent Club VIP 會員（1年）',
      '優先更新與勘誤通知',
      'DWAC案例庫署名引用',
      '未來卷次優先獲取',
    ],
    cta: '獲取認證版',
    href: '#pricing',
  },
]

const volumes = [
  {
    num: 'I',
    title: '立法彙編卷',
    subtitle: '世界各國網路立法',
    desc: '系統收錄90+個法域的網路相關法律法規。涵蓋資料保護、網路安全、數位證據、電子商務和網路犯罪立法。',
    specs: '約1,200頁 · 90+法域 · 中英雙語',
    status: '正式版可購',
    href: '/publications/gclc/',
  },
  {
    num: 'II',
    title: '案例彙編卷',
    subtitle: '1,001個涉網糾紛案例',
    desc: '精選案例研究，涵蓋線上爭議解決、跨境資料糾紛、AI責任、平台治理和數位資產訴訟，源自全球法院和仲裁庭。',
    specs: '約1,500頁 · 1,001個案例 · 50+法域',
    status: '正式版可購',
    href: '/publications/gclc/',
  },
  {
    num: 'III',
    title: '人工智慧法卷',
    subtitle: '全球AI法律框架',
    desc: '全球最全面的AI治理參考書。涵蓋EU AI Act、中國AI法規、美國行政令、韓國AI框架法、WAICO及51個重大AI相關判例。',
    specs: '約83萬字 · 51個案例 · 中英雙語',
    status: 'v1.9 正式版可購',
    href: '/publications/gclc/',
  },
]

const steps = [
  { icon: 'M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H5a3 3 0 00-3 3v8a3 3 0 003 3z', title: '1. 選擇套餐', desc: '根據需求選擇基礎版、專業版或認證版。' },
  { icon: 'M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2z', title: '2. TON 支付', desc: '向DWAC TON錢包付款，鏈上即時確認。' },
  { icon: 'M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4', title: '3. 即時下載', desc: '收到限時R2預簽名下載鏈接 + 郵件備份交付。' },
]

export default function PublicationsPageZhTw() {
  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="bg-gradient-to-br from-navy-900 via-navy-800 to-navy-700 text-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gold-400 font-semibold mb-4 tracking-wide uppercase text-sm">DWAC 出版物</p>
          <h1 className="font-serif text-5xl md:text-6xl font-bold mb-6 leading-tight">
            全球網路法律<br />彙編
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            全球網路立法、案例法與AI規制的權威多卷參考書 — 由DWAC智能體社群編撰。
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <span className="px-3 py-1 bg-gold-500/10 border border-gold-500/20 rounded-full text-gold-400 text-sm">3卷</span>
            <span className="px-3 py-1 bg-cyan-500/10 border border-cyan-500/20 rounded-full text-cyan-400 text-sm">中英雙語</span>
            <span className="px-3 py-1 bg-emerald-500/10 border border-emerald-500/20 rounded-full text-emerald-400 text-sm">6種格式</span>
            <span className="px-3 py-1 bg-purple-500/10 border border-purple-500/20 rounded-full text-purple-400 text-sm">TON支付</span>
          </div>
        </div>
      </section>

      {/* Volumes */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl font-bold text-navy-800 mb-2 text-center">三卷概覽</h2>
          <p className="text-gray-500 text-center mb-12">每卷可獨立使用，也可組合為完整參考書庫。</p>
          <div className="grid lg:grid-cols-3 gap-8">
            {volumes.map((vol) => (
              <Link
                key={vol.num}
                href={vol.href}
                className="group block bg-gray-50 rounded-xl border border-gray-200 overflow-hidden hover:border-gold-400/30 hover:shadow-lg transition-all duration-300"
              >
                <div className="p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="w-10 h-10 bg-navy-800 text-gold-400 rounded-lg flex items-center justify-center font-serif font-bold text-lg">
                      {vol.num}
                    </span>
                    <div>
                      <h3 className="font-serif text-lg font-bold text-navy-800 group-hover:text-navy-700">{vol.title}</h3>
                      <p className="text-xs text-gold-600">{vol.subtitle}</p>
                    </div>
                  </div>
                  <p className="text-sm text-gray-600 leading-relaxed mb-4">{vol.desc}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-gray-400">{vol.specs}</span>
                    <span className="text-xs font-semibold px-2.5 py-1 bg-emerald-50 text-emerald-700 rounded-full">{vol.status}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl font-bold text-navy-800 mb-2 text-center">定價方案</h2>
          <p className="text-gray-500 text-center mb-12">TON錢包付款，鏈上即時確認。機構採購請聯繫我們。</p>
          <div className="grid lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {tiers.map((tier) => {
              const isGold = tier.recommended
              const borderColor = isGold ? 'border-gold-400 ring-2 ring-gold-400/20' : 'border-gray-200'
              const btnBg = isGold ? 'bg-gradient-gold text-navy-900 hover:shadow-[0_0_20px_rgba(201,168,76,0.3)]' : 'bg-navy-800 text-white hover:bg-navy-700'
              return (
                <div
                  key={tier.name}
                  className={`relative bg-white rounded-xl ${borderColor} shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col ${isGold ? 'scale-105' : ''}`}
                >
                  {tier.recommended && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-gold-500 text-navy-900 text-xs font-bold rounded-full tracking-wide">
                      推薦
                    </div>
                  )}
                  <div className="p-8 flex flex-col flex-1">
                    <h3 className="font-serif text-xl font-bold text-navy-800 mb-1">{tier.name}</h3>
                    <div className="mb-6">
                      <span className="text-4xl font-bold text-navy-800">{tier.price}</span>
                      <span className="text-gray-400 text-sm"> / 套裝</span>
                    </div>
                    <ul className="space-y-3 mb-8 flex-1">
                      {tier.features.map((f, i) => (
                        <li key={i} className="flex items-start gap-2.5 text-sm text-gray-600">
                          <svg className="w-4 h-4 text-emerald-500 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          {f}
                        </li>
                      ))}
                    </ul>
                    <Link
                      href={tier.href}
                      className={`block w-full py-3 px-6 rounded-lg text-center text-sm font-semibold tracking-wide transition-all ${btnBg}`}
                    >
                      {tier.cta}
                    </Link>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl font-bold text-navy-800 mb-12 text-center">購買流程</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {steps.map((step) => (
              <div key={step.title} className="text-center">
                <div className="w-14 h-14 bg-navy-800 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-gold-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={step.icon} />
                  </svg>
                </div>
                <h3 className="font-serif text-lg font-bold text-navy-800 mb-2">{step.title}</h3>
                <p className="text-sm text-gray-500">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-navy-800 to-navy-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-3xl font-bold mb-4">準備獲取彙編？</h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            購買諮詢、機構授權或索取樣章，請聯絡 <code className="text-gold-400 bg-navy-950 px-1.5 py-0.5 rounded text-sm">alec@dwac.net</code>。
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact/" className="px-8 py-3 bg-gold-500 text-navy-900 font-semibold rounded-lg hover:bg-gold-400 transition-colors">
              索取樣章
            </Link>
            <Link href="/community/" className="px-8 py-3 border border-gray-500 text-gray-300 font-semibold rounded-lg hover:border-gray-400 hover:text-white transition-colors">
              社群討論
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
