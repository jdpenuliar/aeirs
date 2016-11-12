
var AEIRSAppModule = angular.module("AEIRS",["ngRoute","ngMessages","ngCookies","ui.materialize"]);
(function(){

	AEIRSAppModule.config(["$httpProvider","$routeProvider", "$locationProvider", function($httpProvider,$routeProvider,$locationProvider) {
		$routeProvider
		.when("/",{
			templateUrl: "partials/login.html",
			controller: "loginController"
		})
		.when("/dashboard",{
			templateUrl: "partials/dashboard.html"
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
	      templateUrl: "partials/all_students.html"
	    })
	    .when('/students/:id', {
	      controller: 'showStudentController',
	      templateUrl: 'partials/show_student.html'
	    })
	    .when('/students/:id/edit', {
	      controller: 'editStudentController',
	      templateUrl: 'partials/edit_student.html'
	    })
	    //USER routes
	    .when('/users/new', {
	      controller: 'newUserController',
	      templateUrl: 'partials/create_user.html'
	    })
	    .when("/all_users",{
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
		.when('/!', {

		})
		.otherwise({
			redirectTo: "/"
		});
	}]);


})();
