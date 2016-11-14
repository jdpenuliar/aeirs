var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var GradeLevelSchema = new Schema({
	grade_level: {type: String, required: true, minlength:1},
	created_by: {type: String, required: true, minlength:1},
	sections: [{type: mongoose.Schema.Types.ObjectId, ref: "Section"}],
	// productDescription: {type: String, required: true, minlength:1},
	_class: {type: mongoose.Schema.Types.ObjectId, ref: "Class"}
},{timestamps: true});
mongoose.model("GradeLevel",GradeLevelSchema);