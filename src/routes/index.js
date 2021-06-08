const { Router } = require('express');

const userRoutes = require('./userRoutes');
const studentRoutes = require('./studentRoutes');

const router = Router();

router.use('/user', userRoutes);
router.use('/student', studentRoutes);

export default router;
