const { Router } = require('express');

const studentRoutes = require('../constants/routes/studentRoutes');
const StudentController = require('../controllers/StudentController');
const StudentMiddleware = require('../middlewares/StudentMiddleware');
const AuthMiddleware = require('../middlewares/AuthMiddleware');

const router = Router();

router
  .route(studentRoutes.FIND_STUDENTS)
  .get(AuthMiddleware.isUser, StudentController.getAll);

router
  .route(studentRoutes.CREATE_STUDENT)
  .post(
    AuthMiddleware.isUser,
    StudentMiddleware.create,
    StudentController.create
  );

router
  .route(studentRoutes.UPDATE_STUDENT_EMAIL)
  .patch(
    AuthMiddleware.isUser,
    StudentMiddleware.updateEmail,
    StudentController.updateEmail
  );

router
  .route(studentRoutes.UPDATE_STUDENT_PASSWORD)
  .patch(
    AuthMiddleware.isUser,
    StudentMiddleware.updatePassword,
    StudentController.updatePassword
  );

router
  .route(studentRoutes.UPDATE_STUDENT_PROFILE)
  .patch(
    AuthMiddleware.isUser,
    StudentMiddleware.updateProfile,
    StudentController.updateProfile
  );

router
  .route(studentRoutes.DELETE_STUDENT)
  .delete(
    AuthMiddleware.isUser,
    StudentMiddleware.delete,
    StudentController.delete
  );

module.exports = router;
