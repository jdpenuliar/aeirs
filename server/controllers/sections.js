var mongoose = require('mongoose');
var GradeLevel = mongoose.model('GradeLevel');
var Section = mongoose.model('Section');
var Student = mongoose.model('Student');
module.exports=(function(){
	return{
		addSection: function(req, res){
			GradeLevel.findOne({_id: req.body.grade_level}, function(err, gradeLevelFromDb){
				if(err){
					res.send('this is an err', err);
				} else{
					for (var i = 0; i<req.body.section_quantity; i++){
						console.log("-----------\n",'Section '+(i+1));
						var new_section = new Section({
							_grade_level: gradeLevelFromDb._id,
							section: 'Section '+(i+1),
							_created_by: req.body.logged_in_user_id,
							_class: req.body.class
						});
						new_section.save(function(err,data){
							if(err){
								console.log('noooo----\n',err);
							}else{
								console.log('haha----\n',data);
							}
						});
						gradeLevelFromDb.sections.push(new_section);
					}
					gradeLevelFromDb.save(function(err, result){
						if(err){
							res.send('err saving the gradeLevelFromDb', err);
						} else{
							new_section.save(function(err, result){
								if(err){
									res.send('err saving new_section', err);
								} else{
									console.log('successfully saved the new sections!!!');
									res.json(result);
								}
							})
						}
					})
				}
			})
		}, 
		getSections: function(req, res){
			GradeLevel.findOne({_id: req.params.id}).populate("sections").populate("_class").exec(function(err,data){
				if(err){
					res.json(err);
				}else{
					console.log('------------\n',data)
					res.json(data);
				}
			});
		},
		getStudentsFromSection: function(req, res){
			Section.findOne({_id: req.params.id})
			.populate("students")
			.populate("_grade_level")
			.populate("_class")
			.populate("_createdBy")
			.exec(function(err,data){
				if(err){
					res.json(err);
				}else{
					
					res.json(data);
					Student.populate(data,{path: "students._grades", model: "Grade"},function(err,data){
						if(err){
							res.json(err);
						}else{
							console.log('------------show grade in student in section\n',data)
						}
					});
					// Section.populate(data,{path: "students._grades", model:"Grades"},function(err,data){
					// 	if(err){
					// 		console.log('populate fail\n',err);
					// 	}else{
					// 		console.log('populate haha\n',data);
					// 		res.json(data);
					// 	}
					// })
				}
			});
		}
	}
})();