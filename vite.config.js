// vite.config.js
import { defineConfig } from 'vite';
import path from 'path';

export default defineConfig({
  root: 'src',
  build: {
    outDir: path.resolve(__dirname, 'dist'),
  },
  optimizeDeps: {
    include: ['flatpickr', 'izitoast'],
  },
  server: {
    open: '/1-timer.html',
  },
});
