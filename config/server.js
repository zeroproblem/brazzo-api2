module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  //host: env('HOST', 'https://apibrazzo.zeroproblem.com.br'),
  port: env.int('PORT', 1337),
  url: env('PUBLIC_URL', undefined),
  proxy: { koa: true },
  app: {
    keys: env.array('APP_KEYS'),
  },
  webhooks: {
    populateRelations: env.bool('WEBHOOKS_POPULATE_RELATIONS', false),
  },
});
