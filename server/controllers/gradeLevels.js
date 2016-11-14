var mongoose = require('mongoose');
var GradeLevel = mongoose.model('GradeLevel');
var ClassModel = mongoose.model('Class');

module.exports=(function(){
	return{
		createGradeLevel: function(req, res){
			var new_gradeLevel = new GradeLevel(req.body);
			console.log('this is req.body', req.body);
			ClassModel.findOne({_id: req.params._id}, function(err, classListFromDb){
            	if(err){
                    res.send('errors');
                } else{
                    new_gradeLevel._class = classListFromDb._id;
                    classListFromDb.grade_level.push(new_gradeLevel);
                    classListFromDb.save(function(err, results){
                        if(err){
                            res.send('bummer man');
                        }else{
                            new_gradeLevel.save(function(err, results){
                                if(err){
                                    res.send('broken');
                                }else{
                                    res.redirect('/');
                                }
                            })
                        }
                    })
                }
            })
        }
    }
})();