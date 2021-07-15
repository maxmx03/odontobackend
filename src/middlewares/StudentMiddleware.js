const Validator = require('../utils/validators/Validator');
const { SERVER_ERROR } = require('../constants/code');

class UserMiddleware {
  static create(req, res, next) {
    try {
      const { firstName, lastName, email, password, cpf, phone, shift } =
        req.body;

      const student = {
        firstName: Validator.clearHTML(firstName).toLowerCase(),
        lastName: Validator.clearHTML(lastName).toLowerCase(),
        email: Validator.normalizeEmail(Validator.clearHTML(email)),
        password: Validator.clearHTML(password),
        cpf: Validator.clearHTML(cpf),
        phone: Validator.clearHTML(phone),
        shift: Validator.clearHTML(shift).toLowerCase(),
      };

      if (
        Validator.isNotEmpty(student.firstName) &&
        Validator.isNotEmpty(student.lastName) &&
        Validator.isEmail(student.email) &&
        Validator.isStudentPassword(student.password) &&
        Validator.isCPF(student.cpf) &&
        Validator.isNotEmpty(student.phone) &&
        Validator.isShift(student.shift)
      ) {
        req.student = student;

        return next();
      }

      res.status(SERVER_ERROR.STATUS).json({
        error: Validator.isDevelopmentEnv() ? 'Validator error' : null,
        msg: SERVER_ERROR.MSG,
      });
    } catch (error) {
      res.status(SERVER_ERROR.STATUS).json({
        error: Validator.isDevelopmentEnv() ? error : null,
        msg: SERVER_ERROR.MSG,
      });
    }
  }

  static updateProfile(req, res, next) {
    try {
      const { firstName, lastName, shift, cpf, phone, studentId } = req.body;

      const student = {
        firstName: Validator.clearHTML(firstName),
        lastName: Validator.clearHTML(lastName),
        shift: Validator.clearHTML(shift),
        cpf: Validator.clearHTML(cpf),
        phone: Validator.clearHTML(phone),
        studentId: Validator.clearHTML(studentId),
      };

      if (
        Validator.isNotEmpty(student.firstName) &&
        Validator.isNotEmpty(student.lastName) &&
        Validator.isShift(student.shift) &&
        Validator.isCPF(student.cpf) &&
        Validator.isNotEmpty(student.phone) &&
        Validator.isNotEmpty(student.studentId)
      ) {
        req.student = student;

        return next();
      }

      res.status(SERVER_ERROR.STATUS).json({
        error: Validator.isDevelopmentEnv() ? 'Validator error' : null,
        msg: SERVER_ERROR.MSG,
      });
    } catch (error) {
      res.status(SERVER_ERROR.STATUS).json({
        error: Validator.isDevelopmentEnv() ? error : null,
        msg: SERVER_ERROR.MSG,
      });
    }
  }

  static updateEmail(req, res, next) {
    try {
      const { email, studentId } = req.body;

      const student = {
        email: Validator.clearHTML(email),
        studentId: Validator.clearHTML(studentId),
      };

      if (
        Validator.isEmail(student.email) &&
        Validator.isNotEmpty(student.studentId)
      ) {
        req.student = student;

        return next();
      }

      res.status(SERVER_ERROR.STATUS).json({
        error: Validator.isDevelopmentEnv() ? 'Validator error' : null,
        msg: SERVER_ERROR.MSG,
      });
    } catch (error) {
      res.status(SERVER_ERROR.STATUS).json({
        error: Validator.isDevelopmentEnv() ? error : null,
        msg: SERVER_ERROR.MSG,
      });
    }
  }

  static updatePassword(req, res, next) {
    try {
      const { password, studentId } = req.body;

      const student = {
        password: Validator.clearHTML(password),
        studentId: Validator.clearHTML(studentId),
      };

      if (
        Validator.isStudentPassword(student.password) &&
        Validator.isNotEmpty(student.studentId)
      ) {
        req.student = student;

        return next();
      }

      res.status(SERVER_ERROR.STATUS).json({
        error: Validator.isDevelopmentEnv() ? 'Validator error' : null,
        msg: SERVER_ERROR.MSG,
      });
    } catch (error) {
      res.status(SERVER_ERROR.STATUS).json({
        error: Validator.isDevelopmentEnv() ? error : null,
        msg: SERVER_ERROR.MSG,
      });
    }
  }

  static delete(req, res, next) {
    try {
      const { studentId } = req.params;

      const student = {
        studentId: Validator.clearHTML(studentId),
      };

      if (Validator.isNotEmpty(student.studentId)) {
        req.student = student;

        return next();
      }

      res.status(SERVER_ERROR.STATUS).json({
        error: Validator.isDevelopmentEnv() ? 'Validator error' : null,
        msg: SERVER_ERROR.MSG,
      });
    } catch (error) {
      res.status(SERVER_ERROR.STATUS).json({
        error: Validator.isDevelopmentEnv() ? error : null,
        msg: SERVER_ERROR.MSG,
      });
    }
  }
}

module.exports = UserMiddleware;
