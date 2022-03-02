// Update with your config settings.

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
 module.exports = {

  development: {
    client: 'pg',
    connection: {
      database:  "clucks",
      username: 'minkang',
      password: 'fungee99'
    },
    migrations: {
      tableName: "knex_migrations",
      directory: "./db/migrations"
    }
  }

};
