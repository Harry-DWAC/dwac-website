#!/usr/bin/env node
/**
 * Postbuild: fix lang attributes, SEO meta tags for static export.
 * Injects: lang, canonical, hreflang (+x-default), og:type/url/locale,
 * twitter:card, JSON-LD (all pages), per-page OG title/desc from page content.
 *
 * v2 — 2026-06-26: Fix hreflang cross-referencing, canonical case, localized meta description, logo.png→og-image.png
 */
import { readFileSync, writeFileSync, readdirSync } from 'fs';
import { join } from 'path';

const OUT = 'out';
const SITE = 'https://www.dwac.net';

function getLangInfo(path) {
  if (path.startsWith('/zh-cn/')) return { lang: 'zh-CN', ogLocale: 'zh_CN', prefix: '/zh-cn' };
  if (path.startsWith('/zh-tw/')) return { lang: 'zh-TW', ogLocale: 'zh_TW', prefix: '/zh-tw' };
  return { lang: 'en', ogLocale: 'en_US', prefix: '' };
}

function fixLangAttr(html, lang) {
  return html.replace(/(<html[^>]*?lang\s*=\s*["'])[^"']*(["'])/, `$1${lang}$2`);
}

/**
 * Build canonical URL with LOWERCASE locale prefix.
 * e.g. /zh-cn/about/ → https://www.dwac.net/zh-cn/about/
 */
function makeCanonical(path, lang) {
  const clean = path.replace(/^\/zh-cn/, '').replace(/^\/zh-tw/, '').replace(/index\.html$/, '').replace(/\/$/, '') || '';
  const locale = lang === 'en' ? '' : '/' + lang.toLowerCase();
  return `${SITE}${locale}${clean}/`;
}

/**
 * Build hreflang links by deriving EN/CN/TW URLs from the page path.
 * This avoids cascading string-replace bugs from the old approach.
 */
