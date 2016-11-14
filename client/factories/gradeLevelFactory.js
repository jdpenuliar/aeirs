angular.module('AEIRS').factory('gradeLevelsFactory', function($http){

	// This is my dummyFactory. I usually add this into any project that
	// I do. Just so that I can use it for reference as I add new Factories
	// below we have an example of how we would create a post request, as well
	// as how we would create a get request.
	var grade_levels=[];
	var factory = {};

	factory.addgradeLevel=function(data, callback){
		console.log('made it to my gradeLevel Factory');
		$http.post('/gradeLevel', data).then(function(data){
			console.log('made it back from backend this is the new grade_level ', data);
			grade_levels.push(data.data);
			callback(grade_levels);
		});
	};

	factory.getgradeLevels=function(callback){
		console.log('made it to gradeLevels factory getgradeLevels');
		$http.get('/allgradeLevels').then(function(grade_level){
			console.log('made it back from backend this is all gradeLevels ', grade_level);
			grade_levels=grade_level.data;
			callback(grade_levels);
		});
	};

	return factory;
})