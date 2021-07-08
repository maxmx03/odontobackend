'use strict';
const { Model, DataTypes } = require('sequelize');

class Package extends Model {
  static init(sequelize) {
    super.init(
      {
        code: DataTypes.INTEGER,
        description: DataTypes.STRING,
        status: DataTypes.STRING,
        validity: DataTypes.STRING,
      },
      {
        sequelize,
        modelName: 'Package',
      }
    );
  }

  static associate(models) {
    this.belongsTo(models.Student, {
      foreignKey: 'studentId',
      as: 'student',
    });
  }
};

module.exports = Package