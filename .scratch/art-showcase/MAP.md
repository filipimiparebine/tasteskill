# Wayfinder map — Vizibil website (build 8 ways)

`wayfinder:map` · lives in `.scratch/` per CLAUDE.md · destination + agreed spec

## Destination
Redesign the **Vizibil** (vizibil.art) art-collective website to an agreed spec,
then build it **8 ways** using the 8 design-system/UI skills. Real brand + mission;
artwork stays generated placeholders (swap for real photos later).

## Agreed spec (from the section-by-section interview)

### Global
- Brand: **Vizibil** / vizibil.art. Mission: sprijină artiști vizuali care se
  confruntă cu excludere socială, dizabilități sau izolare.
- Pages: Home · Gallery · Artist · Artwork · Blog · About.
- Skin persists across pages (localStorage) + deep-linkable (`?skin=`).

### Home
- Hero: **mission + art collage** (mission statement beside a collage of works).
- Below hero: **featured works** grid + **artists** row. (No separate mission strip,
  events teaser, or impact/support band on Home.)

### Gallery
- Layout: **editorial rows** (fewer, larger works per row, gallery-wall feel).
- Filters: **Artist** + **Price range**.
- Cards: **minimal** — image only; title/artist appear on hover.

### Artist
- Lead with **their works first** (big grid); bio below.
- Support actions: **Buy their works · Donate/tip · Commission**.

### Artwork (single piece)
- Layout: **immersive image + overlay** (piece fills view; details in a floating panel).
- Actions: **Buy + Commission + Donate**.

### Blog / Journal
- **Events-forward**: upcoming events as big cards up top, past posts/interviews below.

### About
- Emphasis: **the mission & who we help** (the cause + how it works).

## The 8 builds (skins = the 8 design/UI skills)
design-taste-frontend · design-taste-frontend-v1 · high-end-visual-design ·
minimalist-ui · industrial-brutalist-ui · gpt-taste · stitch-design-taste ·
redesign-existing-projects. Each re-skins the SAME agreed site in its own aesthetic.

## Open scoping question (confirm before build)
- Do the 8 skins each go **fully native** to their skill (a brutalist gallery, a
  high-end gallery, a minimalist gallery…), or should all 8 stay within the
  watercolour/pastel family? → asked next.
