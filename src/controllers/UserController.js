const User = require('../models/User');
const { hashPassword } = require('../utils/encrypt');
const { SUCCESS, SERVER_ERROR } = require('../constants/code');
const Validator = require('../utils/validators/Validator');

class UserController {
  static getAll(req, res) {
    User.findAll({
      attributes: [
        'id',
        'firstName',
        'lastName',
        'email',
        'type',
        'createdAt',
        'updatedAt',
      ],
      order: [['id', 'ASC']],
    })
      .then((users) => {
        res.status(SUCCESS.STATUS).json({
          msg: SUCCESS.MSG,
          users,
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
      password: passwordToStore,
      type,
    } = req.user;

    const password = hashPassword(passwordToStore);

    User.create({
      firstName,
      lastName,
      email,
      password,
      type,
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
    const { firstName, lastName, type, userId } = req.user;

    User.update(
      {
        firstName,
        lastName,
        type,
      },
      {
        where: {
          id: userId,
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
    const { email, userId } = req.user;

    User.update(
      {
        email,
      },
      {
        where: {
          id: userId,
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
    const { password: passwordToUpdate, userId } = req.user;

    const password = hashPassword(passwordToUpdate);

    User.update(
      { password },
      {
        where: {
          id: userId,
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
    const { userId } = req.user;

    User.destroy({
      where: {
        id: userId,
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

module.exports = UserController;
