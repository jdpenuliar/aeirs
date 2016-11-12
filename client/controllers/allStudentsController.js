AEIRSAppModule.controller('allStudentsController', function($scope, $routeParams, $location, studentFactory){

	console.log('I am able to load my allStudentsController along with my all_students partial');

	//dont wrap in scope, because we want this to show as soon as page loads
	studentFactory.getStudents(function(data){
		console.log('this is data in allStudentsController getStudents', data);
		$scope.students=data;
	})
})
