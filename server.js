"use strict";
var express = require("express");
var path = require("path");
var bodyParser = require("body-parser");
var fs = require("fs");
var jwtSecret = 'aasjidfjiodsjfiosajfs';
var expressJwt = require('express-jwt');
//cookie parser
//favicon
//morgan?
//passport
// var jwt = require("jwt");

// sign with default (HMAC SHA256)
// var jwt = require('jsonwebtoken');
// var token = jwt.sign({ haha: 'yohaha' }, 'haha', {expiresIn:60});

// console.log("------------------------------\n",token);



var app = express();

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname,"./client")));
// app.use(expressJwt({ secret: jwtSecret }).unless({ path: ['/', '/login', '/register'] }));
require("./server/config/mongoose.js");
require("./server/config/routes.js")(app);

app.listen(8000,function(){
	console.log("haha on 8000");
});

