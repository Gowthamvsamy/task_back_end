// import
const express = require("express");
const fs = require("fs");
const cors = require("cors");
const bodyParser = require("body-parser");

// create express API_server
const API_SERVER = express();

// Middleware
API_SERVER.use(cors());
API_SERVER.use(bodyParser.json());

// File path for storing data
const filePath = "./data.json";

// Environment settings
require('dotenv').config();

// API to save a form data
API_SERVER.post("/save-data", (req, res) => {
    const newData = req.body;

    fs.readFile(filePath, "utf8", (err, data) => {
        let jsonData = [];

        if(!err && data){
            jsonData = JSON.parse(data)
        }

        jsonData.push(newData);

        fs.writeFile(filePath, JSON.stringify(jsonData, null, 2), (err) => {
            if(err) {
                return res.status(500).json({message : "Error writing file"});
            }
            res.status(200).json({message: "Data saved successfully"});
        });
    });
});

API_SERVER.listen(process.env.PORT, process.env.HOSTNAME, function () {
    console.log("server start")
    console.log(`http://${process.env.HOSTNAME}:${process.env.PORT}`);
});