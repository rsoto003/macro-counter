const express = require('express');
const exphhbs = require('express-handlebars');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());


const port = 5000;

app.get('/', (req, res) => {
    res.send('this is the index page');
});

app.listen(port, (req, res) => {
    console.log(`Server started and running on port ${port} lol`);
});