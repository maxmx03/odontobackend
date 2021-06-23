const { hashPassword } = require('../encrypt');

class GeneratorPassword {
  static randomNumber(range) {
    return Math.floor(Math.random() * range);
  }

  static generate() {
    const letters = 'abcdefghijklmnopqrstuvwxyz';
    const upperCase = letters.toUpperCase();
    const specialChar = '!@#$%&*';

    const password = [];

    while (password.length <= 5) {
      password.push(letters[this.randomNumber(letters.length - 1)]);
      password.push(upperCase[this.randomNumber(upperCase.length - 1)]);
      password.push(specialChar[this.randomNumber(specialChar.length - 1)]);
      password.push(this.randomNumber(100));
    }

    const result = {
      raw: password.join(''),
      password: hashPassword(password.join('')),
    };

    return result;
  }
}

module.exports = GeneratorPassword;
