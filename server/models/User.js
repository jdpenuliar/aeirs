var mongoose = require("mongoose");
var bcrypt = require('bcrypt');
// user level
// 0 - admin: can do everything (just for developers)
// 1 - principal: can CRUD faculty and CRUD student and View classes that the faculty makes
// 2 - faculty: can CRUD class and CRUD student to be. CLASS will be added later. it will be on a different Schema
var Schema = new mongoose.Schema({
	userName: {type: String, required: true, minlength: 1},
	emailAddress: {type: String, required: true, minlength: 1},
	password: {type: String, required: true, minlength: 1},
	userLevel: {type: String, required: true, default: 2},
	firstName: {type: String, required: true, minlength: 1},
	middleName: {type: String, required: true, minlength: 1},
	lastName: {type: String, required: true, minlength: 1},
	phoneNumber: {type: String, required: true, minlength: 1}
	,
	classes: [{type: mongoose.Schema.Types.ObjectId, ref: "Class"}]
},{timestamps: true});

Schema.methods.generateHash = function(password) {
   return bcrypt.hashSync(password, bcrypt.genSaltSync(8));
};

// checking if password is valid
Schema.methods.validPassword = function(password) {    
    valid = bcrypt.compareSync(password, this.password);    
   return valid;
};

Schema.pre('save', function(done) {
   if (this.password.length > 15 && this.password.startsWith("$2a")){

   } else {
       this.password = this.generateHash(this.password);
   }
   done();
});

mongoose.model("User",Schema);