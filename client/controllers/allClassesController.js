AEIRSAppModule.controller('allClassesController', function($scope, $routeParams, $cookies, $location, classFactory){

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

	console.log('I am able to load my allClassesController along with my all_Classes partial');

	//dont wrap in scope, because we want this to show as soon as page loads
	classFactory.getClasses(function(data){
		console.log('this is data in allClassesController getClasses', data);
		$scope.classes=data;
	})
})
