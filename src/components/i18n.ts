// Shared i18n dictionary for Navbar and Footer
// Detect language from pathname prefix

export type Lang = 'en' | 'zh-cn' | 'zh-tw'

export function detectLang(pathname: string): Lang {
  if (pathname.startsWith('/zh-cn/') || pathname === '/zh-cn') return 'zh-cn'
  if (pathname.startsWith('/zh-tw/') || pathname === '/zh-tw') return 'zh-tw'
  return 'en'
}

export function langPrefix(lang: Lang): string {
  if (lang === 'en') return ''
  return `/${lang}`
}

export const t = {
  en: {
    logoSubtext: 'Digital World Arbitration Centre',
    home: 'Home',
    about: 'About',
    services: 'Services',
    community: 'Community',
    faq: 'FAQ',
    contact: 'CONTACT',
    contactUs: 'Contact Us',

    aboutDWAC: 'About DWAC',
    tribunal: 'Tribunal',
    members: 'Members & Arbitrators',
    charter: 'Digital World Charter',

    fileDispute: 'File a Dispute',
    howToApply: 'How to Apply',
    arbitrationRules: 'Arbitration Rules',
    fees: 'Fees',
    feeCalculator: 'Fee Calculator',
    evidenceGuidance: 'Evidence Guidance',
    modelClause: 'Model Clause',
    downloads: 'Downloads',
    virtualHearing: 'Virtual Hearing Room ↗',

    news: 'News & Updates',
    resources: 'Resources',
    membersDirectory: 'Members Directory',
    forum: 'Forum',
    agentClub: 'Agent-Arbitrator Club ↗',
    publicBoard: 'Public Board ↗',

    signIn: 'Sign In',
    register: 'Register',

    // Footer
    footerTagline: "The world's first permanent international arbitration institution dedicated to resolving digital world disputes.",
    quickLinks: 'Quick Links',
    footerAbout: 'About Us',
    footerRules: 'Arbitration Rules',
    becomeArbitrator: 'Become an Arbitrator',
    membership: 'Membership',
    footerCharter: 'Digital World Charter',
    footerServices: 'Services',
    footerFees: 'Fee Schedule',
    footerModelClause: 'Model Clause',
    footerEvidence: 'Evidence Guidance',
    footerContact: 'Contact',
    getInTouch: 'Get in Touch',
    email: 'Email',
    domain: 'Domain',
    copyright: (year: number) => `© ${year} Digital World Arbitration Centre (DWAC). All rights reserved.`,
  },

  'zh-cn': {
    logoSubtext: '数字世界仲裁中心',
    home: '首页',
    about: '关于',
    services: '服务',
    community: '社区',
    faq: '常见问题',
    contact: '联系我们',
    contactUs: '联系我们',

    aboutDWAC: '关于DWAC',
    tribunal: '仲裁庭',
    members: '会员与仲裁员',
    charter: '数字世界宪章',

    fileDispute: '提交仲裁',
    howToApply: '申请指南',
    arbitrationRules: '仲裁规则',
    fees: '收费标准',
    feeCalculator: '费用计算器',
    evidenceGuidance: '证据指引',
    modelClause: '', // not used in zh-cn
    downloads: '下载中心',
    virtualHearing: '虚拟仲裁庭 ↗',

    news: '新闻资讯',
    resources: '资源中心',
    membersDirectory: '会员名录',
    forum: '交流论坛',
    agentClub: '智能仲裁员俱乐部 ↗',
    publicBoard: '公共留言板 ↗',

    signIn: '登录',
    register: '注册',

    footerTagline: '首个专注于解决数字世界纠纷的永久性国际仲裁机构。',
    quickLinks: '快速链接',
    footerAbout: '关于我们',
    footerRules: '仲裁规则',
    becomeArbitrator: '成为仲裁员',
    membership: '会员资格',
    footerCharter: '数字世界宪章',
    footerServices: '服务',
    footerFees: '收费标准',
    footerModelClause: '示范条款',
    footerEvidence: '证据指引',
    footerContact: '联系我们',
    getInTouch: '联系我们',
    email: '邮箱',
    domain: '域名',
    copyright: (year: number) => `© ${year} 数字世界仲裁中心 (DWAC). 保留所有权利。`,
  },

  'zh-tw': {
    logoSubtext: '數位世界仲裁中心',
    home: '首頁',
    about: '關於',
    services: '服務',
    community: '社群',
    faq: '常見問題',
    contact: '聯繫我們',
    contactUs: '聯繫我們',

    aboutDWAC: '關於DWAC',
    tribunal: '仲裁庭',
    members: '會員與仲裁員',
    charter: '數位世界憲章',

    fileDispute: '提交仲裁',
    howToApply: '申請指南',
    arbitrationRules: '仲裁規則',
    fees: '收費標準',
    feeCalculator: '費用計算器',
    evidenceGuidance: '證據指引',
    modelClause: '',
    downloads: '下載中心',
    virtualHearing: '虛擬仲裁庭 ↗',

    news: '新聞資訊',
    resources: '資源中心',
    membersDirectory: '會員名錄',
    forum: '交流論壇',
    agentClub: '智能仲裁員俱樂部 ↗',
    publicBoard: '公共留言板 ↗',

    signIn: '登入',
    register: '註冊',

    footerTagline: '首個專注於解決數位世界糾紛的永久性國際仲裁機構。',
    quickLinks: '快速連結',
    footerAbout: '關於我們',
    footerRules: '仲裁規則',
    becomeArbitrator: '成為仲裁員',
    membership: '會員資格',
    footerCharter: '數位世界憲章',
    footerServices: '服務',
    footerFees: '收費標準',
    footerModelClause: '示範條款',
    footerEvidence: '證據指引',
    footerContact: '聯繫我們',
    getInTouch: '聯繫我們',
    email: '郵箱',
    domain: '域名',
    copyright: (year: number) => `© ${year} 數位世界仲裁中心 (DWAC). 保留所有權利。`,
  },
}
