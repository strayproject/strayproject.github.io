import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://strayproject.github.io",
  output: "static",
  build: {
    format: "file",
  },
  integrations: [sitemap()],
});
