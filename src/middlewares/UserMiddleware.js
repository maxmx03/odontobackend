const Validator = require('../utils/validators/Validator');
const { SERVER_ERROR } = require('../constants/code');

class UserMiddleware {
  static create(req, res, next) {
    try {
      const { firstName, lastName, email, password, type } = req.body;

      const user = {
        firstName: Validator.clearHTML(firstName).toLowerCase(),
        lastName: Validator.clearHTML(lastName).toLowerCase(),
        email: Validator.clearHTML(email),
        password: Validator.clearHTML(password),
        type: Validator.clearHTML(type).toLowerCase(),
      };

      if (
        Validator.isNotEmpty(user.firstName) &&
        Validator.isNotEmpty(user.lastName) &&
        Validator.isEmail(user.email) &&
        Validator.isPassword(user.password) &&
        Validator.isNotEmpty(user.type)
      ) {
        req.user = user;

        return next();
      }

      res.status(SERVER_ERROR.STATUS).json({
        msg: SERVER_ERROR.MSG,
      });
    } catch (error) {
      res.status(SERVER_ERROR.STATUS).json({
        msg: SERVER_ERROR.MSG,
      });
    }
  }

  static updateProfile(req, res, next) {
    try {
      const { firstName, lastName, type, userId } = req.body;

      const user = {
        firstName: Validator.clearHTML(firstName),
        lastName: Validator.clearHTML(lastName),
        type: Validator.clearHTML(type),
        userId: Validator.clearHTML(userId),
      };

      if (
        Validator.isNotEmpty(user.firstName) &&
        Validator.isNotEmpty(user.lastName) &&
        Validator.isNotEmpty(user.type) &&
        Validator.isNotEmpty(user.userId)
      ) {
        req.user = user;

        return next();
      }

      res.status(SERVER_ERROR.STATUS).json({
        msg: SERVER_ERROR.MSG,
      });
    } catch (error) {
      res.status(SERVER_ERROR.STATUS).json({
        msg: SERVER_ERROR.MSG,
      });
    }
  }

  static updateEmail(req, res, next) {
    try {
      const { email, userId } = req.body;

      const user = {
        email: Validator.clearHTML(email),
        userId: Validator.clearHTML(userId),
      };

      if (Validator.isEmail(user.email) && Validator.isNotEmpty(user.userId)) {
        req.user = user;

        return next();
      }

      res.status(SERVER_ERROR.STATUS).json({
        msg: SERVER_ERROR.MSG,
      });
    } catch (error) {
      res.status(SERVER_ERROR.STATUS).json({
        msg: SERVER_ERROR.MSG,
      });
    }
  }

  static updatePassword(req, res, next) {
    try {
      const { password, userId } = req.body;

      const user = {
        password: Validator.clearHTML(password),
        userId: Validator.clearHTML(userId),
      };

      if (
        Validator.isPassword(user.password) &&
        Validator.isNotEmpty(user.userId)
      ) {
        req.user = user;

        return next();
      }

      res.status(SERVER_ERROR.STATUS).json({
        msg: SERVER_ERROR.MSG,
      });
    } catch (error) {
      res.status(SERVER_ERROR.STATUS).json({
        msg: SERVER_ERROR.MSG,
      });
    }
  }

  static delete(req, res, next) {
    try {
      const { userId } = req.params;

      const user = {
        userId: Validator.clearHTML(userId),
      };

      if (Validator.isNotEmpty(user.userId)) {
        req.user = user;

        return next();
      }

      res.status(SERVER_ERROR.STATUS).json({
        msg: SERVER_ERROR.MSG,
      });
    } catch (error) {
      res.status(SERVER_ERROR.STATUS).json({
        msg: SERVER_ERROR.MSG,
      });
    }
  }
}

module.exports = UserMiddleware;
