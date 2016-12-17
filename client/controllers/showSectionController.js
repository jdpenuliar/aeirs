AEIRSAppModule.controller('showSectionController', function($scope, $routeParams, $cookies, $location, sectionFactory, studentFactory){

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

	$scope.studentGradeText = function(studentTextInfo, quarter){
		//THIS is the function to send twilio text 
		console.log("----text\n",studentTextInfo);
    console.log("----quarter\n",quarter);
		studentFactory.textStudentGradesToParents(studentTextInfo,quarter,function(successMessage){
			console.log("----textsuccess\n",studentTextInfo);
		});
	}

	var sectionID=$routeParams.id;
	

	sectionFactory.getStudentsFromSection(sectionID, function(data){
		$scope.section=data.data;
	})
})
