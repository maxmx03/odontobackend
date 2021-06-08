const { Router } = require('express');

const studentRoutes = require('../constants/routes/studentRoutes');
const StudentController = require('../controllers/StudentController');
const StudentMiddleware = require('../middlewares/StudentMiddleware');

const router = Router();

router.route(studentRoutes.FIND_STUDENTS).get(StudentController.getAll);
router
  .route(studentRoutes.CREATE_STUDENT)
  .get(StudentMiddleware.create, StudentController.create);
router
  .route(studentRoutes.UPDATE_STUDENT_EMAIL)
  .patch(StudentMiddleware.updateEmail, StudentController.updateEmail);
router
  .route(studentRoutes.UPDATE_STUDENT_PASSWORD)
  .patch(StudentMiddleware.updatePassword, StudentController.updatePassword);
router
  .route(studentRoutes.UPDATE_STUDENT_PROFILE)
  .patch(StudentMiddleware.updateProfile, StudentController.updateProfile);
router
  .route(studentRoutes.DELETE_STUDENT)
  .delete(StudentMiddleware.delete, StudentController.delete);

module.exports = router;
