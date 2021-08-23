const express = require('express');

const router = express.Router();

const roleController = require('../controllers/roleController');

router.post('/registerRole',roleController.registerRole);

router.get('/listRole',roleController.listRoles);

router.put('/updateRole',roleController.updateRole);


module.exports = router;