var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var ClassSchema = new Schema({
	// productName: {type: String, required: true, minlength:1},
	// productDescription: {type: String, required: true, minlength:1},
	// productBids: [{type: Schema.Types.ObjectId, ref: "Bid"}]
},{timestamps: true});
mongoose.model("Class",ClassSchema);