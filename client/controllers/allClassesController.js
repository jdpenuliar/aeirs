AEIRSAppModule.controller('allClassesController', function($scope, $routeParams, $location, classFactory){

	console.log('I am able to load my allClassesController along with my all_Classes partial');

	//dont wrap in scope, because we want this to show as soon as page loads
	classFactory.getClasses(function(data){
		console.log('this is data in allClassesController getClasses', data);
		$scope.classes=data;
	})
})
