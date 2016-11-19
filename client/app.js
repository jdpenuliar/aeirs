var AEIRSAppModule = angular.module("AEIRS",["ngRoute","ngMessages","ngCookies","ui.materialize"]);
(function(){

	AEIRSAppModule.config(["$httpProvider","$routeProvider", "$locationProvider", function($httpProvider,$routeProvider,$locationProvider) {
		$routeProvider
		.when("/",{
			templateUrl: "partials/login.html",
			controller: "loginController"
		})
		//STUDENT ROUTES
		.when('/students', {
			controller: 'FacultyController',
			templateUrl: 'partials/students.html'
		})
		.when('/students/new', {
			controller: 'newStudentController',
			templateUrl: 'partials/createStudent.html'
		})
		.when("/all_students",{
			controller: "allStudentsController",
			templateUrl: "partials/students.html"
		})
		.when('/student/:id', {
			controller: 'showStudentController',
			templateUrl: 'partials/show_student.html'
		})
		.when('/student/:id/edit', {
			controller: 'editStudentController',
			templateUrl: 'partials/edit_student.html'
		})
	    //USER routes
	    .when('/dashboard',
	    {
	    	templateUrl: "partials/dashboard.html",
	    	controller: 'loginController'
	    })
	    .when('/faculty/createUser', {
	    	controller: 'loginController',
	    	templateUrl: 'partials/create_user.html'
	    })
	    .when("/faculty/allUsers",{
	    	controller: 'loginController',
	    	templateUrl: "partials/all_users.html"
	    })
	    .when('/users/:id', {
	    	controller: 'showUserController',
	    	templateUrl: 'partials/show_user.html'
	    })
	    .when('/users/:id/edit', {
	    	controller: 'editUserController',
	    	templateUrl: 'partials/edit_user.html'
	    })

	    //Class Routes
	    .when("/allClasses",{
			controller: "allClassesController",
			templateUrl: "partials/all_classes.html"
		})
		.when("/new_class",{
			controller: "newClassController",
			templateUrl: "partials/create_class.html"
		})

		//Grades routes 
		.when('/student/:id/grades', {
			controller: 'showStudentGradesController',
			templateUrl: 'partials/show_student_grades.html'
		})
		.when('/student/:id/edit/grades', {
			controller: 'editStudentGradesController',
			templateUrl: 'partials/edit_student_grades.html'
		})

		//section routes
		.when('/grade/:id/sections', {
			controller: 'allSectionsController',
			templateUrl: 'partials/all_sections.html'
		})
		.when('/section/:id/add_student', {
			controller: 'newStudentController',
			templateUrl: 'partials/addStudent_section.html'
		})
		.when('/section/:id', {
			controller: 'showSectionController',
			templateUrl: 'partials/show_section.html'
		})

	    //GradeLevel Routes
	    .when('/newGradeLevel', {
			controller: 'newGradeLevelController',
			templateUrl: 'partials/create_GradeLevel.html'
		})
		.when('/gradelevel/:id', {
			controller: 'showGradeLevelController',
			templateUrl: 'partials/show_gradeLevel.html'
		})
	    .when('/!', {

	    })
	    .otherwise({
	    	redirectTo: "/dashboard"
	    });
	}]);


})();
