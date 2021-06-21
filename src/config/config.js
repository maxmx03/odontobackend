module.exports = {
  development: {
    username: process.env.BD_USERNAME,
    password: process.env.BD_PASSWORD,
    database: process.env.BD_DATABASE,
    host: process.env.BD_HOST,
    dialect: process.env.BD_DIALECT,
  },
  test: {
    username: 'root',
    password: 'o5o37prb',
    database: 'odontoeasy_test',
    host: 'localhost',
    dialect: 'postgres',
  },
  production: {
    username: 'root',
    password: null,
    database: 'database_production',
    host: '127.0.0.1',
    dialect: 'postgres',
  },
};
