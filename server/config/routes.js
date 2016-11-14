"use strict";
var users = require("./../controllers/users.js");
var students = require("./../controllers/students.js");
var classes = require("./../controllers/classes.js");

// var jwt = require('express-jwt');

module.exports = function(app){
	app.get("/haha",function(req,res){
		users.index(req,res);
	});
	app.post("/login",function(req,res){
		users.login(req,res);
	});
	app.post("/register",function(req,res){
		users.register(req,res);
	});
	//Class routes
	app.get("/allClasses",function(req,res){
		classes.getClasses(req,res);
	});


	//STUDENT ROUTES
	app.get("/all_students",function(req,res){
		students.getStudents(req,res);
	});
	//route for creating new student
	app.post("/students",function(req,res){
		students.studentRegister(req,res);
	});
	app.post('/student/:id/delete', function(req, res){
		console.log('made it to my /student/:id/delete post route');
		students.removeStudent(req,res);
	})
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

	//USER ROUTES
	app.get("/all_users",function(req,res){
		users.getUsers(req,res);
	});
	//route for creating new user
	app.post("/users",function(req,res){
		users.userRegister(req,res);
	});
	app.post('/user/:id/delete', function(req, res){
		console.log('made it to my /user/:id/delete post route');
		users.removeUser(req,res);
	})
	//route for updating specific user
	app.post("/user/:id",function(req,res){
		users.updateUser(req,res);
	});
	//route for showing html edit for specific user
	app.get("/users/:id/edit",function(req,res){
		users.getUser(req,res);
	});
	//route for getting specific user
	app.get("/users/:id",function(req,res){
		users.getUser(req,res);
	});
};
