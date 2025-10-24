// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Detect environment
const env = process.env.NODE_ENV || 'development';
const hostname = process.env.HOST || '0.0.0.0';

const extraHosts = (process.env.ALLOWED_HOSTS || '').split(',').filter(Boolean);
const allowedHosts = ['localhost', '127.0.0.1', ...extraHosts];

// Core allowlist (always permitted)
const baseAllowedHosts = ['localhost', '127.0.0.1'];

// Extend allowlist dynamically for deployed environments
if (env === 'production' || env === 'development') {
  baseAllowedHosts.push(
    'apibrazzo.zeroproblem.com.br',  // production domain
    'brazzodev.zeroproblem.com.br',    // optional staging
  );
}

export default defineConfig({
  plugins: [react()],
  server: {
    host: hostname,
    port: 1337,
    allowedHosts: baseAllowedHosts,
  },
  preview: {
    allowedHosts: baseAllowedHosts,
  },
});
