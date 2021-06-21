const { Router } = require('express');

const userRoutes = require('./userRoutes');
const studentRoutes = require('./studentRoutes');
const packageRoutes = require('./packageRoutes');
const authRoutes = require('./authRoutes');

const router = Router();

router.use('/user', userRoutes);
router.use('/student', studentRoutes);
router.use('/package', packageRoutes);
router.use('/auth', authRoutes);

module.exports = router;
