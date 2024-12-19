import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000, // Development server port
  },
  build: {
    outDir: 'dist', // Production build directory
    sourcemap: true, // Helps with debugging in production
  },
})
