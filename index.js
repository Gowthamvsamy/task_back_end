// import
const express = require("express");
const cors = require("cors");
const { createDbConnection } = require("./dbConnection");
const taskController = require('./controller/task.controller')

// create express API_server
const API_SERVER = express();


// Environment settings
require('dotenv').config();

// Middleware
API_SERVER.use(cors());
API_SERVER.use(express.json());

// DB connection
createDbConnection()
    .then(() => console.log('Connected to MongoDB'))
    .catch((error) => console.error('Error connecting to MongoDB:', error));


API_SERVER.get('/', function (req, res) {
    return res.status(200).json({
        message: 'Welcome to todo task',
    });
});

API_SERVER.use('/task', taskController)

API_SERVER.listen(process.env.PORT, process.env.HOSTNAME, function () {
    console.log("server start")
    console.log(`http://${process.env.HOSTNAME}:${process.env.PORT}`);
});