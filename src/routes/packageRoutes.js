const { Router } = require('express');

const packageRoutes = require('../constants/routes/packageRoutes');
const PackageController = require('../controllers/PackageController');
const PackageMiddleware = require('../middlewares/PackageMiddleware');
const AuthMiddleware = require('../middlewares/AuthMiddleware');

const router = Router();

router
  .route(packageRoutes.FIND_PACKAGES)
  .get(AuthMiddleware.isUser, PackageController.getAll);

router
  .route(packageRoutes.CREATE_PACKAGE)
  .post(
    AuthMiddleware.isUser,
    PackageMiddleware.create,
    PackageController.create
  );

router
  .route(packageRoutes.UPDATE_PACKAGE_CODE)
  .patch(
    AuthMiddleware.isUser,
    PackageMiddleware.updateCode,
    PackageController.updateCode
  );

router
  .route(packageRoutes.UPDATE_PACKAGE_PROFILE)
  .patch(
    AuthMiddleware.isUser,
    PackageMiddleware.updateProfile,
    PackageController.updateProfile
  );

router
  .route(packageRoutes.DELETE_PACKAGE)
  .delete(
    AuthMiddleware.isUser,
    PackageMiddleware.delete,
    PackageController.delete
  );

module.exports = router;
