import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/characters': {
        target: 'https://api-hunger.onrender.com',
        changeOrigin: true,
        secure: false,
    }
  }
  }
})
