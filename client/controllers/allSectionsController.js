AEIRSAppModule.controller('allSectionsController', function($scope, $routeParams, $cookies, $location, sectionFactory){

	console.log('I am able to load my allSectionsController along with my all_sections partial');

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

	console.log('this is routeParams ------\n ', $routeParams);
	var GL_ID=$routeParams.id;
	sectionFactory.getSections(GL_ID, function(data){
		console.log('this is data in allSectionsController getSections', data);
		$scope.sections=data;
	})

})
