const express = require('express');

const router = express.Router();

const Auth = require('../middlewares/Auth');

const validate = require('../middlewares/validate');

const boardController = require('../controllers/boardController');

router.post("/registerTask",Auth,validate,boardController.registerTask);

router.put("/modifyTask",Auth,validate,boardController.updateTask);

router.delete("/deleteTask/:_id",Auth,validate,boardController.removeTask);

router.get("/listTask",Auth,validate,boardController.listTask);

module.exports = router;