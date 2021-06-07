'use strict';

const Sequelize = require('sequelize');

const config = require('../database/config/config.json')[env];
const User = require('../models/User');
const Student = require('../models/Student');
const Service = require('../models/Service');

const env = process.env.NODE_ENV || 'development';

const connection = new Sequelize(config);

User.init(connection);
Student.init(connection);
Service.init(connection);

User.associate(connection.models)
Student.associate(connection.models)

module.exports = connection;
