import { defineConfig } from 'astro/config'

export default defineConfig({
  site: 'https://brentceulemans.pages.dev',
  build: { inlineStylesheets: 'auto' },
  // English stays at the root so existing links keep working; nl and fr are
  // prefixed. Routing is written out by hand in src/pages, so this block only
  // records the intent for anyone reading the project.
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'nl', 'fr'],
    routing: { prefixDefaultLocale: false },
  },
})
