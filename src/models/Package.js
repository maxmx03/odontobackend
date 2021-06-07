'use strict';
const { Model, DataTypes } = require('sequelize');

class Package extends Model {
  static init(sequelize) {
    Package.init(
      {
        code: DataTypes.STRING,
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
      foreignKey: 'student_id',
      as: 'students',
    });
  }
};

module.exports = Package