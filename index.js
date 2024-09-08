const express = require('express');
const mongoose = require('mongoose');
const app = express();
const User = require('./modules/user.js');
const path = require('path');
const Hotel=require('./modules/hotel.js');
const cookieParser = require('cookie-parser');

mongoose.connect('mongodb://localhost:27017/Hotel-database').then(()=>console.log('mongodb connected!'));

//middleware

app.set("view engine", "ejs");
app.set("views", path.resolve("./views"));

app.use(express.json());
// app.use(express.urlencoded({ extended: false }));
// app.use(cookieParser());

app.use('/api/hotel',Hotel);
app.use('/user',User);

 

app.listen(8080, () => {
     
    console.log('server started at backend!!!');
});