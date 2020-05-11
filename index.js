const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const PORT = process.env.PORT || 5000;
const app = express();

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(express.static(__dirname+"/public"));



const mongoose = require('mongoose');
const DB_URL = "mongo://mongo:27017/todoApp";

mongoose.connect(DB_URL).then(()=>{
    app.listen(PORT);
    console.log(`Listening on port`);
});
