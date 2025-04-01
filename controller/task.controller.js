// import
const taskModel = require('../models/task.model');

// Express router
const taskRouter = require("express").Router();

// POST API for Task data
taskRouter.post("/add", async (req, res) => {
    try {

        const { task_id, task_name, deadline, assign, description, priority, status } = req.body;

        const newTask = new taskModel({ task_id, task_name, deadline: new Date(deadline), assign, description, priority, status });
        await newTask.save();

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

// GET API for Task data
taskRouter.get("/all", async (req, res) => {
    try {
        const tasks = await taskModel.find();
        return res.status(200).json({
            success: true,
            data: tasks
        });
    } catch (err) {
        return res.status(500).json({
            message: "Error Getting data",
            error: err.message
        });
    }
});

// PATCH method for Update the task
taskRouter.patch("/update/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const updates = req.body;

        const updatedTask = await taskModel.findByIdAndUpdate(id, updates, {
            new: true, // Return the updated document
            runValidators: true, // Validate updates based on schema
        });

        if (!updatedTask) {
            return res.status(404).json({ message: "Task not found" });
        }

        res.json(updatedTask);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

taskRouter.delete('/delete/:id', async (req, res) => {
    try {

        const { id } = req.params;

        const deletedTask = await taskModel.findByIdAndDelete(id);

        if (!deletedTask) {
            return res.status(404).json({ message: "Task not found" });
        }

        res.json({ message: "Task deleted successfully", deletedTask });

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
})

module.exports = taskRouter;