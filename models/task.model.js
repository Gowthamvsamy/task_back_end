// import
const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({
    task_id: {
        type: 'string',
        required: true,
        unique: true,
    },
    task_name: {
        type: 'string',
        required: true,
        unique: true,
    },
    deadline:{
        type: 'string',
        required: true,
    },
    assign:{
        type: 'string',
        required: true,
    },
    description:{
        type: 'string',
        required: true,
    },
    status:{
        type: 'string',
        default: "Todo"
    }
});

const taskModel = mongoose.model('task', taskSchema);

module.exports = taskModel;