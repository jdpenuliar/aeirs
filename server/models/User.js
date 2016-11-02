var mongoose = require("mongoose");
// user level
// 0 - admin: can do everything (just for developers)
// 1 - principal: can CRUD faculty and ONLY View students and classes that the faculty makes
// 2 - faculty: can CRUD class and CRUD student to be. CLASS will be added later. it will be on a different Schema
var Schema = new mongoose.Schema({
	userName: {type: String, required: true, minlength: 1},
	emailAddress: {type: String, required: true, minlength: 1},
	password: {type: String, required: true, minlength: 1},
	userLevel: {type: String, required: true, minlength: 1},
	firstName: {type: String, required: true, minlength: 1},
	middleName: {type: String, required: true, minlength: 1},
	lastName: {type: String, required: true, minlength: 1},
	phoneNumber: {type: Number, required: true, minlength: 1}
	// ,
	// classes: [{type: Schema.Types.ObjectId, ref:"Class"}]
},{timestamps: true});
mongoose.model("User",Schema);