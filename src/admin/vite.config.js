// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Strapi Admin dev config
export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0',
    allowedHosts: [
      'localhost',
      '127.0.0.1',
      'apibrazzo.zeroproblem.com.br'  // 👈 add your domain here
    ],
    port: 1337, // optional, only if you run the admin separately
  },
});
