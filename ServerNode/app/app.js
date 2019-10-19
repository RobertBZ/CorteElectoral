'use strict'
const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const app = express();

app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(function (req, res, next) {

    const allowedOrigins = ['http://localhost:4200'];
    const host = req.get("origin");
    console.log(host);
    if(host !=undefined){
    allowedOrigins.forEach(function(val, key){
        if (host.indexOf(val) > -1){
            res.setHeader('Access-Control-Allow-Origin', host);
        }
      })}
      else{
        res.setHeader('Access-Control-Allow-Origin', "http://localhost:4200");
      }
       res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
       res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
       res.setHeader('Access-Control-Allow-Credentials', true);
       next();
   });

// Rutas
const userRoute = require('./Routes/userRoute');
const candidateRoute = require('./Routes/candidateRoute')

app.use('/user', userRoute);
app.use('/candidate', candidateRoute);

module.exports = app;