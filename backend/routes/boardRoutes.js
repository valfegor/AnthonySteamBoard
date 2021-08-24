const express = require('express');

const router = express.Router();

const Auth = require('../middlewares/Auth');

const validate = require('../middlewares/validate');

const boardController = require('../controllers/boardController');

const multiparty = require("connect-multiparty");

const multi = multiparty();

const Upload = require('../middlewares/image');

router.post("/registerTask",Auth,validate,boardController.registerTask);

router.put("/modifyTask",Auth,validate,boardController.updateTask);

router.delete("/deleteTask/:_id",Auth,validate,boardController.removeTask);

router.get("/listTask",Auth,validate,boardController.listTask);

router.post("/imageTask",multi,Upload,Auth,validate,boardController.saveTaskImg);

module.exports = router;