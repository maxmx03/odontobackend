const { Router } = require('express');

const userRoutes = require('./userRoutes');
const studentRoutes = require('./studentRoutes');
const packageRoutes = require('./packageRoutes');
const authRoutes = require('./authRoutes');
const LimiterMiddleware = require('../middlewares/LimiterMiddleware');
const AuthMiddleware = require('../middlewares/AuthMiddleware');

const router = Router();

router.use(
  '/user',
  LimiterMiddleware.request(),
  AuthMiddleware.isAdmin,
  userRoutes
);
router.use(
  '/student',
  LimiterMiddleware.request(),
  AuthMiddleware.isUser,
  studentRoutes
);
router.use(
  '/package',
  LimiterMiddleware.request(),
  AuthMiddleware.isUser,
  packageRoutes
);
router.use('/auth', authRoutes);

module.exports = router;
