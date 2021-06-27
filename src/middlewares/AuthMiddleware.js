const Validator = require('../utils/validators/Validator');
const User = require('../models/User');
const WebToken = require('../utils/token/WebToken');
const GeneratorPassword = require('../utils/generator/GeneratorPassword');
const { SERVER_ERROR } = require('../constants/code');

class AuthMiddleware {
  static async loginUser(req, res, next) {
    try {
      const { email, password } = req.body;

      const auth = {
        email: Validator.clearHTML(email),
        password: Validator.clearHTML(password),
      };

      if (
        !Validator.isEmail(auth.email) ||
        !Validator.isPassword(auth.password)
      ) {
        return res.status(SERVER_ERROR.STATUS).json({
          error: Validator.isDevelopmentEnv() ? 'Validator error' : null,
          msg: SERVER_ERROR.MSG,
        });
      }

      const user = await User.findOne({
        where: {
          email: auth.email,
        },
      });

      if (Validator.validateUserAccount(auth.password, user)) {
        const token = WebToken.create(user);

        req.auth = token;

        return next();
      }

      res.status(SERVER_ERROR.STATUS).json({
        error: Validator.isDevelopmentEnv() ? 'Validator error' : null,
        msg: SERVER_ERROR.MSG,
      });
    } catch (error) {
      res.status(SERVER_ERROR.STATUS).json({
        error: Validator.isDevelopmentEnv() ? error : null,
        msg: SERVER_ERROR.MSG,
      });
    }
  }

  static async isUserLogged(req, res, next) {
    try {
      const { authorization } = req.headers;

      const token = WebToken.verify(authorization);

      req.auth = token;

      return next();
    } catch (error) {
      res.status(SERVER_ERROR.STATUS).json({
        error: Validator.isDevelopmentEnv() ? error : null,
        msg: SERVER_ERROR.MSG,
      });
    }
  }

  static async recoverUserPassword(req, res, next) {
    try {
      const { email } = req.body;

      const { password, raw } = GeneratorPassword.generate();

      const auth = {
        email: Validator.clearHTML(email),
      };

      if (Validator.isPassword(raw) && Validator.isEmail(auth.email)) {
        await User.update(
          {
            password,
          },
          {
            where: {
              email: auth.email,
            },
          }
        );

        req.auth = {
          email: auth.email,
          password: raw,
        };

        return next();
      }

      res.status(SERVER_ERROR.STATUS).json({
        error: Validator.isDevelopmentEnv() ? 'Validator error' : null,
        msg: SERVER_ERROR.MSG,
      });
    } catch (error) {
      res.status(SERVER_ERROR.STATUS).json({
        error: Validator.isDevelopmentEnv() ? error : null,
        msg: SERVER_ERROR.MSG,
      });
    }
  }

  static isAdmin(req, res, next) {
    try {
      if (
        Validator.isDevelopmentEnv() ||
        process.env.CREATE_FIRST_USER === 'true'
      ) {
        return next();
      }

      const { authorization } = req.headers;

      const token = WebToken.verify(authorization);

      if (Validator.isType(token.type) && token.type === 'admin') {
        req.auth = token;

        return next();
      }

      res.status(SERVER_ERROR.STATUS).json({
        error: Validator.isDevelopmentEnv() ? 'Validator error' : null,
        msg: SERVER_ERROR.MSG,
      });
    } catch (error) {
      res.status(SERVER_ERROR.STATUS).json({
        error: Validator.isDevelopmentEnv() ? error : null,
        msg: SERVER_ERROR.MSG,
      });
    }
  }

  static isUser(req, res, next) {
    try {
      if (Validator.isDevelopmentEnv()) {
        return next();
      }

      const { authorization } = req.headers;

      const token = WebToken.verify(authorization);

      if (
        Validator.isType(token.type) &&
        (token.type === 'user' || token.type === 'admin')
      ) {
        return next();
      }

      res.status(SERVER_ERROR.STATUS).json({
        error: Validator.isDevelopmentEnv() ? 'Validator error' : null,
        msg: SERVER_ERROR.MSG,
      });
    } catch (error) {
      res.status(SERVER_ERROR.STATUS).json({
        error: Validator.isDevelopmentEnv() ? error : null,
        msg: SERVER_ERROR.MSG,
      });
    }
  }
}

module.exports = AuthMiddleware;
