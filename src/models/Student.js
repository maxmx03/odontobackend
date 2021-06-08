'use strict';
const { Model, DataTypes } = require('sequelize');

class Student extends Model {
  static init(sequelize) {
    super.init(
      {
        firstName: DataTypes.STRING,
        lastName: DataTypes.STRING,
        email: DataTypes.STRING,
        password: DataTypes.STRING,
        cpf: DataTypes.STRING,
        phone: DataTypes.STRING,
        shift: DataTypes.STRING,
        qtPackage: DataTypes.SMALLINT
      },
      {
        sequelize,
        modelName: 'Student',
      }
    );
  }

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

module.exports = Student;
