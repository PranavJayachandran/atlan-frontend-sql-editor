import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import dsv from '@rollup/plugin-dsv'
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig({
  plugins: [react(), dsv(), VitePWA({ registerType: 'autoUpdate' })],
})

