angular.module('AEIRS').controller('newSectionController', function($scope, $routeParams, $location, sectionFactory){
	console.log('I am able to load my newSectionController along with my all_gradeLevels partial');

	$scope.createSection=function(){
		console.log('createSection in the newSectionController', $scope.newSection);
		sectionFactory.addSection($scope.newSection, function(data){
			$scope.sections=data;
		})
	}
})