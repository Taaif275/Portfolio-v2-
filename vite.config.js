import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
  base: "/Portfolio-v2-/",
  build: {
    outDir: "docs",        
    minify: "terser",     
    terserOptions: {
      format: {
        comments: false,   
      },
    },
  },
});
