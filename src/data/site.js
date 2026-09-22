/** Everything the page says about the work, in one place.
 *  A layer key maps to a CSS custom property, so colour is never
 *  written twice: the system decides it, the stylesheet resolves it. */

export const profile = {
  name: 'Brent Ceulemans',
  domain: 'brentceulemans.be',
  email: 'brent.ceulemans@icloud.com',
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
    href: '/work/operations-platform/',
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

/** The four rules, lifted from how the work actually gets done.
 *  `practice` is the concrete thing the rule makes me do; `cost` is what
 *  goes wrong without it. A principle nobody can act on is decoration. */
export const principles = [
  {
    layer: 'invoices',
    number: '01',
    title: 'Correctness before cleverness wherever money is involved',
    body:
      'Line-item pricing, VAT regimes and invoice totals are guarded by database-level ' +
      'invariant checks that run on a schedule and alert only when the state changes. An alarm ' +
      'that repeats every fifteen minutes gets dismissed, and is worthless from then on.',
    practice: 'Every money rule is a constraint or a scheduled check, never a comment.',
    cost: 'Totals that drift apart quietly, and a customer who finds it before you do.',
  },
  {
    layer: 'portal',
    number: '02',
    title: 'Access control is not something you bolt on afterwards',
    body:
      'A public customer portal sitting on the same database as internal finance data means ' +
      'every row-level policy and every grant is load-bearing. I assume a policy is broken ' +
      'until I have watched it refuse the request.',
    practice: 'New endpoint, new policy — and a test that signs in as the wrong user first.',
    cost: 'One missing predicate turns a portal into an export of everything.',
  },
  {
    layer: 'site',
    number: '03',
    title: 'Every incident becomes a written rule',
    body:
      'Anything that cost real time gets documented in the repository — the rule, and the ' +
      'story behind it. A warning in prose only works if you happen to read it right before ' +
      'you would have made the mistake, so the ones that matter become automated checks instead.',
    practice: 'The rule ships with the fix, in the same commit, with the story attached.',
    cost: 'The same outage twice, six months apart, by someone who never heard about the first.',
  },
  {
    layer: 'leads',
    number: '04',
    title: 'Measured, not assumed',
    body:
      'Before I claim something works, I run the check and read the output. That habit is the ' +
      'single biggest difference between a system you trust and one you hope about.',
    practice: 'No “should work”. Run it, read it, quote the line that proves it.',
    cost: 'A deploy that was green in your head and red in production.',
  },
]

/** Long-form case study. Only what an NDA leaves room for: the shape of the
 *  problem, the decisions, and what they cost — never a client's data. */
export const operationsCase = {
  eyebrow: 'Case 02 · Under NDA',
  title: 'The system a company spends its day inside',
  standfirst:
    'An installation company outgrew its spreadsheets, then discovered that off-the-shelf ' +
    'software did not fit the way it actually works. This is what replaced it: one platform ' +
    'covering sales, planning, field execution, logistics, finance and a customer portal — ' +
    'and the decisions underneath it.',
  facts: [
    { label: 'Role', value: 'Sole developer — domain model to deploys' },
    { label: 'Running since', value: '[year], in daily production use' },
    { label: 'Users', value: '[n] internal roles + customer portal' },
    { label: 'Stack', value: 'React · TypeScript · Postgres · Supabase' },
  ],
  problem: [
    'Every company that reaches a certain size has the same three tools: a spreadsheet nobody ' +
      'dares touch, a shared mailbox, and one person who remembers how it all fits together. ' +
      'It works until it does not — usually on the day that person is on holiday.',
    'The obvious answer is to buy something. That fails for a specific reason: packaged CRM ' +
      'assumes a sales process, packaged ERP assumes a factory, and a company that installs ' +
      'things at a customer\u2019s address is neither. You end up bending the business to fit the ' +
      'software, and the spreadsheet quietly comes back to hold whatever did not fit.',
    'So the brief was not “digitise this”. It was: model what this company actually does, and ' +
      'make every role\u2019s day shorter rather than better documented.',
  ],
  decisions: [
    {
      layer: 'quotes',
      title: 'A quote is a contract, so its lines are immutable',
      body:
        'A quote that has been signed cannot change — not its prices, not its VAT regime, not ' +
        'its line order. Editing one creates a new revision and leaves the signed version ' +
        'exactly as the customer saw it. The invoice is then generated from the signed lines ' +
        'rather than re-derived from current prices.',
      why:
        'The alternative looks simpler for about a year, until a price list update silently ' +
        'rewrites what a customer agreed to. That is not a bug you find in testing; you find ' +
        'it in a dispute.',
    },
    {
      layer: 'portal',
      title: 'The portal sits on the same database, so RLS is the floor',
      body:
        'Customers and partners read their own projects out of the same tables the finance ' +
        'team works in. There is no mirror database and no sync job. Every table the portal ' +
        'touches carries a row-level policy, and the policy — not the query, not the ' +
        'component — decides what comes back.',
      why:
        'A separate read model is a second source of truth, and a second source of truth ' +
        'drifts. Keeping one database means a policy is the only thing standing between a ' +
        'customer and the rest of the company, which is exactly the pressure it should be ' +
        'under. I test them by signing in as the wrong user and watching the request fail.',
    },
    {
      layer: 'invoices',
      title: 'Money invariants are checked by the database, on a schedule',
      body:
        'Invoice totals must equal the sum of their lines. VAT must match the regime on the ' +
        'signed quote. A payment must never reconcile against an invoice from another ' +
        'customer. These are scheduled checks against the live data, and they alert only when ' +
        'the state changes — first time wrong, and again when it goes right.',
      why:
        'Financial bugs are silent. Nothing throws; a number is simply wrong, and stays wrong ' +
        'until someone recounts by hand. An alarm that fires every fifteen minutes gets muted ' +
        'within a day and is worthless after that, so it fires on transitions instead.',
    },
    {
      layer: 'site',
      title: 'Each role gets its own screen, not a filtered version of one screen',
      body:
        'The planner, the field team, the warehouse and the bookkeeper look at the same ' +
        'project through four different interfaces. The field app shows today, this address, ' +
        'these materials, this photo. The bookkeeper never sees a planning grid.',
      why:
        'One screen with everything hidden behind permissions is how enterprise software ' +
        'becomes something people avoid. The cost of building four focused screens is real; ' +
        'the cost of one screen nobody wants to open is higher, and it shows up as a ' +
        'spreadsheet reappearing on someone\u2019s desktop.',
    },
  ],
  process: [
    {
      step: '01',
      title: 'Sit with the work before modelling it',
      body:
        'The domain model comes out of watching how a job actually moves, not out of a ' +
        'requirements document. The words people already use become the table names.',
    },
    {
      step: '02',
      title: 'Ship one layer end to end',
      body:
        'Quoting, all the way from lead to signed PDF, before anything else is started. A ' +
        'layer that is live teaches you more in a week than a quarter of planning.',
    },
    {
      step: '03',
      title: 'Put the rules in the database',
      body:
        'Constraints, policies and invariant checks, because application code is where rules ' +
        'go to be forgotten. If it matters, it should refuse the write.',
    },
    {
      step: '04',
      title: 'Own the deploy and the Saturday phone call',
      body:
        'Architecture, migrations, deploys and the incident are the same job. Knowing you will ' +
        'be the one woken up changes what you are willing to ship.',
    },
  ],
  nda:
    'The client, their numbers and their screens stay out of this page. What is here is the ' +
    'shape of the problem and the reasoning — which is the part that transfers to the next ' +
    'company anyway. Happy to walk through the real thing in a call.',
}
