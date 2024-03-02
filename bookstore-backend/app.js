const express = require('express');


const bodyParser = require('body-parser');
const app = express();
var cors = require("cors");

const apiRouter = require("./routes/api.js");

// Middleware
app.use(bodyParser.json());

app.use(cors()); 

app.use("/api", apiRouter);

module.exports=app;




