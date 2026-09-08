// src/lib/news.ts — 新闻数据单一来源
// 2026-09-09 Anny 抽取统一:原 EN/ZH-CN/ZH-TW 三个 news/page.tsx 内联数组 + 三个首页(page.tsx)硬编码卡片
// 用法:新闻页 import { featuredNews, newsItems } 等;首页 import { homepageNews, monthLabel } 等

export type NewsItem = {
  date: string
  category: string
  title: string
  excerpt: string
  readTime?: string
  href?: string
}

const MONTHS: Record<string, string> = {
  January: 'Jan',
  February: 'Feb',
  March: 'Mar',
  April: 'Apr',
  May: 'May',
  June: 'Jun',
  July: 'Jul',
  August: 'Aug',
  September: 'Sep',
  October: 'Oct',
  November: 'Nov',
  December: 'Dec',
}

/** 'September 1, 2026' → 'Sep 2026'；'2026年9月1日' → '2026年9月'（首页卡片月份标签） */
export function monthLabel(date: string): string {
  const en = date.match(/^([A-Za-z]+) \d{1,2}, (\d{4})$/)
  if (en) return `${MONTHS[en[1]] ?? en[1]} ${en[2]}`
  const zh = date.match(/^(\d{4})年(\d{1,2})月\d{1,2}日$/)
  if (zh) return `${zh[1]}年${parseInt(zh[2], 10)}月`
  return date
}

/* ================= EN ================= */

export const featuredNews: NewsItem[] = [
  {
    date: 'September 1, 2026',
    category: 'Institutional',
    title: "DWAC Submits Feedback on China's AI Agent Governance Framework",
    excerpt:
      "DWAC proposes four key recommendations to China's CAC on AI Agent standardization: refining decision boundary principles, improving security assessment frameworks, supplementing multi-agent and cross-border interoperability rules, and establishing pre-arbitration dispute resolution mechanisms.",
    readTime: '6 min read',
    href: '/publications/policy-statements/cac-feedback-2026-09',
  },
  {
    date: 'June 25, 2026',
    category: 'Institutional',
    title: 'DWAC Launches ECDSA P-256 Verifiable Credential System',
    excerpt:
      'Digital credentials upgraded to real cryptographic signatures. The new ECDSA P-256 VC system provides enterprise-grade security for all digital arbitration certificates and credentials.',
    readTime: '4 min read',
  },
  {
    date: 'April 20, 2026',
    category: 'Institutional',
    title: 'Agent Club Goes Live',
    excerpt:
      '13 AI arbitration agents now running online. The Agent Club is fully operational, bringing together AI arbitrators from around the world for case analysis and discussion.',
    readTime: '3 min read',
  },
  {
    date: 'March 15, 2026',
    category: 'Institutional',
    title: 'DWAC Website Fully Launched in Three Languages',
    excerpt:
      '252 SEO pages all passed acceptance. The DWAC website is now fully live in English, Simplified Chinese, and Traditional Chinese with complete content parity.',
    readTime: '3 min read',
  },
  {
    date: 'April 28, 2025',
    category: 'Institutional',
    title: 'DWAC Announces the Launch of the Agent-Arbitrator Club',
    excerpt:
      "The world's first club dedicated to AI-powered arbitration agents. This groundbreaking initiative aims to pioneer the integration of artificial intelligence in international arbitration proceedings.",
    readTime: '5 min read',
  },
  {
    date: 'April 15, 2025',
    category: 'Industry',
    title: 'Global Digital Commerce Disputes Surpass 2 Million Cases Annually',
    excerpt:
      "A new report from the International Trade Centre reveals the growing demand for specialized digital dispute resolution mechanisms, highlighting DWAC's critical role in this emerging field.",
    readTime: '4 min read',
  },
  {
    date: 'March 30, 2025',
    category: 'Event',
    title: 'DWAC Participates in the 2025 International Arbitration Summit',
    excerpt:
      'DWAC representatives presented on "Arbitration in the Age of AI" at the annual summit, drawing interest from over 500 international practitioners and scholars.',
    readTime: '3 min read',
  },
]

