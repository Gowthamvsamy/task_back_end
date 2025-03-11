// import
const express = require("express");

// create express API_server
const API_SERVER = express();

// Environment settings
require('dotenv').config();

API_SERVER.listen(process.env.PORT, process.env.HOSTNAME, function () {
    console.log("server start")
    console.log(`http://${process.env.HOSTNAME}:${process.env.PORT}`);
});