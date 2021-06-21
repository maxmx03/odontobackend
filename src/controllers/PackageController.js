const Package = require('../models/Package');
const Student = require('../models/Student');
const { SUCCESS, SERVER_ERROR } = require('../constants/code');

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
      .catch(() => {
        res.status(SERVER_ERROR.STATUS).json({
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
      .catch(() => {
        res.status(SERVER_ERROR.STATUS).json({
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
      .catch(() => {
        res.status(SERVER_ERROR.STATUS).json({
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
      .catch(() => {
        res.status(SERVER_ERROR.STATUS).json({
          msg: SERVER_ERROR.MSG,
        });
      });
  }

  static delete(req, res) {
    const { packageId } = req.studentPackage;

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
