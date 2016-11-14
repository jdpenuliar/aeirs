angular.module('AEIRS').controller('newClassController', function($scope, $routeParams, $location, classFactory){

	console.log('I am able to load my newClassController along with my all_classses partial');

	$scope.classRegister=function(){
		console.log('classRegister in the newClassController', $scope.classRegistrationData);
		classFactory.addclass($scope.classRegistrationData, function(classArray){
			$scope.classes=classArray;
		})
	}
})
