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
		getSubject: function(req, res){
			Grade.findOne({_id: req.params.id}, function(err, result){
				if(err){
					console.log('this is the err when looking for a subject', err);
				} else {
					console.log('this is the subject', result);
					res.json(result);
				}
			});
		},
		getSubjectGrade: function(req, res){
			Grade.findOne({_id: req.params.id})
			.populate("_student")
			.exec(function(err,data){
				if(err){
					console.log("err get subject grade-----\n",err);
				}else{
					console.log("data get subject grade-----\n",data);
					res.json(data)
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
					if(req.body.quiz11 != null){
						data.quiz11 = req.body.quiz11;
					}
					if(req.body.quiz12 != null){
						data.quiz12 = req.body.quiz12;
					}
					if(req.body.quiz13 != null){
						data.quiz13 = req.body.quiz13;
					}
					if(req.body.quiz14 != null){
						data.quiz14 = req.body.quiz14;
					}
					if(req.body.quiz15 != null){
						data.quiz15 = req.body.quiz15;
					}
					if(req.body.quiz16 != null){
						data.quiz16 = req.body.quiz16;
					}
					if(req.body.quiz17 != null){
						data.quiz17 = req.body.quiz17;
					}
					if(req.body.quiz18 != null){
						data.quiz18 = req.body.quiz18;
					}
					if(req.body.quiz19 != null){
						data.quiz19 = req.body.quiz19;
					}
					if(req.body.quiz20 != null){
						data.quiz20 = req.body.quiz20;
					}
					if(req.body.quiz21 != null){
						data.quiz21 = req.body.quiz21;
					}
					if(req.body.quiz22 != null){
						data.quiz22 = req.body.quiz22;
					}
					if(req.body.quiz23 != null){
						data.quiz23 = req.body.quiz23;
					}
					if(req.body.quiz24 != null){
						data.quiz24 = req.body.quiz24;
					}
					if(req.body.quiz25 != null){
						data.quiz25 = req.body.quiz25;
					}
					if(req.body.quiz26 != null){
						data.quiz26 = req.body.quiz26;
					}
					if(req.body.quiz27 != null){
						data.quiz27 = req.body.quiz27;
					}
					if(req.body.quiz28 != null){
						data.quiz28 = req.body.quiz28;
					}
					if(req.body.quiz29 != null){
						data.quiz29 = req.body.quiz29;
					}
					if(req.body.quiz30 != null){
						data.quiz30 = req.body.quiz30;
					}
					if(req.body.quiz31 != null){
						data.quiz31 = req.body.quiz31;
					}
					if(req.body.quiz32 != null){
						data.quiz32 = req.body.quiz32;
					}
					if(req.body.quiz33 != null){
						data.quiz33 = req.body.quiz33;
					}
					if(req.body.quiz34 != null){
						data.quiz34 = req.body.quiz34;
					}
					if(req.body.quiz35 != null){
						data.quiz35 = req.body.quiz35;
					}
					if(req.body.quiz36 != null){
						data.quiz36 = req.body.quiz36;
					}
					if(req.body.quiz37 != null){
						data.quiz37 = req.body.quiz37;
					}
					if(req.body.quiz38 != null){
						data.quiz38 = req.body.quiz38;
					}
					if(req.body.quiz39 != null){
						data.quiz39 = req.body.quiz39;
					}
					if(req.body.quiz40 != null){
						data.quiz40 = req.body.quiz40;
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
		},
		updateSubjectGrades: function(req, res){
			console.log("udpate grades in grades controller backend------------\n",req.body);
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
					if(req.body.quiz11 != null){
						data.quiz11 = req.body.quiz11;
					}
					if(req.body.quiz12 != null){
						data.quiz12 = req.body.quiz12;
					}
					if(req.body.quiz13 != null){
						data.quiz13 = req.body.quiz13;
					}
					if(req.body.quiz14 != null){
						data.quiz14 = req.body.quiz14;
					}
					if(req.body.quiz15 != null){
						data.quiz15 = req.body.quiz15;
					}
					if(req.body.quiz16 != null){
						data.quiz16 = req.body.quiz16;
					}
					if(req.body.quiz17 != null){
						data.quiz17 = req.body.quiz17;
					}
					if(req.body.quiz18 != null){
						data.quiz18 = req.body.quiz18;
					}
					if(req.body.quiz19 != null){
						data.quiz19 = req.body.quiz19;
					}
					if(req.body.quiz20 != null){
						data.quiz20 = req.body.quiz20;
					}
					if(req.body.quiz21 != null){
						data.quiz21 = req.body.quiz21;
					}
					if(req.body.quiz22 != null){
						data.quiz22 = req.body.quiz22;
					}
					if(req.body.quiz23 != null){
						data.quiz23 = req.body.quiz23;
					}
					if(req.body.quiz24 != null){
						data.quiz24 = req.body.quiz24;
					}
					if(req.body.quiz25 != null){
						data.quiz25 = req.body.quiz25;
					}
					if(req.body.quiz26 != null){
						data.quiz26 = req.body.quiz26;
					}
					if(req.body.quiz27 != null){
						data.quiz27 = req.body.quiz27;
					}
					if(req.body.quiz28 != null){
						data.quiz28 = req.body.quiz28;
					}
					if(req.body.quiz29 != null){
						data.quiz29 = req.body.quiz29;
					}
					if(req.body.quiz30 != null){
						data.quiz30 = req.body.quiz30;
					}
					if(req.body.quiz31 != null){
						data.quiz31 = req.body.quiz31;
					}
					if(req.body.quiz32 != null){
						data.quiz32 = req.body.quiz32;
					}
					if(req.body.quiz33 != null){
						data.quiz33 = req.body.quiz33;
					}
					if(req.body.quiz34 != null){
						data.quiz34 = req.body.quiz34;
					}
					if(req.body.quiz35 != null){
						data.quiz35 = req.body.quiz35;
					}
					if(req.body.quiz36 != null){
						data.quiz36 = req.body.quiz36;
					}
					if(req.body.quiz37 != null){
						data.quiz37 = req.body.quiz37;
					}
					if(req.body.quiz38 != null){
						data.quiz38 = req.body.quiz38;
					}
					if(req.body.quiz39 != null){
						data.quiz39 = req.body.quiz39;
					}
					if(req.body.quiz40 != null){
						data.quiz40 = req.body.quiz40;
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
