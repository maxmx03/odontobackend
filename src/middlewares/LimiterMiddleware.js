const rateLimit = require('express-rate-limit');

class LimiterMiddleware {
  static request() {
    return rateLimit({
      windowMs: 60 * 60 * 1000,
      max: 50,
      skipSuccessfulRequests: true,
    });
  }

  static auth() {
    return rateLimit({
      windowMs: 15 * 60 * 1000,
      max: 20,
      skipSuccessfulRequests: true,
    });
  }
}

module.exports = LimiterMiddleware;
