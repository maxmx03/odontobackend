const Student = require('../models/Student');
const { hashPassword } = require('../utils/encrypt');
const { SUCCESS, SERVER_ERROR } = require('../constants/code');
const Validator = require('../utils/validators/Validator');

class StudentController {
  static getAll(req, res) {
    Student.findAll({
      attributes: [
        'id',
        'firstName',
        'lastName',
        'email',
        'password',
        'cpf',
        'phone',
        'shift',
        'qtPackage',
        'createdAt',
        'updatedAt',
      ],
      order: [['id', 'ASC']],
    })
      .then((students) => {
        res.status(SUCCESS.STATUS).json({
          msg: SUCCESS.MSG,
          students,
        });
      })
      .catch((error) => {
        res.status(SERVER_ERROR.STATUS).json({
          error: Validator.isDevelopmentEnv() ? error : null,
          msg: SERVER_ERROR.MSG,
        });
      });
  }

  static create(req, res) {
    const {
      firstName,
      lastName,
      email,
      password: passwordEntry,
      cpf,
      phone,
      shift,
    } = req.student;

    const password = hashPassword(passwordEntry);

    Student.create({
      firstName,
      lastName,
      email,
      password,
      cpf,
      phone,
      shift,
    })
      .then(() => {
        res.status(SUCCESS.STATUS).json({
          msg: SUCCESS.MSG,
        });
      })
      .catch((error) => {
        res.status(SERVER_ERROR.STATUS).json({
          error: Validator.isDevelopmentEnv() ? error : null,
          msg: SERVER_ERROR.MSG,
        });
      });
  }

  static updateProfile(req, res) {
    const { firstName, lastName, shift, cpf, phone, studentId } = req.student;

    Student.update(
      {
        firstName,
        lastName,
        shift,
        cpf,
        phone,
      },
      {
        where: {
          id: studentId,
        },
      }
    )
      .then(() => {
        res.status(SUCCESS.STATUS).json({
          msg: SUCCESS.MSG,
        });
      })
      .catch((error) => {
        res.status(SERVER_ERROR.STATUS).json({
          error: Validator.isDevelopmentEnv() ? error : null,
          msg: SERVER_ERROR.MSG,
        });
      });
  }

  static updateEmail(req, res) {
    const { email, studentId } = req.student;

    Student.update(
      {
        email,
      },
      {
        where: {
          id: studentId,
        },
      }
    )
      .then(() => {
        res.status(SUCCESS.STATUS).json({
          msg: SUCCESS.MSG,
        });
      })
      .catch((error) => {
        res.status(SERVER_ERROR.STATUS).json({
          error: Validator.isDevelopmentEnv() ? error : null,
          msg: SERVER_ERROR.MSG,
        });
      });
  }

  static updatePassword(req, res) {
    const { password, studentId } = req.student;

    Student.update(
      { password },
      {
        where: {
          id: studentId,
        },
      }
    )
      .then(() => {
        res.status(SUCCESS.STATUS).json({
          msg: SUCCESS.MSG,
        });
      })
      .catch((error) => {
        res.status(SERVER_ERROR.STATUS).json({
          error: Validator.isDevelopmentEnv() ? error : null,
          msg: SERVER_ERROR.MSG,
        });
      });
  }

  static delete(req, res) {
    const { studentId } = req.student;

    Student.destroy({
      where: {
        id: studentId,
      },
    })
      .then(() => {
        res.status(SUCCESS.STATUS).json({
          msg: SUCCESS.MSG,
        });
      })
      .catch((error) => {
        res.status(SERVER_ERROR.STATUS).json({
          error: Validator.isDevelopmentEnv() ? error : null,
          msg: SERVER_ERROR.MSG,
        });
      });
  }
}

module.exports = StudentController;
