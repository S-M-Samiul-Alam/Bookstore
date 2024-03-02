const express = require("express");
const app = express();


const bookRoutes = require('./bookRoutes');


app.use('/books', bookRoutes);
module.exports = app;