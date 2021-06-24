const rateLimit = require('express-rate-limit');

const request = rateLimit({
  windowMs: 60 * 60 * 1000,
  max: 50,
  skipSuccessfulRequests: true,
});

const auth = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 20,
  skipSuccessfulRequests: true,
});

module.exports = {
  request,
  auth,
};
