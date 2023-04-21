const express = require("express");
const router = express.Router();
// require the Home Controller
const homeController = require("../controllers/home_controller");

// route of the home page
router.get("/", homeController.home);
// route to create a task
router.post("/create-task", homeController.createTask);
// route to delete one or more tasks
router.post("/delete-task", homeController.deleteTasks);

module.exports = router;
