const validator = require('validator');
const bcrypt = require('bcryptjs');
const User = require('../../models/User');

class Validator {
  static isNotEmpty(value) {
    return !validator.isEmpty(value);
  }

  static clearHTML(value) {
    const filter = new RegExp('(<[a-z0-9]+>)|(</[a-z0-9]+>)|([</>])', 'gi');

    return value.replace(filter, '');
  }

  static isShift(value) {
    return /morning|afternoon|night/.test(value);
  }

  static isType(value) {
    return /admin|user/.test(value);
  }

  static isCPF(cpf) {
    cpf = cpf.replace(/[^\d]+/g, '');
    if (cpf == '') return false;
    if (
      cpf.length != 11 ||
      cpf == '00000000000' ||
      cpf == '11111111111' ||
      cpf == '22222222222' ||
      cpf == '33333333333' ||
      cpf == '44444444444' ||
      cpf == '55555555555' ||
      cpf == '66666666666' ||
      cpf == '77777777777' ||
      cpf == '88888888888' ||
      cpf == '99999999999'
    ) {
      return false;
    }

    let add = 0;
    for (let i = 0; i < 9; i++) add += parseInt(cpf.charAt(i)) * (10 - i);
    let rev = 11 - (add % 11);
    if (rev == 10 || rev == 11) rev = 0;
    if (rev != parseInt(cpf.charAt(9))) return false;

    add = 0;
    for (let i = 0; i < 10; i++) add += parseInt(cpf.charAt(i)) * (11 - i);
    rev = 11 - (add % 11);
    if (rev == 10 || rev == 11) rev = 0;
    if (rev != parseInt(cpf.charAt(10))) return false;
    return true;
  }

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
