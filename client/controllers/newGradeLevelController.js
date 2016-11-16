angular.module('AEIRS').controller('newGradeLevelController', function($scope, $routeParams, $location, gradeLevelFactory){
	console.log('I am able to load my newgradeLevelController along with my all_gradeLevels partial');


	//dont wrap in scope, because we want this to show as soon as page loads
	gradeLevelFactory.getgradeLevels(function(data){
		console.log('this is data in newGradeLevelController getgradeLevels', data);
		$scope.grade_levels=data;
		console.log('---------\n', $scope.grade_levels);
	})


	// $scope.createGradeLevel=function(){
	// 	console.log('createGradeLevel in the newgradeLevelController', $scope.gradeLevelRegistrationData);
	// 	gradeLevelFactory.addgradeLevel($scope.gradeLevelRegistrationData, function(gradeLevelArray){
	// 		$scope.gradeLevels=gradeLevelArray;
	// 	})
	// }
})
