const { Router } = require('express');

const serviceRoutes = require('../constants/routes/serviceRoutes');
const ServiceController = require('../controllers/ServiceController');

const router = Router();

router.route(serviceRoutes.FIND_SERVICES).get(ServiceController.getAll);

module.exports = router;
