import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";
import { defineConfig } from "astro/config";
import remarkGfm from "remark-gfm";

export default defineConfig({
  markdown: {
    extendDefaultPlugins: true,
    remarkPlugins: [remarkGfm],
    drafts: true,
  },
  integrations: [react(), tailwind()],
});
