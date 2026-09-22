/** Joins the language-independent structure to the words of one language.
 *  Components ask for getSite(lang) and get exactly the shape they had
 *  before the site became multilingual. */

import en from './en.js'
import nl from './nl.js'
import fr from './fr.js'
import {
  contact,
  layerKeys,
  stack,
  projectMeta,
  principleMeta,
  caseMeta,
  heroQuote,
} from '../data/structure.js'

export const dictionaries = { en, nl, fr }
export const defaultLang = 'en'

/** Order matters: this is the order of the switcher in the masthead. */
export const languages = ['en', 'nl', 'fr'].map((code) => ({
  code,
  label: dictionaries[code].label,
  name: dictionaries[code].name,
}))

/** The languages that carry a URL prefix. English lives at the root so the
 *  links already in the wild keep working. */
export const prefixed = languages.map((l) => l.code).filter((c) => c !== defaultLang)

/** '/nl/work/x/' → '/work/x/' */
export function stripLang(pathname) {
  for (const code of prefixed) {
    if (pathname === `/${code}` || pathname === `/${code}/`) return '/'
    if (pathname.startsWith(`/${code}/`)) return pathname.slice(code.length + 1)
  }
  return pathname
}

/** '/work/x/' + 'fr' → '/fr/work/x/' */
export function localePath(pathname, lang) {
  const base = stripLang(pathname)
  if (lang === defaultLang) return base
  return base === '/' ? `/${lang}/` : `/${lang}${base}`
}

export function getSite(lang = defaultLang) {
  const d = dictionaries[lang] ?? dictionaries[defaultLang]

  return {
    lang,
    dir: d.dir,
    meta: d.meta,
    ui: d.ui,
    heroQuote,

    profile: { ...contact, ...d.profile, stack },

    layers: layerKeys.map((key) => ({ key, ...d.layers[key] })),

    projects: projectMeta.map((meta) => {
      const words = d.projects[meta.id]
      return {
        ...meta,
        name: words.name,
        summary: words.summary,
        previewLabel: words.previewLabel,
        badge: { label: words.badge, solid: meta.badgeSolid },
        href: meta.external ? meta.href : localePath(meta.href, lang),
      }
    }),

    principles: principleMeta.map((meta, i) => ({ ...meta, ...d.principles[i] })),

    cases: {
      'project-point': buildCase(d.projectPointCase, caseMeta['project-point']),
      'operations-platform': buildCase(d.operationsCase, caseMeta['operations-platform']),
    },
  }
}

/** The decisions carry a layer colour that is the same in every language, so
 *  it lives in the structure file and is folded in here. */
function buildCase(words, meta) {
  return {
    ...words,
    next: meta.next,
    decisions: words.decisions.map((decision, i) => ({
      ...decision,
      layer: meta.decisionLayers[i],
    })),
  }
}
