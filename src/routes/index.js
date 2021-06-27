const { Router } = require('express');

const userRoutes = require('./userRoutes');
const studentRoutes = require('./studentRoutes');
const packageRoutes = require('./packageRoutes');
const authRoutes = require('./authRoutes');
const serviceRoutes = require('./serviceRoutes');
const LimiterMiddleware = require('../middlewares/LimiterMiddleware');
const AuthMiddleware = require('../middlewares/AuthMiddleware');

const router = Router();

router.use('/auth', authRoutes);

router.use(
  '/service',
  LimiterMiddleware.request(),
  AuthMiddleware.isUser,
  serviceRoutes
);

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

module.exports = router;
