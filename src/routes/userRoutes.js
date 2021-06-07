const { Router } = require('express');

const userRoutes = require('../constants/routes/userRoutes');
const UserController = require('../controllers/UserController');

const router = Router();

router.route(userRoutes.FIND_USERS).get(UserController.getAll);

module.exports = router;
