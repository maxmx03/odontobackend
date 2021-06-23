const dotenv = require('dotenv');

dotenv.config();

module.exports = {
  development: {
    username: process.env.BD_USERNAME,
    password: process.env.BD_PASSWORD,
    database: 'odontoeasy_dev',
    host: process.env.BD_HOST,
    dialect: process.env.BD_DIALECT,
  },
  test: {
    username: process.env.BD_USERNAME,
    password: process.env.BD_PASSWORD,
    database: 'odontoeasy_test',
    host: process.env.BD_HOST,
    dialect: process.env.BD_DIALECT,
  },
  production: {
    username: process.env.BD_USERNAME,
    password: process.env.BD_PASSWORD,
    database: 'odontoeasy',
    host: process.env.BD_HOST,
    dialect: process.env.BD_DIALECT,
    logging: false,
  },
};