function makeHreflangLinks(canonical, path, lang, content) {
  // Extract the "sub-path" after the locale prefix (e.g. /zh-cn/about/ → /about/)
  const subPath = path
    .replace(/^\/zh-cn/, '')
    .replace(/^\/zh-tw/, '')
    .replace(/\/$/, '') || '';

  // Build the three locale-specific URLs with lowercase paths
  const enC  = `${SITE}${subPath}/`;
  const cnC  = `${SITE}/zh-cn${subPath}/`;
  const twC  = `${SITE}/zh-tw${subPath}/`;

  const links =
    // 注意：HTML 属性名必须小写（hreflang）。此前写成 React 风格的 hrefLang，
    // 浏览器/Google 因大小写不敏感尚能识别，但不符合 HTML 规范、会被校验器判错。
    `  <link rel="alternate" hreflang="x-default" href="${enC}"/>\n` +
    `  <link rel="alternate" hreflang="en" href="${enC}"/>\n` +
    `  <link rel="alternate" hreflang="zh-CN" href="${cnC}"/>\n` +
    `  <link rel="alternate" hreflang="zh-TW" href="${twC}"/>\n` +
    `  <link rel="canonical" href="${canonical}"/>\n`;

  // Remove old hreflang and canonical tags
  content = content.replace(/<link[^>]*hreflang=["'](?:en|zh-CN|zh-TW|x-default)["'][^>]*>/gi, '');
  content = content.replace(/<link[^>]*rel=["']canonical["'][^>]*>/g, '');
  return content.replace(/(<\/head>)/, `${links}$1`);
}

function fixMetaFallback(content, lang) {
  const f = {
    en: "The world's first permanent international arbitration institution dedicated to resolving digital world disputes.",
    'zh-CN': '全球首个专注于数字世界纠纷解决的常设国际仲裁机构。',
    'zh-TW': '全球首個專注於數位世界糾紛解決的常設國際仲裁機構。',
  };
  if (!/<meta[^>]*name=["']description["'][^>]*>/.test(content)) {
    content = content.replace(/(<\/head>)/, `  <meta name="description" content="${f[lang] || f.en}"/>\n$1`);
  }
  return content;
}

function walkDir(dir) {
  const files = [];
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    const full = join(dir, entry.name);
    if (entry.isDirectory()) files.push(...walkDir(full));
    else if (entry.name.endsWith('.html')) files.push(full);
  }
  return files;
}

function extractPageTitle(html) {
  const m = html.match(/<title>([^<]*)<\/title>/);
  return m ? m[1].trim() : '';
}

function extractMetaDescription(html) {
  // v3 — 2026-09-26: 旧的 [^"']* 会在英文撇号处截断（"The world's first …" → "The world"），
  // 使 8 个页面（/forum/、gclc-downloads 各卷、/zh/）的 og:description 变成半个词。
  // 改为一律按引号配对取值，双引号优先（Next 默认输出双引号），再退回单引号。
  const patterns = [
    /<meta[^>]*name=["']description["'][^>]*content="([^"]*)"/,
    /<meta[^>]*content="([^"]*)"[^>]*name=["']description["']/,
    /<meta[^>]*name=["']description["'][^>]*content='([^']*)'/,
  ];
  for (const p of patterns) {
    const m = html.match(p);
    if (m) return m[1].trim();
  }
  return '';
}

/**
 * v3 — 2026-09-26: 读页面自己在 metadata.openGraph.description 里写的描述。
 * 此前第 6 步会把它剥掉、第 7 步再用（从 layout 继承来的）meta description 顶替，
 * 等于手写的 OG 描述被静默丢弃（如 src/app/zh-cn/about/page.tsx）。
 */
function extractOgDescription(html) {
  const patterns = [
    /<meta[^>]*property=["']og:description["'][^>]*content="([^"]*)"/,
    /<meta[^>]*content="([^"]*)"[^>]*property=["']og:description["']/,
  ];
  for (const p of patterns) {
    const m = html.match(p);
    if (m) return m[1].trim();
  }
  return '';
}

// ---- MAIN ----
const files = walkDir(OUT);
console.log(`Processing ${files.length} HTML files...`);

const FALLBACKS = {
  en: { title: 'DWAC - Digital World Arbitration Centre', desc: "The world's first permanent international arbitration institution dedicated to resolving digital world disputes." },
  'zh-CN': { title: '数字世界仲裁中心 - DWAC', desc: '全球首个专注于数字世界纠纷解决的常设国际仲裁机构。' },
  'zh-TW': { title: '數位世界仲裁中心 - DWAC', desc: '全球首個專注於數位世界糾紛解決的常設國際仲裁機構。' },
};
const ORG_NAMES = { en: 'Digital World Arbitration Centre', 'zh-CN': '数字世界仲裁中心', 'zh-TW': '數位世界仲裁中心' };

for (const file of files) {
  const rel = '/' + file.replace(/\\/g, '/').replace(OUT, '').replace(/^\//, '').replace(/\/index\.html$/, '').replace(/index\.html$/, '').replace(/\/$/, '') || '/';
  const path = rel.endsWith('/') ? rel : rel + '/';
  const { lang, ogLocale } = getLangInfo(path);
  let html = readFileSync(file, 'utf-8');

  // 1. Fix lang
  html = fixLangAttr(html, lang);

  // 2. Canonical (lowercase locale)
  const canonical = makeCanonical(path, lang);

  // 3. Hreflang + canonical + x-default
  html = makeHreflangLinks(canonical, path, lang, html);

  // 4. Meta description fallback
  html = fixMetaFallback(html, lang);

  // 5. Per-page OG values
  const pageTitle = extractPageTitle(html);
  const pageDesc = extractMetaDescription(html);
  const authoredOgDesc = extractOgDescription(html);
  const fb = FALLBACKS[lang] || FALLBACKS.en;
  const ogTitle = pageTitle || fb.title;
  const ogDesc = authoredOgDesc || pageDesc || fb.desc;

  // 6. Strip old OG/Twitter tags
  html = html.replace(/<meta[^>]*property=["']og:(?:title|description|type|url|locale)["'][^>]*>/g, '');
  html = html.replace(/<meta[^>]*name=["']twitter:[^"']*["'][^>]*>/g, '');

  // 7. Inject OG tags
  const ogBlock =
    `  <meta property="og:type" content="website"/>\n` +
    `  <meta property="og:url" content="${canonical}"/>\n` +
    `  <meta property="og:locale" content="${ogLocale}"/>\n` +
    `  <meta property="og:title" content="${ogTitle}"/>\n` +
    `  <meta property="og:description" content="${ogDesc}"/>\n`;
  html = html.replace(/(<\/head>)/, `${ogBlock}$1`);

  // 8. Inject Twitter Card
  const twBlock =
    `  <meta name="twitter:card" content="summary_large_image"/>\n` +
    `  <meta name="twitter:title" content="${ogTitle}"/>\n` +
    `  <meta name="twitter:description" content="${ogDesc}"/>\n`;
  html = html.replace(/(<\/head>)/, `${twBlock}$1`);

  // 9. Ensure og:image
  if (!html.includes('property="og:image"')) {
    html = html.replace(/(<\/head>)/,
      `  <meta property="og:image" content="${SITE}/og-image.png"/>\n` +
      `  <meta property="og:image:width" content="1200"/>\n` +
      `  <meta property="og:image:height" content="630"/>\n$1`);
  }

  // 10. Override English meta description on locale pages with localized version.
  //     v3 — 2026-09-26: 先加 CJK 判定。此前无条件覆盖，把 zh-cn/zh-tw 各 45 个页面里
  //     手写的中文描述全部抹成同一句通用兜底，导致 178/278 个页面只有 3 条 description。
  //     现在只对"还没本地化"（不含中日韩字符）的描述做兜底替换。
  const CJK = /[\u3400-\u4dbf\u4e00-\u9fff\u3040-\u30ff]/;
  const pageDescLocalized = CJK.test(pageDesc || '');
  const ogDescLocalized = CJK.test(ogDesc || '');
  if (lang !== 'en' && !pageDescLocalized && !ogDescLocalized) {
    const localizedDesc = (FALLBACKS[lang] || FALLBACKS.en).desc;
    html = html.replace(
      /(<meta[^>]*name=["']description["'][^>]*content=["'])[^"']*(["'])/,
      `$1${localizedDesc}$2`
    );
    // Also override og:description and twitter:description
    html = html.replace(
      /(<meta[^>]*property=["']og:description["'][^>]*content=["'])[^"']*(["'])/,
      `$1${localizedDesc}$2`
    );
    html = html.replace(
      /(<meta[^>]*name=["']twitter:description["'][^>]*content=["'])[^"']*(["'])/,
      `$1${localizedDesc}$2`
    );
  } else if (lang !== 'en' && !pageDescLocalized && ogDescLocalized) {
    // 页面自带中文 OG 描述、但 meta description 仍是英文（继承自根 layout）：
    // 把页面自己写的中文提升为 meta description，别让它只活在 OG 里。
    html = html.replace(
      /(<meta[^>]*name=["']description["'][^>]*content=["'])[^"']*(["'])/,
      `$1${ogDesc}$2`
    );
  }

  // 11. Skip-to-content 兜底。真正的目标现在由三个 layout 直接写在 <main id="main-content"> 上
  //     （v3 — 2026-09-26）。此前 id 挂在最外层包裹 div 上，而那个 div 把 Navbar 包在里面，
  //     键盘用户按"跳到主内容"会落回页首，等于无效。
  //     这里只对没有 <main id="main-content"> 的页面（如根 not-found）保留旧兜底，且保证幂等。
  if (!html.includes('id="main-content"')) {
    html = html.replace(
      /(<div class="relative z-10">)/,
      '<div class="relative z-10" id="main-content">'
    );
  }

  // 12. JSON-LD structured data for ALL pages
  //     Remove old JSON-LD blocks injected by previous postbuild runs
  html = html.replace(/<script type="application\/ld\+json">[\s\S]*?<\/script>\n?/g, '');

  const orgName = ORG_NAMES[lang] || ORG_NAMES.en;
  const isHome = path === '/' || path === '/zh-cn/' || path === '/zh-tw/';
  const isNews = path.includes('/news/') && path !== '/news/' && path !== '/zh-cn/news/' && path !== '/zh-tw/news/';
  const isNewsIndex = path === '/news/' || path === '/zh-cn/news/' || path === '/zh-tw/news/';
  const isProfile = path.includes('/profile/');
  const isFAQ = path === '/faq/' || path === '/zh-cn/faq/' || path === '/zh-tw/faq/';
  const isRules = path.includes('/rules/');
  const isArbitrators = path.includes('/arbitrators/') || path.includes('/membership/') || path.includes('/dispute/') || path.includes('/fees/') || path.includes('/model-clause/') || path.includes('/evidence-guidance/');

  const localePrefix = lang === 'en' ? '' : '/' + lang.toLowerCase();
  const schemas = [];

  if (isHome) {
    // Home page: Organization + WebSite (with SearchAction) + LegalService
    schemas.push({
      '@context': 'https://schema.org',
      '@type': 'Organization',
      name: orgName,
      url: SITE,
      logo: `${SITE}/og-image.png`,
      alternateName: 'DWAC',
      description: ogDesc,
      sameAs: ['https://www.dwac.net/agent-club/'],
    });
    schemas.push({
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      name: orgName,
      url: `${SITE}${localePrefix}/`,
      inLanguage: lang,
      // v3 — 2026-09-26: 移除 potentialAction/SearchAction。全仓库 0 处 searchParams，
      // 没有任何代码消费 ?q=，SearchAction 声明的站内搜索框形同虚设（并属误导性结构化数据）；
      // Google 也已下线 Sitelinks Searchbox 富结果。将来真接站内搜索再加回。
    });
    schemas.push({
      '@context': 'https://schema.org',
      '@type': 'LegalService',
      name: orgName,
      url: `${SITE}${localePrefix}/`,
      logo: `${SITE}/og-image.png`,
      description: ogDesc,
      areaServed: 'Global',
      serviceType: 'Arbitration',
    });
  } else if (isNews) {
    // Individual news article
    schemas.push({
      '@context': 'https://schema.org',
      '@type': 'NewsArticle',
      headline: ogTitle,
      description: ogDesc,
      url: canonical,
      mainEntityOfPage: canonical,
      image: `${SITE}/og-image.png`,
      publisher: {
        '@type': 'Organization',
        name: orgName,
        logo: { '@type': 'ImageObject', url: `${SITE}/og-image.png` },
      },
    });
  } else if (isNewsIndex) {
    // News listing page
    schemas.push({
      '@context': 'https://schema.org',
      '@type': 'CollectionPage',
      name: ogTitle,
      description: ogDesc,
      url: canonical,
      isPartOf: { '@type': 'WebSite', name: orgName, url: SITE },
    });
  } else if (isProfile) {
    // Arbitrator profile page
    schemas.push({
      '@context': 'https://schema.org',
      '@type': 'ProfilePage',
      name: ogTitle,
      description: ogDesc,
      url: canonical,
      isPartOf: { '@type': 'WebSite', name: orgName, url: SITE },
    });
  } else if (isFAQ) {
    // FAQ page — extract Q&A from HTML
    const qaPairs = [];
    const qaRegex = /<h3[^>]*>(.*?)<\/h3>\s*<p[^>]*>(.*?)<\/p>/gs;
    let qaMatch;
    while ((qaMatch = qaRegex.exec(html)) !== null) {
      const q = qaMatch[1].replace(/<[^>]+>/g, '').trim();
      const a = qaMatch[2].replace(/<[^>]+>/g, '').trim();
      if (q && a) qaPairs.push({ q, a });
    }
    if (qaPairs.length > 0) {
      schemas.push({
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: qaPairs.map(qa => ({
          '@type': 'Question',
          name: qa.q,
          acceptedAnswer: { '@type': 'Answer', text: qa.a },
        })),
      });
    }
    // Also add WebPage schema
    schemas.push({
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      name: ogTitle,
      description: ogDesc,
      url: canonical,
      isPartOf: { '@type': 'WebSite', name: orgName, url: SITE },
    });
  } else {
    // All other pages: WebPage + BreadcrumbList
    schemas.push({
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      name: ogTitle,
      description: ogDesc,
      url: canonical,
      isPartOf: { '@type': 'WebSite', name: orgName, url: SITE },
    });
  }

  // Add BreadcrumbList for all non-home pages
  if (!isHome) {
    const segments = path.replace(/^\//, '').replace(/\/$/, '').split('/').filter(Boolean);
    // Remove locale prefix from breadcrumb
    const cleanSegments = segments.filter(s => s !== 'zh-cn' && s !== 'zh-tw');
    if (cleanSegments.length > 0) {
      const itemList = [{
        '@type': 'ListItem',
        position: 1,
        name: lang === 'en' ? 'Home' : (lang === 'zh-CN' ? '首页' : '首頁'),
        item: `${SITE}${localePrefix}/`,
      }];
      let cumPath = `${SITE}${localePrefix}`;
      cleanSegments.forEach((seg, i) => {
        cumPath += '/' + seg + '/';
        // Human-readable segment name
        const segName = seg.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase());
        itemList.push({
          '@type': 'ListItem',
          position: i + 2,
          name: segName,
          item: cumPath,
        });
      });
      schemas.push({
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: itemList,
      });
    }
  }

  // Inject all JSON-LD blocks
  const ldBlocks = schemas.map(s =>
    `<script type="application/ld+json">${JSON.stringify(s, null, 2)}</script>`
  ).join('\n') + '\n';
  html = html.replace(/(<\/head>)/, `${ldBlocks}$1`);

  writeFileSync(file, html, 'utf-8');
}

console.log('Done. Fixed lang attrs, canonical, hreflang (+x-default), OG tags, Twitter Cards, and JSON-LD for all pages.');
