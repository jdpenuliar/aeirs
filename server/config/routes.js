"use strict";
var users = require("./../controllers/users.js");
var students = require("./../controllers/students.js");
var classes = require("./../controllers/classes.js");
var gradeLevel = require("./../controllers/gradeLevels.js");
var sections=require("./../controllers/sections.js")
var grades=require("./../controllers/grades.js")
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

	//SECCTION GRADES
	app.get("/student/:id/edit/grades",function(req,res){
		grades.getGrades(req,res);
	});
	app.post("/student/:id/update/grades",function(req,res){
		grades.updateGrades(req,res);
	});
	app.get("/student/:id/text",function(req,res){
		console.log('text specific at backendasdf-------\n',req.params.id);
		students.textStudentParents(req,res);
	});

	//SECTION ROUTES
	app.post("/new_section",function(req,res){
		console.log('made it to my /new_section post route');
		sections.addSection(req,res);
	});
	app.get("/faculty/:id/sections",function(req,res){
		console.log('made it to my /facultyidsection get route----------\n',req.params);
		sections.getSectionFaculty(req,res);
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
	app.get("/section/:id/assign_faculty",function(req,res){
		sections.getFaculty(req,res);
	});
	app.post("/assignFacultyTosection",function(req,res){
		sections.assignFacultyTosection(req,res);
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

	//subject routes 
	app.get("/subject/:id/assign",function(req,res){
		grades.getSubject(req,res);
	});
	app.get("/subject/:id",function(req,res){
		grades.getSubjectGrade(req,res);
	});
	app.post("/subject/:id/update",function(req,res){
		grades.updateSubjectGrades(req,res);
	});


	app.get("/text",function(req,res){
		// SDK Version: 2.x 3.x
		// Twilio Credentials 
		var accountSid = 'AC6299d9965195b73c17cc2b122f001981'; 
		var authToken = 'f5aaa6ee4c008c0606efa4e27a4417b4'; 
		 
		//require the Twilio module and create a REST client 
		var client = require('twilio')(accountSid, authToken); 
		 
		client.messages.create({ 
		    // to: "+14089307903", 
		    // to: "+639056211093", 
		    to: "+639267785622", 
		    from: "+18443340250", 
		    body: "DBAES test message", 
		}, function(err, message) { 
		    if(err){
		    	console.log("twilio err\n", err);
		    }else{
		    	console.log("twilio haha\n", message);
		    }
		});
	});

};
