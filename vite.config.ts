import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  build: {
    outDir: 'dist'  // <-- change 'dist' en 'build' si tu veux garder ton script
  },
  plugins: [
    react(),
    tailwindcss()
  ],
})