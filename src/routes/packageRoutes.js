const { Router } = require('express');

const packageRoutes = require('../constants/routes/packageRoutes');
const PackageController = require('../controllers/PackageController');
const PackageMiddleware = require('../middlewares/PackageMiddleware');

const router = Router();

router.route(packageRoutes.FIND_PACKAGES).get(PackageController.getAll);
router
  .route(packageRoutes.CREATE_PACKAGE)
  .post(PackageMiddleware.create, PackageController.create);
router
  .route(packageRoutes.UPDATE_PACKAGE_CODE)
  .patch(PackageMiddleware.updateCode, PackageController.updateCode);
router
  .route(packageRoutes.UPDATE_PACKAGE_PROFILE)
  .patch(PackageMiddleware.updateProfile, PackageController.updateProfile);
router
  .route(packageRoutes.DELETE_PACKAGE)
  .delete(PackageMiddleware.delete, PackageController.delete);

module.exports = router;
