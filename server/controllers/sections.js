var mongoose = require('mongoose');
var GradeLevel = mongoose.model('GradeLevel');
var Section = mongoose.model('Section');

module.exports=(function(){
	return{
		addSection: function(req, res){
			// var new_section = new Section(req.body);
			console.log("-----------\n",req.body);
			GradeLevel.findOne({_id: req.body.grade_level}, function(err, gradeLevelFromDb){
				if(err){
					res.send('this is an err', err);
				} else{
					console.log("gradeLevelFromDb-----------\n",gradeLevelFromDb);
					console.log('this is section_quantity backend section controller---------\n', req.body.section_quantity);
					for (var i = 0; i<req.body.section_quantity; i++){
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
					gradeLevelFromDb.sections.push(new_section);
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
					// console.log("-------------\n",data);
					// res.json(data);
					// GradeLevel.populate(data,{path:"sections._grade_level", model: "Section"}, function(err, data){
					// 	if(err){
					// 		res.send('but why? :( ------\n', err);
					// 	}else{
					// 		console.log('but why? :( ------\n', data);
					// 		res.json(data);
					// 	}
					// });
					GradeLevel.populate(data,{
							path:"sections._grade_level", 
							model: "Section"
						}, 
						function(err, data){
						if(err){
							res.send('but why? :( ------\n', err);
						}else{
							console.log('yeahhhh :)) ------\n', data);
							res.json(data);
						}
					});
				}
			});
		}
	}
})();