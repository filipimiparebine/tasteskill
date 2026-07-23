// @ts-check
import { defineConfig } from "astro/config";

// `base` is set so the static build works when served from a subpath
// (e.g. GitHub Pages at /<repo>/skills-site/). Override via SITE_BASE if needed.
export default defineConfig({
  base: process.env.SITE_BASE ?? "/",
  build: { format: "directory" },
});
