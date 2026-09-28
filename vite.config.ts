import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import { vitePluginGemini } from './server/vitePluginGemini.ts'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), vitePluginGemini()],
})

