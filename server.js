"use strict";
var express = require("express");
var path = require("path");
var bodyParser = require("body-parser");
var fs = require("fs");
var app = express();

// app.use(function (req, res, next) {
//     // Website you wish to allow to connect
//     // res.setHeader('Access-Control-Allow-Origin', 'https://localhost:8080');
//     res.setHeader('Access-Control-Allow-Origin', '*');

//     // Request methods you wish to allow
//     res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

//     // Request headers you wish to allow
//     // res.header('Access-Control-Allow-Headers', 'X-Requested-With,Content-Type');
//     res.setHeader('Access-Control-Allow-Headers', 'Content-Type,X-Requested-With,X-Forwarded-For');

//     // Set to true if you need the website to include cookies in the requests sent
//     // to the API (e.g. in case you use sessions)
//     res.setHeader('Access-Control-Allow-Credentials', true);

//     // Pass to next layer of middleware
//     next();
// });
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname,"./client")));
app.use(express.static(path.join(__dirname,"./node_modules")));
app.use(express.static(path.join(__dirname,"./bower_components")));
// app.use(expressJwt({ secret: jwtSecret }).unless({ path: ['/', '/login', '/register'] }));
require("./server/config/mongoose.js");
require("./server/config/routes.js")(app);

app.listen(8000,function(){
	console.log("haha on 8000");
});
