const { Router } = require('express');

const authRoutes = require('../constants/routes/authRoutes');
const AuthController = require('../controllers/AuthController');
const AuthMiddleware = require('../middlewares/AuthMiddleware');
const LimiterMiddleware = require('../middlewares/LimiterMiddleware');

const router = Router();

router
  .route(authRoutes.IS_USER_LOGGED)
  .get(AuthMiddleware.isUserLogged, AuthController.isUserLogged);

router
  .route(authRoutes.USER_LOGIN)
  .post(
    LimiterMiddleware.auth(),
    AuthMiddleware.loginUser,
    AuthController.loginUser
  );

router
  .route(authRoutes.RECOVER_PASSWORD)
  .post(
    LimiterMiddleware.auth(),
    AuthMiddleware.recoverUserPassword,
    AuthController.recoverUserPassword
  );

module.exports = router;
