# 30 Seconds of Knowledge - IDE Landing Redesign

**Date:** 2026-06-22
**Status:** Approved
**Branch:** djordje/landing_page_updates

## Thesis

The product hijacks the browser new-tab and turns it into a code editor. So the
landing page **is a living IDE**. Not "a dark page with a yellow accent" (generic),
but a real editor environment: window chrome, line-number gutter, file tabs,
syntax highlighting, a blinking cursor, terminal output, and a `git diff`. Each
section is a "file" or "panel" in the workspace. Boldness is spent in one place -
the IDE concept - everything else stays quiet.

## Constraints

- **Keep brand colors:** `#ffc800` yellow, `#0e1217` background. No new bright hues.
- Keep all real copy, stats, links, SEO/metadata, merch iframe, loader, downloads.
- Responsive, keyboard-accessible, `prefers-reduced-motion` honored.

## Token system

| Role | Value |
| --- | --- |
| Editor background | `#0e1217` |
| Panel / gutter | `#17191f` |
| Text | `#fff` |
| Comment gray | `#818589` |
| Accent (keyword / string / cursor / CTA) | `#ffc800` |
| Diff minus tint | `rgba(255,80,80,.12)` bg + muted red text (used sparingly) |
| Diff plus tint | yellow-based `+` markers (stay on-brand) |

- **Type:** `JetBrains Mono` (chrome, code, numbers - the signature) + `Roboto Flex`
  retained for long body paragraphs. Teko and squiggle doodles are retired.
- **Layout:** single dark editor canvas; thin left **activity bar** = section nav +
  scroll progress; bottom **status bar** = footer chrome.
- **Signature element:** hero "newtab.js" window that types a real snippet with
  syntax highlighting and a blinking cursor - a direct demo of the product.

## New reusable components

- `EditorWindow` - window chrome (traffic-light dots, filename tab), used to frame panels.
- `CodeBlock` - line-numbered, syntax-highlighted code (tokens via spans, no heavy dep).
- `TypeLine` / typing hook - client-only typing effect, reduced-motion safe.
- `StatusBar` - bottom VS-Code-style bar (branch, encoding, socials) → footer.
- `TerminalLog` - `$ command` + output lines, used in community section.

## Sections (rebuilt, same messaging)

1. **Header → editor menu/title bar.** Brand as workspace name; "add to browser"
   becomes a `▸ Install` editor action. Sticky.
2. **Hero → live new-tab window.** Headline as `// comment`; snippet types itself
   (`const you = ai.writeCode()` … `read(oneRealSnippet)`); CTA = Install action;
   star rating + 25K inline.
3. **Atrophy → `git diff`.** "Use it or lose it" as a diff: `-` red lines = atrophy
   symptoms, `+` yellow lines = one rep per tab. Closing line "That's atrophy."
4. **Snippets → file explorer.** Keep `InfiniteGridScroller`; restyle tags as code
   file chips with language icons. "1500+ REPS" as output heading.
5. **Community → terminal log.** Stats as `$ stats` output; GitHub stars + ProductHunt
   #2 as log/badge lines. Keep `DownloadCard`, real links.
6. **Support → contribute panel.** Donate = "merge" action; merch iframe framed as a
   panel. Keep Gumroad + Spring embed.
7. **Footer → status bar + existing link columns.** Keep all download/community/product
   links and socials; wrap top with a status-bar strip.

## Motion (disciplined)

One coordinated hero typing sequence + blinking cursor; sections reveal on scroll.
Remove `shake`/`shock`/`float`. All effects collapse to final state under
`prefers-reduced-motion`.

## Out of scope

No content/copy rewrite, no new routes, no backend, no analytics changes.
