const { mergeConfig } = require('vite');

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
    //'dev.zeroproblem.com.br'         // optional dev domain
  );
}

module.exports = (config) => {
  // Important: always return the modified config
  return mergeConfig(config, {
    resolve: {
      alias: {
        '@': '/src',
      },
     
server: {
    host: hostname,
    port: 1337,
    allowedHosts: baseAllowedHosts,
  },
  preview: {
    allowedHosts: baseAllowedHosts,
  },

     
    },
  });
};
