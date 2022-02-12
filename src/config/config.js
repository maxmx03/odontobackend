const dotenv = require('dotenv');

dotenv.config();

module.exports = {
  development: {
    username: process.env.BD_USERNAME,
    password: process.env.BD_PASSWORD,
    database: 'odontoeasy_dev',
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    dialect: process.env.BD_DIALECT,
  },
  test: {
    username: process.env.BD_USERNAME,
    password: process.env.BD_PASSWORD,
    database: 'odontoeasy_test',
    port: process.env.DB_PORT,
    host: process.env.BD_HOST,
    dialect: process.env.BD_DIALECT,
  },
  production: {
    username: process.env.BD_USERNAME,
    password: process.env.BD_PASSWORD,
    database: 'odontoeasy',
    host: process.env.BD_HOST,
    port: process.env.DB_PORT,
    dialect: process.env.BD_DIALECT,
    logging: false,
  },
};
