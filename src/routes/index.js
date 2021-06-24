const { Router } = require('express');

const userRoutes = require('./userRoutes');
const studentRoutes = require('./studentRoutes');
const packageRoutes = require('./packageRoutes');
const authRoutes = require('./authRoutes');
const LimiterMiddleware = require('../middlewares/LimiterMiddleware');

const router = Router();

router.use('/user', LimiterMiddleware.request, userRoutes);
router.use('/student', LimiterMiddleware.request, studentRoutes);
router.use('/package', LimiterMiddleware.request, packageRoutes);
router.use('/auth', LimiterMiddleware.request, authRoutes);

module.exports = router;
