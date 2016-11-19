"use strict";
var users = require("./../controllers/users.js");
var students = require("./../controllers/students.js");
var classes = require("./../controllers/classes.js");
var gradeLevel = require("./../controllers/gradeLevels.js");
var sections=require("./../controllers/sections.js")
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

	//CLASS ROUTES
	app.get("/allClasses",function(req,res){
		classes.getClasses(req,res);
	});
	app.post("/new_class", function(req, res){
		classes.addclass(req, res);
	})


	//STUDENT ROUTES
	//route for creating new student
	app.post("/student",function(req,res){
		students.addStudent(req,res);
	});
	app.get("/all_students",function(req,res){
		students.getStudents(req,res);
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

	//SECTION ROUTES
	app.post("/new_section",function(req,res){
		console.log('made it to my /new_section post route');
		sections.addSection(req,res);
	});
	app.get("/GL/:id",function(req,res){
		console.log('made it to my getSections by GL_ID route');
		sections.getSections(req,res);
	});
	app.get("/section/:id",function(req,res){
		console.log('made it to my getSection by section/:id route');
		sections.getSection(req,res);
	});
	app.post("/section/:id/add_student",function(req,res){
		console.log('made it to my addStudentSection by section/:id/add_student route');
		sections.addStudentSection(req,res);
	});
	app.get("/section/:id/show_students",function(req,res){
		console.log('made it to my addStudentSection by section/:id/show_students route');
		sections.getStudentsFromSection(req,res);
	});

	//GRADE LEVEL ROUTES
	//route for creating new sections by gradelevel
	app.post("/gradeLevel",function(req,res){
		console.log('made it to my /gradeLevel post route');
		gradeLevel.addgradeLevel(req,res);
	});
	app.get("/allgradeLevels",function(req,res){
		gradeLevel.getgradeLevels(req,res);
	});
	//route for getting specific grade level
	app.get("/gradelevel/:id",function(req,res){
		gradeLevel.getGradeLevel(req,res);
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
