'use strict';
const { Mode, DataTypes } = require('sequelize');

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
    this.belongsToMany(models.Student, {
      through: models.Service,
      as: 'services',
    });
  }
}

module.exports = User;
