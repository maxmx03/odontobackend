const Package = require('../models/Package');
const { SUCCESS, SERVER_ERROR } = require('../constants/code');
const { Sequelize } = require('sequelize');

class PackageController {
  static getAll(req, res) {
    Package.findAll({
      attributes: [
        'id',
        'student_id',
        'description',
        'status',
        'code',
        'validity',
        [Sequelize.fn('COUNT', Sequelize.col('student_id'), 'studentCount')],
        'createdAt',
        'updatedAt',
      ],
      include: {
        association: 'students',
        attributes: [
          'id',
          'firstName',
          'lastName',
          'email',
          'cpf',
          'phone',
          'shift',
          'createdAt',
        ],
      },
    })
      .then((packages) => {
        res.status(SUCCESS.STATUS).json({
          packages,
          msg: SUCCESS.MSG,
        });
      })
      .catch(() => {
        res.status(SERVER_ERROR.STATUS).json({
          msg: SERVER_ERROR.MSG,
        });
      });
  }

  static create(req, res) {
    const { studentId, description, validity, status, code } = req.package;

    Package.create({
      student_id: studentId,
      description,
      validity,
      status,
      code,
    })
      .then(() => {
        res.status(SUCCESS.STATUS).json({
          msg: SUCCESS.MSG,
        });
      })
      .catch(() => {
        res.status(SERVER_ERROR.STATUS).json({
          msg: SERVER_ERROR.MSG,
        });
      });
  }

  static updateProfile(req, res) {
    const { packageId, description, validity, status } = req.package;

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
      .catch(() => {
        res.status(SERVER_ERROR.STATUS).json({
          msg: SERVER_ERROR.MSG,
        });
      });
  }

  static updateCode(req, res) {
    const { code, packageId } = req.package;

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
      .catch(() => {
        res.status(SERVER_ERROR.STATUS).json({
          msg: SERVER_ERROR.MSG,
        });
      });
  }

  static delete(req, res) {
    const { packageId } = req.package;

    Package.destroy({
      where: {
        id: packageId,
      },
    })
      .then(() => {
        res.status(SUCCESS.STATUS).json({
          msg: SUCCESS.MSG,
        });
      })
      .catch(() => {
        res.status(SERVER_ERROR.STATUS).json({
          msg: SERVER_ERROR.MSG,
        });
      });
  }
}

module.exports = PackageController;
