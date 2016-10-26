var mongoose = require('mongoose');
var StudentSchema = new mongoose.Schema({
    student_first: {type: String, required: true, minlength: 1},
    student_middle: {type: String, required: true, minlength: 1},
    student_last: {type: String, required: true, minlength: 1},
    student_id: {type: Number, required: true, minlength: 1},
    student_email: {type: String, required: true, minlength: 1},
    student_phone: {type: Number, required: true, minlength: 1},
    mother_first: {type: String, required: true, minlength: 1},
    mother_middle: {type: String, required: true, minlength: 1},
    mother_last: {type: String, required: true, minlength: 1},
    father_first: {type: String, required: true, minlength: 1},
    father_middle: {type: String, required: true, minlength: 1},
    father_last: {type: String, required: true, minlength: 1},
    parent_phone: {type: Number, required: true, minlength: 1},
    parent_email: {type: String, required: true, minlength: 1}
});

mongoose.model('Student', StudentSchema);
// Validations
// StudentSchema.path('color').required(true, 'Color cannot be blank');
// StudentSchema.path('weight').required(true, 'Weight cannot be blank');
// StudentSchema.path('name').required(true, 'Name cannot be blank');
