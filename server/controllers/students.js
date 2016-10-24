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
		}
  }
})();
