/** Everything the page says about the work, in one place.
 *  A layer key maps to a CSS custom property, so colour is never
 *  written twice: the system decides it, the stylesheet resolves it. */

export const profile = {
  name: 'Brent Ceulemans',
  domain: 'brentceulemans.be',
  email: 'brent@vernast.be',
  github: 'https://github.com/brentc22',
  role: 'Custom CRM & operations',
  availability: 'Open for one new engagement from [month]',
  headline: ['I build the', 'systems companies', 'actually run on.'],
  /** Which word in the last line sits in a solid block. */
  highlight: 'actually',
  lead:
    'Custom CRM and operations platforms. From the first inbound lead to the settled ' +
    'invoice — every role gets an interface built for the work it does, rather than one ' +
    'screen with everything hidden behind permissions.',
  stack: [
    { label: 'TypeScript', layer: 'leads' },
    { label: 'React', layer: 'quotes' },
    { label: 'Postgres', layer: 'site' },
    { label: 'Supabase', layer: 'invoices' },
    { label: 'Swift', layer: 'portal' },
  ],
}

/** The five layers. The hero rule, the band and every case colour read from this. */
export const layers = [
  { key: 'leads', name: 'Leads', modules: ['qualification', 'source attribution', 'follow-up'] },
  { key: 'quotes', name: 'Quotes', modules: ['line pricing', 'VAT regimes', 'digital signing'] },
  { key: 'site', name: 'Site', modules: ['planning', 'field execution', 'stock'] },
  { key: 'invoices', name: 'Invoices', modules: ['reconciliation', 'VAT returns', 'collections'] },
  { key: 'portal', name: 'Portal', modules: ['customer & partner', 'roles & rights', 'row-level security'] },
]

export const projects = [
  {
    id: 'project-point',
    number: '01',
    layer: 'leads',
    name: 'Project-Point',
    badge: { label: 'Live', solid: true },
    href: 'https://project-point.be',
    external: true,
    summary:
      'Site registration and project management for the building trade — “Geen enkel punt raakt ' +
      'kwijt”. My own product: landing page, app and customer portal.',
    tags: ['Product', 'Portal', 'Cloudflare'],
    preview: 'points',
    previewLabel: 'Site · 14 points open',
  },
  {
    id: 'operations-platform',
    number: '02',
    layer: 'quotes',
    name: 'Operations platform',
    badge: { label: 'Under NDA', solid: false },
    href: '#operations-platform',
    external: false,
    summary:
      'Sales, planning, field execution, logistics, finance and a customer portal on one ' +
      'database — the system an entire installation company spends its day inside, from the ' +
      'first lead to the reconciled payment.',
    tags: ['React', 'Supabase', 'RLS'],
    preview: 'dossier',
    previewLabel: 'Case · 6 roles · week [nr]',
  },
  {
    id: 'catchbox',
    number: '03',
    layer: 'site',
    name: 'catchbox',
    badge: { label: 'Open source', solid: false },
    href: 'https://github.com/brentc22/catchbox',
    external: true,
    summary:
      'Disposable inboxes for developers — one mailbox per flow, so signup, billing and ' +
      'password resets never land in the same pile. It hands you the one-time code and the ' +
      'action link, and reads the headers for why a mail went to spam. Node, no dependencies.',
    tags: ['Node', 'CLI', 'MIT'],
    preview: 'inbox',
    previewLabel: 'Signup flow · code extracted',
  },
  {
    id: 'stash',
    number: '04',
    layer: 'portal',
    name: 'Stash',
    badge: { label: 'Open source', solid: false },
    href: 'https://github.com/brentc22/stash',
    external: true,
    summary:
      'A menu bar hider for macOS 27. The rewrite drew the menu bar as a single window and ' +
      'broke every tool in that category at once — the repository documents what changed, ' +
      'measured on a real machine rather than guessed at.',
    tags: ['Swift', 'Homebrew'],
    preview: 'menubar',
    previewLabel: 'macOS 27 · menu bar',
  },
]

/** The four rules, lifted from how the work actually gets done. */
export const principles = [
  {
    layer: 'invoices',
    title: 'Correctness before cleverness wherever money is involved',
    body:
      'Line-item pricing, VAT regimes and invoice totals are guarded by database-level ' +
      'invariant checks that run on a schedule and alert only when the state changes. An alarm ' +
      'that repeats every fifteen minutes gets dismissed, and is worthless from then on.',
  },
  {
    layer: 'portal',
    title: 'Access control is not something you bolt on afterwards',
    body:
      'A public customer portal sitting on the same database as internal finance data means ' +
      'every row-level policy and every grant is load-bearing. I assume a policy is broken ' +
      'until I have watched it refuse the request.',
  },
  {
    layer: 'site',
    title: 'Every incident becomes a written rule',
    body:
      'Anything that cost real time gets documented in the repository — the rule, and the ' +
      'story behind it. A warning in prose only works if you happen to read it right before ' +
      'you would have made the mistake, so the ones that matter become automated checks instead.',
  },
  {
    layer: 'leads',
    title: 'Measured, not assumed',
    body:
      'Before I claim something works, I run the check and read the output. That habit is the ' +
      'single biggest difference between a system you trust and one you hope about.',
  },
]
