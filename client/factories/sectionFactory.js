angular.module('AEIRS').factory('sectionFactory', function($http){

	var sections=[];
	var factory={};

	factory.addSection=function(info, callback){
		console.log('made it to sectionFactory addSection data-----------\n',info);
		$http.post('/new_section',info).then(function(data){
			console.log('made it back from backend this is the new section data\n',data)
			callback(data);
		});
	};

	factory.getSections=function(GL_ID, callback){
		console.log('made it to gradeLevels factory getSections');
		$http.get('/GL/'+GL_ID).then(function(section){
			console.log('made it back from backend this is all sections ', section);
			sections=section.data;
			callback(sections);
		});
	};

	return factory;
})