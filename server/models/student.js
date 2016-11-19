var mongoose = require('mongoose');
var StudentSchema = new mongoose.Schema({
    student_first: {type: String, required: true, minlength: 1},
    student_middle: {type: String, required: true, minlength: 1},
    student_last: {type: String, required: true, minlength: 1},
    student_id: {type: String, required: true, minlength: 1},
    student_email: {type: String, required: true, minlength: 1},
    student_phone: {type: Number, required: true, minlength: 1},
    mother_first: {type: String, required: true, minlength: 1},
    mother_middle: {type: String, required: true, minlength: 1},
    mother_last: {type: String, required: true, minlength: 1},
    father_first: {type: String, required: true, minlength: 1},
    father_middle: {type: String, required: true, minlength: 1},
    father_last: {type: String, required: true, minlength: 1},
    parent_phone: {type: Number, required: true, minlength: 1},
    parent_email: {type: String, required: true, minlength: 1},
    _section: {type: mongoose.Schema.Types.ObjectId, ref: "Section"}
});

mongoose.model('Student', StudentSchema);
