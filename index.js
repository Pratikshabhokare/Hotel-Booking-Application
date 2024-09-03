const express = require('express');
const mongoose = require('mongoose');
const app = express();
const User = require('./modules/user');
 

mongoose.connect('mongodb://localhost:27017/Hotel-database').then(()=>console.log('mongodb connected!'))

app.get('/', (req, res) => {
    res.send("hello world!");
});

app.listen(8080, () => {
     
    console.log('server started at backend!!!');
});