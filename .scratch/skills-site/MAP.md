# Wayfinder map — Skills reference site

`wayfinder:map` · single-context · lives in `.scratch/` per CLAUDE.md workflow

## Destination

A menu-driven **presentation/reference website** that catalogs every skill installed
in this repo (currently **35**), with **one page per skill**. Each page states what the
skill does, when to reach for it, its inputs → outputs, and an example invocation, and
shows a **visual example** — design/UI skills rendered live in their own aesthetic,
process skills shown as a flow diagram or mock output. The site's job is to be the
reference the user consults to decide **which skill fits a given project**.

Done when: the site builds, the grouped menu links all 35 skills, and every skill has a
page following the agreed template.

## Notes

- **Domain:** the "skills" are Claude Code agent skills under `.claude/skills/`. Source of
  truth for each page's copy is that skill's own `SKILL.md` frontmatter + body.
- **Stack (decided):** Astro static site under `docs/skills-site/`. Pages are generated
  from a single data manifest (`src/data/skills.ts`) via a dynamic `skills/[slug].astro`
  route, so adding a skill = adding one manifest entry (+ an optional custom visual).
- **Visuals (decided):** consistent info panel on every page + a themed visual area.
  Design skills get a live in-aesthetic sample; process skills get a flow diagram.
- **Menu (decided):** grouped by the five families below.
- Skills to consult when working this map: `/prototype` (page look), `/research` (skill
  copy), `/domain-modeling` (page-template vocabulary), `/implement` (page generation).
- Keep it anti-slop — this repo is full of taste skills; the reference site must itself
  clear their bar (typography, spacing, restraint).

## Families (menu groups)

1. **Engineering workflow** (16) — ask-matt, research, wayfinder, to-spec, to-tickets,
   implement, prototype, diagnosing-bugs, tdd, code-review, codebase-design,
   improve-codebase-architecture, domain-modeling, triage, resolving-merge-conflicts,
   setup-matt-pocock-skills
2. **Thinking & productivity** (6) — grill-me, grilling, grill-with-docs, handoff, teach,
   writing-great-skills
3. **Design systems / UI** (8) — design-taste-frontend, design-taste-frontend-v1,
   high-end-visual-design, minimalist-ui, industrial-brutalist-ui, gpt-taste,
   stitch-design-taste, redesign-existing-projects
4. **Image generation** (4) — brandkit, imagegen-frontend-web, imagegen-frontend-mobile,
   image-to-code
5. **Output control** (1) — full-output-enforcement

## Decisions so far

- [Stack = Astro](#) — static-site generator; scales to 35+ pages with a shared layout
  and a data-driven route. (user choice, this session)
- [Page shape = info panel + themed visual](#) — one honest look per skill, no external
  image assets required. (user choice)
- [Menu = grouped by family](#) — browse by purpose, since the site's job is skill
  selection. (user choice)
- [Page template](#T1) — resolved by prototype; info panel + themed visual + grouped nav.
- [Every skill gets a bespoke visual](#T3) — not just design/image-gen; all 35 authored by
  hand in `visuals/skills/<slug>.astro`, auto-registered by the `[slug]` route. (user choice)
- [Hosting = GitHub Pages via Actions](#T5) — `.github/workflows/deploy-skills-site.yml`
  builds `docs/skills-site/` with `SITE_BASE=/tasteskill` and deploys. Repo setting
  Pages → Source → "GitHub Actions" must be enabled once by hand. (user choice)

## Tickets

Frontier (takeable now):

- **T1 — Page template & visual archetypes** (`prototype`, HITL) — Nail the shared page
  template and the two visual archetypes (design vs process) by building the home/menu +
  two real pages. Blocks every page-generation ticket. → **prototype built this session,
  awaiting user reaction.**

Blocked on T1:

- **T2 — Skill content manifest** (`research`, AFK) — Fill `skills.ts` with the copy for
  all 35 skills (tagline, what/when, inputs→outputs, example prompt) sourced from each
  `SKILL.md`. Partially seeded in the prototype (menu-level taglines for all 35; full
  copy for the 2 archetype skills).
- **T3 — Generate the remaining 33 pages** (`task`) — Once T1's template is accepted and
  T2's manifest is filled, render all pages via the dynamic route; add per-skill visuals
  where a live aesthetic sample adds value.
- **T4 — Site chrome** (`task`) — landing copy, search/filter, "which skill do I need?"
  chooser, family index pages, responsive nav polish.
- **T5 — Publish path** (`task`) — decide where it's hosted (GitHub Pages from
  `docs/skills-site/`, or Claude Artifact export) and wire the build.

## Not yet specified (fog)

- Whether every skill needs a bespoke live visual, or a shared diagram style suffices for
  the ~22 non-visual skills (clears once T1 reaction lands).
- Whether design-skill pages should embed the *actual* skill output examples vs a curated
  in-aesthetic sample authored by hand.
- Search / "skill chooser" UX (a guided "I want to… → use X" flow) — shape unknown until
  the static catalog exists.

## Out of scope

- Running the skills to auto-generate live outputs at build time (skills need an agent;
  the site is static). Visuals are authored, not skill-executed.
- Editing the skills themselves — this effort only *documents* them.
