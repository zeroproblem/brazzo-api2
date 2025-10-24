
export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0',
    allowedHosts: [
      'localhost',
      '127.0.0.1',
      'apibrazzo.zeroproblem.com.br',   // production
      'staging.zeroproblem.com.br',     // optional staging
      'dev.zeroproblem.com.br',         // optional dev
    ],
    // optional: customize dev port if needed
    port: 1337,
  },
  preview: {
    allowedHosts: [
      'localhost',
      '127.0.0.1',
      'apibrazzo.zeroproblem.com.br',
      'staging.zeroproblem.com.br',
      'dev.zeroproblem.com.br',
    ],
  },
});
