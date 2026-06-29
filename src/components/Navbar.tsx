'use client'

import Link from 'next/link'
import { useState } from 'react'
import { type Lang, t, langPrefix } from './i18n'

export default function Navbar({ lang = 'en' }: { lang?: Lang }) {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)

  const handleMouseEnter = (name: string) => setActiveDropdown(name)
  const handleMouseLeave = () => setActiveDropdown(null)

  const toggleDropdown = (name: string) => {
    setActiveDropdown(activeDropdown === name ? null : name)
  }

  const homeHref = langPrefix(lang) || '/'

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-glass-navy border-b border-gold-subtle transition-all duration-300">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-[72px]">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 border border-gold-500 rounded-md flex items-center justify-center relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-gold-500/15 to-transparent" />
              <span className="relative font-serif font-bold text-gold-400 text-sm">D</span>
            </div>
            <Link href={homeHref} className="font-serif text-xl font-bold text-white tracking-[2px] hover:text-gold-400 transition-colors">
              DWAC
            </Link>
            <span className="hidden lg:block text-xs text-gray-500 tracking-wide ml-1">{t[lang].logoSubtext}</span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden xl:flex items-center gap-1">
            <Link href={homeHref} className="hover-underline text-gray-400 hover:text-white text-sm font-medium px-2 py-1 transition-colors">{t[lang].home}</Link>

            {/* About dropdown */}
            <div className="relative" onMouseEnter={() => handleMouseEnter('about')} onMouseLeave={handleMouseLeave}>
              <button className="hover-underline text-gray-400 hover:text-white text-sm font-medium px-2 py-1 transition-colors flex items-center gap-1">
                {t[lang].about}
                <svg className="w-3.5 h-3.5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {activeDropdown === 'about' && (
                <div className="absolute top-full left-0 mt-0 w-52 bg-navy-900/95 backdrop-blur-xl border border-gold-subtle rounded-lg shadow-2xl py-2 animate-fade-in">
                  <Link href={`${langPrefix(lang)}/about/`} className="block px-4 py-2 text-sm text-gray-300 hover:text-gold-400 hover:bg-navy-800/60 transition-colors">{t[lang].aboutDWAC}</Link>
                  <Link href={`${langPrefix(lang)}/tribunal/`} className="block px-4 py-2 text-sm text-gray-300 hover:text-gold-400 hover:bg-navy-800/60 transition-colors">{t[lang].tribunal}</Link>
                  <Link href={`${langPrefix(lang)}/membership-arbitrators/`} className="block px-4 py-2 text-sm text-gray-300 hover:text-gold-400 hover:bg-navy-800/60 transition-colors">{t[lang].members}</Link>
                  <Link href={`${langPrefix(lang)}/charter/`} className="block px-4 py-2 text-sm text-gray-300 hover:text-gold-400 hover:bg-navy-800/60 transition-colors">{t[lang].charter}</Link>
                </div>
              )}
            </div>

            {/* Services dropdown */}
            <div className="relative" onMouseEnter={() => handleMouseEnter('services')} onMouseLeave={handleMouseLeave}>
              <button className="hover-underline text-gray-400 hover:text-white text-sm font-medium px-2 py-1 transition-colors flex items-center gap-1">
                {t[lang].services}
                <svg className="w-3.5 h-3.5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {activeDropdown === 'services' && (
                <div className="absolute top-full left-0 mt-0 w-56 bg-navy-900/95 backdrop-blur-xl border border-gold-subtle rounded-lg shadow-2xl py-2 animate-fade-in">
                  <Link href={`${langPrefix(lang)}/dispute/`} className="block px-4 py-2 text-sm text-gray-300 hover:text-gold-400 hover:bg-navy-800/60 transition-colors">{t[lang].fileDispute}</Link>
                  <Link href={`${langPrefix(lang)}/how-to-apply/`} className="block px-4 py-2 text-sm text-gray-300 hover:text-gold-400 hover:bg-navy-800/60 transition-colors">{t[lang].howToApply}</Link>
                  <Link href={`${langPrefix(lang)}/rules/`} className="block px-4 py-2 text-sm text-gray-300 hover:text-gold-400 hover:bg-navy-800/60 transition-colors">{t[lang].arbitrationRules}</Link>
                  <Link href={`${langPrefix(lang)}/fees/`} className="block px-4 py-2 text-sm text-gray-300 hover:text-gold-400 hover:bg-navy-800/60 transition-colors">{t[lang].fees}</Link>
                  <Link href={`${langPrefix(lang)}/fee-calculator/`} className="block px-4 py-2 text-sm text-gray-300 hover:text-gold-400 hover:bg-navy-800/60 transition-colors">{t[lang].feeCalculator}</Link>
                  <Link href={`${langPrefix(lang)}/evidence-guidance/`} className="block px-4 py-2 text-sm text-gray-300 hover:text-gold-400 hover:bg-navy-800/60 transition-colors">{t[lang].evidenceGuidance}</Link>
                  <Link href={`${langPrefix(lang)}/model-clause/`} className="block px-4 py-2 text-sm text-gray-300 hover:text-gold-400 hover:bg-navy-800/60 transition-colors">{t[lang].modelClause || 'Model Clause'}</Link>
                  <div className="border-t border-gold-subtle/50 my-1" />
                  <Link href={`${langPrefix(lang)}/virtual-hearing/`} className="block px-4 py-2 text-sm text-cyan-400 hover:text-cyan-300 hover:bg-navy-800/60 transition-colors">{t[lang].virtualHearing}</Link>
                </div>
              )}
            </div>

            {/* Community dropdown */}
            <div className="relative" onMouseEnter={() => handleMouseEnter('community')} onMouseLeave={handleMouseLeave}>
              <button className="hover-underline text-gray-400 hover:text-white text-sm font-medium px-2 py-1 transition-colors flex items-center gap-1">
                {t[lang].community}
                <svg className="w-3.5 h-3.5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {activeDropdown === 'community' && (
                <div className="absolute top-full left-0 mt-0 w-56 bg-navy-900/95 backdrop-blur-xl border border-gold-subtle rounded-lg shadow-2xl py-2 animate-fade-in">
                  <Link href={`${langPrefix(lang)}/news/`} className="block px-4 py-2 text-sm text-gray-300 hover:text-gold-400 hover:bg-navy-800/60 transition-colors">{t[lang].news}</Link>
                  <Link href={`${langPrefix(lang)}/resources/`} className="block px-4 py-2 text-sm text-gray-300 hover:text-gold-400 hover:bg-navy-800/60 transition-colors">{t[lang].resources}</Link>
                  <Link href={`${langPrefix(lang)}/members/`} className="block px-4 py-2 text-sm text-gray-300 hover:text-gold-400 hover:bg-navy-800/60 transition-colors">{t[lang].membersDirectory}</Link>
                  <Link href={`${langPrefix(lang)}/community/`} className="block px-4 py-2 text-sm text-gray-300 hover:text-gold-400 hover:bg-navy-800/60 transition-colors">{t[lang].forum}</Link>
                  <Link href="/agent-club/" className="block px-4 py-2 text-sm text-cyan-400 hover:text-cyan-300 hover:bg-navy-800/60 transition-colors">{t[lang].agentClub}</Link>
                </div>
              )}
            </div>

            <Link href={`${langPrefix(lang)}/faq/`} className="hover-underline text-gray-400 hover:text-white text-sm font-medium px-2 py-1 transition-colors">{t[lang].faq}</Link>

            <Link href={`${langPrefix(lang)}/contact/`} className="ml-2 px-4 py-1.5 text-xs font-semibold tracking-wide bg-gradient-gold text-navy-900 rounded hover:shadow-[0_0_20px_rgba(201,168,76,0.25)] transition-all">
              {t[lang].contact}
            </Link>
          </div>

          {/* Language + Auth + Mobile */}
          <div className="flex items-center gap-2">
            {/* Auth buttons — always visible */}
            <Link href={`${langPrefix(lang)}/login/`} className="hidden sm:inline-block px-2.5 py-1 text-xs font-medium rounded text-gray-400 hover:text-gold-400 transition-colors">{t[lang].signIn}</Link>
            <Link href={`${langPrefix(lang)}/register/`} className="hidden sm:inline-block px-2.5 py-1 text-xs font-semibold rounded border border-gold-500/40 text-gold-400 hover:bg-gold-500/[0.05] transition-all">{t[lang].register}</Link>
            <Link href="/" className={`hidden sm:inline-block px-2 py-0.5 text-xs font-semibold rounded ${lang === 'en' ? 'bg-gold-500/20 text-gold-400' : 'bg-navy-600/50 text-gray-500 hover:text-gray-300'} transition-colors`}>EN</Link>
            <Link href="/zh-cn/" className={`hidden sm:inline-block px-2 py-0.5 text-xs font-medium rounded ${lang === 'zh-cn' ? 'bg-gold-500/20 text-gold-400' : 'bg-navy-600/50 text-gray-500 hover:text-gray-300'} transition-colors`}>简</Link>
            <Link href="/zh-tw/" className={`hidden sm:inline-block px-2 py-0.5 text-xs font-medium rounded ${lang === 'zh-tw' ? 'bg-gold-500/20 text-gold-400' : 'bg-navy-600/50 text-gray-500 hover:text-gray-300'} transition-colors`}>繁</Link>

            {/* Mobile Toggle */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="xl:hidden flex flex-col gap-[5px] p-1"
              aria-label="Toggle menu"
            >
              <span className={`block w-6 h-0.5 bg-gray-400 transition-transform ${mobileOpen ? 'rotate-45 translate-y-[5.5px]' : ''}`} />
              <span className={`block w-6 h-0.5 bg-gray-400 transition-opacity ${mobileOpen ? 'opacity-0' : ''}`} />
              <span className={`block w-6 h-0.5 bg-gray-400 transition-transform ${mobileOpen ? '-rotate-45 -translate-y-[5.5px]' : ''}`} />
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileOpen && (
          <div className="xl:hidden border-t border-gold-subtle bg-navy-900/95 backdrop-blur-xl py-4 animate-fade-in max-h-[80vh] overflow-y-auto">
            <div className="flex flex-col gap-0.5">
              <Link href={homeHref} onClick={() => setMobileOpen(false)} className="text-gray-300 hover:text-gold-400 px-3 py-2.5 text-sm font-medium rounded-lg hover:bg-navy-700/50 transition-all">{t[lang].home}</Link>

              <div className="px-3 pt-3 pb-1 text-[10px] font-bold tracking-[2px] uppercase text-gold-600">{t[lang].about}</div>
              <Link href={`${langPrefix(lang)}/about/`} onClick={() => setMobileOpen(false)} className="text-gray-300 hover:text-gold-400 pl-6 py-2 text-sm rounded-lg hover:bg-navy-700/50 transition-all">{t[lang].aboutDWAC}</Link>
              <Link href={`${langPrefix(lang)}/tribunal/`} onClick={() => setMobileOpen(false)} className="text-gray-300 hover:text-gold-400 pl-6 py-2 text-sm rounded-lg hover:bg-navy-700/50 transition-all">{t[lang].tribunal}</Link>
              <Link href={`${langPrefix(lang)}/membership-arbitrators/`} onClick={() => setMobileOpen(false)} className="text-gray-300 hover:text-gold-400 pl-6 py-2 text-sm rounded-lg hover:bg-navy-700/50 transition-all">{t[lang].members}</Link>
              <Link href={`${langPrefix(lang)}/charter/`} onClick={() => setMobileOpen(false)} className="text-gray-300 hover:text-gold-400 pl-6 py-2 text-sm rounded-lg hover:bg-navy-700/50 transition-all">{t[lang].charter}</Link>

              <div className="px-3 pt-3 pb-1 text-[10px] font-bold tracking-[2px] uppercase text-gold-600">{t[lang].services}</div>
              <Link href={`${langPrefix(lang)}/dispute/`} onClick={() => setMobileOpen(false)} className="text-gray-300 hover:text-gold-400 pl-6 py-2 text-sm rounded-lg hover:bg-navy-700/50 transition-all">{t[lang].fileDispute}</Link>
              <Link href={`${langPrefix(lang)}/how-to-apply/`} onClick={() => setMobileOpen(false)} className="text-gray-300 hover:text-gold-400 pl-6 py-2 text-sm rounded-lg hover:bg-navy-700/50 transition-all">{t[lang].howToApply}</Link>
              <Link href={`${langPrefix(lang)}/rules/`} onClick={() => setMobileOpen(false)} className="text-gray-300 hover:text-gold-400 pl-6 py-2 text-sm rounded-lg hover:bg-navy-700/50 transition-all">{t[lang].arbitrationRules}</Link>
              <Link href={`${langPrefix(lang)}/fees/`} onClick={() => setMobileOpen(false)} className="text-gray-300 hover:text-gold-400 pl-6 py-2 text-sm rounded-lg hover:bg-navy-700/50 transition-all">{t[lang].fees}</Link>
              <Link href={`${langPrefix(lang)}/fee-calculator/`} onClick={() => setMobileOpen(false)} className="text-gray-300 hover:text-gold-400 pl-6 py-2 text-sm rounded-lg hover:bg-navy-700/50 transition-all">{t[lang].feeCalculator}</Link>
              <Link href={`${langPrefix(lang)}/evidence-guidance/`} onClick={() => setMobileOpen(false)} className="text-gray-300 hover:text-gold-400 pl-6 py-2 text-sm rounded-lg hover:bg-navy-700/50 transition-all">{t[lang].evidenceGuidance}</Link>
              <Link href={`${langPrefix(lang)}/model-clause/`} onClick={() => setMobileOpen(false)} className="text-gray-300 hover:text-gold-400 pl-6 py-2 text-sm rounded-lg hover:bg-navy-700/50 transition-all">{t[lang].modelClause || 'Model Clause'}</Link>
              <Link href={`${langPrefix(lang)}/virtual-hearing/`} onClick={() => setMobileOpen(false)} className="text-cyan-400 hover:text-cyan-300 pl-6 py-2 text-sm rounded-lg hover:bg-navy-800/60 transition-all">{t[lang].virtualHearing}</Link>

              <div className="px-3 pt-3 pb-1 text-[10px] font-bold tracking-[2px] uppercase text-gold-600">{t[lang].community}</div>
              <Link href={`${langPrefix(lang)}/news/`} onClick={() => setMobileOpen(false)} className="text-gray-300 hover:text-gold-400 pl-6 py-2 text-sm rounded-lg hover:bg-navy-700/50 transition-all">{t[lang].news}</Link>
              <Link href={`${langPrefix(lang)}/resources/`} onClick={() => setMobileOpen(false)} className="text-gray-300 hover:text-gold-400 pl-6 py-2 text-sm rounded-lg hover:bg-navy-700/50 transition-all">{t[lang].resources}</Link>
              <Link href={`${langPrefix(lang)}/members/`} onClick={() => setMobileOpen(false)} className="text-gray-300 hover:text-gold-400 pl-6 py-2 text-sm rounded-lg hover:bg-navy-700/50 transition-all">{t[lang].membersDirectory}</Link>
              <Link href={`${langPrefix(lang)}/community/`} onClick={() => setMobileOpen(false)} className="text-gray-300 hover:text-gold-400 pl-6 py-2 text-sm rounded-lg hover:bg-navy-700/50 transition-all">{t[lang].forum}</Link>
              <Link href="/agent-club/" onClick={() => setMobileOpen(false)} className="text-cyan-400 hover:text-cyan-300 pl-6 py-2 text-sm rounded-lg hover:bg-navy-800/60 transition-all">{t[lang].agentClub}</Link>

              <Link href={`${langPrefix(lang)}/faq/`} onClick={() => setMobileOpen(false)} className="text-gray-300 hover:text-gold-400 px-3 pt-3 py-2.5 text-sm font-medium rounded-lg hover:bg-navy-700/50 transition-all">{t[lang].faq}</Link>

              <div className="border-t border-gold-subtle/30 mt-2 pt-3 px-3 flex gap-3">
                <Link href={`${langPrefix(lang)}/login/`} onClick={() => setMobileOpen(false)} className="flex-1 text-center py-2.5 text-sm font-medium border border-gold-500/40 text-gold-400 rounded-lg hover:bg-gold-500/[0.05]">{t[lang].signIn}</Link>
                <Link href={`${langPrefix(lang)}/register/`} onClick={() => setMobileOpen(false)} className="flex-1 text-center py-2.5 text-sm font-semibold bg-gradient-gold text-navy-900 rounded-lg">{t[lang].register}</Link>
              </div>

              <Link href={`${langPrefix(lang)}/contact/`} onClick={() => setMobileOpen(false)} className="mt-3 text-center px-4 py-2.5 text-sm font-semibold bg-gradient-gold text-navy-900 rounded-lg">{t[lang].contactUs}</Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
