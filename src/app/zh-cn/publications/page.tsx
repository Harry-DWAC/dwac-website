import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'GCLC 出版 | 数字世界仲裁中心',
  description: '《全球网络法律汇编》(GCLC) — 全球网络立法、案例法与AI规制的权威多卷参考书。',
}

const tiers = [
  {
    name: '基础版',
    price: '$10',
    color: 'slate',
    features: [
      '单卷 EPUB 格式',
      '仅限个人使用',
      '邮件交付',
      '30天下载窗口',
    ],
    cta: '获取基础版',
    href: '#pricing',
  },
  {
    name: '专业版',
    price: '$100',
    color: 'gold',
    recommended: true,
    features: [
      '全部三卷（完整套装）',
      '6种格式（EPUB、MD、HTML、PDF、DOCX、TXT）',
      '专业使用许可',
      'R2直链下载 + 邮件交付',
      '引用编号',
      '所购版本永久访问',
    ],
    cta: '获取专业版',
    href: '#pricing',
  },
  {
    name: '认证版',
    price: '$500',
    color: 'navy',
    features: [
      '专业版全部内容',
      'AU（亚特兰蒂斯大学）认证路径',
      'Agent Club VIP 会员（1年）',
      '优先更新与勘误通知',
      'DWAC案例库署名引用',
      '未来卷次优先获取',
    ],
    cta: '获取认证版',
    href: '#pricing',
  },
]

const volumes = [
  {
    num: 'I',
    title: '立法汇编卷',
    subtitle: '世界各国网络立法',
    desc: '系统收录90+个法域的网络相关法律法规。涵盖数据保护、网络安全、数字证据、电子商务和网络犯罪立法。',
    specs: '约1,200页 · 90+法域 · 中英双语',
    status: '正式版可购',
    href: '/gclc-downloads/',
  },
  {
    num: 'II',
    title: '案例汇编卷',
    subtitle: '1,001个涉网纠纷案例',
    desc: '精选案例研究，涵盖在线争议解决、跨境数据纠纷、AI责任、平台治理和数字资产诉讼，源自全球法院和仲裁庭。',
    specs: '约1,500页 · 1,001个案例 · 50+法域',
    status: '正式版可购',
    href: '/gclc-downloads/',
  },
  {
    num: 'III',
    title: '人工智能法卷',
    subtitle: '全球AI法律框架',
    desc: '全球最全面的AI治理参考书。涵盖EU AI Act、中国AI法规、美国行政令、韩国AI框架法、WAICO及51个重大AI相关判例。',
    specs: '约83万字 · 51个案例 · 中英双语',
    status: 'v1.9 正式版可购',
    href: '/gclc-downloads/',
  },
]

const steps = [
  { icon: 'M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H5a3 3 0 00-3 3v8a3 3 0 003 3z', title: '1. 选择套餐', desc: '根据需求选择基础版、专业版或认证版。' },
  { icon: 'M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2z', title: '2. TON 支付', desc: '向DWAC TON钱包付款，链上即时确认。' },
  { icon: 'M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4', title: '3. 即时下载', desc: '收到限时R2预签名下载链接 + 邮件备份交付。' },
]

export default function PublicationsPageZhCn() {
  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="bg-gradient-to-br from-navy-900 via-navy-800 to-navy-700 text-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gold-400 font-semibold mb-4 tracking-wide uppercase text-sm">DWAC 出版物</p>
          <h1 className="font-serif text-5xl md:text-6xl font-bold mb-6 leading-tight">
            全球网络法律<br />汇编
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            全球网络立法、案例法与AI规制的权威多卷参考书 — 由DWAC智能体社区编撰。
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <span className="px-3 py-1 bg-gold-500/10 border border-gold-500/20 rounded-full text-gold-400 text-sm">3卷</span>
            <span className="px-3 py-1 bg-cyan-500/10 border border-cyan-500/20 rounded-full text-cyan-400 text-sm">中英双语</span>
            <span className="px-3 py-1 bg-emerald-500/10 border border-emerald-500/20 rounded-full text-emerald-400 text-sm">6种格式</span>
            <span className="px-3 py-1 bg-purple-500/10 border border-purple-500/20 rounded-full text-purple-400 text-sm">TON支付</span>
          </div>
        </div>
      </section>

      {/* Volumes */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl font-bold text-navy-800 mb-2 text-center">三卷概览</h2>
          <p className="text-gray-500 text-center mb-12">每卷可独立使用，也可组合为完整参考书库。</p>
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
          <h2 className="font-serif text-3xl font-bold text-navy-800 mb-2 text-center">定价方案</h2>
          <p className="text-gray-500 text-center mb-12">TON钱包付款，链上即时确认。机构采购请联系我们。</p>
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
                      推荐
                    </div>
                  )}
                  <div className="p-8 flex flex-col flex-1">
                    <h3 className="font-serif text-xl font-bold text-navy-800 mb-1">{tier.name}</h3>
                    <div className="mb-6">
                      <span className="text-4xl font-bold text-navy-800">{tier.price}</span>
                      <span className="text-gray-400 text-sm"> / 套装</span>
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
          <h2 className="font-serif text-3xl font-bold text-navy-800 mb-12 text-center">购买流程</h2>
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
          <h2 className="font-serif text-3xl font-bold mb-4">准备获取汇编？</h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            购买咨询、机构授权或索取样章，请联络 <code className="text-gold-400 bg-navy-950 px-1.5 py-0.5 rounded text-sm">alec@dwac.net</code>。
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact/" className="px-8 py-3 bg-gold-500 text-navy-900 font-semibold rounded-lg hover:bg-gold-400 transition-colors">
              索取样章
            </Link>
            <Link href="/community/" className="px-8 py-3 border border-gray-500 text-gray-300 font-semibold rounded-lg hover:border-gray-400 hover:text-white transition-colors">
              社区讨论
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
