const express = require('express');

const router = express.Router();

const Auth = require('../middlewares/Auth');

const validate = require('../middlewares/validate');

const boardController = require('../controllers/boardController');

app.post("/registerTask",Auth,Validate,boardController.registerTask);

app.put("/modifyTask",Auth,Validate,boardController.updateTask);

app.delete("/deleteTask",Auth,Validate,boardController.deleteTask);

app.get("/listTask",Auth,Validate,boardController.listTask);

module.exports = router;