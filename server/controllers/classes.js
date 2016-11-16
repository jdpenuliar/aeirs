var mongoose = require('mongoose');
var Class = mongoose.model('Class');
var GradeLevel = mongoose.model('GradeLevel');

module.exports=(function(){
	return{
		getClasses: function(req, res){
			Class.find({}).populate("grade_levels").exec(function(err,data){
				if(err){
					res.json(err);
				}else{
					res.json(data);
				}
			});
			// Class.find({}, function(err, classes_list){
			// 	if(err){
			// 		console.log(err);
			// 		console.log('error in getClasses controller');
			// 	} else{
			// 		console.log('this is all the classes_list', classes_list);
			// 		res.json(classes_list);
			// 	}
			// });
		},
		addclass: function(req, res){
			console.log('this is addclass from BACKEND class controller----\n',req.body);
			var new_class = new Class({
				school_year: req.body.school_year,
				created_by: req.body.created_by
			});
			//the SAVED result from var new_class is used in the fn below, as new_class_result_fromDB
			//the fn param is simply referencing the data that we tried to save above (when creating new Class instance)

			new_class.save(function(err,new_class_result_fromDB){
				if(err){
					res.json('noooo----\n',err);
				}else{
					// res.json('haha success----\n',data);
					Class.findOne({_id: new_class_result_fromDB._id},function(err,class_fromfromDB){
						console.log('quantity------\n',req.body.gradeLevel_quantity)
						var new_gradeLevel = new GradeLevel();
						for (var i = 0; i<req.body.gradeLevel_quantity; i++){
							var new_gradeLevel = new GradeLevel({
								grade_level: 'Grade '+(i+1),
								created_by: req.body.created_by,
								_class: class_fromfromDB._id
							});
							// new_gradeLevel.grade_level = 'Grade '+(i+1);
							// new_gradeLevel.created_by = req.body.created_by;
							// new_gradeLevel._class = class_fromfromDB._id;
							new_gradeLevel.save(function(err,data){
								if(err){
									console.log('noooo----\n',err);
								}else{
									console.log('haha----\n',data);
								}
							});
							class_fromfromDB.grade_levels.push(new_gradeLevel)
						}
						class_fromfromDB.save(function(err,data){
							if(err){
								res.json(err);
							}else{
								res.json(data);
								Class.find({_id: data._id}).populate("grade_levels").exec(function(err,data){
									if(err){
										res.json(err);
									}else{
										console.log("-------------\n",data);
										res.json(data);
									}
								});
							}
						});						
					});
				}
			});
		}
	}
})();