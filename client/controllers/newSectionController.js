angular.module('AEIRS').controller('newSectionController', function($scope, $routeParams, $location, $cookies, sectionFactory){
	console.log('I am able to load my newSectionController along with my all_gradeLevels partial');

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

	$scope.createSection=function(){
		console.log('createSection in the newSectionController', $scope.newSection);
		sectionFactory.addSection($scope.newSection, function(data){
			$scope.sections=data;
		})
	}
})