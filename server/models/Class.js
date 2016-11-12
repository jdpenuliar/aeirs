var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var ClassSchema = new Schema({
	section: {type: String, required: true, minlength:1}
	// productDescription: {type: String, required: true, minlength:1},
	// _class: {type: Schema.Types.ObjectId, ref: ""}
},{timestamps: true});
mongoose.model("Class",ClassSchema);