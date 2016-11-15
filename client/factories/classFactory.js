angular.module('AEIRS').factory('classFactory', function($http){

	// This is my dummyFactory. I usually add this into any project that
	// I do. Just so that I can use it for reference as I add new Factories
	// below we have an example of how we would create a post request, as well
	// as how we would create a get request.
	var classes_list=[];
	var factory = {};
	// factory.haha = "hahahaqwer";
	// factory.addStudent=function(data, callback){
	// 	console.log('made it to my student Factory');
	// 	$http.post('/student', data).then(function(data){
	// 		console.log('made it back from backend this is the new student ', data);
	// 		students.push(data.data);
	// 		callback(students);
	// 	});
	// };

	factory.addclass=function(info, callback){
		console.log('made it to classFactory addclass data-----------\n',info);
		$http.post('/new_class',info).then(function(data){
			console.log('made it back from backend this is the new class DATAHAHA\n',data)
			callback(data);
		})
	}

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