import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  site: "https://strayproject.github.io",
  output: "static",
  build: {
    format: "file",
  },
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
});
