angular.module('AEIRS').controller('allStudentsController', function($scope, $routeParams, $location, studentFactory){

	console.log('I am able to load my allStudentsController along with my all_students partial');

	//dont wrap in scope, because we want this to show as soon as page loads
	studentFactory.getStudents(function(data){
		console.log('this is data in allStudentsController getStudents', data);
		$scope.students=data;
	})

	$scope.createStudent=function(){
		console.log('createStudent in the addStudentController', $scope.newStudent);
		studentFactory.addStudent($scope.newStudent, function(studentArray){
			$scope.students=studentArray;
		})
	}

	// var studentID=$routeParams.id;
	// console.log('this is routeParams.id ', $routeParams.id);
	// studentFactory.getStudent(studentID, function(data){
	// 	console.log('this is data from show controller ', data);
	// 	$scope.student=data.data[0];
	// })
	//
	// $scope.updateStudent = function(){
	// 	studentFactory.updateStudent($scope.editStudent, function(data){
	// 		$location.path('/');
	// 	})
	// }
})
