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
	//route for creating new student
	app.post("/students",function(req,res){
		students.studentRegister(req,res);
	});
	//route for updating specific student
	app.post("/student/:id",function(req,res){
		students.updateStudent(req,res);
	});
	//route for showing html edit for specific student
	app.get("/students/:id/edit",function(req,res){
		students.getStudent(req,res);
	});
	//route for getting specific student
	app.get("/students/:id",function(req,res){
		students.getStudent(req,res);
	});
};
