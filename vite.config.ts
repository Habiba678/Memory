import { defineConfig } from "vite";

export default defineConfig({
  base: "/Memory/dist/",
  build: {
    assetsInlineLimit: 0,
  },
});