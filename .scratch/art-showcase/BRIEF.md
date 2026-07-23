# Showcase #2 — Prompt definition: "Aquarelă" art-collective site

## The product (fictional, to avoid impersonating any real org)
**Aquarelă** — a Cluj-Napoca art collective that promotes local artists, many of
whom face social exclusion, disability, or isolation. Image-first, painterly, warm.
(Inspired by the *concept* of vizibil.art's watercolour Instagram feed — NOT a copy:
original name, original branding, fictional artists, and all artwork is generated
procedurally, not scraped.)

## Goal of the showcase
A second re-skinnable demo in the Skills Atlas — same mechanism as the SaaS showcase
(one design, a live skin switcher, shareable `?skin=`), but a **different, image-led,
multi-page site** so the design skills can be judged on a gallery/portfolio product.

## Pages (routes under `/aquarela/`)
1. **Home** — a painterly hero, a featured-works collage, featured artists, an events teaser.
2. **Gallery** — every available work in a grid with **filters** (by medium and by theme/tag).
   Each card = the artwork + a round **artist avatar** with the name/alias beneath it.
3. **Artist** (`/aquarela/artist/[slug]`) — reached by clicking an artist's name. Bio,
   a **Support** action, and a grid of that artist's other works.
4. **Artwork** (`/aquarela/art/[slug]`) — reached by clicking a work. Full-bleed view of
   the piece, medium/size/price, the artist strip, and a single **Purchase** button.
5. **Blog** — a list of posts (events + interviews) with excerpts and tags.

## Interactions
- Art card → artwork page. Artist name/avatar → artist page. Purchase = one clear button.
- The chosen skin persists across page navigations (localStorage) and is shareable (`?skin=`).

## Art direction (the creative ask)
Not a standard website. Painting-inspired: **watercolour & pastel**, paper grain,
soft colour blooms, hand-lettered artist names, generous negative space, imperfect edges.
The **artwork itself is generated** as layered SVG watercolour (turbulence-displaced
translucent blobs) so every piece is unique, self-contained (no external images), and
on-theme. Avatars are watercolour blooms with initials.

## Skins (the "batch" — painterly variants, switchable live)
1. **watercolour** (default) — soft wet pastels, paper, bleeding edges.
2. **gouache** — opaque matte pastel blocks, flatter, poster-like.
3. **ink-wash** — near-monochrome sumi-e; colour reserved for accents.
4. **risograph** — grainy duotone pastel print, slight mis-registration.

## Build shape (mirrors the SaaS showcase)
- One content source (`src/data/art.ts`: artists, artworks, posts).
- Fixed markup per page with semantic `aq-` classes; a shared `WatercolorArt` component.
- Skins are pure CSS scoped under `.theme-<id>`, each covering the whole `aq-` contract.
- A shared layout with the skin-switcher bar on every page.
- Linked from the Skills Atlas sidebar + home.

## Done when
Build is green; all five page types render; gallery filters work; skin switch persists
across pages and is deep-linkable; every skin styles every page; reachable from the Atlas.
