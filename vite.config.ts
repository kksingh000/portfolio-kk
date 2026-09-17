import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: "dist",
    emptyOutDir: true,
    // three / fiber / drei are deliberately left to Rollup's automatic async
    // chunking: naming them in `manualChunks` promotes the chunk into the entry
    // graph, which makes Vite emit a modulepreload for it — and then the
    // reduced-motion / no-WebGL / narrow path downloads ~970 kB it never runs.
    chunkSizeWarningLimit: 1200,
  },
});
