const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

router.post("/registerUser",userController.registerNormalUser);


module.exports = router; 