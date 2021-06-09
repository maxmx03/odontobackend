module.exports = {
  development: {
    username: 'maxmx',
    password: 'o5o37prb',
    database: 'odontoeasy',
    host: 'localhost',
    dialect: 'postgres',
    define: {
      timestamps: true,
      underscored: true,
    },
  },
  test: {
    username: 'root',
    password: 'o5o37prb',
    database: 'odontoeasy_test',
    host: 'localhost',
    dialect: 'postgres',
    define: {
      timestamps: true,
      underscored: true,
    },
  },
  production: {
    username: 'root',
    password: null,
    database: 'database_production',
    host: '127.0.0.1',
    dialect: 'postgres',
    define: {
      timestamps: true,
      underscored: true,
    },
  },
};
