AEIRSAppModule.controller('editStudentGradesController', function($scope, $routeParams, $cookies, $location, studentFactory, gradesFactory){

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
	var studentID=$routeParams.id;
	console.log('I am able to load my editStudentGradesController along with my partial');
	gradesFactory.showStudentGrade(studentID, function(data){
		console.log('this is data from show controller showSectionController-------------\n',data);
		$scope.grades=data.data;
	})
	$scope.updateGrade = function(){
		// console.log("-------------\n",$scope.grades);
		$scope.grade._id = $scope.grades._id
		gradesFactory.updateGrade($scope.grade, function(data){
			console.log("-------------updated\n",data);
			// $location.path('#/student/'+data._id);
		});
	};
})
