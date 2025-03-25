// import 
const employeeModel = require('../models/employee.model');

// Export router
const employeeRouter = require("express").Router();

// Get API for Employee Data
employeeRouter.get("/", async (req, res) => {
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

module.exports = employeeRouter;