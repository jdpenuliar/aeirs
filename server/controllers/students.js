var mongoose = require('mongoose');
var studentDB = mongoose.model('studentDB');

module.exports=(function(){
	return{
		getStudents: function(req, res){
			studentDB.find({}, function(err, students){
				if(err){
					console.log(err);
					console.log('error in getStudents controller');
				} else{
					console.log('this is all the students', students);
					res.json(students);
				}
			})
		},
		getStudent: function(req, res){
			studentDB.find({_id: req.params.id}, function(err, result){
				if(err){
					console.log('this is the err when looking for student', err);
				} else {
					console.log('this is the student', result);
					res.json(result);
				}
			})
		}
  }
})();
