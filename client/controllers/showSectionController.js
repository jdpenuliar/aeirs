AEIRSAppModule.controller('showSectionController', function($scope, $routeParams, $cookies, $location, sectionFactory, studentFactory){

	console.log('I am able to load my showSectionController along with my show_section partial');

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
	console.log('this is routeParams.id ', $routeParams.id, "this is sectionID", sectionID);

	sectionFactory.getStudentsFromSection(sectionID, function(data){
		console.log('this is data from show controller showSectionController-------------\n', data);
		$scope.section=data.data;
	})

})
