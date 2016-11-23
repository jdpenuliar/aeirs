AEIRSAppModule.controller('assignFacultyController', function($scope, $routeParams, $cookies, $location, sectionFactory){
	$scope.selectedFaculty = {};
	$scope.faculty = {};
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
	});
	$scope.assignFacultyToSection = function(faculty){
		console.log('assign a facutly-\n',faculty);
		console.log('selected-----\n',$scope.selectedFaculty);
		var info = {};
		info.facultyId = faculty._id;
		info.sectionId = $routeParams.id;
		console.log('updatinginfo----\n',info);
		sectionFactory.assignFacultyToSection(info,function(updatedFaculty){
			console.log('------------from backend from factory\n',updatedFaculty);
			$location.url('/section/'+$routeParams.id);
		});
	}
})