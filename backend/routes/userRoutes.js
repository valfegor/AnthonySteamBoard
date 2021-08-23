const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const Auth = require('../middlewares/Auth');
const Validate = require('../middlewares/validate');
const Admin = require('../middlewares/Admin');

router.post("/registerUser",userController.registerNormalUser);
router.post("/login",userController.login);
router.post("/registerAdmin",Auth,Validate,Admin,userController.RegisterAdmin);

module.exports = router; 