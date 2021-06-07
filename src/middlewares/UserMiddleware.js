const Validator = require('../utils/validators/Validator');
const { SERVER_ERROR } = require('../constants/code');

class UserMiddleware {
  create(req, res, next) {
    const { firstName, lastName, email, password, type } = req.body;

    const user = {
      firstName: clearHTML(firstName),
      lastName: clearHTML(lastName),
      email: clearHTML(email),
      password: clearHTML(password),
      type: clearHTML(type),
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
  }
}

module.exports = UserMiddleware;
