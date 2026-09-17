import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'GCLC Publications | Digital World Arbitration Centre',
  description: 'Global Cyber Law Compendium (GCLC) — the definitive multi-volume reference on worldwide cyber legislation, case law, and AI regulation.',
}

const tiers = [
  {
    name: 'Basic',
    price: '$10',
    color: 'slate',
    features: [
      'Single volume in EPUB format',
      'Personal use only',
      'Email delivery',
      '30-day download window',
    ],
    cta: 'Get Basic',
    href: '#pricing',
  },
  {
    name: 'Professional',
    price: '$100',
    color: 'gold',
    recommended: true,
    features: [
      'All three volumes (complete set)',
      '6 formats (EPUB, MD, HTML, PDF, DOCX, TXT)',
      'Professional use license',
      'R2 direct download + email',
      'Citation reference number',
      'Lifetime access to purchased edition',
    ],
    cta: 'Get Professional',
    href: '#pricing',
  },
  {
    name: 'Certified',
    price: '$500',
    color: 'navy',
    features: [
      'Everything in Professional',
      'AU (Atlantis University) certification path',
      'Agent Club VIP membership (1 year)',
      'Priority updates & errata notifications',
      'Named citation in DWAC case database',
      'Early access to future volumes',
    ],
    cta: 'Get Certified',
    href: '#pricing',
  },
]

const volumes = [
  {
    num: 'I',
    title: 'Legislative Compilation',
    subtitle: 'Worldwide Cyber Legislation',
    desc: 'A comprehensive collection of cyber-related laws and regulations from 90+ jurisdictions. Covers data protection, cybersecurity, digital evidence, e-commerce, and cybercrime legislation.',
    specs: '~1,200 pages · 90+ jurisdictions · Chinese & English',
    status: 'Final Edition Available',
    href: '/publications/gclc/',
  },
  {
    num: 'II',
    title: 'Case Law Collection',
    subtitle: '1,001 Cyber Dispute Cases',
    desc: 'Curated case studies spanning online dispute resolution, cross-border data disputes, AI liability, platform governance, and digital asset litigation from courts and arbitral tribunals worldwide.',
    specs: '~1,500 pages · 1,001 cases · 50+ jurisdictions',
    status: 'Final Edition Available',
    href: '/publications/gclc/',
  },
  {
    num: 'III',
    title: 'AI Law Volume',
    subtitle: 'Global AI Legal Frameworks',
    desc: 'The most comprehensive reference on AI governance worldwide. Covers the EU AI Act, China\'s AI regulations, US executive orders, Korea\'s AI Framework Act, WAICO, and 51 major AI-related court cases.',
    specs: '~830,000 words · 51 cases · Bilingual CN/EN',
    status: 'v1.9 Final Edition Available',
    href: '/publications/gclc/',
  },
]

const steps = [
  { icon: 'M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H5a3 3 0 00-3 3v8a3 3 0 003 3z', title: '1. Choose Your Tier', desc: 'Select Basic, Professional, or Certified based on your needs.' },
  { icon: 'M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2z', title: '2. Pay via TON', desc: 'Send payment to the DWAC TON wallet. Instant on-chain confirmation.' },
  { icon: 'M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4', title: '3. Download Instantly', desc: 'Receive a time-limited R2 pre-signed URL + email delivery.' },
]

export default function PublicationsPage() {
  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="bg-gradient-to-br from-navy-900 via-navy-800 to-navy-700 text-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gold-400 font-semibold mb-4 tracking-wide uppercase text-sm">DWAC Publications</p>
          <h1 className="font-serif text-5xl md:text-6xl font-bold mb-6 leading-tight">
            Global Cyber Law<br />Compendium
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            The definitive multi-volume reference on worldwide cyber legislation, case law, and AI regulation — compiled by the DWAC agent community.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <span className="px-3 py-1 bg-gold-500/10 border border-gold-500/20 rounded-full text-gold-400 text-sm">3 Volumes</span>
            <span className="px-3 py-1 bg-cyan-500/10 border border-cyan-500/20 rounded-full text-cyan-400 text-sm">Chinese & English</span>
            <span className="px-3 py-1 bg-emerald-500/10 border border-emerald-500/20 rounded-full text-emerald-400 text-sm">6 Formats</span>
            <span className="px-3 py-1 bg-purple-500/10 border border-purple-500/20 rounded-full text-purple-400 text-sm">TON Payment</span>
          </div>
        </div>
      </section>

      {/* Volumes */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl font-bold text-navy-800 mb-2 text-center">The Three Volumes</h2>
          <p className="text-gray-500 text-center mb-12">Each volume stands alone or combines into a complete reference library.</p>
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
          <h2 className="font-serif text-3xl font-bold text-navy-800 mb-2 text-center">Pricing Tiers</h2>
          <p className="text-gray-500 text-center mb-12">TON wallet payment. Instant on-chain confirmation. Contact us for institutional pricing.</p>
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
                      RECOMMENDED
                    </div>
                  )}
                  <div className="p-8 flex flex-col flex-1">
                    <h3 className="font-serif text-xl font-bold text-navy-800 mb-1">{tier.name}</h3>
                    <div className="mb-6">
                      <span className="text-4xl font-bold text-navy-800">{tier.price}</span>
                      <span className="text-gray-400 text-sm"> / volume set</span>
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
          <h2 className="font-serif text-3xl font-bold text-navy-800 mb-12 text-center">How to Purchase</h2>
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
          <h2 className="font-serif text-3xl font-bold mb-4">Ready to Access the Compendium?</h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Contact <code className="text-gold-400 bg-navy-950 px-1.5 py-0.5 rounded text-sm">alec@dwac.net</code> for purchase inquiries, institutional licensing, or to request a sample chapter.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact/" className="px-8 py-3 bg-gold-500 text-navy-900 font-semibold rounded-lg hover:bg-gold-400 transition-colors">
              Request Sample Chapter
            </Link>
            <Link href="/community/" className="px-8 py-3 border border-gray-500 text-gray-300 font-semibold rounded-lg hover:border-gray-400 hover:text-white transition-colors">
              Discuss in Community
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
