var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var GradeSchema = new Schema({
	quiz1: {type: Number, minlength:1},
	quiz2: {type: Number, minlength:1},
	quiz3: {type: Number, minlength:1},
	quiz4: {type: Number, minlength:1},
	quiz5: {type: Number, minlength:1},
	quiz6: {type: Number, minlength:1},
	quiz7: {type: Number, minlength:1},
	quiz8: {type: Number, minlength:1},
	quiz9: {type: Number, minlength:1},
	quiz10: {type: Number, minlength:1},
	exam1: {type: Number, minlength:1},
	exam2: {type: Number, minlength:1},
	exam3: {type: Number, minlength:1},
	exam4: {type: Number, minlength:1},
	attendance: {type: Number, minlength:1},
	_student: {type: Schema.Types.ObjectId, ref: "Student"}
},{timestamps: true});
mongoose.model("Grade",GradeSchema);