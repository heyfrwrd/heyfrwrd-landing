// @ts-check
import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";
import vercel from "@astrojs/vercel";

// https://astro.build/config
export default defineConfig({
  output: "server",
  adapter: vercel(),
  site: "https://heyfrwrd.me/",
  integrations: [react(), tailwind()],
  vite: {
    ssr: {
      noExternal: ["canvas-confetti"],
    },
  },
});
