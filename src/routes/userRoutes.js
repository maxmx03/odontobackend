const { Router } = require('express');

const userRoutes = require('../constants/routes/userRoutes');
const UserController = require('../controllers/UserController');
const UserMiddleware = require('../middlewares/UserMiddleware');

const router = Router();

router.route(userRoutes.FIND_USERS).get(UserController.getAll);

router
  .route(userRoutes.CREATE_USER)
  .post(UserMiddleware.create, UserController.create);

router
  .route(userRoutes.UPDATE_USER_EMAIL)
  .patch(UserMiddleware.updateEmail, UserController.updateEmail);

router
  .route(userRoutes.UPDATE_USER_PASSWORD)
  .patch(UserMiddleware.updatePassword, UserController.updatePassword);

router
  .route(userRoutes.UPDATE_USER_PROFILE)
  .patch(UserMiddleware.updateProfile, UserController.updateProfile);

router
  .route(userRoutes.DELETE_USER)
  .delete(UserMiddleware.delete, UserController.delete);

module.exports = router;
