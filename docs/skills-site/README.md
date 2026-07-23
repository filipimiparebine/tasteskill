# Skills Atlas

A static reference site cataloguing the Claude Code skills installed in this repo
(under `.claude/skills/`). One page per skill: what it does, when to use it, its
inputs → outputs, an example invocation, and a visual of how it looks. Grouped by
family so you can browse by purpose and pick the skill that fits a project.

## Develop

```bash
cd docs/skills-site
npm install
npm run dev      # http://localhost:4321
npm run build    # static output in dist/
```

## How it's structured

- `src/data/skills.ts` — the single source of truth. Every skill is one entry;
  adding a skill = adding an object here.
- `src/pages/skills/[slug].astro` — generates one page per manifest entry.
- `src/components/visuals/` — the "how it looks" area. Bespoke live samples
  (`MinimalistUiDemo`, `TddCycle`) are wired by a skill's `visual` key; everything
  else falls back to `DefaultFlow` (inputs → skill → outputs from the manifest).
- `src/components/Sidebar.astro` — the grouped menu.

## Status

Prototype. All 35 skills appear in the menu and have a page; two skills
(`minimalist-ui`, `tdd`) are fully realised as the design and process archetypes.
See `.scratch/skills-site/MAP.md` for the plan and remaining tickets (T2–T5).

## Deploy

Static output builds to `dist/`. To host from a subpath (e.g. GitHub Pages),
set `SITE_BASE`, e.g. `SITE_BASE=/tasteskill/skills-site npm run build`.
