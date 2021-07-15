const validator = require('validator');
const bcrypt = require('bcryptjs');

class Validator {
  static isNotEmpty(value) {
    if (value === 0) {
      return true;
    }

    return !!value;
  }

  static clearHTML(value) {
    const filter = new RegExp('(<[a-z0-9]+>)|(</[a-z0-9]+>)|([</>])', 'gi');
    const toFilter = value + '';

    return toFilter.replace(filter, '');
  }

  static normalizeEmail(email) {
    const normalizedEmail = validator.normalizeEmail(email);

    return normalizedEmail;
  }

  static isShift(value) {
    return /^morning$|^afternoon$|^night$/.test(value);
  }

  static isType(value) {
    return /^admin$|^user$|^disabled$/.test(value);
  }

  static isStatus(value) {
    return /^stored$|^withdrawn$/.test(value);
  }

  static isDate(value) {
    const validate = new RegExp(
      '[0-9]+[-]+[0-9]+[-]+[0-9]+[A-Z0-9]+[:]+[0-9]+[:]+[0-9]+[-]+[0-9]+[:]+[09]+',
      'g'
    );

    return validate.test(value);
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

  static isPhone(phone) {
    const regex = /[(]+[0-9]+[)]+[\s]+[0-9]+[-]+[0-9]+/g;

    return regex.test(phone);
  }

  static isUserPassword(password) {
    const minLength = /^.{8,}$/.test(password);
    const minNum = /[0-9]/.test(password);
    const specialChar = /[!@#$%&*^~+?(){}]/.test(password);
    const upperCaseChar = /[A-Z]/.test(password);

    return minLength && minNum && specialChar && upperCaseChar;
  }

  static isStudentPassword(password) {
    const minLength = /^.{5,}$/.test(password);
    const minChar = /[a-z]/gi.test(password);
    const minNum = /[0-9]/.test(password);

    return minLength && minChar && minNum;
  }

  static validateUserAccount(password, user) {
    return bcrypt.compareSync(password, user.password);
  }

  static isDevelopmentEnv() {
    return process.env.NODE_ENV !== 'production';
  }

  static areEqual(value, valueToCompare) {
    return value === valueToCompare;
  }
}

module.exports = Validator;
