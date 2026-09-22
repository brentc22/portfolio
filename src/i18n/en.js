/** English — the source text. Translations follow this shape exactly. */

export default {
  name: 'English',
  label: 'EN',
  dir: 'ltr',

  meta: {
    home: {
      title: 'Brent Ceulemans — Custom CRM & operations platforms',
      description:
        'I build the systems companies actually run on: custom CRM and operations platforms, ' +
        'from the first inbound lead to the settled invoice.',
    },
    case: {
      title: 'Operations platform — Brent Ceulemans',
      description:
        'A case study, within what an NDA allows: how one platform came to cover sales, ' +
        'planning, field execution, logistics, finance and a customer portal for an ' +
        'installation company — and the decisions underneath it.',
    },
    projectPoint: {
      title: 'Project-Point — Brent Ceulemans',
      description:
        'Site registration and project management for the building trade: points, photos, ' +
        'planning and a customer portal. My own product, and the decisions behind it.',
    },
    notFound: {
      title: 'Page not found — Brent Ceulemans',
      description: 'That page does not exist.',
    },
  },

  ui: {
    skip: 'Skip to content',
    language: 'Language',
    nav: { work: 'Work', approach: 'Approach', contact: 'Contact', cta: 'Start a conversation' },
    hero: {
      seeWork: 'See the work',
      howIWork: 'How I work',
      stack: 'Stack',
      quoteStatus: 'Signed',
      quoteLines: ['Installation, 3 days', 'Materials'],
      quoteVat: 'VAT · 6% renovation',
      quoteVatValue: 'auto',
      quoteTotal: 'Total incl.',
      systemLabel: 'The system',
      systemLive: 'live',
      systemFoot: 'every role its own interface · RLS as the floor',
      pointLabel: 'Site point · resolved',
      pointBody:
        'Photo, annotation and owner hang off the point. The customer sees exactly what they ' +
        'are allowed to see — nothing more.',
      pointFoot: 'raised 14 Mar · closed 16 Mar',
    },
    preview: { open: 'Open', closed: 'Closed', copied: 'copied', link: 'Link', hidden: 'hidden' },
    work: { eyebrow: 'Portfolio', title: 'Selected work', aside: 'four systems, not a gallery' },
    approach: { eyebrow: 'Method', title: 'How I work', aside: 'four rules, paid for in incidents', practice: 'In practice', cost: 'Without it' },
    contact: {
      claimBefore: 'Run the check, read the output, ',
      claimMark: 'then',
      claimAfter: ' say it works.',
      github: 'GitHub',
      role: 'Custom CRM & operations',
    },
    case: {
      back: 'All work',
      context: { eyebrow: 'Context', title: 'What it replaced' },
      scope: { eyebrow: 'Scope', title: 'Five layers, one database', aside: 'every layer owns its colour' },
      engineering: { eyebrow: 'Engineering', title: 'Decisions that mattered', aside: 'and what the alternative costs' },
      process: { eyebrow: 'Process', title: 'How the work goes' },
      whatItDoes: { eyebrow: 'Product', title: 'What it does', aside: 'four things, not forty' },
      built: { eyebrow: 'Build', title: 'How it is built' },
      whyNot: 'Why not the other way',
      ndaLabel: 'Under NDA',
      next: 'Next',
      of: 'of',
    },
    notFound: {
      code: '404',
      title: 'This route was never built.',
      body:
        'Either the link is old or I moved something. The work and the contact details are all ' +
        'one click away.',
      home: 'Back to the start',
      work: 'Selected work',
    },
  },

  profile: {
    role: 'Custom CRM & operations',
    availability: 'Open for new work',
    headline: ['I build the', 'systems companies', 'actually run on.'],
    /** Which word in the last line sits in a solid block. */
    highlight: 'actually',
    lead:
      'Custom CRM and operations platforms. From the first inbound lead to the settled ' +
      'invoice — every role gets an interface built for the work it does, rather than one ' +
      'screen with everything hidden behind permissions.',
  },

  layers: {
    leads: { name: 'Leads', modules: ['qualification', 'source attribution', 'follow-up'] },
    quotes: { name: 'Quotes', modules: ['line pricing', 'VAT regimes', 'digital signing'] },
    site: { name: 'Site', modules: ['planning', 'field execution', 'stock'] },
    invoices: { name: 'Invoices', modules: ['reconciliation', 'VAT returns', 'collections'] },
    portal: { name: 'Portal', modules: ['customer & partner', 'roles & rights', 'row-level security'] },
  },

  projects: {
    'project-point': {
      name: 'Project-Point',
      badge: 'Live',
      summary:
        'Site registration and project management for the building trade — “Geen enkel punt ' +
        'raakt kwijt”. My own product: landing page, app and customer portal.',
      previewLabel: 'Site · 14 points open',
    },
    'operations-platform': {
      name: 'Operations platform',
      badge: 'Under NDA',
      summary:
        'Sales, planning, field execution, logistics, finance and a customer portal on one ' +
        'database — the system an entire installation company spends its day inside, from the ' +
        'first lead to the reconciled payment.',
      previewLabel: 'Case · 6 roles · week 11',
    },
    catchbox: {
      name: 'catchbox',
      badge: 'Open source',
      summary:
        'Disposable inboxes for developers — one mailbox per flow, so signup, billing and ' +
        'password resets never land in the same pile. It hands you the one-time code and the ' +
        'action link, and reads the headers for why a mail went to spam. Node, no dependencies.',
      previewLabel: 'Signup flow · code extracted',
    },
    stash: {
      name: 'Stash',
      badge: 'Open source',
      summary:
        'A menu bar hider for macOS 27. The rewrite drew the menu bar as a single window and ' +
        'broke every tool in that category at once — the repository documents what changed, ' +
        'measured on a real machine rather than guessed at.',
      previewLabel: 'macOS 27 · menu bar',
    },
  },

  principles: [
    {
      title: 'Correctness before cleverness wherever money is involved',
      body:
        'Line-item pricing, VAT regimes and invoice totals are guarded by database-level ' +
        'invariant checks that run on a schedule and alert only when the state changes. An alarm ' +
        'that repeats every fifteen minutes gets dismissed, and is worthless from then on.',
      practice: 'Every money rule is a constraint or a scheduled check, never a comment.',
      cost: 'Totals that drift apart quietly, and a customer who finds it before you do.',
    },
    {
      title: 'Access control is not something you bolt on afterwards',
      body:
        'A public customer portal sitting on the same database as internal finance data means ' +
        'every row-level policy and every grant is load-bearing. I assume a policy is broken ' +
        'until I have watched it refuse the request.',
      practice: 'New endpoint, new policy — and a test that signs in as the wrong user first.',
      cost: 'One missing predicate turns a portal into an export of everything.',
    },
    {
      title: 'Every incident becomes a written rule',
      body:
        'Anything that cost real time gets documented in the repository — the rule, and the ' +
        'story behind it. A warning in prose only works if you happen to read it right before ' +
        'you would have made the mistake, so the ones that matter become automated checks instead.',
      practice: 'The rule ships with the fix, in the same commit, with the story attached.',
      cost: 'The same outage twice, six months apart, by someone who never heard about the first.',
    },
    {
      title: 'Measured, not assumed',
      body:
        'Before I claim something works, I run the check and read the output. That habit is the ' +
        'single biggest difference between a system you trust and one you hope about.',
      practice: 'No “should work”. Run it, read it, quote the line that proves it.',
      cost: 'A deploy that was green in your head and red in production.',
    },
  ],

  projectPointCase: {
    eyebrow: 'Case 01 · Live product',
    title: 'A snag list that survives the building site',
    standfirst:
      'Project-Point is my own product: site registration and project management for the ' +
      'building trade. Points, photos and planning in one place, and a portal where the ' +
      'customer follows along without sitting inside your administration.',
    facts: [
      { label: 'Role', value: 'My own product — design, build, run' },
      { label: 'Live at', value: 'project-point.be' },
      { label: 'Built with', value: 'Plain JavaScript · esbuild · Supabase · Cloudflare' },
      { label: 'Shape', value: 'Site app, customer portal and marketing site' },
    ],
    problem: [
      'A snag list on a building site lives in three places at once: photos in a group chat, ' +
        'notes on the back of a delivery slip, and one phone call that never got written down. ' +
        'Everybody has a version, nobody has the version.',
      'The cost shows up at handover. Something was agreed in March, the photo proving it is ' +
        'somewhere in a chat thread with four hundred other pictures, and the argument is no ' +
        'longer about the work — it is about who remembers what.',
      'So the product is not a project management tool that happens to have photos. It is a ' +
        'point: a photo, a mark on that photo, an action, an owner and a status — captured ' +
        'while standing in front of it, on a phone, with gloves on.',
    ],
    features: [
      {
        title: 'Sites and points',
        body:
          'Per site, what still has to happen. Every point carries an action — follow up, ' +
          'information needed, extra work, price to confirm — and a status you read in one look.',
      },
      {
        title: 'Photos you can draw on',
        body:
          'Take the photo on site and mark it immediately: arrow, circle, highlight. The note ' +
          'stays attached to the point, with the name of whoever wrote it.',
      },
      {
        title: 'Planning and Gantt',
        body:
          'Work laid out over time, and every site next to each other in one Gantt view — by ' +
          'week, month or quarter.',
      },
      {
        title: 'Customer portal',
        body:
          'One link per customer, per site. You decide point by point what they see, and they ' +
          'can answer and add photos of their own.',
      },
    ],
    decisions: [
      {
        title: 'The customer gets in without an account',
        body:
          'Access to the portal runs on an email address and a PIN. No registration, no ' +
          'password to forget, no account to manage on either side.',
        why:
          'A customer opens this twice in a year. A registration form is exactly where that ' +
          'person stops, and a portal nobody opens is worth less than an email. The cost is ' +
          'real: without an identity provider you carry link expiry, rate limiting and session ' +
          'scope yourself, and you only get that right by testing it as the wrong recipient.',
      },
      {
        title: 'Visibility is decided per point, not per site',
        body:
          'The contractor marks each point as visible or internal. Prices under discussion, ' +
          'remarks about a subcontractor and the note about a dispute stay on the inside.',
        why:
          'A single switch per site forces a choice between hiding everything useful and ' +
          'showing the argument about extra work. Per point is more work to build and it is ' +
          'the only granularity that matches how people actually talk about a job.',
      },
      {
        title: 'Annotating happens at the point, not back at the office',
        body:
          'The arrow is drawn on the phone, standing in front of the thing. The photo is stored ' +
          'with the mark, not next to a description of it.',
        why:
          'A photo without a mark is a discussion. Whoever was standing there knows which crack ' +
          'it is about; three weeks later nobody does, including them. Doing it later is ' +
          'cheaper to build and it is the feature that quietly never gets used.',
      },
      {
        title: 'The planning runs across sites, not inside one',
        body:
          'The Gantt view puts every running site on one timeline instead of giving each site ' +
          'its own chart.',
        why:
          'Planning one site is not hard — the contractor already has that in their head. The ' +
          'question that costs money is which crew is standing where next Tuesday, and that ' +
          'question is invisible until the sites are drawn next to each other.',
      },
    ],
    process: [
      {
        step: '01',
        title: 'No framework',
        body:
          'Plain JavaScript, bundled with esbuild. This app gets opened on a phone on a roof ' +
          'over a bad connection, so every kilobyte is a second of someone standing still.',
      },
      {
        step: '02',
        title: 'The database does the work',
        body:
          'Roughly 180 KB of PL/pgSQL in Postgres: access rules, status transitions and the ' +
          'portal’s view of a site are decided there, not in the client.',
      },
      {
        step: '03',
        title: 'Push, not polling',
        body:
          'Web push, so a new point reaches the person who has to act on it without anyone ' +
          'keeping a tab open.',
      },
      {
        step: '04',
        title: 'Cloudflare end to end',
        body:
          'The marketing site, the app and the portal are served from the edge, which keeps ' +
          'the first paint fast on a site connection and the running cost near zero.',
      },
    ],
    live: {
      label: 'See it running',
      body:
        'Project-Point is a live product, not a demo. The marketing site explains it in Dutch; ' +
        'the app itself sits behind a login because it holds real sites.',
      cta: 'project-point.be',
    },
  },

  operationsCase: {
    eyebrow: 'Case 02 · Under NDA',
    title: 'The system a company spends its day inside',
    standfirst:
      'An installation company outgrew its spreadsheets, then discovered that off-the-shelf ' +
      'software did not fit the way it actually works. This is what replaced it: one platform ' +
      'covering sales, planning, field execution, logistics, finance and a customer portal — ' +
      'and the decisions underneath it.',
    facts: [
      { label: 'Role', value: 'Sole developer — domain model to deploys' },
      { label: 'Running since', value: 'Early 2026, in daily production use' },
      { label: 'Users', value: 'Dozens of people daily, plus a customer portal' },
      { label: 'Stack', value: 'React · TypeScript · Postgres · Supabase' },
    ],
    problem: [
      'Every company that reaches a certain size has the same three tools: a spreadsheet nobody ' +
        'dares touch, a shared mailbox, and one person who remembers how it all fits together. ' +
        'It works until it does not — usually on the day that person is on holiday.',
      'The obvious answer is to buy something. That fails for a specific reason: packaged CRM ' +
        'assumes a sales process, packaged ERP assumes a factory, and a company that installs ' +
        'things at a customer’s address is neither. You end up bending the business to fit the ' +
        'software, and the spreadsheet quietly comes back to hold whatever did not fit.',
      'So the brief was not “digitise this”. It was: model what this company actually does, and ' +
        'make every role’s day shorter rather than better documented.',
    ],
    layersNote:
      'A job moves left to right through these, and every handover is a place where a ' +
      'spreadsheet used to live. Putting them on one database is what removes the re-typing — ' +
      'and what makes access control the hardest problem on the page.',
    decisions: [
      {
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
        title: 'Each role gets its own screen, not a filtered version of one screen',
        body:
          'The planner, the field team, the warehouse and the bookkeeper look at the same ' +
          'project through four different interfaces. The field app shows today, this address, ' +
          'these materials, this photo. The bookkeeper never sees a planning grid.',
        why:
          'One screen with everything hidden behind permissions is how enterprise software ' +
          'becomes something people avoid. The cost of building four focused screens is real; ' +
          'the cost of one screen nobody wants to open is higher, and it shows up as a ' +
          'spreadsheet reappearing on someone’s desktop.',
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
  },
}
