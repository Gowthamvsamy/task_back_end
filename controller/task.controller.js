const taskModel = require('../models/task.model');

const taskRouter = require("express").Router();

taskRouter.post("/", (req, res) => {
    try {

        const { task_id, task_name, deadline, assign, description, status } = req.body;

        const newTask = new taskModel({ task_id, task_name, deadline, assign, description, status });

        return res.status(201).json({
            message: 'Task Added successfully',
            success: true,
            data: newTask
        });
    } catch (err) {
        return res.status(500).json({
            message: 'Error Adding task',
            error: err.message
        });
    }
});

module.exports = taskRouter;