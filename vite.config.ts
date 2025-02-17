import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import autoprefixer from "autoprefixer";
import svgr from "vite-plugin-svgr";
import { robots } from "vite-plugin-robots";
import createSvgSpritePlugin from "vite-plugin-svg-sprite";

export default defineConfig({
  plugins: [
    react({
      include: "**/*.tsx",
    }),
    svgr(),
    robots({}),
    createSvgSpritePlugin({
      symbolId: "icon-[name]-[hash]",
      include: ["**/sprite/**.svg"],
    }),
  ],

  css: {
    postcss: {
      plugins: [
        autoprefixer({}), // add options if needed
      ],
    },
    preprocessorOptions: {
      scss: {
        api: "modern-compiler", // or "modern"
      },
    },
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  // base: "./",
});
