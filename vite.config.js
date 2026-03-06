import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],
  // Añadimos la base con el nombre exacto de tu repositorio en GitHub
  base: '/vite-project/',
})
