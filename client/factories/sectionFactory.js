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

	return factory;
})