import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import path from 'path';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),tailwindcss()],
  resolve: {
    alias: {
      '@':path.resolve(__dirname, './src'),
      '@components':path.resolve(__dirname, './src/components'),
      '@assets':path.resolve(__dirname, './src/assets'),
      '@test':path.resolve(__dirname, './src/test'),
    },
  },
});
