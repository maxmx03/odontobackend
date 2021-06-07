const validator = require('validator');
const bcrypt = require('bcryptjs');
const User = require('../../models/User');

class Validator {
  static isEmail(email) {
    return validator.isEmail(email);
  }

  static isPassword(password) {
    const hasMinEightCharacter = /^.{8,}$/.test(password);
    const hasNumber = /[0-9]/.test(password);
    const hasSpecialCharacter = /[!@#$%&*^~+?(){}]/.test(password);
    const hasUpperCaseCharacter = /[A-Z]/.test(password);

    return (
      hasMinEightCharacter &&
      hasNumber &&
      hasSpecialCharacter &&
      hasUpperCaseCharacter
    );
  }

  static isNotEmpty(text) {
    return !validator.isEmpty(text);
  }

  static clearHTML(text) {
    const filter = new RegExp('(<[a-z0-9]+>)|(</[a-z0-9]+>)|([</>])', 'gi');

    return text.replace(filter, '');
  }

  static async validateUserAccount(email, password) {
    const user = await User.findOne({
      where: {
        email,
      },
    });

    return bcrypt.compareSync(password, user.password);
  }
}

module.exports = Validator;
