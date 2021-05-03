'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Student extends Model {
    static associate(models) {
      this.hasMany(models.Package, {
        foreignKey: 'student_id',
        as: 'packages',
      });
      this.belongsToMany(models.User, {
        through: models.Service,
        as: 'services',
      });
    }
  }
  Student.init(
    {
      firstName: DataTypes.STRING,
      lastName: DataTypes.STRING,
      email: DataTypes.STRING,
      password: DataTypes.STRING,
      cpf: DataTypes.STRING,
      fone: DataTypes.STRING,
      shift: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'Student',
    }
  );
  return Student;
};
