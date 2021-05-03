'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Package extends Model {
    static associate(models) {
      this.belongsTo(models.Student, {
        foreignKey: 'student_id',
        as: 'students',
      });
    }
  }
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
  return Package;
};
