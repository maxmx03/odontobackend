const Validator = require('../utils/validators/Validator');
const { SERVER_ERROR } = require('../constants/code');
const generator = require('../utils/generator/codeGenerator');

class PackageMiddleware {
  static create(req, res, next) {
    const { studentId, description, validity, status, code } = req.body;

    generator.generate();

    const package = {
      studentId: Validator.clearHTML(studentId),
      description: Validator.clearHTML(description),
      validity: Validator.clearHTML(validity),
      status: Validator.clearHTML(status),
      code: generator.code.toString(),
    };

    if (
      Validator.isNotEmpty(package.studentId) &&
      Validator.isNotEmpty(package.description) &&
      Validator.isDate(package.validity) &&
      Validator.isStatus(package.status)
    ) {
      req.package = package;

      return next();
    }

    res.status(SERVER_ERROR.STATUS).json({
      msg: SERVER_ERROR.MSG,
    });
  }

  static updateProfile(req, res, next) {
    const { packageId, description, validity, status } = req.body;

    const package = {
      studentId: Validator.clearHTML(packageId),
      description: Validator.clearHTML(description),
      validity: Validator.clearHTML(validity),
      status: Validator.clearHTML(status),
    };

    if (
      Validator.isNotEmpty(package.studentId) &&
      Validator.isNotEmpty(package.description) &&
      Validator.isDate(package.validity) &&
      Validator.isStatus(package.status)
    ) {
      req.package = package;

      return next();
    }

    res.status(SERVER_ERROR.STATUS).json({
      msg: SERVER_ERROR.MSG,
    });
  }

  static updateCode(req, res, next) {
    const { packageId, code } = req.body;

    const package = {
      packageId: Validator.clearHTML(packageId),
      code: Validator.clearHTML(code),
    };

    if (Validator.isNotEmpty(packageId) && Validator.isNotEmpty(code)) {
      req.package = package;

      return next();
    }

    res.status(SERVER_ERROR.STATUS).json({
      msg: SERVER_ERROR.MSG,
    });
  }

  static delete(req, res, next) {
    const { packageId } = req.params;

    const package = {
      packageId: Validator.clearHTML(packageId),
    };

    if (Validator.isNotEmpty(package.packageId)) {
      req.package = package;

      return next();
    }

    res.status(SERVER_ERROR.STATUS).json({
      msg: SERVER_ERROR.MSG,
    });
  }
}

module.exports = PackageMiddleware;
