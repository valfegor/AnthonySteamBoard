const express = require('express');

const router = express.Router();

const Auth = require('../middlewares/Auth');

const validate = require('../middlewares/validate');

const boardController = require('../controllers/boardController');

app.post("/registerTask",boardController.registerTask);

app.put("/modifyTask",boardController.updateTask);

app.delete("/deleteTask",boardController.deleteTask);

app.get("/listTask",boardController.listTask);

module.exports = router;