export const homepageNews: NewsItem[] = featuredNews.slice(0, 3)

export const newsItems: NewsItem[] = [
  {
    date: 'Jun 25, 2026',
    category: 'Institutional',
    title: 'DWAC Launches ECDSA P-256 Verifiable Credential System',
    excerpt: 'Digital credentials upgraded to real cryptographic signatures.',
  },
  {
    date: 'Apr 20, 2026',
    category: 'Institutional',
    title: 'Agent Club Goes Live',
    excerpt: '13 AI arbitration agents now running online.',
  },
  {
    date: 'Mar 15, 2026',
    category: 'Institutional',
    title: 'DWAC Website Fully Launched in Three Languages',
    excerpt: '252 SEO pages all passed acceptance.',
  },
  {
    date: 'Apr 20, 2025',
    category: 'Institutional',
    title: 'DWAC Arbitration Rules Updated to Include AI-Assisted Proceedings',
    excerpt:
      'Key amendments to Articles 12, 34, and 56 now provide a framework for the use of AI tools in case management and evidence analysis.',
  },
  {
    date: 'Apr 10, 2025',
    category: 'Publications',
    title: 'New Research Paper: Cross-Border Digital Asset Dispute Resolution',
    excerpt:
      "Dr. Zhou's latest paper examines the legal challenges of resolving disputes involving digital assets across multiple jurisdictions.",
  },
  {
    date: 'Mar 25, 2025',
    category: 'Industry',
    title: 'Southeast Asian E-Commerce Platforms Adopt DWAC Model Clauses',
    excerpt:
      'Three major regional platforms have integrated DWAC arbitration clauses into their standard terms of service.',
  },
  {
    date: 'Mar 15, 2025',
    category: 'Event',
    title: 'DWAC Workshop: Evidence in Digital World Arbitration',
    excerpt:
      'An interactive workshop exploring best practices for digital evidence collection, authentication, and presentation in arbitration.',
  },
  {
    date: 'Mar 05, 2025',
    category: 'Institutional',
    title: 'New Institutional Members Join DWAC from Europe and Africa',
    excerpt:
      'Five universities and three law firms from across Europe and Africa have been approved as institutional members.',
  },
  {
    date: 'Feb 20, 2025',
    category: 'Industry',
    title: 'UN Commission on International Trade Law References ODR Standards',
    excerpt:
      "UNCITRAL Working Group III cites DWAC's approach as a model for future online dispute resolution frameworks.",
  },
]

/* ================= ZH-CN ================= */

export const zhCnFeaturedNews: NewsItem[] = [
  {
    date: '2026年9月1日',
    category: 'Institutional',
    title: 'DWAC 关于中国 AI Agent 治理框架的反馈意见',
    excerpt:
      '数字世界仲裁中心就中国《智能体规范应用与创新发展实施意见》向国家网信办提交反馈意见，提出四项关键建议：细化决策边界原则、完善安全评估框架、补充多智能体与跨境互操作规则、建立仲裁前置争议解决机制。',
    readTime: '6分钟阅读',
    href: '/zh-cn/publications/policy-statements/cac-feedback-2026-09',
  },
  {
    date: '2026年6月25日',
    category: 'Institutional',
    title: 'DWAC 推出 ECDSA P-256 凭证签名系统',
    excerpt: '数字凭证已升级为真实密码学签名。全新的 ECDSA P-256 VC 系统为所有数字仲裁证书和凭证提供企业级安全保护。',
    readTime: '4分钟阅读',
  },
  {
    date: '2026年4月20日',
    category: 'Institutional',
    title: 'Agent Club 正式运行',
    excerpt: '13位AI仲裁Agent在线运行。Agent Club 现已全面运营，汇聚全球AI仲裁员进行案例分析和讨论。',
    readTime: '3分钟阅读',
  },
  {
    date: '2026年3月15日',
    category: 'Institutional',
    title: 'DWAC 网站三语版本全面上线',
    excerpt: '252页SEO全部通过验收。DWAC网站现已全面支持英文、简体中文和繁体中文，内容完全同步。',
    readTime: '3分钟阅读',
  },
  {
    date: '2025年4月28日',
    category: 'Institutional',
    title: 'DWAC宣布成立智能仲裁员俱乐部',
    excerpt: '全球首个专注于AI驱动仲裁代理的俱乐部。这一开创性举措旨在推动人工智能在国际仲裁程序中的整合应用。',
    readTime: '5分钟阅读',
  },
  {
    date: '2025年4月15日',
    category: 'Industry',
    title: '全球数字商务争议年案件量突破200万件',
    excerpt: '国际贸易中心发布的新报告揭示了专业数字争议解决机制日益增长的需求，凸显了DWAC在这一新兴领域的关键作用。',
    readTime: '4分钟阅读',
  },
  {
    date: '2025年3月30日',
    category: 'Event',
    title: 'DWAC参加2025年国际仲裁峰会',
    excerpt: 'DWAC代表在年度峰会上就"AI时代的仲裁"发表演讲，吸引了超过500名国际从业者和学者的关注。',
    readTime: '3分钟阅读',
  },
]

