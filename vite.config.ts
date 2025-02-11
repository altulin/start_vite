import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import autoprefixer from "autoprefixer";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
  },
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
      // "@": "/src",
      "@": path.resolve(__dirname, "./src"),
    },
  },
  base: "./",
});
