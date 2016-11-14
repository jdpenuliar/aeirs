var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var ClassSchema = new Schema({
	school_year: {type: String, required: true, minlength:1},
	created_by: {type: String, required: true, minlength:1},
	grade_levels: [{type: mongoose.Schema.Types.ObjectId, ref: "GradeLevel"}]
	// productDescription: {type: String, required: true, minlength:1},
	// _class: {type: Schema.Types.ObjectId, ref: ""}
},{timestamps: true});
mongoose.model("Class",ClassSchema);