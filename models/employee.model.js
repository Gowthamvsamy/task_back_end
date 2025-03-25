// import
const mongoose = require("mongoose");

// Schema
const empSchema = new mongoose.Schema({
    emp_id: {
        type: Number,
        unique: true,
    },
    emp_name: {
        type: String,
    }
});

// Exports
const employeeModel = mongoose.model('employee', empSchema);

module.exports = employeeModel;