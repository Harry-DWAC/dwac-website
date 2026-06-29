import Link from 'next/link'
import { type Lang, t, langPrefix } from './i18n'

export default function Footer({ lang = 'en' }: { lang?: Lang }) {
  return (
    <footer className="relative z-10 border-t border-gold-subtle bg-navy-900/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 border border-gold-500 rounded-md flex items-center justify-center">
                <span className="font-serif font-bold text-gold-400 text-xs">D</span>
              </div>
              <span className="font-serif text-lg font-bold text-white tracking-[2px]">DWAC</span>
            </div>
            <p className="text-sm text-gray-500 leading-relaxed">
              {t[lang].footerTagline}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xs font-bold tracking-[2px] uppercase text-gold-500 mb-5">{t[lang].quickLinks}</h4>
            <ul className="space-y-3 text-sm">
              <li><Link href={`${langPrefix(lang)}/about/`} className="text-gray-500 hover:text-gold-400 transition-colors">{t[lang].footerAbout}</Link></li>
              <li><Link href={`${langPrefix(lang)}/rules/`} className="text-gray-500 hover:text-gold-400 transition-colors">{t[lang].footerRules}</Link></li>
              <li><Link href={`${langPrefix(lang)}/arbitrators/join/`} className="text-gray-500 hover:text-gold-400 transition-colors">{t[lang].becomeArbitrator}</Link></li>
              <li><Link href={`${langPrefix(lang)}/membership/`} className="text-gray-500 hover:text-gold-400 transition-colors">{t[lang].membership}</Link></li>
              <li><Link href={`${langPrefix(lang)}/charter/`} className="text-gray-500 hover:text-gold-400 transition-colors">{t[lang].footerCharter}</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-xs font-bold tracking-[2px] uppercase text-gold-500 mb-5">{t[lang].footerServices}</h4>
            <ul className="space-y-3 text-sm">
              <li><Link href={`${langPrefix(lang)}/dispute/`} className="text-gray-500 hover:text-gold-400 transition-colors">{t[lang].fileDispute}</Link></li>
              <li><Link href={`${langPrefix(lang)}/fees/`} className="text-gray-500 hover:text-gold-400 transition-colors">{t[lang].footerFees}</Link></li>
              <li><Link href={`${langPrefix(lang)}/fee-calculator/`} className="text-gray-500 hover:text-gold-400 transition-colors">{t[lang].feeCalculator}</Link></li>
              <li><Link href={`${langPrefix(lang)}/model-clause/`} className="text-gray-500 hover:text-gold-400 transition-colors">{t[lang].footerModelClause}</Link></li>
              <li><Link href={`${langPrefix(lang)}/evidence-guidance/`} className="text-gray-500 hover:text-gold-400 transition-colors">{t[lang].footerEvidence}</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xs font-bold tracking-[2px] uppercase text-gold-500 mb-5">{t[lang].footerContact}</h4>
            <ul className="space-y-3 text-sm">
              <li><Link href={`${langPrefix(lang)}/contact/`} className="text-gray-500 hover:text-gold-400 transition-colors">{t[lang].getInTouch}</Link></li>
              <li className="text-gray-500">{t[lang].email}: secretary@dwac.net</li>
              <li className="text-gray-500">{t[lang].domain}: dwac.net</li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="mt-12 pt-8 border-t border-gold-subtle/30 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-xs text-gray-600">
            <p>{t[lang].copyright(new Date().getFullYear())}</p>
            <p className="mt-1">Developed and supported by: Chengdu Huanjin Network Technology Co., Ltd.</p>
          </div>
          <div className="flex items-center gap-4">
            <Link href="/" className="text-xs text-gray-600 hover:text-gold-400 transition-colors">EN</Link>
            <Link href="/zh-cn/" className="text-xs text-gray-600 hover:text-gold-400 transition-colors">简体中文</Link>
            <Link href="/zh-tw/" className="text-xs text-gray-600 hover:text-gold-400 transition-colors">繁體中文</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
