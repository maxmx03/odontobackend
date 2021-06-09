const { Router } = require('express');

const userRoutes = require('./userRoutes');
const studentRoutes = require('./studentRoutes');
const packageRoutes = require('./packageRoutes');

const router = Router();

router.use('/user', userRoutes);
router.use('/student', studentRoutes);
router.use('/package', packageRoutes);

module.exports = router;
