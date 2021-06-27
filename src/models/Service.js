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

  static associate(models) {
    this.belongsTo(models.Student, {
      foreignKey: 'student_id',
      as: 'students',
    });

    this.belongsTo(models.User, {
      foreignKey: 'user_id',
      as: 'users',
    });
  }
}

module.exports = Service;
