angular.module('AEIRS').controller('showGradeLevelController', function($scope, $routeParams, $cookies, $location, sectionFactory, gradeLevelFactory){

	console.log('I am able to load my showgradelevelController along with my show GL partial');
	var logged_in_user = $cookies.get('logged_user');

	$scope.logged_in_user_id = logged_in_user;
	var GL_ID=$routeParams.id;
	console.log('this is routeParams.id ', $routeParams.id);
	gradeLevelFactory.getGradeLevel(GL_ID, function(data){
		console.log('tspecific gradelevel-------------\n', data);
		$scope.grade_level=data.data;
	})

	$scope.createSection=function(){
		$scope.newSection.logged_in_user_id = $scope.logged_in_user_id;
		$scope.newSection.class = $scope.grade_level._class._id;
		$scope.newSection.grade_level = $routeParams.id;
		console.log('createSection in the newSectionController', $scope.newSection);
		sectionFactory.addSection($scope.newSection, function(data){
			console.log("back from factory gradelevel haha\n",data)
			$scope.sections=data;
		})
	}
})