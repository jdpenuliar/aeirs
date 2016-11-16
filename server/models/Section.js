var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var SectionSchema = new Schema({
	_grade_level: {type: Schema.Types.ObjectId, ref: "GradeLevel"},
	section: {type: String, required: true, minlength:1},
	students: [{type: mongoose.Schema.Types.ObjectId, ref: "Student"}],
	_createdBy: {type: Schema.Types.ObjectId, ref: "User"},
	_class: {type: Schema.Types.ObjectId, ref: "Class"},
	// productDescription: {type: String, required: true, minlength:1},
},{timestamps: true});
mongoose.model("Section",SectionSchema);