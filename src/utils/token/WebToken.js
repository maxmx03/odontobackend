const jwt = require('jsonwebtoken');

const User = require('../../models/User');

const tokenKey = process.env.TOKEN_KEY;

class WebToken {
  static create({ id, email }) {
    return jwt.sign({ userId: id, email }, tokenKey, {
      expiresIn: '12h',
    });
  }

  static verify(t) {
    const token = t.split(' ')[1];

    return jwt.verify(token, tokenKey);
  }
}

module.exports = WebToken;
