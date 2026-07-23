// Content for the SaaS showcase landing page. One data source; the markup is
// fixed and only the theme (a design skill's aesthetic) changes.

export interface Theme {
  id: string;
  name: string; // the skill this skin embodies
  blurb: string;
}

// Order = order in the theme switcher.
export const themes: Theme[] = [
  { id: "default", name: "Clean SaaS", blurb: "A neutral modern-SaaS baseline." },
  { id: "minimalist", name: "minimalist-ui", blurb: "Warm monochrome, flat bento, editorial restraint." },
  { id: "brutalist", name: "industrial-brutalist-ui", blurb: "Swiss print × terminal, rigid grid, amber accent." },
  { id: "highend", name: "high-end-visual-design", blurb: "Agency-grade: serif display, soft shadow, expensive spacing." },
  { id: "editorial", name: "gpt-taste", blurb: "Giant editorial type, gapless bento, motion energy." },
  { id: "designtaste", name: "design-taste-frontend", blurb: "Crafted modern landing — Space Grotesk, emerald signature, tactile." },
];

export const brand = {
  name: "Cascade",
  tagline: "Automation infrastructure for modern teams.",
};

export const nav = {
  links: ["Product", "Features", "Customers", "Pricing", "Docs"],
  signIn: "Sign in",
  cta: "Start free",
};

export const hero = {
  eyebrow: "Workflow automation, minus the busywork",
  title: "Ship the work that ships itself.",
  sub: "Cascade turns your team's repetitive processes into reliable automations — triggered by events, run in the cloud, and observable end to end.",
  primary: "Start free",
  secondary: "Book a demo",
  note: "No credit card · 14-day Pro trial",
};

export const logos = {
  label: "Trusted by teams at",
  // marks are drawn inline in the component; names drive the wordmarks
  companies: ["Northwind", "Vertex", "Lumen", "Halcyon", "Meridian", "Orbit"],
};

export const features = {
  eyebrow: "Why Cascade",
  title: "Everything you need to automate with confidence.",
  sub: "The building blocks, the guardrails, and the visibility — in one platform.",
  items: [
    { icon: "flow", title: "Visual builder", text: "Compose flows from 200+ blocks with a drag-and-drop canvas — no glue code to maintain." },
    { icon: "bolt", title: "Event triggers", text: "Kick off runs from webhooks, schedules, or events in the apps your team already uses." },
    { icon: "scope", title: "Full observability", text: "Trace every run, replay failures, and alert on anomalies before they page anyone." },
    { icon: "shield", title: "Guardrails by default", text: "Approvals, role-based access, and immutable audit logs on every workflow." },
    { icon: "plug", title: "Native integrations", text: "First-class connectors for the tools you rely on — plus a typed SDK for the rest." },
    { icon: "scale", title: "Scales with you", text: "From your first flow to ten thousand a minute, on the same predictable latency." },
  ],
};

export const cta = {
  title: "Automate your first workflow in minutes.",
  sub: "Join 4,000+ teams shipping faster with Cascade.",
  primary: "Start free",
  secondary: "Talk to sales",
};

export const footer = {
  cols: [
    { head: "Product", links: ["Features", "Integrations", "Pricing", "Changelog", "Status"] },
    { head: "Company", links: ["About", "Careers", "Blog", "Customers", "Contact"] },
    { head: "Resources", links: ["Docs", "API reference", "Guides", "Community", "Support"] },
    { head: "Legal", links: ["Privacy", "Terms", "Security", "DPA"] },
  ],
  copyright: "© 2026 Cascade, Inc.",
};
