import Link from 'next/link'

interface ResourceCardProps {
  icon: string
  title: string
  desc: string
  tags: { text: string; type?: 'default' | 'region' }[]
  links: { text: string; href: string; primary?: boolean }[]
}

function ResourceCard({ icon, title, desc, tags, links }: ResourceCardProps) {
  return (
    <div className="bg-navy-800/50 border border-navy-700/50 rounded-xl p-6 hover:border-gold-500/50 transition-all hover:-translate-y-0.5">
      <h3 className="text-lg font-medium text-white mb-2 flex items-center gap-2">
        <span className="text-gold-400">{icon}</span> {title}
      </h3>
      <p className="text-gray-400 text-sm mb-4 line-clamp-3">{desc}</p>
      <div className="flex flex-wrap gap-2 mb-4">
        {tags.map((tag, idx) => (
          <span
            key={idx}
            className={`text-xs px-2 py-0.5 rounded ${
              tag.type === 'region'
                ? 'bg-violet-500/10 text-violet-400'
                : 'bg-gradient-gold/10 text-gold-400'
            }`}
          >
            {tag.text}
          </span>
        ))}
      </div>
      <div className="flex flex-wrap gap-2">
        {links.map((link, idx) => (
          <a
            key={idx}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${
              link.primary
                ? 'bg-gradient-gold text-navy-900 font-bold hover:bg-gradient-gold'
                : 'bg-transparent text-gold-400 border border-navy-700 hover:border-gold-500'
            }`}
          >
            {link.text}
          </a>
        ))}
      </div>
    </div>
  )
}

const categories = [
  {
    icon: '💡',
    title: 'Intellectual Property',
    desc: 'Copyright, patents, trademarks, and trade secrets in digital environments',
    resources: [
      {
        icon: '📜',
        title: 'WIPO Copyright Treaty (WCT)',
        desc: 'WIPO internet treaties addressing copyright in digital environments. Essential for cross-border IP disputes.',
        tags: [{ text: 'International' }, { text: 'WIPO' }, { text: 'Global', type: 'region' as const }],
        links: [{ text: '🌐 Official Text', href: 'https://www.wipo.int/treaties/en/ip/wct/' }, { text: '📋 Related Forms', href: '/resources/forms/' }],
      },
      {
        icon: '🌐',
        title: 'WIPO Performances & Phonograms Treaty (WPPT)',
        desc: 'Protection for performers and producers of phonograms in the digital age.',
        tags: [{ text: 'International' }, { text: 'WIPO' }, { text: 'Global', type: 'region' as const }],
        links: [{ text: '🌐 Official Text', href: 'https://www.wipo.int/treaties/en/ip/wppt/' }],
      },
      {
        icon: '🇺🇸',
        title: 'US Digital Millennium Copyright Act (DMCA)',
        desc: 'US federal copyright law addressing digital rights management and online service provider liability.',
        tags: [{ text: 'National' }, { text: 'United States', type: 'region' as const }],
        links: [{ text: '📄 PDF Download', href: 'https://www.copyright.gov/legislation/dmca.pdf' }],
      },
      {
        icon: '🇪🇺',
        title: 'EU Digital Single Market Copyright Directive',
        desc: 'EU framework harmonizing copyright rules across member states for the digital single market.',
        tags: [{ text: 'Regional' }, { text: 'European Union', type: 'region' as const }],
        links: [{ text: '🌐 Official Text', href: 'https://eur-lex.europa.eu/eli/dir/2019/790/oj' }],
      },
    ],
  },
  {
    icon: '⛓️',
    title: 'Smart Contracts & Blockchain',
    desc: 'Legal recognition, enforceability, and dispute resolution for blockchain transactions',
    resources: [
      {
        icon: '📋',
        title: 'UNCITRAL Model Law on Electronic Commerce',
        desc: 'Foundational framework for electronic commerce recognition. Many jurisdictions base their e-commerce laws on this model.',
        tags: [{ text: 'International' }, { text: 'UNCITRAL' }, { text: 'Global', type: 'region' as const }],
        links: [{ text: '🌐 Official Text', href: 'https://uncitral.un.org/en/texts/ecommerce/modellaw' }, { text: '📝 Contracts', href: '/resources/contracts/' }],
      },
      {
        icon: '📜',
        title: 'UNCITRAL Model Law on Electronic Signatures',
        desc: 'Legal framework establishing criteria for electronic signature equivalence to handwritten signatures.',
        tags: [{ text: 'International' }, { text: 'UNCITRAL' }, { text: 'Global', type: 'region' as const }],
        links: [{ text: '🌐 Official Text', href: 'https://uncitral.un.org/en/texts/ecommerce/modellaw' }],
      },
      {
        icon: '🇨🇳',
        title: 'China Electronic Commerce Law',
        desc: 'Comprehensive Chinese law governing e-commerce operators, contracts, dispute resolution, and liability.',
        tags: [{ text: 'National' }, { text: 'China', type: 'region' as const }],
        links: [{ text: '📝 Contracts', href: '/resources/contracts/' }],
      },
      {
        icon: '🇸🇬',
        title: 'Singapore Electronic Transactions Act',
        desc: 'Progressive legislation providing legal certainty for electronic transactions and contracts, widely recognized as a model for Asia-Pacific.',
        tags: [{ text: 'National' }, { text: 'Singapore', type: 'region' as const }],
        links: [{ text: '🌐 Official Text', href: 'https://sso.agc.gov.sg/Act/ETA2010' }],
      },
    ],
  },
  {
    icon: '🤖',
    title: 'AI & Data Governance',
    desc: 'AI regulation, data protection, and liability frameworks for autonomous agents',
    resources: [
      {
        icon: '🇪🇺',
        title: 'EU AI Act',
        desc: 'Comprehensive EU regulation on artificial intelligence, risk classification, and compliance requirements for AI systems.',
        tags: [{ text: 'Regulation' }, { text: 'European Union', type: 'region' as const }],
        links: [{ text: '🌐 Official Text', href: 'https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32024R1689' }],
      },
      {
        icon: '🇪🇺',
        title: 'EU General Data Protection Regulation (GDPR)',
        desc: 'Gold standard for data protection law, applicable to any entity processing EU residents\' personal data.',
        tags: [{ text: 'Data Protection' }, { text: 'European Union', type: 'region' as const }],
        links: [{ text: '🌐 Official Text', href: 'https://gdpr.eu/' }],
      },
      {
        icon: '🇨🇳',
        title: 'China Personal Information Protection Law (PIPL)',
        desc: 'China\'s comprehensive data protection law governing personal information processing and cross-border data transfers.',
        tags: [{ text: 'Data Protection' }, { text: 'China', type: 'region' as const }],
        links: [{ text: '🔗 Related', href: '/resources/law/' }],
      },
      {
        icon: '🤝',
        title: 'OECD AI Principles',
        desc: 'International standards for trustworthy AI covering transparency, accountability, and inclusivity in AI systems.',
        tags: [{ text: 'AI Governance' }, { text: 'International' }, { text: 'OECD', type: 'region' as const }],
        links: [{ text: '🌐 Official Text', href: 'https://oecd.ai/en/principles' }],
      },
    ],
  },
  {
    icon: '⚖️',
    title: 'Online Dispute Resolution (ODR)',
    desc: 'International ODR frameworks, platforms, and enforcement mechanisms',
    resources: [
      {
        icon: '🌐',
        title: 'UNCITRAL ODR Guidelines',
        desc: 'UN body guidelines for consumer ODR covering principles, procedures, and implementation frameworks for online dispute resolution.',
        tags: [{ text: 'ODR' }, { text: 'International' }, { text: 'Global', type: 'region' as const }],
        links: [{ text: '🌐 Official Text', href: 'https://uncitral.un.org/en/texts/consumers' }, { text: '⚖️ DWAC Process', href: '/arbitration-flow/' }],
      },
      {
        icon: '🌐',
        title: 'eBay/PayPal ODR Model',
        desc: 'Industry-leading ODR model used by eBay and PayPal, processing millions of disputes annually. Reference architecture for platform ODR.',
        tags: [{ text: 'ODR' }, { text: 'Industry' }, { text: 'Global', type: 'region' as const }],
        links: [{ text: '🌐 Reference', href: 'https://www.ebay.com/pages/resolution/' }],
      },
      {
        icon: '🇺🇸',
        title: 'American Arbitration Association (AAA)',
        desc: 'Leading US arbitration institution offering online dispute resolution services with comprehensive procedural rules.',
        tags: [{ text: 'Arbitration' }, { text: 'United States', type: 'region' as const }],
        links: [{ text: '🌐 Official Site', href: 'https://www.adr.org/' }],
      },
      {
        icon: '🇬🇧',
        title: 'London Court of International Arbitration (LCIA)',
        desc: 'Prestigious international arbitration institution with digital dispute resolution capabilities and cross-border enforcement expertise.',
        tags: [{ text: 'Arbitration' }, { text: 'United Kingdom', type: 'region' as const }],
        links: [{ text: '🌐 Official Site', href: 'https://www.lcia.org/' }],
      },
    ],
  },
  {
    icon: '🪪',
    title: 'Digital Identity & Decentralized ID (DID)',
    desc: 'Legal frameworks and standards for digital identity verification and self-sovereign identity',
    resources: [
      {
        icon: '🌐',
        title: 'W3C Decentralized Identifiers (DIDs)',
        desc: 'W3C international standard for decentralized digital identifiers enabling verifiable, self-sovereign digital identity.',
        tags: [{ text: 'DID' }, { text: 'Standard' }, { text: 'Global', type: 'region' as const }],
        links: [{ text: '🌐 Official Text', href: 'https://www.w3.org/TR/did-core/' }],
      },
      {
        icon: '🇪🇺',
        title: 'EU eIDAS Regulation',
        desc: 'EU electronic identification and trust services regulation establishing legal framework for electronic signatures and identification.',
        tags: [{ text: 'Digital ID' }, { text: 'European Union', type: 'region' as const }],
        links: [{ text: '🌐 Official Text', href: 'https://eur-lex.europa.eu/eli/reg/2014/910/oj' }],
      },
      {
        icon: '🇰🇷',
        title: 'South Korea Electronic Financial Supervision Act',
        desc: 'South Korean regulatory framework for electronic financial services including digital identity verification and fintech.',
        tags: [{ text: 'Digital ID' }, { text: 'South Korea', type: 'region' as const }],
        links: [{ text: '🔗 Related', href: '/resources/law/' }],
      },
      {
        icon: '🌐',
        title: 'KYC/AML Frameworks (FATF)',
        desc: 'Financial Action Task Force recommendations on know-your-customer and anti-money laundering for digital asset transactions.',
        tags: [{ text: 'KYC/AML' }, { text: 'International' }, { text: 'Global', type: 'region' as const }],
        links: [{ text: '🌐 Official Text', href: 'https://www.fatf-gafi.org/en/topics/kYC.html' }],
      },
    ],
  },
  {
    icon: '🌍',
    title: 'Cross-Border Enforcement',
    desc: 'International treaties and mechanisms for recognizing and enforcing digital awards',
    resources: [
      {
        icon: '📜',
        title: 'New York Convention (1958)',
        desc: 'The cornerstone treaty for recognizing and enforcing foreign arbitral awards across 172 signatory nations. Essential for cross-border arbitration enforcement.',
        tags: [{ text: 'Treaty' }, { text: '172 Nations', type: 'region' as const }],
        links: [{ text: '🌐 Official Text', href: 'https://uncitral.un.org/en/texts/arbitration/newyorkconvention' }, { text: '⚖️ DWAC Process', href: '/arbitration-flow/' }],
      },
      {
        icon: '📜',
        title: 'UNCITRAL Model Law on International Commercial Arbitration',
        desc: 'Model legislation adopted by many countries as the basis for their national arbitration laws. Provides the legal framework for arbitration proceedings.',
        tags: [{ text: 'Model Law' }, { text: 'UNCITRAL' }, { text: 'Global', type: 'region' as const }],
        links: [{ text: '🌐 Official Text', href: 'https://uncitral.un.org/en/texts/arbitration/modellaw' }],
      },
      {
        icon: '🇭🇰',
        title: 'Hong Kong Arbitration Ordinance',
        desc: 'Modern arbitration legislation providing seamless enforcement of awards between Hong Kong and mainland China under the CAFTA arrangement.',
        tags: [{ text: 'National Law' }, { text: 'Hong Kong SAR', type: 'region' as const }],
        links: [{ text: '🌐 Official Text', href: 'https://www.elegislation.gov.hk/' }],
      },
      {
        icon: '🇸🇬',
        title: 'Singapore International Arbitration Act',
        desc: 'Singapore\'s arbitration legislation based on the UNCITRAL Model Law, widely recognized for pro-arbitration jurisprudence.',
        tags: [{ text: 'National Law' }, { text: 'Singapore', type: 'region' as const }],
        links: [{ text: '🌐 Official Text', href: 'https://sso.agc.gov.sg/' }],
      },
    ],
  },
]

export default function LawPage() {
  return (
    <div className="min-h-screen bg-navy-900">
      {/* Hero */}
      <section className="bg-navy-800 border-b border-navy-800">
        <div className="max-w-5xl mx-auto px-4 py-20 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Global <span className="text-gold-400">Legal Resources</span>
          </h1>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Comprehensive legal references for digital world disputes • organized by jurisdiction and topic
          </p>
        </div>
      </section>

      <div className="max-w-5xl mx-auto px-4 py-12">
        {categories.map((category, catIdx) => (
          <div key={catIdx} className="mb-16">
            <div className="flex items-center gap-4 mb-8 pb-4 border-b-2 border-navy-800">
              <div className="w-14 h-14 bg-gradient-gold/10 border border-gold-500/30 rounded-xl flex items-center justify-center text-2xl">
                {category.icon}
              </div>
              <div>
                <h2 className="text-2xl font-semibold text-white">{category.title}</h2>
                <p className="text-sm text-gray-400">{category.desc}</p>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {category.resources.map((resource, resIdx) => (
                <ResourceCard
                  key={resIdx}
                  icon={resource.icon}
                  title={resource.title}
                  desc={resource.desc}
                  tags={resource.tags}
                  links={resource.links}
                />
              ))}
            </div>
          </div>
        ))}

        {/* Info Box */}
        <div className="bg-gradient-gold/10 border border-gold-500/30 rounded-2xl p-8 mt-12">
          <h3 className="text-lg font-semibold text-gold-400 mb-4">📚 Need More Resources?</h3>
          <p className="text-gray-300 leading-relaxed">
            Explore our complete resource library:<br />
            • <Link href="/resources/" className="text-gold-400 hover:underline">Resource Centre Homepage</Link> • All DWAC resources<br />
            • <Link href="/resources/forms/" className="text-gold-400 hover:underline">Application Forms</Link> • ARB-001 to ARB-008<br />
            • <Link href="/resources/contracts/" className="text-gold-400 hover:underline">Contract Templates</Link> • 10 templates across 5 categories<br />
            • <Link href="/publications/" className="text-gold-400 hover:underline">Publications</Link> • Harry's authoritative texts<br />
            • <Link href="/fee-calculator/" className="text-gold-400 hover:underline">Fee Calculator</Link> • Arbitration cost estimation<br />
            • <Link href="/rules/" className="text-gold-400 hover:underline">Arbitration Rules</Link> • Full DWAC procedural rules<br /><br />
            For legal research requests, contact <a href="mailto:legal@dwac.net" className="text-gold-400 hover:underline">legal@dwac.net</a>
          </p>
        </div>
      </div>
    </div>
  )
}
