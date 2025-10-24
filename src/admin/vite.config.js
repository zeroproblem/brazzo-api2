const { mergeConfig } = require('vite');
const { react  } = require('@vitejs/plugin-react');

const envHosts = (process.env.ALLOWED_HOSTS || '')
  .split(',')
  .map(s => s.trim())
  .filter(Boolean);

const allowed = [
  'localhost',
  '127.0.0.1',
  'brazzodev.zeroproblem.com.br',   // dev
  'apibrazzo.zeroproblem.com.br',   // prod
  ...envHosts,
];

module.exports = (config) => {
  // Important: always return the modified config
  return mergeConfig(config, {
    resolve: {
      alias: {
        '@': '/src',
      },
plugins: [react()],

server: {
    host: '0.0.0.0',
    allowedHosts: allowed,
    // optional: customize dev port if needed
    port: 1337,
  },

preview: {
 allowedHosts: allowed,
  },

      
    },
  });
};
