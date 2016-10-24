AEIRSAppModule.factory('studentFactory', function($http){

	// This is my dummyFactory. I usually add this into any project that
	// I do. Just so that I can use it for reference as I add new Factories
	// below we have an example of how we would create a post request, as well
	// as how we would create a get request.
	var students=[];
	var factory = {}

	factory.addStudent=function(data, callback){
		console.log('made it to my student Factory');
		$http.post('/student', data).then(function(data){
			console.log('made it back from backend this is the new student ', data);
			students.push(data.data);
			callback(students);
		})
	}

	factory.getStudents=function(callback){
		console.log('made it to student factory getStudents');
		$http.get('/student').then(function(mongooses){
			console.log('made it back from backend this is all students ', student);
			students=student.data;
			callback(students);
		})
	}

	// factory.getMongoose=function(mongID, callback){
	// 	$http.get('/mongoose/' + mongID).then(function(mongoose){
	// 		console.log('made it back from backend this is one mongoose ', mongoose);
	// 		callback(mongoose);
	// 	})
	// }

	// factory.updateMongoose=function(updatedMongoose, callback){
	// 	$http.post('/mongoose/' + updatedMongoose._id + '/update', updatedMongoose).then(function(data){
	// 		console.log('made it back from backend this is updated mongoose', data);
	// 		callback(data);
	// 	})
	// }

	// factory.getDummies = function(callback){
	// 	$http.get('/dummies').then(function(data){
	// 		mongooses = data.data;
	// 		callback(data.data);
	// 	});
	// }

	// // the info parameter below is the the dummy that we're trying to add into our database

	// // I added a test for myself below. I'm passing both a body element as well a params element
	// // I use this as an initial test that I can pass information to my backend.
	// // Check out your server console and you should see the body and the value we pass through
	// // the url.
	// factory.addDummy = function(info, callback){
	// 	$http.post('/dummies/youShouldSeeThisInServerConsoleReqParams', info).then(function(data){
	// 		if(data.error){
	// 			callback(data);
	// 		} else {
	// 			mongooses.push(data)
	// 			callback(mongooses);
	// 		}
	// 	})
	// }

	return factory;
})
