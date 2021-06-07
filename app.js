const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const compression = require('compression');

require('./src/database');

const routes = require('./src/routes');

const app = express();
const port = process.env.PORT || 3000;
const corsOptions = {
  origin: process.env.CORS_ORIGIN || '*',
  optionsSuccessStatus: 200,
  methods: 'GET, POST, PATCH, DELETE',
};

app.set('trust proxy', 1);

app.use(cors(corsOptions));
app.use(helmet());
app.use(compression());
app.use(express.json());

app.use(routes);

app.listen(port, () => {
  console.log('listening on port ' + port);
});
