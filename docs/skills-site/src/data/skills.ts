// Single source of truth for the skills reference site.
// Menu-level fields (slug, name, family, tagline) are filled for all 35 skills.
// Full page copy is seeded here; ticket T2 finishes/verifies it against each SKILL.md.

export type FamilyId =
  | "engineering"
  | "thinking"
  | "design"
  | "imagegen"
  | "output";

export interface Family {
  id: FamilyId;
  name: string;
  blurb: string;
}

export interface Skill {
  slug: string;
  name: string;
  family: FamilyId;
  tagline: string;
  whatItDoes: string;
  whenToUse: string;
  inputs: string;
  outputs: string;
  example: string;
  /** true = human-in-the-loop, false/undefined = can run AFK */
  hitl?: boolean;
  /** key to a bespoke live visual component; falls back to a family flow diagram */
  visual?: "minimalist-ui" | "tdd";
}

export const families: Family[] = [
  {
    id: "engineering",
    name: "Engineering workflow",
    blurb: "Research → plan → build → review. The spine of a feature.",
  },
  {
    id: "thinking",
    name: "Thinking & productivity",
    blurb: "Sharpen ideas, hand off context, learn, and write skills.",
  },
  {
    id: "design",
    name: "Design systems / UI",
    blurb: "Opinionated, anti-slop aesthetics for real interfaces.",
  },
  {
    id: "imagegen",
    name: "Image generation",
    blurb: "Premium visual references — brand boards, comps, mockups.",
  },
  {
    id: "output",
    name: "Output control",
    blurb: "Guardrails on how the model itself responds.",
  },
];

