const express = require('express');
const cors = require('cors');
const bodyParser = require("body-parser");
const app = express();


const studentRoutes = require('./src/routes/studentRoutes');

app.use(cors("*"));
app.use(bodyParser.json());


// 2) Routes
app.use('/api/v1/student', studentRoutes)

module.exports = app;