const { Router } = require('express');

const userRoutes = require('../constants/routes/userRoutes');
const UserController = require('../controllers/UserController');
const UserMiddleware = require('../middlewares/UserMiddleware');
const AuthMiddleware = require('../middlewares/AuthMiddleware');

const router = Router();

router
  .route(userRoutes.FIND_USERS)
  .get(AuthMiddleware.isAdmin, UserController.getAll);

router
  .route(userRoutes.CREATE_USER)
  .post(AuthMiddleware.isAdmin, UserMiddleware.create, UserController.create);

router
  .route(userRoutes.UPDATE_USER_EMAIL)
  .patch(
    AuthMiddleware.isAdmin,
    UserMiddleware.updateEmail,
    UserController.updateEmail
  );

router
  .route(userRoutes.UPDATE_USER_PASSWORD)
  .patch(
    AuthMiddleware.isAdmin,
    UserMiddleware.updatePassword,
    UserController.updatePassword
  );

router
  .route(userRoutes.UPDATE_USER_PROFILE)
  .patch(
    AuthMiddleware.isAdmin,
    UserMiddleware.updateProfile,
    UserController.updateProfile
  );

router
  .route(userRoutes.DELETE_USER)
  .delete(AuthMiddleware.isAdmin, UserMiddleware.delete, UserController.delete);

module.exports = router;
