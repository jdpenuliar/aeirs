angular.module('AEIRS').factory('classFactory', function($http){

	var classes_list=[];
	var factory = {};

	factory.addclass=function(info, callback){
		console.log('made it to classFactory addclass data-----------\n',info);
		$http.post('/new_class',info).then(function(data){
			console.log('made it back from backend this is the new class DATAHAHA\n',data)
			callback(data);
		});
	};

	factory.getClasses=function(callback){
		console.log('made it to class factory getClasses');
		$http.get('/allClasses').then(function(class_list){
			console.log('made it back from backend this is all classes ', class_list);
			classes_list=class_list.data;
			callback(classes_list);
		});
	};

	return factory;
})