'use strict';
const { Model, DataTypes } = require('sequelize');

class User extends Model {
  static init(sequelize) {
    super.init(
      {
        firstName: DataTypes.STRING,
        lastName: DataTypes.STRING,
        email: DataTypes.STRING,
        password: DataTypes.STRING,
        type: DataTypes.STRING,
      },
      {
        sequelize,
        modelName: 'User',
      }
    );
  }

  static associate(models) {
    this.hasMany(models.Service);
  }
}

module.exports = User;
