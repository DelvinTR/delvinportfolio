import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
  build: {
    outDir: 'dist', // Vercel s’attend à ce dossier, ne change rien ici
  },
  base: './', // 🔥 important si tu utilises des chemins relatifs
})
