const express = require('express');
const app = express();
const mongoose = require('mongoose');
require('dotenv').config();

app.get('/', (req, res) => {
    res.send("Hello World");
})

const port = process.env.port || 5000;

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, {useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true });

const connection = mongoose.connection;

connection.once('open', () => {
    console.log("MongoDB database connection established successfully");
});

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
})