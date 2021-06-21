const { Router } = require('express');

const authRoutes = require('../constants/routes/authRoutes');
const AuthController = require('../controllers/AuthController');
const AuthMiddleware = require('../middlewares/AuthMiddleware');

const router = Router();

router
  .route(authRoutes.IS_USER_LOGGED)
  .get(AuthMiddleware.userLogged, AuthController.userLogged);
router
  .route(authRoutes.USER_LOGIN)
  .post(AuthMiddleware.loginUser, AuthController.loginUser);
router
  .route(authRoutes.RECOVER_PASSWORD)
  .post(AuthMiddleware.recoverUserPassword, AuthController.recoverUserPassword);

module.exports = router;
