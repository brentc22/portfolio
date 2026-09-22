/** Builds the social preview cards.
 *
 *  Run with: npm run og
 *
 *  Deliberately not part of `npm run build`: it needs a real Chrome, which CI
 *  does not have, and the cards only change when the headlines change. The
 *  PNGs are committed, so a fresh clone builds without ever running this.
 */
import { mkdtemp, writeFile, rm } from 'node:fs/promises'
import { tmpdir } from 'node:os'
import { join } from 'node:path'
import { execFile } from 'node:child_process'
import { promisify } from 'node:util'

import { getSite, languages } from '../src/i18n/index.js'

const run = promisify(execFile)

const CHROME =
  process.env.CHROME ??
  '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome'

const OUT = new URL('../public/og/', import.meta.url).pathname

const escape = (s) =>
  String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')

/** The card is the masthead of the site, blown up: flat ground, the five
 *  colours as a rule, one hard-set line of type. No gradient, no photo. */
function card({ eyebrow, lines, highlight, accent, footer, role }) {
  const body = lines
    .map((line) => {
      if (!highlight || !line.includes(highlight)) return `<span>${escape(line)}</span>`
      const [before, after] = line.split(highlight)
      return `<span>${escape(before)}<b>${escape(highlight)}</b>${escape(after)}</span>`
    })
    .join('')

  return `<!doctype html>
<html><head><meta charset="utf-8">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Schibsted+Grotesk:wght@400;700;900&family=Azeret+Mono:wght@400;500&display=swap">
<style>
  :root {
    --bg: #0c0d10; --ink: #f5f5f3; --ink-3: #a9adb6; --ink-4: #7c8089;
    --leads: #1fc8db; --quotes: #4d7cff; --site: #3fd68c; --invoices: #ffb020; --portal: #ff5a5f;
  }
  * { box-sizing: border-box; margin: 0; }
  body {
    width: 1200px; height: 630px; background: var(--bg); color: var(--ink);
    font-family: 'Schibsted Grotesk', sans-serif; overflow: hidden;
    display: flex; flex-direction: column;
  }
  .rule { display: flex; height: 14px; flex: none; }
  .rule i { flex: 1; }
  .inner { flex: 1; display: flex; flex-direction: column; justify-content: space-between; padding: 64px 72px 60px; }
  .eyebrow {
    font-family: 'Azeret Mono', monospace; font-size: 20px; letter-spacing: 0.2em;
    text-transform: uppercase;
  }
  h1 { font-size: 76px; font-weight: 900; letter-spacing: -0.045em; line-height: 1.02; margin-top: 26px; }
  h1 span { display: block; white-space: nowrap; }
  h1 b { background: var(--portal); color: var(--bg); padding: 0 0.12em 0.05em; font-weight: 900; }
  .foot { display: flex; align-items: flex-end; justify-content: space-between; gap: 24px; }
  .name { font-size: 30px; font-weight: 700; letter-spacing: -0.02em; }
  .role { font-family: 'Azeret Mono', monospace; font-size: 17px; color: var(--ink-4); margin-top: 8px; letter-spacing: 0.06em; }
  .domain { font-family: 'Azeret Mono', monospace; font-size: 19px; color: var(--ink-3); letter-spacing: 0.08em; }
</style></head>
<body>
  <div class="rule">
    <i style="background: var(--leads)"></i><i style="background: var(--quotes)"></i><i style="background: var(--site)"></i><i style="background: var(--invoices)"></i><i style="background: var(--portal)"></i>
  </div>
  <div class="inner">
    <div>
      <p class="eyebrow" style="color: var(--${accent})">${escape(eyebrow)}</p>
      <h1>${body}</h1>
    </div>
    <div class="foot">
      <div>
        <p class="name">${escape(footer)}</p>
        <p class="role">${escape(role)}</p>
      </div>
      <p class="domain">brentceulemans.pages.dev</p>
    </div>
  </div>
</body></html>`
}

/** Long titles are wrapped by hand so every card keeps one hard-set block. */
function wrap(text, max = 26) {
  const words = text.split(' ')
  const lines = [[]]
  for (const word of words) {
    const line = lines.at(-1)
    const length = [...line, word].join(' ').length
    if (line.length && length > max) lines.push([word])
    else line.push(word)
  }
  return lines.map((line) => line.join(' '))
}

const tmp = await mkdtemp(join(tmpdir(), 'og-'))

for (const { code } of languages) {
  const t = getSite(code)

  const cards = {
    home: {
      // The role is already on the bottom line; the eyebrow carries the one
      // thing a stranger wants to know from a link preview.
      eyebrow: t.profile.availability,
      lines: t.profile.headline,
      highlight: t.profile.highlight,
      accent: 'leads',
    },
    'project-point': {
      eyebrow: t.cases['project-point'].eyebrow,
      lines: wrap(t.cases['project-point'].title),
      accent: 'site',
    },
    'operations-platform': {
      eyebrow: t.cases['operations-platform'].eyebrow,
      lines: wrap(t.cases['operations-platform'].title),
      accent: 'quotes',
    },
  }

  for (const [page, spec] of Object.entries(cards)) {
    const html = card({ ...spec, footer: t.profile.name, role: t.profile.role })
    const file = join(tmp, `${page}-${code}.html`)
    await writeFile(file, html)

    const out = join(OUT, `${page}-${code}.png`)
    await run(CHROME, [
      '--headless',
      '--disable-gpu',
      '--hide-scrollbars',
      '--force-device-scale-factor=1',
      '--window-size=1200,630',
      '--virtual-time-budget=6000',
      `--screenshot=${out}`,
      `file://${file}`,
    ])
    console.log('wrote', `public/og/${page}-${code}.png`)
  }
}

await rm(tmp, { recursive: true, force: true })
