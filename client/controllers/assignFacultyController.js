AEIRSAppModule.controller('assignFacultyController', function($scope, $routeParams, $cookies, $location, gradesFactory, studentFactory){

	console.log('I am able to load my assignFacultyController along with my assign faculty partial');

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

	var subjectID=$routeParams.id;
	console.log('this is routeParams.id ', $routeParams.id, "this is subjectID", subjectID);

	gradesFactory.getSubject(subjectID, function(data){
		console.log('this is data from getSubject assignFacultyController-------------\n', data);
		$scope.subject=data.data;
	})

})
