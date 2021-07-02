const Service = require('../models/Service');
const Student = require('../models/Student');
const User = require('../models/User');
const Validator = require('../utils/validators/Validator');
const { SERVER_ERROR } = require('../constants/code');

class ServiceMiddleware {
  static async create(req, res, next) {
    try {
      const { studentId } = req.studentPackage;
      const { userId, firstName, lastName } = req.auth;

      const student = await Student.findByPk(studentId);

      console.log(req.auth);

      Service.create({
        studentId,
        userId,
        operation: 'Criar Pacote',
        description: `${firstName} ${lastName} criou um novo pacote para o aluno(a) ${student.firstName} ${student.lastName}`,
      })
        .then(() => {
          next();
        })
        .catch((error) => {
          res.status(SERVER_ERROR.STATUS).json({
            error: Validator.isDevelopmentEnv() ? error : null,
            msg: SERVER_ERROR.MSG,
          });
        });
    } catch (error) {
      res.status(SERVER_ERROR.STATUS).json({
        error: Validator.isDevelopmentEnv() ? error : null,
        msg: SERVER_ERROR.MSG,
      });
    }
  }

  static async updateProfile(req, res, next) {
    try {
      const { studentId } = req.studentPackage;
      const { userId, firstName, lastName } = req.auth;

      const student = await Student.findByPk(studentId);

      Service.create({
        studentId,
        userId,
        operation: 'Atualizar Pacote Perfil',
        description: `${firstName} ${lastName} atualizou o perfil do pacote do aluno(a) ${student.firstName} ${student.lastName}`,
      })
        .then(() => {
          next();
        })
        .catch((error) => {
          res.status(SERVER_ERROR.STATUS).json({
            error: Validator.isDevelopmentEnv() ? error : null,
            msg: SERVER_ERROR.MSG,
          });
        });
    } catch (error) {
      res.status(SERVER_ERROR.STATUS).json({
        error: Validator.isDevelopmentEnv() ? error : null,
        msg: SERVER_ERROR.MSG,
      });
    }
  }

  static async updateCode(req, res, next) {
    try {
      const { studentId } = req.studentPackage;
      const { userId, firstName, lastName } = req.auth;

      const student = await Student.findByPk(studentId);

      Service.create({
        studentId,
        userId,
        operation: 'Atualizar Pacote Código',
        description: `${firstName} ${lastName} atualizou o código do pacote do aluno(a) ${student.firstName} ${student.lastName}`,
      })
        .then(() => {
          next();
        })
        .catch((error) => {
          res.status(SERVER_ERROR.STATUS).json({
            error: Validator.isDevelopmentEnv() ? error : null,
            msg: SERVER_ERROR.MSG,
          });
        });
    } catch (error) {
      res.status(SERVER_ERROR.STATUS).json({
        error: Validator.isDevelopmentEnv() ? error : null,
        msg: SERVER_ERROR.MSG,
      });
    }
  }

  static async delete(req, res, next) {
    try {
      const { studentId } = req.studentPackage;
      const { userId, firstName, lastName } = req.auth;

      const student = await Student.findByPk(studentId);

      Service.create({
        studentId,
        userId,
        operation: 'Atualizar Pacote Código',
        description: `${firstName} ${lastName} deletou o pacote do aluno(a) ${student.firstName} ${student.lastName}`,
      })
        .then(() => {
          next();
        })
        .catch((error) => {
          res.status(SERVER_ERROR.STATUS).json({
            error: Validator.isDevelopmentEnv() ? error : null,
            msg: SERVER_ERROR.MSG,
          });
        });
    } catch (error) {
      res.status(SERVER_ERROR.STATUS).json({
        error: Validator.isDevelopmentEnv() ? error : null,
        msg: SERVER_ERROR.MSG,
      });
    }
  }
}

module.exports = ServiceMiddleware;
