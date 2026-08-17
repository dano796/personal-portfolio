import { copyFileSync } from "node:fs";
import { resolve } from "node:path";
import { defineConfig, type Plugin } from "vite";
import react from "@vitejs/plugin-react-swc";

/**
 * GitHub Pages has no SPA rewrite: a direct hit or refresh on /work or
 * /projects returns its 404 page instead of index.html. Serving a copy of the
 * built index.html as 404.html lets react-router pick the route up client-side.
 */
const spaFallback = (): Plugin => ({
  name: "spa-404-fallback",
  apply: "build",
  closeBundle() {
    const dist = resolve(process.cwd(), "dist");
    copyFileSync(resolve(dist, "index.html"), resolve(dist, "404.html"));
  },
});

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), spaFallback()],
  base: "/",
});
