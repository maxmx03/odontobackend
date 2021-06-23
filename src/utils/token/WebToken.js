const jwt = require('jsonwebtoken');

class WebToken {
  static create({ id, email, firstName, lastName, type }) {

    return jwt.sign({ userId: id, email, firstName, lastName, type }, process.env.TOKEN_KEY, {
      expiresIn: '12h',
    });
  }

  static verify(t) {
    const token = t.split(' ')[1];

    return jwt.verify(token, process.env.TOKEN_KEY);
  }
}

module.exports = WebToken;
