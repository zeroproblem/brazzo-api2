const { mergeConfig } = require('vite');

module.exports = (config) => {
  // Important: always return the modified config
  return mergeConfig(config, {
    resolve: {
      alias: {
        '@': '/src',
      },


server: {
    host: '0.0.0.0',
    allowedHosts: [
      'localhost',
      '127.0.0.1',
      'apibrazzo.zeroproblem.com.br',   // production
      'brazzodev.zeroproblem.com.br',     // optional staging
    ],
    // optional: customize dev port if needed
    port: 1337,
  },

preview: {
    allowedHosts: [
      'localhost',
      '127.0.0.1',
      'apibrazzo.zeroproblem.com.br',
      'brazzodev.zeroproblem.com.br',
    ],
  },

      
    },
  });
};
