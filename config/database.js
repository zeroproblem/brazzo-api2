// config/database.js

module.exports = ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      //host: env('DATABASE_HOST', 'brazzo-connection_postgres'),
      host: env('DATABASE_HOST', 'localhost'),
      port: env.int('DATABASE_PORT', 5432),
      //database: env('DATABASE_NAME', 'brazzodb'),
      //user: env('DATABASE_USERNAME', 'brazzoadmin'),
      //password: env('DATABASE_PASSWORD', 'Br4zzoDB#'),
      database: env('DATABASE_NAME'),
      user: env('DATABASE_USERNAME'),
      password: env('DATABASE_PASSWORD'),
      
      ssl: env.bool('DATABASE_SSL', false) && {
        rejectUnauthorized: env.bool('DATABASE_SSL_SELF', false),
      },
    },
    debug: false,
  },
});
