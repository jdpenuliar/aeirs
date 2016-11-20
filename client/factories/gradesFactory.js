AEIRSAppModule.factory('gradesFactory', function($http){
	// var grades=[];
	var factory = {};
	factory.showStudentGrade = function(studentID,callback){
		console.log('showStudentGrade factory front end ---\n',studentID);
		$http.get('/student/'+studentID+'/edit/grades').then(function(data){
			console.log('made it back from backend this is all data ', data);
			// grades=user.data;
			callback(data);
		});
	};
	factory.updateGrade=function(updatedInfo, callback){
		console.log("----updatedinfo\n",updatedInfo,"\n")
		$http.post('/student/' + updatedInfo._id+'/update/grades', updatedInfo).then(function(data){
			console.log('made it back from backend this is updated student', data);
			callback(data);
		});
	}
	return factory;
});