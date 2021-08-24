const express = require('express');

const Auth = require('../middlewares/Auth');

const Validate = require('../middlewares/validate');

const Admin = require('../middlewares/Admin');

const router = express.Router();

const roleController = require('../controllers/roleController');

router.post('/registerRole',Auth,Validate,Admin,roleController.registerRole);

router.get('/listRole',Auth,Validate,Admin,roleController.listRoles);

router.put('/updateRole',Auth,Validate,Admin,roleController.updateRole);


module.exports = router;