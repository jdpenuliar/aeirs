var mongoose = require('mongoose');
var Class = mongoose.model('Class');

module.exports=(function(){
	return{
		getClasses: function(req, res){
			Class.find({}, function(err, classes_list){
				if(err){
					console.log(err);
					console.log('error in getClasses controller');
				} else{
					console.log('this is all the classes_list', classes_list);
					res.json(classes_list);
				}
			});
		},
	}
})();