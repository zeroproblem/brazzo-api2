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
           'apibrazzo.zeroproblem.com.br'  // 👈 add your domain here
           'brazzodev.zeroproblem.com.br'  // 👈 add your domain here
          ],
    port: 1337, // optional, only if you run the admin separately
  },
    },
  });
};
