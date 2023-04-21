// Require moment js to format the Dates
const moment = require("moment");
// Require Task Model to interact with MongoDB
const Task = require("../models/task");

module.exports.home = async (req, res) => {
    try {
        // Get All Tasks
        let tasks = await Task.find({});
        tasks.forEach((task) => {
            // If the Due Date DOes not exist for a Task set the formatedDueDate Property with a NO DEADLINE VALUE else provide the format in which the date is provided in the design
            if (task.due_date == null) {
                task.formatedDueDate = "NO DEADLINE";
            } else {
                task.formatedDueDate = moment(task.due_date).format("ll");
            }
        });
        return res.render("home", {
            title: "MP TODO List",
            tasks: tasks,
        });
    } catch (err) {
        console.log(`Error in loading tasks: ${err}`);
        return res.render("home", {
            title: "MP TODO List",
            tasks: [],
        });
    }
};

module.exports.createTask = async (req, res) => {
    try {
        // Create the Task
        let task = await Task.create(req.body);
        console.log(`Task created: ${task.id}`);
        return res.redirect("back");
    } catch (err) {
        console.log(`Error in creating task: ${err}`);
        return res.redirect("back");
    }
};

module.exports.deleteTasks = async (req, res) => {
    // Check if any Taks are selected to be deleted, if no Tasks are selected redirect back to home page
    if (req.body.tasks == undefined) {
        console.log(`No Tasks selected`);
        return res.redirect("back");
    }
    try {
        // Delete Selected Tasks
        await Task.deleteMany({
            _id: { $in: req.body.tasks },
        });
        console.log(`Task deleted: ${req.body.tasks}`);
        return res.redirect("back");
    } catch (err) {
        console.log(`Error in deleting task(s): ${err}`);
        return res.redirect("back");
    }
};
