const Mailer = require('../utils/email/Mailer');
const { SUCCESS } = require('../constants/code');

class AuthController {
  static loginUser(req, res) {
    res.status(SUCCESS.STATUS).json({
      token: req.auth,
      msg: SUCCESS.MSG,
    });
  }

  static isUserLogged(req, res) {
    res.status(SUCCESS.STATUS).json({
      token: req.auth,
      msg: SUCCESS.MSG
    });
  }

  static recoverUserPassword(req, res) {
    const { email, password } = req.auth;

    Mailer.sendRecoverPassword(email, password, {req, res});
  }
}

module.exports = AuthController;
