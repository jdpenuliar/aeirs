var users = require("./../controllers/users.js");
var students = require("./../controllers/students.js");
// var jwt = require('express-jwt');

module.exports = function(app){
	app.get("/haha",function(req,res){
		users.index(req,res);
	});
	app.post("/login",function(req,res){
		users.login(req,res);
	});
	app.post("/register",function(req,res){
		users.create(req,res);
	});
	app.get("/all_students",function(req,res){
		students.getStudents(req,res);
	});
	app.get("/students/:id",function(req,res){
		students.getStudent(req,res);
	});

};
