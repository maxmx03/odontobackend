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

        req.auth = {
          user,
          token,
        };

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

  static async userLogged(req, res, next) {
    try {
      const { authorization } = req.headers;

      const token = WebToken.verify(authorization);

      if (!Validator.isNotEmpty(token)) {
        return res.status(SERVER_ERROR.STATUS).json({
          msg: SERVER_ERROR.MSG,
        });
      }

      const user = await User.findOne({
        where: {
          id: token.userId,
          email: token.email,
        },
        attributes: ['firstName', 'lastName', 'email', 'type'],
      });

      if (Validator.isNotEmpty(user)) {
        req.auth = user;

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

  static recoverUserPassword(req, res, next) {
    try {
      const { email } = req.body;

      const password = GeneratorPassword.generate();

      const auth = {
        email: Validator.clearHTML(email),
      };

      if (Validator.isPassword(password) && Validator.isEmail(auth.email)) {
        User.update(
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
          password,
        };

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

module.exports = AuthMiddleware;
