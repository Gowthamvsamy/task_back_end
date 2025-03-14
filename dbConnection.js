const mongoose = require("mongoose");

require("dotenv").config();

const DB_URL = process.env.DB_URL;

async function createDbConnection() {
    try {
        await mongoose.connect(DB_URL);
        console.log('connected to mongoDB successfully');
    } catch (err) {
        console.error(err.message);
    }

}

module.exports = { createDbConnection };