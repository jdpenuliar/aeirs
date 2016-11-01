angular.module('AEIRS').factory('studentFactory', function($http){

	// This is my dummyFactory. I usually add this into any project that
	// I do. Just so that I can use it for reference as I add new Factories
	// below we have an example of how we would create a post request, as well
	// as how we would create a get request.
	var students=[];
	var factory = {};
	factory.haha = "hahahaqwer";

	factory.addStudent=function(data, callback){
		console.log('made it to studentFactory');
		$http.post('/students', data).then(function(data){
			console.log('made it back from backend this is new student ', data);
			students.push(data.data);
			callback(students);
		});
	};


	factory.getStudents=function(callback){
		console.log('made it to student factory getStudents');
		$http.get('/all_students').then(function(student){
			console.log('made it back from backend this is all students ', student);
			students=student.data;
			callback(students);
		});
	};

	factory.getStudent=function(studentID, callback){
		$http.get('/students/' + studentID).then(function(student){
			console.log('made it back from backend this is one student ', student);
			callback(student);
		});
	};

	factory.updateStudent=function(updatedStudent, callback){
		$http.post('/student/' + updatedStudent._id, updatedStudent).then(function(data){
			console.log('made it back from backend this is updated student', data);
			callback(data);
		});
	};

	factory.removeStudent = function(studentID, callback){
    console.log("inside the removeStudent method in the studentFactory");
    console.log(studentID, "this is student id");
    $http.post('/student/' + studentID +'/delete').then(function(data){
      console.log('made it back from backend, after deleting student from DB', data);
      callback(data);
    })
  }

	return factory;
});
