var mongoose = require('mongoose');
var Student = mongoose.model('Student');
var Section = mongoose.model('Section');

module.exports=(function(){
	return{
		getStudents: function(req, res){
			Student.find({}, function(err, students){
				if(err){
					console.log(err);
					console.log('error in getStudents controller');
				} else{
					console.log('this is all the students', students);
					res.json({ "data": students});
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
		addStudent: function(req, res){
			console.log('testing hahahahahahhahahahahahahahhaha\n');
			Section.findOne({_id: req.body.section}, function(err,data){
				if(err){
					console.log('fail test hahahahahahhahahahahahahahhaha\n');
				}else{
					console.log('niceeeee test hahahahahahhahahahahahahahhaha\n',data);
					console.log("--------new haha\n",req.body);
					var new_student = new Student({
						student_first: req.body.studentRegistrationFormStudentFirstName,
						student_middle: req.body.studentRegistrationFormStudentMiddleName,
						student_last: req.body.studentRegistrationFormStudentLastName,
						student_id: req.body.studentRegistrationFormStudentID,
						student_email: req.body.studentRegistrationFormParentEmail,
						student_phone: req.body.studentregistrationFormPhone,
						mother_first: req.body.studentRegistrationFormMotherFirstName,
						mother_middle: req.body.studentRegistrationFormMotherMiddleName,
						mother_last: req.body.studentRegistrationFormMotherLastName,
						father_first: req.body.studentRegistrationFormFatherFirstName,
						father_middle: req.body.studentRegistrationFormFatherMiddleName,
						father_last: req.body.studentRegistrationFatherLastName,
						parent_phone: req.body.studentRegistrationFormParentPhoneNumber,
						parent_email: req.body.studentRegistrationFormParentEmail,
						_section: req.body.section
					});
					new_student.save(function(err,data){
						if(err){
							console.log('noooo----\n',err);
						}else{
							console.log('yesssss----\n',data);
							console.log(data);
						}
					});
					data.students.push(new_student);
					data.save(function(err,data){
						if(err){
							console.log('nooooahaha----\n',err);
						}else{
							console.log('yessssshaha----\n',data);
							res.json(data);
						}
					});
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
					result.student_first=req.body.student_first;
					result.student_middle=req.body.student_middle;
					result.student_last=req.body.student_last;
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
		}

	};
})();
