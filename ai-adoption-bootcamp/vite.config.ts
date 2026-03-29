import { resolve } from 'path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: process.env.NODE_ENV === 'production' ? '/curriculum/ai-adoption-bootcamp/' : '/',
  build: {
    rollupOptions: {
      input: {
        slides: resolve(__dirname, 'slides.html'),
      },
    },
  },
});
