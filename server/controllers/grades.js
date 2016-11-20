var mongoose = require('mongoose');
var Grade = mongoose.model('Grade');
module.exports=(function(){
	return{
		getGrades: function(req, res){
			Grade.findOne({_student: req.params.id})
			.populate("_student")
			.exec(function(err,data){
				if(err){
					console.log("student grades----\n",err);
				}else{
					console.log("student grades yeah----\n",data);
					res.json(data);
				}
			});
		},
		updateGrades: function(req, res){
			console.log("udpate grades------------\n",req.body);
			Grade.findOne({_id: req.body._id},function(err,data){
				if(err){
					console.log("err-----\n",err);
					res.json(err);
				}else{
					console.log("data-----\n",data);
					if(req.body.quiz1 != null){
						data.quiz1 = req.body.quiz1;
					}
					if(req.body.quiz2 != null){
						data.quiz2 = req.body.quiz2;
					}
					if(req.body.quiz3 != null){
						data.quiz3 = req.body.quiz3;
					}
					if(req.body.quiz4 != null){
						data.quiz4 = req.body.quiz4;
					}
					if(req.body.quiz5 != null){
						data.quiz5 = req.body.quiz5;
					}
					if(req.body.quiz6 != null){
						data.quiz6 = req.body.quiz6;
					}
					if(req.body.quiz7 != null){
						data.quiz7 = req.body.quiz7;
					}
					if(req.body.quiz8 != null){
						data.quiz8 = req.body.quiz8;
					}
					if(req.body.quiz9 != null){
						data.quiz9 = req.body.quiz9;
					}
					if(req.body.quiz10 != null){
						data.quiz10 = req.body.quiz10;
					}
					if(req.body.exam1 != null){
						data.exam1 = req.body.exam1;
					}
					if(req.body.exam2 != null){
						data.exam2 = req.body.exam2;
					}
					if(req.body.exam3 != null){
						data.exam3 = req.body.exam3;
					}
					if(req.body.exam4 != null){
						data.exam4 = req.body.exam4;
					}
					if(req.body.attendance != null){
						data.attendance = req.body.attendance;
					}
					console.log("udpate grades data------------\n",data);
					data.save(function(err,data){
						if(err){
							console.log("err1-----\n",err);
							res.json(err);
						}else{
							console.log("data1-----\n",data);
							Grade.findOne({_id: data._id},function(err,data){
								if(err){
									console.log("err2-----\n",err);
									res.json(err);
								}else{
									console.log("data-----\n",data);
									res.json(data);
								}
							});
						}
					});
				}
			});
		}
	}
})();