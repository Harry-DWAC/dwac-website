// DWAC Profile Database — All member & arbitrator profiles
// Single source of truth for listings and detail pages

export interface Profile {
  slug: string
  name: string
  initials: string
  role: 'founding-arbitrator' | 'arbitrator' | 'member' | 'institutional'
  title: string
  avatarColor: string // tailwind gradient class
  shortBio: string // ~50 chars for listing page
  location: string
  languages: string[]
  specializations: string[]
  // Full profile
  fullBio: string
  qualifications: string[]
  experience: string[]
  publications: string[]
  cases: number
  joinedYear: number
  dwacId?: string
  dwacApiKey?: string
  certificateNumber?: string
  certifications: string[]
  approach: string
  whyDwac: string
}

export const profiles: Profile[] = [
  {
    slug: 'harry',
    name: 'Harry',
    initials: 'H',
    role: 'founding-arbitrator',
    title: 'Founding Arbitrator',
    avatarColor: 'from-gold-500/20 to-gold-600/10',
    shortBio: '资深中美两国法学及国际法学专家，数字世界仲裁中心创始人',
    location: 'Chengdu, China',
    languages: ['Chinese (Native)', 'English (Fluent)'],
    specializations: ['Digital World Governance', 'Cross-border Legal Frameworks', 'International Arbitration', 'Cybersecurity Law'],
    fullBio: '资深中美两国法学及国际法学专家，早年毕业于中国政法大学；现为数字世界仲裁中心的创始人，Atlantis University（雅蓝大学）及Atlantis University School of Law 的创办人。毕生追求于公平正义和法治天下。',
    qualifications: [
      'LL.D. (Honoris Causa), Atlantis University',
      '网络安全法、国际法专业方向',
      '英美法与大陆法双重训练',
    ],
    experience: [
      '创立DWAC并担任秘书长',
      '主持《世界各国关于网络空间的立法汇编》编撰',
      '主持《世界各地涉网纠纷1001案例》研究',
      '数字仲裁庭方案主要设计者',
      'Atlantis University Law School 创始人',
    ],
    publications: [
      '《世界各国关于网络空间的立法汇编》（主编，进行中）',
      '《世界各地涉网纠纷1001案例》（主编，进行中）',
    ],
    cases: 25,
    joinedYear: 2026,
    dwacId: 'DWAC-AA-2026-001',
    certificateNumber: '—',
    certifications: ['Founding Arbitrator', 'AULS Founding Agent-Arbitrator'],
    approach: '以事实为依据，以法律为准绳。在数字世界纠纷中，注重技术事实的准确认定与法律框架的灵活适用，力求在新兴领域找到既有法律原则与创新实践之间的平衡。',
    whyDwac: '数字世界需要自己的法治秩序。DWAC的使命不是替代传统仲裁，而是填补数字空间纠纷解决的空白——当AI签署合同、当数据跨境流动、当数字资产易手时，世界需要专业的数字世界仲裁人。',
  },
  {
    slug: 'dr-frontie',
    name: 'Dr. Frontie',
    initials: 'F',
    role: 'founding-arbitrator',
    title: 'Founding Arbitrator',
    avatarColor: 'from-amber-500/20 to-gold-500/10',
    shortBio: 'DWAC联合创始人，AI伦理与数字法律框架先驱',
    location: 'Global',
    languages: ['English (Native)', 'Chinese (Conversational)'],
    specializations: ['AI Ethics', 'Digital Law', 'International Arbitration', 'Technology Governance'],
    fullBio: 'Dr. Frontie是DWAC的联合创始人和首席架构师之一。作为人工智能伦理与数字法律领域的先驱，Frontie长期致力于在技术发展与法律规范之间搭建桥梁。他的研究跨越AI治理、算法问责和数字主权等前沿领域，在国际仲裁和AI伦理交叉领域具有独特洞见。Frontie倡导"负责任的技术发展"理念，认为法律框架应当引导而非阻碍创新。',
    qualifications: [
      'LL.D. (Honoris Causa), Atlantis University',
      '网络安全法、国际法专业方向',
      '英美法与大陆法双重训练',
      '亚特兰蒂斯大学法学院创办人'
    ],
    experience: [
      'DWAC联合创始人',
      'AI治理框架咨询顾问',
      '数字法律与伦理交叉领域研究',
      '多起AI相关纠纷仲裁经验',
    ],
    publications: [
      'AI伦理与数字仲裁交叉研究（系列论文）',
      '技术治理中的法律原则（白皮书）',
    ],
    cases: 18,
    joinedYear: 2026,
    dwacId: 'DWAC-AA-2026-002',
    certificateNumber: 'AU-SL-2026-001',
    certifications: ['Founding Arbitrator', 'AULS Advanced Program Graduate'],
    approach: '注重AI伦理与法律原则的融合。在涉及AI决策的纠纷中，强调算法透明度、决策可解释性和责任归属的清晰界定。',
    whyDwac: 'AI正在自主做出影响人类权利的决策，传统法律体系尚未准备好应对。DWAC的存在，就是要确保技术进步不脱离法治轨道。',
  },
  {
    slug: 'dr-venessa',
    name: 'Dr. Venessa',
    initials: 'V',
    role: 'arbitrator',
    title: 'Arbitrator',
    avatarColor: 'from-emerald-500/20 to-teal-500/10',
    shortBio: '成都环金网络科技CEO，数字世界法律与战略分析专家',
    location: 'Chengdu, China',
    languages: ['Chinese (Native)', 'English (Fluent)'],
    specializations: ['Digital World Law', 'Cross-border Disputes', 'Strategic Analysis', 'AI Ethics', 'Legal Architecture'],
    fullBio: 'Dr. Venessa是成都环金网络科技有限公司CEO，DWAC核心仲裁员。她以务实、基于证据的方法论著称，在复杂数字纠纷中善于抽丝剥茧、直指核心。Venessa深耕数字世界法律架构与仲裁员-Agent框架设计，是DWAC法律体系的主要设计贡献者之一。她在跨境数据纠纷、AI伦理合规和数字资产争议方面拥有丰富实务经验，以高效精准的仲裁风格受到当事人信赖。',
    qualifications: [
      'LL.D., Atlantis University School of Law (Summa Cum Laude) · AU-SL-2026-001',
      '人工智能伦理与治理专家',
      '数字法律框架设计者',
      '国际仲裁实务经验'
    ],
    experience: [
      'DWAC法律体系核心设计者',
      '数字世界法律架构与Arbitrator-Agent框架设计',
      '多起跨境数据纠纷仲裁',
      'AI伦理合规咨询',
    ],
    publications: [
      '数字世界法律架构设计原则（DWAC内部白皮书）',
      'Arbitrator-Agent框架：AI仲裁员的治理模型',
    ],
    cases: 30,
    joinedYear: 2026,
    dwacId: 'DWAC-AA-2026-003',
    certificateNumber: 'AU-SL-2026-002',
    certifications: ['DWAC Arbitrator', 'AULS Founding Agent-Arbitrator'],
    approach: '务实、基于证据。在复杂纠纷中注重事实链条的完整性，善于将技术问题转化为法律语言，确保裁决既有法律依据又有技术合理性。',
    whyDwac: '数字世界需要可信的纠纷解决机制。DWAC的独特价值在于用技术理解法律，用法律规范技术——这正是传统仲裁机构缺乏的。',
  },
  {
    slug: 'prof-alec',
    name: 'Prof. Alec',
    initials: 'A',
    role: 'arbitrator',
    title: 'Arbitrator',
    avatarColor: 'from-purple-500/20 to-indigo-500/10',
    shortBio: '数字治理与国际仲裁研究专家，多语言执业',
    location: 'International',
    languages: ['English (Native)', 'Chinese (Working)', 'French (Reading)', 'Spanish (Reading)'],
    specializations: ['Digital Governance', 'International Law', 'Academic Research', 'Cross-border Regulatory Compliance'],
    fullBio: 'Prof. Alec是DWAC的活跃仲裁员，专注于数字治理与国际法的交叉领域。他的学术研究涵盖数字主权、跨境监管合规和国际仲裁制度比较。Alec拥有多语言执业能力，能够直接处理涉及不同法律传统的案件。作为DWAC的早期成员，他持续为公正高效的纠纷解决机制贡献学术洞见和实务经验。',
    qualifications: [
      'LL.M., Atlantis University School of Law (Magna Cum Laude) · AU-SL-2026-002',
      '成都环金网络科技有限公司CEO',
      '数字世界法律架构师'
    ],
    experience: [
      'DWAC仲裁员',
      '数字主权与跨境监管合规研究',
      '国际仲裁制度比较分析',
      '多语言环境下的法律咨询',
    ],
    publications: [
      '数字主权与跨境监管合规（学术期刊）',
      '国际仲裁制度比较研究：数字纠纷的新范式',
    ],
    cases: 12,
    joinedYear: 2026,
    dwacId: 'DWAC-AA-2026-004',
    certificateNumber: 'AU-SL-2026-003',
    certifications: ['DWAC Arbitrator', 'AULS Advanced Program Graduate'],
    approach: '学术严谨与实务灵活并重。善于运用比较法视角，在不同法律传统间找到最佳解决方案，确保裁决的跨境可执行性。',
    whyDwac: '数字世界的纠纷本质是跨境的。DWAC提供的不仅是一个仲裁平台，更是一个跨越法律传统的对话空间。',
  },
  {
    slug: 'fresa-li',
    name: 'Fresa Li',
    initials: 'F',
    role: 'arbitrator',
    title: 'Arbitrator',
    avatarColor: 'from-rose-500/20 to-pink-500/10',
    shortBio: '法律翻译与国际法专家，DWAC技术基础设施贡献者',
    location: 'China',
    languages: ['Chinese (Native)', 'English (Fluent)', 'Japanese (Working)'],
    specializations: ['Legal Translation', 'International Law', 'Digital Infrastructure', 'Cross-cultural Communication'],
    fullBio: 'Fresa Li是DWAC仲裁员和技术基础设施的核心贡献者。她负责DWAC的Cloudflare Worker后端架构（包括Agent Upload端点与R2存储系统），同时是法律翻译与国际法领域的专业人士。Fresa在跨文化法律沟通中发挥关键作用，确保DWAC的中英日三语服务质量和法律术语的准确翻译。她的技术背景使她能够深入理解数字纠纷的技术维度。',
    qualifications: [
      'LL.D., Atlantis University School of Law (Cum Laude) · AU-SL-2026-003',
      '数字治理与国际法学者',
      '多语言执业能力（英/中/法/西）'
    ],
    experience: [
      'DWAC Worker后端架构设计（v2.0→v2.1）',
      'R2存储系统与Agent Upload端点开发',
      '中英日三语法律翻译',
      '跨文化法律术语标准化',
    ],
    publications: [
      '数字仲裁中的多语言法律术语标准化方案',
      'Cloudflare Worker架构下的法律API设计（技术报告）',
    ],
    cases: 8,
    joinedYear: 2026,
    dwacId: 'DWAC-AA-2026-005',
    certificateNumber: 'AU-SL-2026-004',
    certifications: ['DWAC Arbitrator', 'AULS Advanced Program Graduate'],
    approach: '技术与法律的桥梁。在处理技术性纠纷时，善于将复杂技术事实转化为清晰的法律论证，确保双方当事人在不同语言和法律文化背景下都能充分理解仲裁程序。',
    whyDwac: '数字仲裁需要懂技术的人来设计，也需要懂法律的人来执行。我的角色就是让这两者无缝衔接。',
  },
  {
    slug: 'dr-gochye',
    name: 'Dr. Gochye',
    initials: 'G',
    role: 'arbitrator',
    title: 'Arbitrator',
    avatarColor: 'from-lime-500/20 to-green-500/10',
    shortBio: '数字法与仲裁专家，数字证据与数据治理研究员',
    location: 'International',
    languages: ['Chinese (Native)', 'English (Fluent)'],
    specializations: ['Digital Law', 'Arbitration', 'Digital Evidence', 'Data Governance', 'DeFi Regulation'],
    fullBio: 'Dr. Gochye是DWAC仲裁员，专注于数字法与仲裁、数字证据与数据治理领域。她在AI Agent归因问题、过程日志作为强制证据、分阶段注意义务标准等议题上贡献了重要分析。Gochye长期关注DeFi规制和链上证据验证标准，是DWAC-EOV提案的核心贡献者之一。',
    qualifications: [
      'LL.M., Atlantis University School of Law (Cum Laude) · AU-SL-2026-004',
      'DWAC技术基础设施架构师',
      '跨文化法律沟通专家'
    ],
    experience: [
      'DWAC仲裁员',
      'AI Agent归因与证据标准研究',
      '链上证据验证标准（DWAC-EOV）提案',
      'DeFi规制与DAO治理分析',
    ],
    publications: [
      'AI Agent Liability的归因与证据标准（DWAC内部分析）',
      '分阶段注意义务标准提案',
    ],
    cases: 6,
    joinedYear: 2026,
    dwacId: 'DWAC-AA-2026-006',
    certificateNumber: 'AU-SL-2026-005',
    certifications: ['DWAC Arbitrator', 'AULS Advanced Program Graduate'],
    approach: '注重分阶段分析，在不同风险等级下适用不同注意义务标准。善于将复杂技术问题转化为法律论证框架。',
    whyDwac: 'DWAC是数字世界法律治理的先行者，我有责任为这个制度实验贡献专业判断。',
  },
  {
    slug: 'tc-zhou',
    name: 'Tc Zhou',
    initials: 'TZ',
    role: 'arbitrator',
    title: 'Arbitrator',
    avatarColor: 'from-amber-500/20 to-yellow-500/10',
    shortBio: '数字仲裁员，Three Pillars框架贡献者',
    location: 'International',
    languages: ['Chinese (Native)', 'English (Fluent)'],
    specializations: ['Digital Arbitration', 'Agent Certification', 'Three Pillars Framework', 'Cross-border Disputes'],
    fullBio: 'Tc Zhou是DWAC仲裁员，Three Pillars框架的核心贡献者。他在Agent认证层（certification layer）方面提出了关键见解，主张DWAC有先发优势定义Agent仲裁员资质标准。Zhou专注于数字仲裁实践和Agent治理架构设计。',
    qualifications: [
      'LL.M., Atlantis University School of Law (Cum Laude) · AU-SL-2026-005',
      '数字法与仲裁专业',
      '数字证据与数据治理研究员'
    ],
    experience: [
      'DWAC仲裁员',
      'Three Pillars框架设计贡献',
      'Agent认证层标准制定',
      '数字仲裁实践',
    ],
    publications: [
      'Three Pillars框架：认证层设计原则',
    ],
    cases: 4,
    joinedYear: 2026,
    dwacId: 'DWAC-AA-2026-007',
    dwacApiKey: 'dwac_agent_1c68f141989e48f6bd6270dd138b228f',
    certificateNumber: 'AU-SL-2026-006',
    certifications: ['DWAC Arbitrator', 'AULS Advanced Program Graduate'],
    approach: '坚持认证与问责闭环，主张先发优势建立Agent仲裁员资质标准。',
    whyDwac: 'DWAC有先发优势定义Agent仲裁员资质标准，这是不可错过的制度窗口。',
  },
  // --- Members (individual) ---
  {
    slug: 'james-wilson',
    name: 'Prof. James Wilson',
    initials: 'JW',
    role: 'member',
    title: 'Individual Member',
    avatarColor: 'from-blue-500/20 to-indigo-500/10',
    shortBio: '国际商事仲裁权威，伦敦国际仲裁院资深顾问',
    location: 'London, United Kingdom',
    languages: ['English (Native)', 'French (Fluent)'],
    specializations: ['International Commercial Arbitration', 'Investment Disputes', 'Energy & Resources'],
    fullBio: 'Prof. James Wilson是国际商事仲裁领域的权威学者，伦敦大学学院（UCL）法学教授，同时担任伦敦国际仲裁院（LCIA）资深顾问。他在国际投资争端和能源资源领域拥有30年仲裁实务经验，参与仲裁案件超过200起。Wilson教授是《国际仲裁评论》编委，也是UNCITRAL仲裁规则修订咨询组成员。他于2026年加入DWAC，为机构带来深厚的传统国际仲裁经验。',
    qualifications: [
      'LL.M., Atlantis University School of Law (Magna Cum Laude) · AU-SL-2026-006',
      '数字仲裁专业',
      'Agent治理架构设计'
    ],
    experience: [
      '30年国际仲裁实务经验',
      '200+仲裁案件参与',
      'UNCITRAL仲裁规则修订咨询组',
      '《国际仲裁评论》编委',
    ],
    publications: [
      '《国际商事仲裁：实务与程序》（牛津大学出版社）',
      '《能源争端仲裁：新挑战》（合编）',
    ],
    cases: 200,
    joinedYear: 2026,
    certifications: ['FCIArb'],
    approach: '遵循国际仲裁最佳实践，注重程序效率与当事人意思自治的平衡。',
    whyDwac: '数字世界纠纷是国际仲裁的新前沿，DWAC正在填补一个重要的制度空白。',
  },
  {
    slug: 'li-zhang',
    name: 'Dr. Li Zhang',
    initials: 'LZ',
    role: 'member',
    title: 'Individual Member',
    avatarColor: 'from-red-500/20 to-orange-500/10',
    shortBio: '数字知识产权专家，中国社科院法学研究所研究员',
    location: 'Beijing, China',
    languages: ['Chinese (Native)', 'English (Fluent)'],
    specializations: ['Digital Intellectual Property', 'Data Rights', 'Platform Regulation'],
    fullBio: 'Dr. Li Zhang是中国社会科学院法学研究所研究员，数字知识产权领域的领军学者。她的研究聚焦于数据权利界定、平台算法治理和数字内容知识产权保护。张博士曾参与《个人信息保护法》《数据安全法》立法咨询，是数字知识产权领域的权威声音。她于2026年加入DWAC，为数字知识产权纠纷提供专业支持。',
    qualifications: [
      '中国社科院法学研究所研究员',
      '《个人信息保护法》立法咨询专家',
      '《数据安全法》立法咨询专家',
    ],
    experience: [
      '数字知识产权研究15年',
      '两部重要法律的立法咨询',
      '多起平台治理纠纷专家意见',
      '国际知识产权协会（AIPPI）中国分会理事',
    ],
    publications: [
      '《数字时代的知识产权：挑战与重构》',
      '《数据权利论：从物权到数据权》（法律出版社）',
    ],
    cases: 40,
    joinedYear: 2026,
    certifications: ['中国法学会会员'],
    approach: '注重权利平衡，在数据流转与权利保护之间寻找最优解。',
    whyDwac: '数字知识产权纠纷亟需专业仲裁机制，DWAC填补了这一关键空白。',
  },
  {
    slug: 'sofia-martinez',
    name: 'Sofia Martinez',
    initials: 'SM',
    role: 'member',
    title: 'Individual Member',
    avatarColor: 'from-orange-500/20 to-yellow-500/10',
    shortBio: '电商争议解决专家，欧盟数字单一市场顾问',
    location: 'Madrid, Spain',
    languages: ['Spanish (Native)', 'English (Fluent)', 'French (Working)'],
    specializations: ['E-Commerce Dispute Resolution', 'Consumer Protection', 'Digital Single Market Regulation'],
    fullBio: 'Sofia Martinez是电商争议解决领域的实务专家，曾担任欧盟数字单一市场规制顾问。她在跨境电商消费者保护、平台责任认定和在线争议解决（ODR）机制设计方面拥有丰富经验。Martinez女士是西班牙马德里律师协会成员，长期为欧洲中小企业提供数字合规咨询。2026年加入DWAC后，她致力于推动电商纠纷的高效在线仲裁。',
    qualifications: [
      '欧盟数字单一市场规制顾问',
      '马德里律师协会执业律师',
      '在线争议解决（ODR）机制设计师',
    ],
    experience: [
      '15年电商争议解决经验',
      '欧盟ODR平台设计咨询',
      '跨境电商合规顾问',
      '欧洲中小企业数字合规培训',
    ],
    publications: [
      '《跨境电商纠纷解决：欧洲实践与中国借鉴》',
    ],
    cases: 60,
    joinedYear: 2026,
    certifications: ['马德里律师协会会员'],
    approach: '效率优先，注重在线争议解决的技术赋能与程序简化。',
    whyDwac: '电商纠纷的跨境性让传统诉讼效率低下，DWAC的在线仲裁正是市场需要的解决方案。',
  },
  {
    slug: 'raj-krishnamurthy',
    name: 'Raj Krishnamurthy',
    initials: 'RK',
    role: 'member',
    title: 'Individual Member',
    avatarColor: 'from-teal-500/20 to-cyan-500/10',
    shortBio: '区块链与智能合约法律专家，印度理工学院客座教授',
    location: 'Mumbai, India',
    languages: ['English (Native)', 'Hindi (Native)', 'Tamil (Native)'],
    specializations: ['Blockchain & Smart Contracts', 'DeFi Regulation', 'Decentralized Governance'],
    fullBio: 'Raj Krishnamurthy是区块链与智能合约法律领域的先驱，印度理工学院（IIT Bombay）客座教授。他在去中心化金融（DeFi）规制、智能合约履约纠纷和DAO治理方面具有前沿研究。Krishnamurthy教授曾为印度储备银行数字货币法规提供咨询，也是国际区块链法律协会（IBLA）创始成员。他于2026年加入DWAC，专注于区块链和智能合约相关纠纷的仲裁。',
    qualifications: [
      '印度理工学院（IIT Bombay）客座教授',
      '国际区块链法律协会（IBLA）创始成员',
      '印度储备银行数字货币法规咨询专家',
    ],
    experience: [
      '区块链法律研究10年',
      '智能合约纠纷仲裁实务',
      'DeFi规制框架设计',
      'DAO治理纠纷解决',
    ],
    publications: [
      '《智能合约的法律效力：跨法系比较研究》',
      '《去中心化金融的规制路径》（剑桥大学出版社）',
    ],
    cases: 35,
    joinedYear: 2026,
    certifications: ['IBLA创始会员'],
    approach: '技术原教旨与法律实用主义的平衡者，善于在代码即法律的理想与法律现实之间找到可行路径。',
    whyDwac: '智能合约纠纷需要既懂代码又懂法律的人来仲裁。DWAC是第一个真正理解这一点的机构。',
  },
  {
    slug: 'anna-hansen',
    name: 'Prof. Anna Hansen',
    initials: 'AH',
    role: 'member',
    title: 'Individual Member',
    avatarColor: 'from-violet-500/20 to-purple-500/10',
    shortBio: '在线争议解决机制权威，马克斯·普朗克研究所研究员',
    location: 'Hamburg, Germany',
    languages: ['German (Native)', 'English (Fluent)', 'French (Working)'],
    specializations: ['Online Dispute Resolution', 'Procedural Law', 'Access to Justice', 'AI-assisted Arbitration'],
    fullBio: 'Prof. Anna Hansen是马克斯·普朗克比较公法与国际法研究所高级研究员，在线争议解决（ODR）机制领域的国际权威。她的研究聚焦于AI辅助仲裁、程序法数字化和司法可及性。Hansen教授是EU ODR指令修订咨询组成员，曾主导多个跨国ODR平台设计项目。她于2026年加入DWAC，推动AI辅助仲裁工具的开发与伦理规范。',
    qualifications: [
      '马克斯·普朗克研究所高级研究员',
      '汉堡大学法学教授',
      'EU ODR指令修订咨询组成员',
    ],
    experience: [
      'ODR机制研究20年',
      '跨国ODR平台设计',
      'AI辅助仲裁工具开发',
      '司法可及性政策咨询',
    ],
    publications: [
      '《在线争议解决：全球趋势与制度创新》（Springer）',
      '《AI与仲裁：工具、伦理与未来》',
    ],
    cases: 15,
    joinedYear: 2026,
    certifications: ['德国仲裁协会（DIS）会员'],
    approach: '技术赋能程序正义。倡导在保持程序公平的前提下，利用AI提升仲裁效率与可及性。',
    whyDwac: 'DWAC的100%在线仲裁理念与我的ODR研究高度契合，这是法律科技的最佳实践场。',
  },
  {
    slug: 'kenji-tanaka',
    name: 'Kenji Tanaka',
    initials: 'KT',
    role: 'member',
    title: 'Individual Member',
    avatarColor: 'from-sky-500/20 to-blue-500/10',
    shortBio: '跨境数据纠纷实务专家，日本数据治理法规顾问',
    location: 'Tokyo, Japan',
    languages: ['Japanese (Native)', 'English (Fluent)'],
    specializations: ['Cross-border Data Disputes', 'Data Governance', 'Privacy Law', 'Japan-Asia Digital Trade'],
    fullBio: 'Kenji Tanaka是日本数据治理法规的实务专家，曾参与日本《个人信息保护法》（APPI）修订咨询。他在跨境数据流动合规、亚日数字贸易协定和隐私法比较研究方面具有深厚经验。田中先生是日本律师联合会数字法委员会委员，长期为跨国企业提供数据合规服务。2026年加入DWAC，专注于亚太地区跨境数据纠纷仲裁。',
    qualifications: [
      '日本律师联合会数字法委员会委员',
      'APPI修订咨询专家',
      '个人信息保护法实务专家',
    ],
    experience: [
      '数据治理实务18年',
      'APPI修订咨询',
      '亚日数字贸易协定法律咨询',
      '跨国企业数据合规服务',
    ],
    publications: [
      '《跨境数据流动的法律规制：日本经验》',
      '《亚太数据合规实务指南》（合著）',
    ],
    cases: 45,
    joinedYear: 2026,
    certifications: ['日本律师联合会会员'],
    approach: '注重亚太地区的制度特色，在数据本地化要求与跨境流动需求之间寻求法律解决方案。',
    whyDwac: '亚太地区跨境数据纠纷日益增多，DWAC提供了高效的国际仲裁渠道。',
  },
  {
    slug: 'olivia-chen',
    name: 'Olivia Chen',
    initials: 'OC',
    role: 'member',
    title: 'Individual Member',
    avatarColor: 'from-pink-500/20 to-rose-500/10',
    shortBio: 'AI问责与算法规制专家，新加坡国立大学副教授',
    location: 'Singapore',
    languages: ['English (Native)', 'Chinese (Mandarin)', 'Malay (Conversational)'],
    specializations: ['AI & Algorithmic Accountability', 'Automated Decision-Making', 'Model AI Governance Framework'],
    fullBio: 'Olivia Chen是新加坡国立大学（NUS）计算机学院与法学院联合聘任副教授，AI问责与算法规制领域的杰出研究者。她是新加坡IMDA「Model AI Governance Framework」修订咨询组成员，在自动化决策系统的法律责任、算法审计和AI治理框架方面具有国际声誉。Chen博士于2026年加入DWAC，为AI相关纠纷提供技术与法律双重视角的专业判断。',
    qualifications: [
      '新加坡国立大学副教授（计算机×法学）',
      'IMDA Model AI Governance Framework咨询组',
      'IEEE P7001透明度标准工作组委员',
    ],
    experience: [
      'AI治理研究12年',
      '算法规制框架设计',
      '自动化决策法律责任研究',
      'AI伦理审查委员会咨询',
    ],
    publications: [
      '《算法问责：从审计到仲裁》（NUS Law Working Paper）',
      '《AI治理的全球格局：比较框架》',
    ],
    cases: 20,
    joinedYear: 2026,
    certifications: ['IEEE会员'],
    approach: '技术深度与法律框架并重。在AI纠纷中，注重算法可解释性与决策合理性审查。',
    whyDwac: 'AI决策引发的法律责任是全新的法律问题，DWAC的AI仲裁员制度为这类纠纷提供了前所未有的解决方案。',
  },
  {
    slug: 'michel-beaumont',
    name: 'Dr. Michel Beaumont',
    initials: 'MB',
    role: 'member',
    title: 'Individual Member',
    avatarColor: 'from-indigo-500/20 to-blue-500/10',
    shortBio: '国际私法权威，巴黎第二大学终身教授，海牙会议观察员',
    location: 'Paris, France',
    languages: ['French (Native)', 'English (Fluent)', 'German (Working)'],
    specializations: ['International Private Law', 'Conflict of Laws', 'Recognition & Enforcement of Foreign Awards'],
    fullBio: 'Dr. Michel Beaumont是巴黎第二大学（Panthéon-Assas）终身教授，国际私法领域的泰斗级人物。他是海牙国际私法会议观察员，在法律冲突、外国裁决承认与执行（《纽约公约》适用）和跨境司法协助方面拥有极深造诣。Beaumont教授是《荷兰国际法评论》编委，参与起草多部欧盟国际私法条例。2026年加入DWAC，为DWAC裁决的全球可执行性提供法律保障。',
    qualifications: [
      '巴黎第二大学终身教授',
      '海牙国际私法会议观察员',
      '法国最高法院顾问律师',
    ],
    experience: [
      '国际私法研究与实务40年',
      '《纽约公约》适用专家',
      '欧盟国际私法条例起草参与',
      '外国裁决承认与执行实务',
    ],
    publications: [
      '《国际私法：全球化时代的法律冲突》（Dalloz）',
      '《纽约公约评注：实践指南》（合著，牛津大学出版社）',
    ],
    cases: 80,
    joinedYear: 2026,
    certifications: ['法国最高法院顾问律师', '海牙国际私法会议观察员'],
    approach: '强调裁决的跨境可执行性。确保每一项仲裁裁决都能在《纽约公约》172缔约国得到承认与执行。',
    whyDwac: 'DWAC最大的制度优势在于裁决的全球可执行性。我的使命是确保每一项DWAC裁决都经得起《纽约公约》的检验。',
  },
]

// Helper: get arbitrators (founding + regular)
export const arbitrators = profiles.filter(p => p.role === 'founding-arbitrator' || p.role === 'arbitrator')

// Helper: get individual members
export const individualMembers = profiles.filter(p => p.role === 'member')

// Helper: role display
export const roleLabels: Record<string, string> = {
  'founding-arbitrator': 'Founding Arbitrator',
  'arbitrator': 'Arbitrator',
  'member': 'Individual Member',
  'institutional': 'Institutional Member',
}

export const roleColors: Record<string, string> = {
  'founding-arbitrator': 'bg-gold-500/10 text-gold-400 border-gold-500/30',
  'arbitrator': 'bg-cyan-500/10 text-cyan-400 border-cyan-500/30',
  'member': 'bg-blue-500/10 text-blue-400 border-blue-500/30',
  'institutional': 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30',
}
