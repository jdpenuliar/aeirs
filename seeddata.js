require('./server/config/mongoose.js');
//this config requirement comes from server.js

var mongoose = require('mongoose');
var Student = mongoose.model('Student');
//// these requirement should be the same as users.js(controller)

list = [
    {
      student_first: "Joseph Donn",
      student_middle: "Calaunan",
      student_last: "Penuliar",
      student_id: 771562,
      student_email: "jaydz@gmail.com",
      student_phone: 14089993333,
      mother_first: "Mary",
      mother_middle: "Lee",
      mother_last: "Hi",
      father_first: "Josh",
      father_middle: "Lee",
      father_last: "Bye",
      parent_phone: 14085557777
      parent_email: "parent@gmail.com"
    }, {timestamps:true},
    {
      student_first: "Shivani",
      student_middle: "none",
      student_last: "Bhardwaj",
      student_id: 187692,
      student_email: "shivani@gmail.com",
      student_phone: 14089993333,
      mother_first: "S",
      mother_middle: "G",
      mother_last: "Bhardwaj",
      father_first: "J",
      father_middle: "K",
      father_last: "Bhardwaj",
      parent_phone: 14085557777,
      parent_email: "parent@gmail.com"
    }, {timestamps:true}
];


for(var i in list){
  students = new Student(list[i]);
  students.save(function(err, result){
   if(err){
     console.log('Found this err while creating a student entry ', err);
   }
   else {
     console.log('this is a student entry created by seeding',result);
   }
 }
)}

