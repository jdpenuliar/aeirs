angular.module('AEIRS').controller('newGradeLevelController', function($scope, $routeParams, $location, gradeLevelFactory){

	console.log('I am able to load my newgradeLevelController along with my all_gradeLevels partial');

	$scope.gradeLevelRegister=function(){
		console.log('gradeLevelRegister in the newgradeLevelController', $scope.gradeLevelRegistrationData);
		gradeLevelFactory.addgradeLevel($scope.gradeLevelRegistrationData, function(gradeLevelArray){
			$scope.gradeLevels=gradeLevelArray;
		})
	}
})
