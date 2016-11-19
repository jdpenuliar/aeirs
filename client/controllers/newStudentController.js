angular.module('AEIRS').controller('newStudentController', function($scope, $routeParams, $cookies, $location, studentFactory){

	console.log('I am able to load my newStudentController along with my all_students partial');

	var logged_in_user = $cookies.get('logged_user');
	$scope.firstName = $cookies.get("firstName");
	$scope.userLevel = $cookies.get("userLevel");
	$scope.lastName = $cookies.get("lastName");
	$scope.emailAddress = $cookies.get("emailAddress");
	console.log('this is the cookie data',  $scope.firstName )
	if(!logged_in_user){
		$location.url('/')
	}
	//log out method
	$scope.logout = function(){
		$cookies.remove('logged_user');
		$location.url('/');
	}


	$scope.studentRegister=function(){
		console.log('studentRegister in the newStudentController', $scope.studentRegistrationData,"\nrouteparams-----\n", $routeParams);
		$scope.studentRegistrationData.section = $routeParams.id;
		studentFactory.addStudent($scope.studentRegistrationData, function(studentArray){
			$scope.students=studentArray;
			console.log("id--------------nrouteparams--------\n",$routeParams)
		});
		console.log("routeparamsqwerqwer-----\n", $routeParams.id);
		$location.url('/section/'+$scope.studentRegistrationData.section);
	}
})
