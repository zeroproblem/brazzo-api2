// vite.config.js
const { mergeConfig } = require('vite');
const react = require('@vitejs/plugin-react');

module.exports = (config) => {
  const envHosts = (process.env.ALLOWED_HOSTS || '')
    .split(',')
    .map((s) => s.trim())
    .filter(Boolean);

  const allowed = [
    'localhost',
    '127.0.0.1',
    'brazzodev.zeroproblem.com.br',   // dev
    //'apibrazzo.zeroproblem.com.br',   // prod
    ...envHosts,
  ];

  return mergeConfig(config, {
    plugins: [react()],
    server: {
      host: '0.0.0.0',
      allowedHosts: allowed,
      port: 1337, // optional
    },
    preview: {
      allowedHosts: allowed,
    },
    resolve: {
      alias: { '@': '/src' },
    },
  });
};
