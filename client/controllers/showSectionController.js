AEIRSAppModule.controller('showSectionController', function($scope, $routeParams, $location, sectionFactory, studentFactory){

	console.log('I am able to load my showSectionController along with my show_section partial');

	//dont wrap in scope, because we want this to show as soon as page loads

	// console.log('this is routeParams ------\n ', $routeParams);
	// var GL_ID=$routeParams.id;
	// sectionFactory.getSections(GL_ID, function(data){
	// 	console.log('this is data in allSectionsController getSections', data);
	// 	$scope.sections=data;
	// })

	var sectionID=$routeParams.id;
	console.log('this is routeParams.id ', $routeParams.id, "this is sectionID", sectionID);

	sectionFactory.getStudentsFromSection(sectionID, function(data){
		console.log('this is data from show controller showSectionController-------------\n', data);
		$scope.section=data.data;
	})

})
