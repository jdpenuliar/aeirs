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
        },
        getgradeLevels: function(req, res){
            GradeLevel.find({}, function(err, grade_levels){
                if(err){
                    console.log(err);
                    console.log('error in getgradeLevels controller');
                } else{
                    console.log('this is all the grade_levels', grade_levels);
                    res.json(grade_levels);
                }
            });
        },
        getGradeLevel: function(req, res){
            GradeLevel.findOne({_id: req.params.id}, function(err, result){
                if(err){
                    console.log('this is err when finding specific GradeLevel ', err);
                }
                else{
                    console.log('this is the GradeLevel we were looking for ', result);
                    // res.json(result);
                    GradeLevel.findOne({_id: result._id}).populate("_class").exec(function(err,data){
                        if(err){
                            res.json(err);
                        }else{
                            console.log("-------------\n",data);
                            res.json(data);
                        }
                    });
                }
            })
        }
    }
})();