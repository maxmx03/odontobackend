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
        qtPackage: DataTypes.SMALLINT,
        shift: DataTypes.STRING,
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

    // this.belongsToMany(models.User, {
    //   through: models.Service,
    //   as: 'users',
    // });
  }

  static async createPackage({ studentId, description, validity, status }) {
    const student = await this.findByPk(studentId);
    const quantity = await student.countPackages();
    student.qtPackage = quantity + 1;
    student.save();

    return student.createPackage({
      student_id: studentId,
      description,
      validity,
      status,
    });
  }
}

module.exports = Student;
