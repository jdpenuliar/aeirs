angular.module('AEIRS').controller('newStudentController', function($scope, $routeParams, $location, studentFactory){

	console.log('I am able to load my newStudentController along with my all_students partial');

	$scope.studentRegister=function(){
		console.log('studentRegister in the newStudentController', $scope.studentRegistrationData);
		studentFactory.addStudent($scope.studentRegistrationData, function(studentArray){
			$scope.students=studentArray;
		})
	}
})
