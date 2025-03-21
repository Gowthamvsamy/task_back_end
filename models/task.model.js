// import
const mongoose = require("mongoose");

// Schema
const taskSchema = new mongoose.Schema({
    task_id: {
        type: String,
        required: true,
        unique: true,
    },
    task_name: {
        type: String,
        required: true,
        unique: true,
    },
    deadline:{
        type: Date,  
        required: true,
    },
    assign:{
        type: String,
        required: true,
    },
    description:{
        type: String,
        required: true,
    },
    priority:{
        type: String,
        required: true,
    },
    status:{
        type: String,
        default: "Todo"
    }
});

// Exports
const taskModel = mongoose.model('task', taskSchema);

module.exports = taskModel;