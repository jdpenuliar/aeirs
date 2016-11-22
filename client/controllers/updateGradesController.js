AEIRSAppModule.controller('updateGradesController', function($scope, $routeParams, $cookies, $location, gradesFactory, studentFactory){
	var logged_in_user = $cookies.get('logged_user');
	$scope.firstName = $cookies.get("firstName");
	$scope.userLevel = $cookies.get("userLevel");
	$scope.lastName = $cookies.get("lastName");
	$scope.emailAddress = $cookies.get("emailAddress");

	if(!logged_in_user){
		$location.url('/')
	}

	//log out method
	$scope.logout = function(){
		$cookies.remove('logged_user');
		$location.url('/');
	}

	var subjectID=$routeParams.id;

	gradesFactory.getSubject(subjectID, function(data){
		$scope.grades=data.data;
	});

	$scope.updateGrade = function(){
		$scope.grade._id = subjectID;
		gradesFactory.updateSubjectGrade($scope.grade, function(data){
			$location.url('/section/'+$scope.grades._student._section);
		});
	}

})
