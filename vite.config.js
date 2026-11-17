import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig(({ command }) => ({
  plugins: [react()],
  // Le site est publié sur https://byakkooo.github.io/Portfolio/
  base: command === 'build' ? '/Portfolio/' : '/',
}))
