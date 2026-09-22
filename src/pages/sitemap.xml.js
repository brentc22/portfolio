/** Hand-rolled instead of @astrojs/sitemap: ten URLs, and writing it out
 *  means every entry carries its own xhtml:link alternates, which is what
 *  tells a crawler these are translations rather than duplicates. */
import { languages, localePath } from '../i18n'

/** Every page, once, in its language-independent form. */
const pages = ['/', '/work/project-point/', '/work/operations-platform/']

export function GET({ site }) {
  const url = (path) => new URL(path, site).href

  const entries = pages.flatMap((page) =>
    languages.map((lang) => {
      const alternates = languages
        .map(
          (alt) =>
            `    <xhtml:link rel="alternate" hreflang="${alt.code}" href="${url(localePath(page, alt.code))}" />`,
        )
        .join('\n')

      return `  <url>
    <loc>${url(localePath(page, lang.code))}</loc>
${alternates}
    <xhtml:link rel="alternate" hreflang="x-default" href="${url(page)}" />
    <changefreq>monthly</changefreq>
    <priority>${page === '/' ? '1.0' : '0.8'}</priority>
  </url>`
    }),
  )

  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${entries.join('\n')}
</urlset>
`

  return new Response(body, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } })
}
