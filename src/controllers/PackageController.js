const Package = require('../models/Package');
const Student = require('../models/Student');
const { SUCCESS, SERVER_ERROR } = require('../constants/code');
const Validator = require('../utils/validators/Validator');

class PackageController {
  static getAll(req, res) {
    Package.findAll({
      attributes: [
        'id',
        'studentId',
        'description',
        'status',
        'code',
        'validity',
        'createdAt',
        'updatedAt',
      ],
      include: {
        association: 'student',
        attributes: [
          'id',
          'firstName',
          'lastName',
          'email',
          'cpf',
          'phone',
          'shift',
          'qtPackage',
          'createdAt',
        ],
      },
      order: [['id', 'ASC']],
    })
      .then((packages) => {
        res.status(SUCCESS.STATUS).json({
          msg: SUCCESS.MSG,
          packages,
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
    Student.createPackage(req.studentPackage)
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
    const { packageId, description, validity, status } = req.studentPackage;

    Package.update(
      {
        description,
        validity,
        status,
      },
      {
        where: {
          id: packageId,
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

  static updateCode(req, res) {
    const { code, packageId } = req.studentPackage;

    Package.update(
      {
        code,
      },
      {
        where: {
          id: packageId,
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
    Student.deletePackage(req.studentPackage)
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

module.exports = PackageController;
