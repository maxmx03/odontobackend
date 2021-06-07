const bcrypt = require('bcryptjs');

exports.hashPassword = function hashPassword(password) {
  const salt = bcrypt.genSaltSync(10);
  const hash = bcrypt.hashSync(password, salt);

  return hash;
};
