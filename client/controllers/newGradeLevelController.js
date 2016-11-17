angular.module('AEIRS').controller('newGradeLevelController', function($scope, $routeParams, $location, $cookies, gradeLevelFactory){
	console.log('I am able to load my newgradeLevelController along with my all_gradeLevels partial');

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
	gradeLevelFactory.getgradeLevels(function(data){
		console.log('this is data in newGradeLevelController getgradeLevels', data);
		$scope.grade_levels=data;
		console.log('---------\n', $scope.grade_levels);
	})
})
