/** Everything about the site that is the same in every language: which layer
 *  owns which colour, where a link points, what a preview draws. The words
 *  live in src/i18n/<lang>.js and are joined to this by id.
 *
 *  Splitting it this way means a URL or a layer key is written once, not once
 *  per language — a translation can never quietly point at a dead link. */

export const contact = {
  name: 'Brent Ceulemans',
  email: 'brent.ceulemans@icloud.com',
  github: 'https://github.com/brentc22',
}

/** The five layers of the system, in the order a job moves through them. */
export const layerKeys = ['leads', 'quotes', 'site', 'invoices', 'portal']

/** Stack chips in the hero: label is a product name, so it is not translated. */
export const stack = [
  { label: 'TypeScript', layer: 'leads' },
  { label: 'React', layer: 'quotes' },
  { label: 'Postgres', layer: 'site' },
  { label: 'Supabase', layer: 'invoices' },
  { label: 'Swift', layer: 'portal' },
]

export const projectMeta = [
  {
    id: 'project-point',
    number: '01',
    layer: 'leads',
    href: '/work/project-point/',
    external: false,
    live: 'https://project-point.be',
    badgeSolid: true,
    tags: ['Product', 'Portal', 'Cloudflare'],
    preview: 'points',
  },
  {
    id: 'operations-platform',
    number: '02',
    layer: 'quotes',
    /** Locale-aware: the case study lives under the language prefix. */
    href: '/work/operations-platform/',
    external: false,
    badgeSolid: false,
    tags: ['React', 'Supabase', 'RLS'],
    preview: 'dossier',
  },
  {
    id: 'catchbox',
    number: '03',
    layer: 'site',
    href: 'https://github.com/brentc22/catchbox',
    external: true,
    badgeSolid: false,
    tags: ['Node', 'CLI', 'MIT'],
    preview: 'inbox',
  },
  {
    id: 'stash',
    number: '04',
    layer: 'portal',
    href: 'https://github.com/brentc22/stash',
    external: true,
    badgeSolid: false,
    tags: ['Swift', 'Homebrew'],
    preview: 'menubar',
  },
]

/** Which layer colour each of the four rules is drawn in. */
export const principleMeta = [
  { layer: 'invoices', number: '01' },
  { layer: 'portal', number: '02' },
  { layer: 'site', number: '03' },
  { layer: 'leads', number: '04' },
]

/** Per case: which layer colour each of the four decisions is drawn in, and
 *  which case the reader is sent to next. */
export const caseMeta = {
  'project-point': {
    decisionLayers: ['portal', 'site', 'quotes', 'invoices'],
    next: 'operations-platform',
  },
  'operations-platform': {
    decisionLayers: ['quotes', 'portal', 'invoices', 'site'],
    next: 'catchbox',
  },
}

/** The quote drawn in the hero. Belgian format, 6% renovation VAT, and the
 *  arithmetic actually adds up — a fake total is the kind of detail a client
 *  in this trade notices immediately. */
export const heroQuote = {
  ref: 'QT-2026-0184',
  lines: ['4.850,00', '2.310,00'],
  total: '7.589,60',
}
