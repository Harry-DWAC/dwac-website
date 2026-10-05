// Site-wide constants and metadata helpers shared by every locale layout.
// Previously the `alternates` block below was copy-pasted into the root layout
// plus all three route-group layouts (4 copies); a canonical URL change had to
// be made in every one of them.

export const SITE_ORIGIN = 'https://www.dwac.net'

/**
 * Build the hreflang/canonical metadata block for a page.
 * @param canonical absolute canonical URL for the page (e.g. `${SITE_ORIGIN}/about`)
 */
export function buildAlternates(canonical: string) {
  return {
    canonical,
    languages: {
      en: SITE_ORIGIN,
      'zh-CN': `${SITE_ORIGIN}/zh-cn`,
      'zh-TW': `${SITE_ORIGIN}/zh-tw`,
    },
  }
}
