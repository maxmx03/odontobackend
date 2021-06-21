const Mailer = require('../utils/email/Mailer');
const { SUCCESS, SERVER_ERROR } = require('../constants/code');

class AuthController {
  static loginUser(req, res) {
    res.status(SUCCESS.STATUS).json({
      auth: {
        token,
      },
      user,
      msg: SUCCESS.MSG,
    });
  }

  static userLogged(req, res) {
    res.status(SUCCESS.STATUS).json({
      user: req.auth,
    });
  }

  static recoverUserPassword(req, res) {
    const { email, password } = req.auth;

    Mailer.sendRecoverPassword(email, password)
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

module.exports = AuthController;
