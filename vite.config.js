import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  preview: {
    host: '0.0.0.0',
    port: process.env.PORT || 8080,
    allowedHosts: [
      'task-manager-fe-production-6955.up.railway.app',
      'localhost'
    ]
  }
})