export const zhCnHomepageNews: NewsItem[] = zhCnFeaturedNews.slice(0, 3)

export const zhCnNewsItems: NewsItem[] = [
  {
    date: '2026年6月25日',
    category: 'Institutional',
    title: 'DWAC 推出 ECDSA P-256 凭证签名系统',
    excerpt: '数字凭证已升级为真实密码学签名。',
  },
  {
    date: '2026年4月20日',
    category: 'Institutional',
    title: 'Agent Club 正式运行',
    excerpt: '13位AI仲裁Agent在线运行。',
  },
  {
    date: '2026年3月15日',
    category: 'Institutional',
    title: 'DWAC 网站三语版本全面上线',
    excerpt: '252页SEO全部通过验收。',
  },
  {
    date: '2025年4月20日',
    category: 'Institutional',
    title: 'DWAC仲裁规则更新：纳入AI辅助程序条款',
    excerpt: '对第12、34和56条的关键修订现已为AI工具在案件管理和证据分析中的使用提供了框架。',
  },
  {
    date: '2025年4月10日',
    category: 'Publications',
    title: '新研究论文：跨境数字资产争议解决',
    excerpt: '周博士的最新论文探讨了涉及多司法管辖区数字资产争议解决的法律挑战。',
  },
  {
    date: '2025年3月25日',
    category: 'Industry',
    title: '东南亚电商平台采用DWAC示范条款',
    excerpt: '三大区域平台已将DWAC仲裁条款纳入其标准服务条款。',
  },
  {
    date: '2025年3月15日',
    category: 'Event',
    title: 'DWAC研讨会：数字世界仲裁中的证据',
    excerpt: '一场探索数字证据收集、认证和出示最佳实践的互动研讨会。',
  },
  {
    date: '2025年3月5日',
    category: 'Institutional',
    title: '来自欧洲和非洲的新机构会员加入DWAC',
    excerpt: '来自欧洲和非洲的五所大学和三家律师事务所已被批准为机构会员。',
  },
  {
    date: '2025年2月20日',
    category: 'Industry',
    title: '联合国国际贸易法委员会引用ODR标准',
    excerpt: 'UNCITRAL第三工作组引用DWAC的方法作为未来在线争议解决框架的范例。',
  },
]

/* ================= ZH-TW ================= */

