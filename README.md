<div align="center">

# portfolio

**[brentceulemans.pages.dev](https://brentceulemans.pages.dev)** — a page about the systems I build.

![Astro](https://img.shields.io/badge/Astro-5-BC52EE?style=flat-square&logo=astro&logoColor=white)
![No runtime JS framework](https://img.shields.io/badge/client_JS-~1kB-1fc8db?style=flat-square)
![Static](https://img.shields.io/badge/output-static-3fd68c?style=flat-square)

</div>

## The idea

Most of my work is private: custom CRM and operations platforms that live behind a client's
login. A portfolio therefore cannot be a wall of screenshots — it has to explain a system
without showing one.

So the page is organised the way the systems are: **five layers, five colours.**

| Layer | Colour | What lives there |
| :-- | :-- | :-- |
| Leads | `#1fc8db` | qualification, source attribution, follow-up |
| Quotes | `#4d7cff` | line pricing, VAT regimes, digital signing |
| Site | `#3fd68c` | planning, field execution, stock |
| Invoices | `#ffb020` | reconciliation, VAT returns, collections |
| Portal | `#ff5a5f` | customer & partner access, roles & rights, row-level security |

Colour is never decoration here. A case study, a stack chip, a rule in the approach section
and a bar in the hero all take their colour from the layer they belong to, so the palette
carries meaning instead of mood. Add a sixth layer to `src/data/structure.js`, give it a name
in each of the three language files, and the whole page picks it up.

## Design rules

Two constraints, both deliberate:

**Depth comes from structure, not from blur.** No gradient washes, no glows, no soft drop
shadows. The ground is one flat colour, the grid is drawn as faint column rules, and every
panel's shadow is a hard offset — a second shape, not a blur. If removing a `blur()` would
collapse the layout, the blur was doing work the layout should have done.

**Motion has to carry information.** Bars grow to show a pipeline filling. A status dot
cycles through the five layers. Sections rise in as you reach them. There is no marquee and
no floating decoration: if pausing an animation costs you nothing, it should not be there.
Everything respects `prefers-reduced-motion`.

## Running it

```sh
npm install
npm run dev        # http://localhost:4321
npm run build      # static output in dist/
npm run preview
```

Node 18 or newer. Astro with no integrations — the only client-side JavaScript is a small
`IntersectionObserver` for the scroll reveals, and the page renders correctly without it.

## Structure

```
src/
  data/structure.js     layer keys, links, tags — everything language-independent
  i18n/
    en.js nl.js fr.js   the words, one file per language
    index.js            getSite(lang), localePath(), the language list
  layouts/Layout.astro  head, hreflang, fonts, skip link, reveal observer
  components/
    Header.astro        masthead + nav
    LangSwitcher.astro  EN / NL / FR, linking to the same page
    Hero.astro          headline, the spectrum rule, the three floating panels
    Work.astro          the case grid
    CasePreview.astro   the per-case abstract, drawn in blocks — never a screenshot
    Approach.astro      four rules, one per layer
    CaseStudy.astro     the long-form case, in the language the route asked for
    SectionHead.astro   one heading treatment for every section
    Contact.astro       closing line, links, footer
  pages/
    index.astro                        en
    [lang]/index.astro                 nl, fr
    work/operations-platform.astro     en
    [lang]/work/operations-platform.astro
    404.astro                          one file, swaps language in the browser
```

Editing the page means editing `src/data/structure.js` and the three files in `src/i18n/`. The
components take colour, copy and order from them; nothing is hard-coded twice.

## Three languages

The site is served in English, Dutch and French — the working languages of a Belgian client.
English stays at the root, so every link already in the wild keeps working; the other two are
prefixed:

```
/                            /nl/                            /fr/
/work/operations-platform/   /nl/work/operations-platform/   /fr/work/...
```

The split that matters is in the data. `src/data/structure.js` holds everything that is the
same in every language — layer keys, colours, URLs, tags, which preview a card draws — and
`src/i18n/{en,nl,fr}.js` hold only words. `getSite(lang)` joins the two and hands a component
exactly the shape it had before the site was multilingual, so a translation can never quietly
point at a dead link or a colour that does not exist.

Each page carries `hreflang` for all three plus `x-default`, and the switcher in the masthead
links to the same page in the other language rather than dumping the visitor on the homepage.
There is no automatic redirect: a shared link opens in the language it was shared in.

The headline is hand-set — `text-wrap: nowrap`, one set of line breaks per language — so the
type scales to the longest line instead of overflowing. French runs about 25% longer than
English and would otherwise slide under the artwork.

## Case previews

Each case card carries a small drawing of what the system does — site points with a status,
a case file with its roles, a terminal pulling a code out of an email, a macOS menu bar. They
are built from `<span>` blocks and CSS, not from screenshots, so no client data ever leaves
the client. Placeholders are written as `[amount]`, `[date]`, `[month]`: real numbers go in
only once they have been measured.

## Deploying

Live at **https://brentceulemans.pages.dev** on Cloudflare Pages. Static output, so anything
that serves files will do:

```
build command:     npm run build
output directory:  dist
```

Every push to `main` runs `.github/workflows/deploy.yml`: it builds the site and publishes it
with `wrangler pages deploy`. Two repository secrets drive it — `CLOUDFLARE_ACCOUNT_ID` and
`CLOUDFLARE_API_TOKEN` (a token with *Cloudflare Pages: Edit*). Without the token the workflow
still builds, so the branch stays verified, and only the publish step is skipped.

`public/_headers` ships the cache and security headers: hashed `/_astro/*` assets are immutable
for a year, everything else gets `nosniff`, `DENY` framing and a strict referrer policy.

`site` in `astro.config.mjs` is what the canonical URL and the Open Graph tags are built from,
so it has to be the domain the site is actually served on. Point a custom domain at the Pages
project and change that line in the same commit.

## License

The code is MIT. The written content and the case studies are not — they describe real
engagements.
