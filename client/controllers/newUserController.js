angular.module('AEIRS').controller('newUserController', function($scope, $routeParams, $cookies, $location, userFactory){

	console.log('I am able to load my newUserController along with my new_prof partial');

	var logged_in_user = $cookies.get('logged_user');
	$scope.firstName = $cookies.get("firstName");
	$scope.userLevel = $cookies.get("userLevel");
	$scope.lastName = $cookies.get("lastName");
	$scope.emailAddress = $cookies.get("emailAddress");
	console.log('this is the cookie data',  $scope.firstName )
	if(!logged_in_user){
		$location.url('/')
	}

	$scope.userRegister=function(){
		console.log('userRegister in the newUserController', $scope.userRegistrationData);
		userFactory.addUser($scope.userRegistrationData, function(userArray){
			$scope.users=userArray;
		})
	}

})

//if cookie.userLevel = 0 (admin/principal) then show the create form with a user level dropdown of 1 for faculty
//else do not show the create form.
//same logic for level 1 (faculty) to create level 2 (student)
