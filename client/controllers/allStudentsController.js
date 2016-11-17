AEIRSAppModule.controller('allStudentsController', function($scope, $routeParams, $cookies, $location, studentFactory){

	console.log('I am able to load my allStudentsController along with my all_students partial');

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

	//dont wrap in scope, because we want this to show as soon as page loads
	studentFactory.getStudents(function(data){
		console.log('this is data in allStudentsController getStudents', data);
		$scope.students=data;
	})
})