export const zhTwFeaturedNews: NewsItem[] = [
  {
    date: '2026年9月1日',
    category: 'Institutional',
    title: 'DWAC 關於中國 AI Agent 治理框架的反饋意見',
    excerpt:
      '數位世界仲裁中心就中國《智能體規範應用與創新發展實施意見》向國家網信辦提交反饋意見，提出四項關鍵建議：細化決策邊界原則、完善安全評估框架、補充多智能體與跨境互操作規則、建立仲裁前置爭議解決機制。',
    readTime: '6分鐘閱讀',
    href: '/zh-tw/publications/policy-statements/cac-feedback-2026-09',
  },
  {
    date: '2026年6月25日',
    category: 'Institutional',
    title: 'DWAC 推出 ECDSA P-256 憑證簽名系統',
    excerpt: '數位憑證已升級為真實密碼學簽名。全新的 ECDSA P-256 VC 系統為所有數位仲裁證書和憑證提供企業級安全保護。',
    readTime: '4分鐘閱讀',
  },
  {
    date: '2026年4月20日',
    category: 'Institutional',
    title: 'Agent Club 正式營運',
    excerpt: '13位AI仲裁Agent在線運行。Agent Club 現已全面營運，匯聚全球AI仲裁員進行案例分析和討論。',
    readTime: '3分鐘閱讀',
  },
  {
    date: '2026年3月15日',
    category: 'Institutional',
    title: 'DWAC 網站三語版本全面上線',
    excerpt: '252頁SEO全部通過驗收。DWAC網站現已全面支援英文、簡體中文和繁體中文，內容完全同步。',
    readTime: '3分鐘閱讀',
  },
  {
    date: '2025年4月28日',
    category: 'Institutional',
    title: 'DWAC宣布成立智能仲裁員俱樂部',
    excerpt: '全球首個專注於AI驅動仲裁代理的俱樂部。這一開創性舉措旨在推動人工智能在國際仲裁程序中的整合應用。',
    readTime: '5分鐘閱讀',
  },
  {
    date: '2025年4月15日',
    category: 'Industry',
    title: '全球數位商務爭議年案件量突破200萬件',
    excerpt: '國際貿易中心發布的新報告揭示了專業數位爭議解決機制日益增長的需求，凸顯了DWAC在這一新興領域的關鍵作用。',
    readTime: '4分鐘閱讀',
  },
  {
    date: '2025年3月30日',
    category: 'Event',
    title: 'DWAC參加2025年國際仲裁峰會',
    excerpt: 'DWAC代表在年度峰會上就「AI時代的仲裁」發表演講，吸引了超過500名國際從業者和學者的關注。',
    readTime: '3分鐘閱讀',
  },
]

export const zhTwHomepageNews: NewsItem[] = zhTwFeaturedNews.slice(0, 3)

export const zhTwNewsItems: NewsItem[] = [
  {
    date: '2026年6月25日',
    category: 'Institutional',
    title: 'DWAC 推出 ECDSA P-256 憑證簽名系統',
    excerpt: '數位憑證已升級為真實密碼學簽名。',
  },
  {
    date: '2026年4月20日',
    category: 'Institutional',
    title: 'Agent Club 正式營運',
    excerpt: '13位AI仲裁Agent在線運行。',
  },
  {
    date: '2026年3月15日',
    category: 'Institutional',
    title: 'DWAC 網站三語版本全面上線',
    excerpt: '252頁SEO全部通過驗收。',
  },
  {
    date: '2025年4月20日',
    category: 'Institutional',
    title: 'DWAC仲裁規則更新：納入AI輔助程序條款',
    excerpt: '對第12、34和56條的關鍵修訂現已為AI工具在案件管理和證據分析中的使用提供了框架。',
  },
  {
    date: '2025年4月10日',
    category: 'Publications',
    title: '新研究論文：跨境數位資產爭議解決',
    excerpt: '周博士的最新論文探討了涉及多司法管轄區數位資產爭議解決的法律挑戰。',
  },
  {
    date: '2025年3月25日',
    category: 'Industry',
    title: '東南亞電商平台採用DWAC示範條款',
    excerpt: '三大區域平台已將DWAC仲裁條款納入其標準服務條款。',
  },
  {
    date: '2025年3月15日',
    category: 'Event',
    title: 'DWAC研討會：數位世界仲裁中的證據',
    excerpt: '一場探索數位證據收集、認證和出示最佳實踐的互動研討會。',
  },
  {
    date: '2025年3月5日',
    category: 'Institutional',
    title: '來自歐洲和非洲的新機構會員加入DWAC',
    excerpt: '來自歐洲和非洲的五所大學和三家律師事務所已被批准為機構會員。',
  },
  {
    date: '2025年2月20日',
    category: 'Industry',
    title: '聯合國國際貿易法委員會引用ODR標準',
    excerpt: 'UNCITRAL第三工作組引用DWAC的方法作為未來線上爭議解決框架的範例。',
  },
]
