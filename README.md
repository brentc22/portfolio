<div align="center">

# portfolio

**brentceulemans.be** — a single page about the systems I build.

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
carries meaning instead of mood. Add a sixth layer to `src/data/site.js` and the whole page
picks it up.

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
  data/site.js          all copy, the five layers, the case studies, the principles
  layouts/Layout.astro  head, fonts, skip link, reveal observer
  components/
    Header.astro        masthead + nav
    Hero.astro          headline, the spectrum rule, the three floating panels
    Layers.astro        what a platform like this covers
    Work.astro          the case grid
    CasePreview.astro   the per-case abstract, drawn in blocks — never a screenshot
    Approach.astro      four rules, one per layer
    Contact.astro       closing line, links, footer
```

Editing the page means editing `src/data/site.js`. The components take colour, copy and order
from it; nothing is hard-coded twice.

## Case previews

Each case card carries a small drawing of what the system does — site points with a status,
a case file with its roles, a terminal pulling a code out of an email, a macOS menu bar. They
are built from `<span>` blocks and CSS, not from screenshots, so no client data ever leaves
the client. Placeholders are written as `[amount]`, `[date]`, `[month]`: real numbers go in
only once they have been measured.

## Deploying

Static output, so anything that serves files will do. Cloudflare Pages:

```
build command:     npm run build
output directory:  dist
```

Set `site` in `astro.config.mjs` to the final domain before the first deploy — it is what the
canonical URL and the Open Graph tags are built from.

## License

The code is MIT. The written content and the case studies are not — they describe real
engagements.
