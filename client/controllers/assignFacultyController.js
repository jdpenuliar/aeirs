AEIRSAppModule.controller('assignFacultyController', function($scope, $routeParams, $cookies, $location, sectionFactory){

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

	var sectionID=$routeParams.id;
	console.log('this is routeParams.id ', $routeParams.id);
	console.log('this is sectionID' , sectionID);

	//dont wrap in scope, because we want this to show as soon as page loads
	sectionFactory.getFaculty(sectionID, function(data){
		console.log('this is data in assignFacultyController getFaculty', data);
		$scope.faculty=data;
	})
	$scope.items = [{
		id: 1,
		label: 'aLabel',
		subItem: { name: 'aSubItem' }
	}, {
		id: 2,
		label: 'bLabel',
		subItem: { name: 'bSubItem' }
	}];

})