AEIRSAppModule.controller('allUsersController', function($scope, $routeParams,$cookies, $location, userFactory){

	console.log('I am able to load my allUsersController along with my all_users partial');
	var logged_in_user = $cookies.get('logged_user');
	$scope.firstName = $cookies.get("firstName");
	$scope.userLevel = $cookies.get("userLevel");
	$scope.lastName = $cookies.get("lastName");
	$scope.emailAddress = $cookies.get("emailAddress");
	if(!logged_in_user){
		$location.url('/')
	}

	//dont wrap in scope, because we want this to show as soon as page loads
	userFactory.getUsers(function(data){
		console.log('this is data in allUsersController getUsers', data);
		$scope.users=data;
	})
	$scope.logout = function(){
		$cookies.remove('logged_user');
		$location.url('/');
	}
})
