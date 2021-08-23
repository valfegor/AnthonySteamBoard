const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

router.post("/registerUser",userController.registerNormalUser);
router.post("/login",userController.login);


module.exports = router; 