const express = require('express');
const exphhbs = require('express-handlebars');
const mongoose = require('mongoose');

const app = express();

const port = 5000;

app.get('/', (req, res) => {
    res.send('this is the index page');
});

app.listen(port, (req, res) => {
    console.log(`Server started and running on port ${port} lol`);
});