export const skills: Skill[] = [
  // ── Engineering workflow ──────────────────────────────────────────────
  {
    slug: "ask-matt",
    name: "ask-matt",
    family: "engineering",
    tagline: "Router — which skill or flow fits your situation.",
    whatItDoes:
      "A router over every skill in this repo. Describe your situation and it points you at the skill or sequence of skills that fits.",
    whenToUse: "You know you have work to do but not which skill to reach for.",
    inputs: "A description of your situation or goal.",
    outputs: "A recommended skill (or ordered flow) with a one-line why.",
    example: "/ask-matt I have a vague feature idea and a messy codebase.",
    hitl: true,
  },
  {
    slug: "research",
    name: "research",
    family: "engineering",
    tagline: "Investigate primary sources, capture findings as Markdown.",
    whatItDoes:
      "Spins up a background agent that investigates a question against primary sources (official docs, source, specs) and writes cited findings to a Markdown file in the repo.",
    whenToUse: "A decision waits on facts that live outside the working directory.",
    inputs: "A focused question and where the answer might live.",
    outputs: "A single cited Markdown findings file, saved to the repo's notes convention.",
    example: "/research How does Astro's content collections API type frontmatter?",
  },
  {
    slug: "wayfinder",
    name: "wayfinder",
    family: "engineering",
    tagline: "Chart big, foggy work as a map of decision tickets.",
    whatItDoes:
      "Plans a chunk of work too big for one session as a shared map of decision tickets on the issue tracker, then resolves them one at a time until the route is clear.",
    whenToUse: "The destination is fogged and the work exceeds a single agent session.",
    inputs: "A loose idea or large goal.",
    outputs: "A map issue + child decision tickets with blocking edges.",
    example: "/wayfinder Build a reference site for all our skills.",
    hitl: true,
  },
  {
    slug: "to-spec",
    name: "to-spec",
    family: "engineering",
    tagline: "Turn a conversation into a spec on your tracker.",
    whatItDoes:
      "Synthesises the current conversation into a written spec and publishes it to the configured issue tracker — no interview, just capture.",
    whenToUse: "You've already talked it through and want the decision written down.",
    inputs: "The current conversation.",
    outputs: "A spec issue on the tracker.",
    example: "/to-spec",
  },
  {
    slug: "to-tickets",
    name: "to-tickets",
    family: "engineering",
    tagline: "Break a plan into tracer-bullet tickets with blocking edges.",
    whatItDoes:
      "Splits a plan, spec, or conversation into tracer-bullet tickets, each declaring what blocks it, and publishes them to the tracker.",
    whenToUse: "A plan exists and needs to become executable, ordered work.",
    inputs: "A plan, spec, or conversation.",
    outputs: "One ticket per slice, with blocking links.",
    example: "/to-tickets",
  },
  {
    slug: "implement",
    name: "implement",
    family: "engineering",
    tagline: "Build from a spec or a set of tickets.",
    whatItDoes:
      "Executes a piece of work described by a spec or tickets, keeping to the plan and the repo's conventions.",
    whenToUse: "The plan is settled and it's time to write the code.",
    inputs: "A spec or tickets.",
    outputs: "Working, committed changes.",
    example: "/implement #42",
  },
  {
    slug: "prototype",
    name: "prototype",
    family: "engineering",
    tagline: "Throwaway prototype to answer a design question.",
    whatItDoes:
      "Builds a cheap, disposable prototype — UI or logic — to make a design question concrete enough to react to.",
    whenToUse: "\"How should it look/behave?\" is the blocking question.",
    inputs: "A design question and rough constraints.",
    outputs: "A throwaway artifact to react to (not production code).",
    example: "/prototype What should the skill page layout feel like?",
    hitl: true,
  },
  {
    slug: "diagnosing-bugs",
    name: "diagnosing-bugs",
    family: "engineering",
    tagline: "A disciplined diagnosis loop for hard bugs.",
    whatItDoes:
      "Runs a hypothesis-driven diagnosis loop for hard bugs and performance regressions, isolating the cause before touching a fix.",
    whenToUse: "Something is broken, throwing, failing, or slow and the cause is unclear.",
    inputs: "A reproduction or symptom description.",
    outputs: "A confirmed root cause and the evidence for it.",
    example: "/diagnose The build hangs on the [slug] route.",
    hitl: true,
  },
  {
    slug: "tdd",
    name: "tdd",
    family: "engineering",
    tagline: "Red → green → refactor, test-first.",
    whatItDoes:
      "Drives development test-first: write a failing test, make it pass with the simplest change, then refactor — favouring integration tests over mocks.",
    whenToUse: "You want a feature or fix built with tests leading the design.",
    inputs: "A behaviour to build or a bug to reproduce.",
    outputs: "Tests + implementation, committed in red-green-refactor steps.",
    example: "/tdd Add slug validation to the skills manifest loader.",
    visual: "tdd",
  },
  {
    slug: "code-review",
    name: "code-review",
    family: "engineering",
    tagline: "Review changes on two axes: Standards + Spec.",
    whatItDoes:
      "Reviews changes since a fixed point along two parallel axes — does it follow the repo's coding standards, and does it match what the originating issue asked for — and reports them side by side.",
    whenToUse: "Reviewing a branch, a PR, or work-in-progress before it lands.",
    inputs: "A diff range (commit, branch, tag, or merge-base).",
    outputs: "A side-by-side Standards and Spec review.",
    example: "/code-review since main",
  },
  {
    slug: "codebase-design",
    name: "codebase-design",
    family: "engineering",
    tagline: "Shared vocabulary for designing deep modules.",
    whatItDoes:
      "Provides the vocabulary and moves for designing deep modules — where a seam goes, how to deepen an interface, how to make code testable and AI-navigable.",
    whenToUse: "Designing or improving a module's interface or boundaries.",
    inputs: "A module or interface under design.",
    outputs: "A deeper interface and the reasoning behind it.",
    example: "/codebase-design Rework the manifest loader's public API.",
    hitl: true,
  },
  {
    slug: "improve-codebase-architecture",
    name: "improve-codebase-architecture",
    family: "engineering",
    tagline: "Find deepening opportunities → HTML report → grill.",
    whatItDoes:
      "Scans a codebase for module-deepening opportunities, presents them as a visual HTML report, then grills through whichever one you pick.",
    whenToUse: "You want a birds-eye read on where the architecture is shallow.",
    inputs: "A codebase or subtree.",
    outputs: "An HTML report of opportunities + a worked-through choice.",
    example: "/improve-codebase-architecture src/",
    hitl: true,
  },
  {
    slug: "domain-modeling",
    name: "domain-modeling",
    family: "engineering",
    tagline: "Pin down ubiquitous language + record ADRs.",
    whatItDoes:
      "Builds and sharpens the project's domain model — a ubiquitous language glossary and architectural decision records — created lazily as terms and decisions resolve.",
    whenToUse: "Terminology is drifting or a decision needs recording.",
    inputs: "A domain term or decision under discussion.",
    outputs: "Entries in CONTEXT.md and docs/adr/.",
    example: "/domain-modeling Define what we mean by \"skill family\".",
    hitl: true,
  },
  {
    slug: "triage",
    name: "triage",
    family: "engineering",
    tagline: "Move issues/PRs through a triage state machine.",
    whatItDoes:
      "Runs issues and external PRs through a state machine of triage roles — categorise, verify, grill if needed, and write agent-ready briefs.",
    whenToUse: "The issue queue needs sorting into actionable work.",
    inputs: "Open issues / external PRs.",
    outputs: "Labelled issues and agent-ready briefs.",
    example: "/triage",
    hitl: true,
  },
  {
    slug: "resolving-merge-conflicts",
    name: "resolving-merge-conflicts",
    family: "engineering",
    tagline: "Work through an in-progress merge/rebase conflict.",
    whatItDoes:
      "Guides resolution of an in-progress git merge or rebase conflict, reconciling both sides without losing intent.",
    whenToUse: "A merge or rebase has stopped with conflicts.",
    inputs: "A repo mid-conflict.",
    outputs: "A resolved, consistent tree.",
    example: "/resolving-merge-conflicts",
  },
  {
    slug: "setup-matt-pocock-skills",
    name: "setup-matt-pocock-skills",
    family: "engineering",
    tagline: "Configure the repo for the engineering skills.",
    whatItDoes:
      "One-time repo scaffolding for the engineering skills: picks the issue tracker, triage label vocabulary, and domain-doc layout, then writes them into CLAUDE.md and docs/agents/.",
    whenToUse: "First use of these skills in a repo.",
    inputs: "The repo's current state + your tracker/label/doc choices.",
    outputs: "docs/agents/*.md and an Agent skills block in CLAUDE.md.",
    example: "/setup-matt-pocock-skills",
    hitl: true,
  },

  // ── Thinking & productivity ───────────────────────────────────────────
  {
    slug: "grill-me",
    name: "grill-me",
    family: "thinking",
    tagline: "A relentless interview to sharpen a plan.",
    whatItDoes:
      "Interviews you hard about a plan or design, one pointed question at a time, to surface gaps before you build.",
    whenToUse: "You want a plan stress-tested before committing.",
    inputs: "A plan, decision, or idea.",
    outputs: "A sharper plan and a list of exposed assumptions.",
    example: "/grill-me My rollout plan for the new nav.",
    hitl: true,
  },
  {
    slug: "grilling",
    name: "grilling",
    family: "thinking",
    tagline: "Stress-test your thinking, one question at a time.",
    whatItDoes:
      "The core grilling loop other skills reuse: relentless, single-threaded questioning that pressure-tests an idea.",
    whenToUse: "Any 'grill' trigger — you want your reasoning challenged.",
    inputs: "An idea or decision.",
    outputs: "Exposed weak points and a firmer position.",
    example: "/grilling Should the site be one page or many?",
    hitl: true,
  },
  {
    slug: "grill-with-docs",
    name: "grill-with-docs",
    family: "thinking",
    tagline: "Grill + produce ADRs and a glossary as you go.",
    whatItDoes:
      "The grilling interview, but it also captures the decisions and terms it surfaces into ADRs and a glossary as the conversation goes.",
    whenToUse: "You want the stress-test to leave durable docs behind.",
    inputs: "An idea or decision.",
    outputs: "A sharper plan + ADRs and glossary entries.",
    example: "/grill-with-docs Our caching strategy.",
    hitl: true,
  },
  {
    slug: "handoff",
    name: "handoff",
    family: "thinking",
    tagline: "Compact the conversation into a handoff doc.",
    whatItDoes:
      "Compresses the current conversation into a handoff document another agent (or you, later) can pick up cold.",
    whenToUse: "Context is getting long or work is changing hands.",
    inputs: "The current conversation.",
    outputs: "A self-contained handoff document.",
    example: "/handoff",
  },
  {
    slug: "teach",
    name: "teach",
    family: "thinking",
    tagline: "Teach a concept within this workspace.",
    whatItDoes:
      "Teaches you a new skill or concept grounded in this workspace, tracking a mission, glossary, and learning record.",
    whenToUse: "You want to learn something using your own repo as the textbook.",
    inputs: "A topic and your current level.",
    outputs: "A guided lesson + learning-record artifacts.",
    example: "/teach How Astro's island architecture works, using this site.",
    hitl: true,
  },
  {
    slug: "writing-great-skills",
    name: "writing-great-skills",
    family: "thinking",
    tagline: "Principles + vocabulary for writing skills well.",
    whatItDoes:
      "A reference for authoring and editing skills — the vocabulary and principles that make a skill predictable and well-triggered.",
    whenToUse: "You're writing or refining a skill of your own.",
    inputs: "A draft skill or an idea for one.",
    outputs: "A tighter SKILL.md and clearer trigger description.",
    example: "/writing-great-skills Review my new deploy skill.",
    hitl: true,
  },

  // ── Design systems / UI ───────────────────────────────────────────────
  {
    slug: "design-taste-frontend",
    name: "design-taste-frontend",
    family: "design",
    tagline: "Anti-slop landing pages, portfolios, redesigns.",
    whatItDoes:
      "Reads the brief, infers the right design direction, and ships interfaces that don't look templated — real design systems, audit-first on redesigns, strict pre-flight check.",
    whenToUse: "You want a frontend that doesn't read as generic AI output.",
    inputs: "A brief or an existing page to redesign.",
    outputs: "A designed, non-templated interface.",
    example: "/design-taste-frontend A portfolio for a type designer.",
    hitl: true,
  },
  {
    slug: "design-taste-frontend-v1",
    name: "design-taste-frontend-v1",
    family: "design",
    tagline: "Original v1, for exact backward compatibility.",
    whatItDoes:
      "The original v1 taste-skill, preserved unchanged for projects that depend on its exact behaviour. The v2 rewrite is the current default.",
    whenToUse: "Only when you need v1's exact behaviour.",
    inputs: "A brief.",
    outputs: "A designed interface (v1 behaviour).",
    example: "/design-taste-frontend-v1 A landing page.",
    hitl: true,
  },
  {
    slug: "high-end-visual-design",
    name: "high-end-visual-design",
    family: "design",
    tagline: "Design like a high-end agency; block cheap defaults.",
    whatItDoes:
      "Defines the exact fonts, spacing, shadows, card structures, and animations that make a site feel expensive — and blocks the common defaults that make AI designs look cheap.",
    whenToUse: "You want an agency-grade finish, not stock components.",
    inputs: "A page or component to elevate.",
    outputs: "A premium visual treatment with explicit rules.",
    example: "/high-end-visual-design Make this pricing section feel premium.",
    hitl: true,
  },
  {
    slug: "minimalist-ui",
    name: "minimalist-ui",
    family: "design",
    tagline: "Clean editorial UI — warm monochrome, flat bento.",
    whatItDoes:
      "Produces clean, editorial interfaces: a warm monochrome palette, strong typographic contrast, flat bento grids, and muted pastels. No gradients, no heavy shadows.",
    whenToUse: "You want calm, print-inspired, restrained UI.",
    inputs: "A page or component brief.",
    outputs: "A flat, editorial, monochrome interface.",
    example: "/minimalist-ui A dashboard home for a reading app.",
    hitl: true,
    visual: "minimalist-ui",
  },
  {
    slug: "industrial-brutalist-ui",
    name: "industrial-brutalist-ui",
    family: "design",
    tagline: "Swiss print × military terminal — declassified blueprints.",
    whatItDoes:
      "Raw mechanical interfaces fusing Swiss typographic print with military terminal aesthetics: rigid grids, extreme type-scale contrast, utilitarian colour, analog degradation.",
    whenToUse: "Data-heavy dashboards or editorial sites that should feel like blueprints.",
    inputs: "A page or component brief.",
    outputs: "A brutalist, grid-locked interface.",
    example: "/industrial-brutalist-ui A telemetry dashboard.",
    hitl: true,
  },
  {
    slug: "gpt-taste",
    name: "gpt-taste",
    family: "design",
    tagline: "GSAP motion + editorial type, AIDA structure.",
    whatItDoes:
      "An elite UX/UI + GSAP motion approach: randomised layout variance, strict AIDA page structure, wide editorial typography, gapless bento grids, and scroll-driven pinning/stacking/scrubbing.",
    whenToUse: "You want a motion-rich, editorial marketing page.",
    inputs: "A marketing brief.",
    outputs: "A GSAP-animated, editorially-typeset page.",
    example: "/gpt-taste A launch page for a dev tool.",
    hitl: true,
  },
  {
    slug: "stitch-design-taste",
    name: "stitch-design-taste",
    family: "design",
    tagline: "DESIGN.md system files for Google Stitch.",
    whatItDoes:
      "Generates agent-friendly DESIGN.md files that enforce premium, anti-generic UI standards — strict typography, calibrated colour, asymmetric layouts, and perpetual micro-motion.",
    whenToUse: "You're driving Google Stitch and need a design system spec.",
    inputs: "A product brief.",
    outputs: "A DESIGN.md design system file.",
    example: "/stitch-design-taste A fintech onboarding flow.",
    hitl: true,
  },
  {
    slug: "redesign-existing-projects",
    name: "redesign-existing-projects",
    family: "design",
    tagline: "Audit + upgrade existing sites to premium.",
    whatItDoes:
      "Audits an existing site or app, identifies generic AI patterns, and applies high-end design standards without breaking functionality — any framework or vanilla CSS.",
    whenToUse: "You have a working but generic-looking product to elevate.",
    inputs: "An existing codebase/site.",
    outputs: "An upgraded design, functionality intact.",
    example: "/redesign-existing-projects Upgrade our marketing site.",
    hitl: true,
  },

  // ── Image generation ──────────────────────────────────────────────────
  {
    slug: "brandkit",
    name: "brandkit",
    family: "imagegen",
    tagline: "Brand-guideline boards, logo systems, identity decks.",
    whatItDoes:
      "Generates high-end brand-guideline boards, logo systems, identity decks, and visual-world presentations across many brand archetypes (luxury, dark-tech, editorial, gaming, …).",
    whenToUse: "You need a polished brand identity board or deck.",
    inputs: "A brand brief and archetype.",
    outputs: "Brand board / identity images.",
    example: "/brandkit A dark-tech security startup identity.",
    hitl: true,
  },
  {
    slug: "imagegen-frontend-web",
    name: "imagegen-frontend-web",
    family: "imagegen",
    tagline: "One premium reference image per web section.",
    whatItDoes:
      "Generates premium, conversion-aware website design references — one separate horizontal image for every section, with composition and hero-scale variety and a single consistent palette.",
    whenToUse: "You want section-by-section comps a developer can rebuild.",
    inputs: "A landing-page brief and section list.",
    outputs: "One reference image per section.",
    example: "/imagegen-frontend-web An 8-section SaaS landing page.",
    hitl: true,
  },
  {
    slug: "imagegen-frontend-mobile",
    name: "imagegen-frontend-mobile",
    family: "imagegen",
    tagline: "App-native mobile screen concepts in phone mockups.",
    whatItDoes:
      "Generates premium, app-native mobile screen concepts and flows inside subtle phone mockups — clean hierarchy, readable text, strong multi-screen consistency. Images only, no code.",
    whenToUse: "You need mobile screen concepts to align on before building.",
    inputs: "A mobile product brief and screen list.",
    outputs: "Mocked-up mobile screen images.",
    example: "/imagegen-frontend-mobile A meditation app onboarding flow.",
    hitl: true,
  },
  {
    slug: "image-to-code",
    name: "image-to-code",
    family: "imagegen",
    tagline: "Generate design images, then build to match them.",
    whatItDoes:
      "For visually important web tasks, first generates large, section-specific design images, deeply analyses them, then implements the site to match them as closely as possible.",
    whenToUse: "You want image-led design that becomes real code.",
    inputs: "A brief for a visually important page.",
    outputs: "Design images + a matching implementation.",
    example: "/image-to-code A bold editorial homepage.",
    hitl: true,
  },

  // ── Output control ────────────────────────────────────────────────────
  {
    slug: "full-output-enforcement",
    name: "full-output-enforcement",
    family: "output",
    tagline: "Ban placeholders; force complete, unabridged output.",
    whatItDoes:
      "Overrides the model's default truncation behaviour: bans placeholder patterns (\"// rest unchanged\"), enforces complete code generation, and handles token-limit splits cleanly.",
    whenToUse: "A task needs exhaustive, unabridged output with nothing elided.",
    inputs: "Any generation task at risk of truncation.",
    outputs: "Complete, placeholder-free output.",
    example: "/full-output-enforcement Emit the whole config file.",
  },
];

export const skillsByFamily = (id: FamilyId) =>
  skills.filter((s) => s.family === id);

export const getSkill = (slug: string) => skills.find((s) => s.slug === slug);
