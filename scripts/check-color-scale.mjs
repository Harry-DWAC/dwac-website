#!/usr/bin/env node
/**
 * Guard: undefined color-scale checker.
 *
 * Tailwind silently drops any utility whose color+shade is not defined in
 * tailwind.config.ts — e.g. `bg-navy-50` renders as nothing at all, with no
 * build error and no warning. That bug class hid for months twice:
 *   - gold-50/100/200/700 missing  -> /digital-tribunal/ advantage table column invisible (fixed 2026-09-16)
 *   - navy-50/100/200 missing      -> 21 sites (cover slots, code chips, 404 watermark) invisible (fixed 2026-09-17)
 *
 * This script scans source for `{utility}-{family}-{shade}` usages and fails if
 * the shade is not defined in the config. Run it before/after builds:
 *   node scripts/check-color-scale.mjs        (or: npm run check:colors)
 *
 * Exit code 1 = undefined shades found (build should be treated as unsafe).
 */
import { readFileSync, readdirSync, statSync } from 'fs'
import { join } from 'path'

const SRC = 'src'
const CONFIG = 'tailwind.config.ts'

// Utilities that take a colour: keep in sync with Tailwind's core plugins.
const UTILITIES = [
  'text', 'bg', 'border', 'ring', 'from', 'via', 'to', 'fill', 'stroke',
  'divide', 'decoration', 'accent', 'caret', 'outline', 'placeholder',
  'shadow', 'ring-offset',
]

function parseConfigFamilies() {
  const cfg = readFileSync(CONFIG, 'utf8')
  const colors = cfg.match(/colors:\s*\{([\s\S]*?)\n {6}\},/)
  const body = colors ? colors[1] : cfg
  const families = {}
  const re = /([a-zA-Z][\w-]*):\s*\{([\s\S]*?)\n {8}\}/g
  let m
  while ((m = re.exec(body))) {
    const family = m[1]
    const shades = new Set()
    for (const s of m[2].matchAll(/(?:'|")?([a-z0-9]+)(?:'|")?\s*:/g)) shades.add(s[1])
    if (shades.size) families[family] = shades
  }
  return families
}

function walk(dir, files = []) {
  for (const entry of readdirSync(dir)) {
    const p = join(dir, entry)
    if (statSync(p).isDirectory()) walk(p, files)
    else if (/\.(tsx?|jsx?|mdx)$/.test(entry)) files.push(p)
  }
  return files
}

const families = parseConfigFamilies()
if (!Object.keys(families).length) {
  console.error('✗ could not parse any colour family from ' + CONFIG)
  process.exit(2)
}

// Only report families that actually have a numeric shade scale (navy, gold, ...).
const scaled = Object.entries(families).filter(([, shades]) =>
  [...shades].some((s) => /^\d{2,3}$/.test(s)))

const utilityAlt = UTILITIES.join('|')
const pattern = new RegExp(`\\b(?:${utilityAlt})-(${scaled.map(([f]) => f).join('|')})-(\\d{2,3})\\b`, 'g')

const violations = new Map()
for (const file of walk(SRC)) {
  const text = readFileSync(file, 'utf8')
  for (const m of text.matchAll(pattern)) {
    const [, family, shade] = m
    if (!families[family].has(shade)) {
      const key = `${family}-${shade}`
      if (!violations.has(key)) violations.set(key, new Set())
      violations.get(key).add(file)
    }
  }
}

console.log(`checked ${scaled.length} scaled colour families: ${scaled.map(([f, s]) => `${f}(${s.size})`).join(', ')}`)

if (violations.size === 0) {
  console.log('✓ no undefined colour shades referenced')
  process.exit(0)
}

console.error(`\n✗ ${violations.size} undefined colour shade(s) referenced — Tailwind will drop these classes silently:\n`)
for (const [key, files] of [...violations].sort()) {
  const list = [...files].sort()
  console.error(`  ${key}  (${list.length} file${list.length > 1 ? 's' : ''})`)
  for (const f of list) console.error(`      ${f}`)
}
console.error(`\nFix: add the missing step(s) to colors.* in ${CONFIG}, or use a defined shade.`)
process.exit(1)
