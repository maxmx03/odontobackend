const Service = require('../models/Service');
const { SERVER_ERROR, SUCCESS } = require('../constants/code');
const Validator = require('../utils/validators/Validator');

class ServiceController {
  static getAll(req, res) {
    Service.findAll({
      attributes: ['operation', 'description', 'createdAt', 'updatedAt'],
      order: [['id', 'DESC']],
      include: [
        {
          association: 'user',
          attributes: ['firstName', 'lastName', 'type', 'id', 'createdAt'],
        },
        {
          association: 'student',
          attributes: ['firstName', 'lastName', 'cpf', 'id', 'createdAt'],
        },
      ],
    })
      .then((services) => {
        res.status(SUCCESS.STATUS).json({
          services,
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

module.exports = ServiceController;
