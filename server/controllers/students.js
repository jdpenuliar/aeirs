var mongoose = require('mongoose');
var Student = mongoose.model('Student');

module.exports=(function(){
	return{
		getStudents: function(req, res){
			Student.find({}, function(err, students){
				if(err){
					console.log(err);
					console.log('error in getStudents controller');
				} else{
					console.log('this is all the students', students);
					res.json(students);
				}
			});
		},
		getStudent: function(req, res){
			Student.findOne({_id: req.params.id}, function(err, result){
				if(err){
					console.log('this is the err when looking for student', err);
				} else {
					console.log('this is the student', result);
					res.json(result);
				}
			});
		},
		updateStudent: function(req, res){
			Student.findOne({_id:req.params.id}, function(err, result){
				if (err){
					console.log('unable to find student, here is error ', err);
					res.json(err);
				}
				else {
					console.log("foundit!\n",result);
					result.student_first=req.body.student_first;
					result.student_middle=req.body.student_middle;
					result.student_last=req.body.student_last;
					result.student_id=req.body.student_id;
					result.student_email=req.body.student_email;
					result.student_phone=req.body.student_phone;
					result.mother_first=req.body.mother_first;
					result.mother_middle=req.body.mother_middle;
					result.mother_last=req.body.mother_last;
					result.father_first=req.body.father_first;
					result.father_middle=req.body.father_middle;
					result.father_last=req.body.father_last;
					result.parent_phone=req.body.parent_phone;
					result.parent_email=req.body.parent_email;
					result.save(function(err, result){
						if(err){
							console.log('unable to save student, here is err', err);
							res.json(err);
						} else{
							console.log('successfully updated student!', result);
							res.json(result);
						}
					});
				}
			});
		},
		studentRegister: function(req, res){
			student=new Student(req.body);
			console.log('this is req.body', req.body);
			student.save(function(err, result){
				if(err){
					console.log('error creating a new student, ', err);
					console.log('this is req.body', req.body);
				} else{
					console.log('this is our new student ', result);
					res.json(result);
				}
			})
		}
  }
})();
