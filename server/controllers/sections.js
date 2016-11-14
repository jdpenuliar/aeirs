var mongoose = require('mongoose');
var GradeLevel = mongoose.model('GradeLevel');
var Section = mongoose.model('Section');

module.exports=(function(){
	return{
		new_section: function(req, res){
			var new_section = new Section(req.body);
			GradeLevel.findOne({_id: req.params._id}, function(err, gradeLevelFromDb){
				if(err){
					res.send('this is an err', err);
				} else{
					new_section._grade_level=gradeLevelFromDb._id;
					gradeLevelFromDb.sections.push(new_section);
					gradeLevelFromDb.save(function(err, result){
						if(err){
							res.send('err saving the gradeLevelFromDb', err);
						} else{
							new_section.save(function(err, result){
								if(err){
									res.send('err saving new_section', err);
								} else{
									res.json(result);
								}
							})
						}
					})
				}
			})
		}
	}
})();