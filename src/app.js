require('dotenv').config();

const express = require('express');
const connectToMongo = require('./db');

const app = express();

app.use(express.json());

connectToMongo()

const PORT = process.env.NODE_PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

module.exports = app;