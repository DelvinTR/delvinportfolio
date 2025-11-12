import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  base: "/portfolio/", // <- IMPORTANT pour GitHub Pages
  plugins: [
    react(),
    tailwindcss()
  ],
  build: {
    outDir: 'build'  // <-- change 'dist' en 'build' si tu veux garder ton script
  }
})