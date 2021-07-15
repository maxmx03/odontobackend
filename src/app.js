const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const compression = require('compression');

require('./database');

const routes = require('./routes');

const app = express();
const corsOptions = {
  origin: process.env.CORS_ORIGIN,
  optionsSuccessStatus: 200,
  methods: 'GET, POST, PATCH, DELETE',
};

app.set('trust proxy', 1);

app.use(cors(corsOptions));
app.use(helmet());
app.use(compression());
app.use(express.json());

function slowDown(req, res, next) {
  // if (process.env.NODE_ENV === 'development') {
  //   return setTimeout(() => {
  //     next();
  //   }, 5000);
  // }

  return next();
}

app.use(slowDown, routes);

module.exports = app;
