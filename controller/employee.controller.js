// import 
const employeeModel = require('../models/employee.model');

// Export router
const employeeRouter = require("express").Router();

// Get API for Employee Data
employeeRouter.get("/all", async (req, res) => {
    try {
        const employee = await employeeModel.find();

        return res.status(200).json({
            success: true,
            data: employee
        })
    } catch (err) {
        return res.status(500).json({
            message: "Error Getting data",
            error: err.message
        });
    }
});

// POST API for Employee data
employeeRouter.post("/add", async (req, res) => {
    try {
        const {emp_id, emp_name} = req.body;

        const newEmp = new employeeModel({emp_id, emp_name});
        await newEmp.save();

        return res.status(201).json({
            message: 'Employee added successfully',
            success: true,
            data: newEmp
        });
    } catch (err) {
        return res.status(500).json({
            message: 'Error Adding Employee',
            error: err.message
        });
    }
});

module.exports = employeeRouter;