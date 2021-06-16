const Validator = require('../utils/validators/Validator');
const { SERVER_ERROR } = require('../constants/code');
const generator = require('../utils/generator/codeGenerator');

class PackageMiddleware {
  static create(req, res, next) {
    const { studentId, description, validity, status } = req.body;

    generator.generate();

    const studentPackage = {
      studentId: Validator.clearHTML(studentId),
      description: Validator.clearHTML(description),
      validity: Validator.clearHTML(validity),
      status: Validator.clearHTML(status),
      code: generator.code.toString(),
    };

    if (
      Validator.isNotEmpty(studentPackage.studentId) &&
      Validator.isNotEmpty(studentPackage.description) &&
      Validator.isDate(studentPackage.validity) &&
      Validator.isStatus(studentPackage.status)
    ) {
      req.studentPackage = studentPackage;

      return next();
    }

    res.status(SERVER_ERROR.STATUS).json({
      msg: SERVER_ERROR.MSG,
    });
  }

  static updateProfile(req, res, next) {
    const { packageId, studentId, description, validity, status } = req.body;

    const studentPackage = {
      packageId: Validator.clearHTML(packageId),
      studentId: Validator.clearHTML(studentId),
      description: Validator.clearHTML(description),
      validity: Validator.clearHTML(validity),
      status: Validator.clearHTML(status),
    };

    if (
      Validator.isNotEmpty(studentPackage.packageId) &&
      Validator.isNotEmpty(studentPackage.studentId) &&
      Validator.isNotEmpty(studentPackage.description) &&
      Validator.isDate(studentPackage.validity) &&
      Validator.isStatus(studentPackage.status)
    ) {
      req.studentPackage = studentPackage;

      return next();
    }

    res.status(SERVER_ERROR.STATUS).json({
      msg: SERVER_ERROR.MSG,
    });
  }

  static updateCode(req, res, next) {
    const { packageId, studentId, code } = req.body;

    const studentPackage = {
      packageId: Validator.clearHTML(packageId),
      studentId: Validator.clearHTML(studentId),
      code: Validator.clearHTML(code),
    };

    if (
      Validator.isNotEmpty(studentPackage.packageId) &&
      Validator.isNotEmpty(studentPackage.studentId) &&
      Validator.isNotEmpty(studentPackage.code)
    ) {
      req.studentPackage = studentPackage;

      return next();
    }

    res.status(SERVER_ERROR.STATUS).json({
      msg: SERVER_ERROR.MSG,
    });
  }

  static delete(req, res, next) {
    const { packageId, studentId } = req.params;

    const studentPackage = {
      packageId: Validator.clearHTML(packageId),
      studentId: Validator.clearHTML(studentId),
    };

    if (
      Validator.isNotEmpty(studentPackage.packageId) &&
      Validator.isNotEmpty(studentPackage.studentId)
    ) {
      req.studentPackage = studentPackage;

      return next();
    }

    res.status(SERVER_ERROR.STATUS).json({
      msg: SERVER_ERROR.MSG,
    });
  }
}

module.exports = PackageMiddleware;
