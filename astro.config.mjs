// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import sitemap from "@astrojs/sitemap";

// DGTL House — Google Ad Grant strategy landing (grant-strategy-2).
// Scaffolded from nonprofit-next: static output, Tailwind v4 via the Vite
// plugin, stylesheet inlined into the page.
//
// `site` drives canonical / OG absolute URLs, robots.txt and the sitemap.
// The production domain isn't fixed yet, so it comes from SITE_URL — set it in
// the Vercel project once the domain is known. The fallback is a placeholder,
// not a guess at the real domain.
const site = process.env.SITE_URL ?? "https://grant-strategy-2.example.com";

export default defineConfig({
  site,
  integrations: [
    sitemap({
      serialize(item) {
        item.lastmod = new Date().toISOString();
        return item;
      },
    }),
  ],
  // Single landing page → inline the stylesheet so first paint needs no extra
  // render-blocking CSS round-trip.
  build: {
    inlineStylesheets: "always",
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
