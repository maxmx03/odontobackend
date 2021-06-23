'use strict';
const Sequelize = require('sequelize');
const dotenv = require('dotenv');

dotenv.config();
const env = process.env.NODE_ENV;

const config = require('../config/config.js')[env];
const User = require('../models/User');
const Student = require('../models/Student');
const Package = require('../models/Package');
const Service = require('../models/Service');

const connection = new Sequelize(config);

User.init(connection);
Student.init(connection);
Package.init(connection);
Service.init(connection);

User.associate(connection.models);
Student.associate(connection.models);
Package.associate(connection.models);
Service.associate(connection.models);

module.exports = connection;
