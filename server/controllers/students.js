var mongoose = require('mongoose');
var Student = mongoose.model('Student');
var Section = mongoose.model('Section');
var Grade = mongoose.model('Grade');

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
			console.log("show specific student haha---\n",req.body,"\n",req.params.id);
			Student.findOne({_id: req.params.id})
			.populate("_grades")
			.populate("_section")
			.exec(function(err,data){
				if(err){
					console.log('this is the err when looking for student', err);
				} else {
					console.log('this is the student', data);
					res.json(data);
				}
			});
		},
		addStudent: function(req, res){
			Section.findOne({_id: req.body.section}, function(err,data){
				if(err){
					// console.log('fail test hahahahahahhahahahahahahahhaha\n');
				}else{
					console.log("--------new haha\n",req.body);
					var new_student = new Student({
						student_first: req.body.studentRegistrationFormStudentFirstName,
						student_middle: req.body.studentRegistrationFormStudentMiddleName,
						student_last: req.body.studentRegistrationFormStudentLastName,
						student_id: req.body.studentRegistrationFormStudentID,
						student_email: req.body.studentRegistrationFormEmail,
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

					console.log('testing hahahahahahhahahahahahahahhaha\n',new_student);
					list = [
						{
							subject: 'Filipino',
							quiz1: 0,
							quiz2: 0,
							quiz3: 0,
							quiz4: 0,
							quiz5: 0,
							quiz6: 0,
							quiz7: 0,
							quiz8: 0,
							quiz9: 0,
							quiz10: 0,
							quiz11: 0,
							quiz12: 0,
							quiz13: 0,
							quiz14: 0,
							quiz15: 0,
							quiz16: 0,
							quiz17: 0,
							quiz18: 0,
							quiz19: 0,
							quiz20: 0,
							quiz21: 0,
							quiz22: 0,
							quiz23: 0,
							quiz24: 0,
							quiz25: 0,
							quiz26: 0,
							quiz27: 0,
							quiz28: 0,
							quiz29: 0,
							quiz30: 0,
							quiz31: 0,
							quiz32: 0,
							quiz33: 0,
							quiz34: 0,
							quiz35: 0,
							quiz36: 0,
							quiz37: 0,
							quiz38: 0,
							quiz39: 0,
							quiz40: 0,
							exam1: 0,
							exam2: 0,
							exam3: 0,
							exam4: 0,
							attendance: 0,
							_student: new_student._id	
						},
						{
							subject: 'English',
							quiz1: 0,
							quiz2: 0,
							quiz3: 0,
							quiz4: 0,
							quiz5: 0,
							quiz6: 0,
							quiz7: 0,
							quiz8: 0,
							quiz9: 0,
							quiz10: 0,
							quiz11: 0,
							quiz12: 0,
							quiz13: 0,
							quiz14: 0,
							quiz15: 0,
							quiz16: 0,
							quiz17: 0,
							quiz18: 0,
							quiz19: 0,
							quiz20: 0,
							quiz21: 0,
							quiz22: 0,
							quiz23: 0,
							quiz24: 0,
							quiz25: 0,
							quiz26: 0,
							quiz27: 0,
							quiz28: 0,
							quiz29: 0,
							quiz30: 0,
							quiz31: 0,
							quiz32: 0,
							quiz33: 0,
							quiz34: 0,
							quiz35: 0,
							quiz36: 0,
							quiz37: 0,
							quiz38: 0,
							quiz39: 0,
							quiz40: 0,
							exam1: 0,
							exam2: 0,
							exam3: 0,
							exam4: 0,
							attendance: 0,
							_student: new_student._id	
						},
						{
							subject: 'Math',
							quiz1: 0,
							quiz2: 0,
							quiz3: 0,
							quiz4: 0,
							quiz5: 0,
							quiz6: 0,
							quiz7: 0,
							quiz8: 0,
							quiz9: 0,
							quiz10: 0,
							quiz11: 0,
							quiz12: 0,
							quiz13: 0,
							quiz14: 0,
							quiz15: 0,
							quiz16: 0,
							quiz17: 0,
							quiz18: 0,
							quiz19: 0,
							quiz20: 0,
							quiz21: 0,
							quiz22: 0,
							quiz23: 0,
							quiz24: 0,
							quiz25: 0,
							quiz26: 0,
							quiz27: 0,
							quiz28: 0,
							quiz29: 0,
							quiz30: 0,
							quiz31: 0,
							quiz32: 0,
							quiz33: 0,
							quiz34: 0,
							quiz35: 0,
							quiz36: 0,
							quiz37: 0,
							quiz38: 0,
							quiz39: 0,
							quiz40: 0,
							exam1: 0,
							exam2: 0,
							exam3: 0,
							exam4: 0,
							attendance: 0,
							_student: new_student._id	
						},
						{
							subject: 'Science',
							quiz1: 0,
							quiz2: 0,
							quiz3: 0,
							quiz4: 0,
							quiz5: 0,
							quiz6: 0,
							quiz7: 0,
							quiz8: 0,
							quiz9: 0,
							quiz10: 0,
							quiz11: 0,
							quiz12: 0,
							quiz13: 0,
							quiz14: 0,
							quiz15: 0,
							quiz16: 0,
							quiz17: 0,
							quiz18: 0,
							quiz19: 0,
							quiz20: 0,
							quiz21: 0,
							quiz22: 0,
							quiz23: 0,
							quiz24: 0,
							quiz25: 0,
							quiz26: 0,
							quiz27: 0,
							quiz28: 0,
							quiz29: 0,
							quiz30: 0,
							quiz31: 0,
							quiz32: 0,
							quiz33: 0,
							quiz34: 0,
							quiz35: 0,
							quiz36: 0,
							quiz37: 0,
							quiz38: 0,
							quiz39: 0,
							quiz40: 0,
							exam1: 0,
							exam2: 0,
							exam3: 0,
							exam4: 0,
							attendance: 0,
							_student: new_student._id	
						},
						{
							subject: 'Araling Panlipunan',
							quiz1: 0,
							quiz2: 0,
							quiz3: 0,
							quiz4: 0,
							quiz5: 0,
							quiz6: 0,
							quiz7: 0,
							quiz8: 0,
							quiz9: 0,
							quiz10: 0,
							quiz11: 0,
							quiz12: 0,
							quiz13: 0,
							quiz14: 0,
							quiz15: 0,
							quiz16: 0,
							quiz17: 0,
							quiz18: 0,
							quiz19: 0,
							quiz20: 0,
							quiz21: 0,
							quiz22: 0,
							quiz23: 0,
							quiz24: 0,
							quiz25: 0,
							quiz26: 0,
							quiz27: 0,
							quiz28: 0,
							quiz29: 0,
							quiz30: 0,
							quiz31: 0,
							quiz32: 0,
							quiz33: 0,
							quiz34: 0,
							quiz35: 0,
							quiz36: 0,
							quiz37: 0,
							quiz38: 0,
							quiz39: 0,
							quiz40: 0,
							exam1: 0,
							exam2: 0,
							exam3: 0,
							exam4: 0,
							attendance: 0,
							_student: new_student._id	
						},
						{
							subject: 'Edukasyon sa Pagpapakatao',
							quiz1: 0,
							quiz2: 0,
							quiz3: 0,
							quiz4: 0,
							quiz5: 0,
							quiz6: 0,
							quiz7: 0,
							quiz8: 0,
							quiz9: 0,
							quiz10: 0,
							quiz11: 0,
							quiz12: 0,
							quiz13: 0,
							quiz14: 0,
							quiz15: 0,
							quiz16: 0,
							quiz17: 0,
							quiz18: 0,
							quiz19: 0,
							quiz20: 0,
							quiz21: 0,
							quiz22: 0,
							quiz23: 0,
							quiz24: 0,
							quiz25: 0,
							quiz26: 0,
							quiz27: 0,
							quiz28: 0,
							quiz29: 0,
							quiz30: 0,
							quiz31: 0,
							quiz32: 0,
							quiz33: 0,
							quiz34: 0,
							quiz35: 0,
							quiz36: 0,
							quiz37: 0,
							quiz38: 0,
							quiz39: 0,
							quiz40: 0,
							exam1: 0,
							exam2: 0,
							exam3: 0,
							exam4: 0,
							attendance: 0,
							_student: new_student._id	
						},
						{
							subject: 'EPP',
							quiz1: 0,
							quiz2: 0,
							quiz3: 0,
							quiz4: 0,
							quiz5: 0,
							quiz6: 0,
							quiz7: 0,
							quiz8: 0,
							quiz9: 0,
							quiz10: 0,
							quiz11: 0,
							quiz12: 0,
							quiz13: 0,
							quiz14: 0,
							quiz15: 0,
							quiz16: 0,
							quiz17: 0,
							quiz18: 0,
							quiz19: 0,
							quiz20: 0,
							quiz21: 0,
							quiz22: 0,
							quiz23: 0,
							quiz24: 0,
							quiz25: 0,
							quiz26: 0,
							quiz27: 0,
							quiz28: 0,
							quiz29: 0,
							quiz30: 0,
							quiz31: 0,
							quiz32: 0,
							quiz33: 0,
							quiz34: 0,
							quiz35: 0,
							quiz36: 0,
							quiz37: 0,
							quiz38: 0,
							quiz39: 0,
							quiz40: 0,
							exam1: 0,
							exam2: 0,
							exam3: 0,
							exam4: 0,
							attendance: 0,
							_student: new_student._id	
						},
						{
							subject: 'MAPEH',
							quiz1: 0,
							quiz2: 0,
							quiz3: 0,
							quiz4: 0,
							quiz5: 0,
							quiz6: 0,
							quiz7: 0,
							quiz8: 0,
							quiz9: 0,
							quiz10: 0,
							quiz11: 0,
							quiz12: 0,
							quiz13: 0,
							quiz14: 0,
							quiz15: 0,
							quiz16: 0,
							quiz17: 0,
							quiz18: 0,
							quiz19: 0,
							quiz20: 0,
							quiz21: 0,
							quiz22: 0,
							quiz23: 0,
							quiz24: 0,
							quiz25: 0,
							quiz26: 0,
							quiz27: 0,
							quiz28: 0,
							quiz29: 0,
							quiz30: 0,
							quiz31: 0,
							quiz32: 0,
							quiz33: 0,
							quiz34: 0,
							quiz35: 0,
							quiz36: 0,
							quiz37: 0,
							quiz38: 0,
							quiz39: 0,
							quiz40: 0,
							exam1: 0,
							exam2: 0,
							exam3: 0,
							exam4: 0,
							attendance: 0,
							_student: new_student._id	
						}
					];
					
					for (var i in list){
						// console.log('counter haha: ', i, "------\n", data);
						// data._grades.push(new_grade);
						// console.log("-------\n",i);
						var new_grade = new Grade(list[i]);
						console.log('new grade---\n', new_grade);
						new_student._grades.push(new_grade._id);
						new_grade.save(function(err,data){
							if(err){
								// console.log('nooooahahagrade----\n',err);
							}else{
								// res.json(data);
								// console.log(''saved grade--\n',data._id)
								// new_student._grades.push(data._id);
								// console.log('yessssshahgrade----\n',new_student);
								// console.log('yessssshahgradestudentupdated----\n',new_student._grades);
							}
						});

						console.log('new grade pushed---\n',new_student._grades);
						new_student.save(function(err,data){
							if(err){
								console.log('after grade noooo----\n',err);
							}else{
								console.log('after GRADEPUSH newstudentcreate----\n',data);
							}
						});


						console.log('-------pushed grade new_student\n\n\n\n\n',new_student);
					}
					



					
					data.students.push(new_student);
					console.log('-----after student save push\n',data);
					data.save(function(err,data){
						if(err){
							console.log('nooooahaha----\n',err);
						}else{
							console.log('yessssshahasections----\n',data);
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
					result.student_id=req.body.student_id;
					result.student_middle=req.body.student_middle;
					result.student_last=req.body.student_last;
					result.mother_first=req.body.mother_first;
					result.mother_middle=req.body.mother_middle;
					result.mother_last=req.body.mother_last;
					result.father_first=req.body.father_first;
					result.father_middle=req.body.father_middle;
					result.father_last=req.body.father_last;
					result.parent_email=req.body.parent_email;
					result.parent_phone=req.body.parent_phone;
					result.student_email=req.body.student_email;
					result.student_phone=req.body.student_phone;
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
		textStudentParents: function(req, res){
		console.log('req.body params haha---\n', req.params);	
			Student.findOne({_id: req.params.id})
			.populate("_grades")
			.populate("_section")
			.exec(function(err,data){
				if(err){
					console.log('this is the err when looking for student', err);
				} else {
          console.log('this is the student even before the text------\n', data);
					// console.log('this is the student before text------\n', data._grades);
					
          if (req.params.quarter === '1') {
            var textBody = '"DBAES grade report 1st Quarter\n'+data.student_first + " " + data.student_last+"\n";
            for (var i=0;i<data._grades.length;i++){
              textBody = textBody + "\n" + 
                data._grades[i].subject + "\n" + 
                "Q1: "+data._grades[i].quiz1 + "/10\n" +
                "Q2: "+data._grades[i].quiz2 + "/10\n" +
                "Q3: "+data._grades[i].quiz3 + "/10\n" +
                "Q4: "+data._grades[i].quiz4 + "/10\n" +
                "Q5: "+data._grades[i].quiz5 + "/10\n" +
                "Q6: "+data._grades[i].quiz6 + "/10\n" +
                "Q7: "+data._grades[i].quiz7 + "/10\n" +
                "Q8: "+data._grades[i].quiz8 + "/10\n" +
                "Q9: "+data._grades[i].quiz9 + "/10\n" +
                "Q10: "+data._grades[i].quiz10 + "/10\n" +
                "E1: "+data._grades[i].exam1 + "/50\n" +
                "Att: "+data._grades[i].attendance + "\n";
              // console.log('ahaha ',i, "111111\n", textBody);
            }
          } else if (req.params.quarter === '2') {
            var textBody = '"DBAES grade report 2nd Quarter\n'+data.student_first + " " + data.student_last+"\n";
            for (var i=0;i<data._grades.length;i++){
              textBody = textBody + "\n" + 
                data._grades[i].subject + "\n" + 
                "Q11: "+data._grades[i].quiz11 + "/10\n" +
                "Q12: "+data._grades[i].quiz12 + "/10\n" +
                "Q13: "+data._grades[i].quiz13 + "/10\n" +
                "Q14: "+data._grades[i].quiz14 + "/10\n" +
                "Q15: "+data._grades[i].quiz15 + "/10\n" +
                "Q16: "+data._grades[i].quiz16 + "/10\n" +
                "Q17: "+data._grades[i].quiz17 + "/10\n" +
                "Q18: "+data._grades[i].quiz18 + "/10\n" +
                "Q19: "+data._grades[i].quiz19 + "/10\n" +
                "Q20: "+data._grades[i].quiz20 + "/10\n" +
                "E2: "+data._grades[i].exam2 + "/50\n" +
                "Att: "+data._grades[i].attendance + "\n";
              // console.log('ahaha ',i, "111111\n", textBody);
            }
          } else if (req.params.quarter === '3') {
            var textBody = '"DBAES grade report 3rd Quarter\n'+data.student_first + " " + data.student_last+"\n";
            for (var i=0;i<data._grades.length;i++){
              textBody = textBody + "\n" + 
                data._grades[i].subject + "\n" + 
                "Q21: "+data._grades[i].quiz21 + "/10\n" +
                "Q22: "+data._grades[i].quiz22 + "/10\n" +
                "Q23: "+data._grades[i].quiz23 + "/10\n" +
                "Q24: "+data._grades[i].quiz24 + "/10\n" +
                "Q25: "+data._grades[i].quiz25 + "/10\n" +
                "Q26: "+data._grades[i].quiz26 + "/10\n" +
                "Q27: "+data._grades[i].quiz27 + "/10\n" +
                "Q28: "+data._grades[i].quiz28 + "/10\n" +
                "Q29: "+data._grades[i].quiz29 + "/10\n" +
                "Q30: "+data._grades[i].quiz30 + "/10\n" +
                "E3: "+data._grades[i].exam3 + "/50\n" +
                "Att: "+data._grades[i].attendance + "\n";
              // console.log('ahaha ',i, "111111\n", textBody);
            }
          } else if (req.params.quarter === '4') {
            var textBody = '"DBAES grade report 4th Quarter\n'+data.student_first + " " + data.student_last+"\n";
            for (var i=0;i<data._grades.length;i++){
              textBody = textBody + "\n" + 
                data._grades[i].subject + "\n" + 
                "Q31: "+data._grades[i].quiz21 + "/10\n" +
                "Q32: "+data._grades[i].quiz22 + "/10\n" +
                "Q33: "+data._grades[i].quiz23 + "/10\n" +
                "Q34: "+data._grades[i].quiz24 + "/10\n" +
                "Q35: "+data._grades[i].quiz25 + "/10\n" +
                "Q36: "+data._grades[i].quiz26 + "/10\n" +
                "Q37: "+data._grades[i].quiz27 + "/10\n" +
                "Q38: "+data._grades[i].quiz28 + "/10\n" +
                "Q39: "+data._grades[i].quiz29 + "/10\n" +
                "Q40: "+data._grades[i].quiz30 + "/10\n" +
                "E4: "+data._grades[i].exam3 + "/50\n" +
                "Att: "+data._grades[i].attendance + "\n";
              // console.log('ahaha ',i, "111111\n", textBody);
            }
          }
					
					// SDK Version: 2.x 3.x
					// Twilio Credentials 
					var accountSid = 'AC6299d9965195b73c17cc2b122f001981'; 
					var authToken = 'f5aaa6ee4c008c0606efa4e27a4417b4'; 
					 
					//require the Twilio module and create a REST client 
					var client = require('twilio')(accountSid, authToken); 
					console.log('this is vinal text body-----\n') 
					client.messages.create({ 
					    // to: "+14089307903", 
					    // to: "+639056211093", 
					    to: "+639267785622", 
					    from: "+18443340250", 
					    body: textBody, 
					}, function(err, message) { 
					    if(err){
					    	console.log("twilio err\n", err);
					    }else{
					    	console.log("twilio haha\n", message);
					    }
					});

					client.messages.create({ 
					    to: "+14089307903", 
					    // to: "+639056211093", 
					    // to: "+639267785622", 
					    from: "+18443340250", 
					    body: textBody, 
					}, function(err, message) { 
					    if(err){
					    	// console.log("twilio err\n", err);
					    }else{
					    	// console.log("twilio haha\n", message);
					    }
					});
				}
			});
		}

	};
})();
