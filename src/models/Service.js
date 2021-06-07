'use strict';
const { Model, DataTypes } = require('sequelize');

 class Service extends Model {
  static init(sequelize) {
    super.init(
      {
        operation: DataTypes.STRING,
        description: DataTypes.STRING,
      },
      {
        sequelize,
        modelName: 'Service',
      }
    );
  }

  static associate(models) {}
};

module.exports = Service;