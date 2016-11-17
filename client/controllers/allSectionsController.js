AEIRSAppModule.controller('allSectionsController', function($scope, $routeParams, $location, sectionFactory){

	console.log('I am able to load my allSectionsController along with my all_sections partial');

	//dont wrap in scope, because we want this to show as soon as page loads

	console.log('this is routeParams ------\n ', $routeParams);
	var GL_ID=$routeParams.id;
	sectionFactory.getSections(GL_ID, function(data){
		console.log('this is data in allSectionsController getSections', data);
		$scope.sections=data;
	})

})
