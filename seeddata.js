require('./server/config/mongoose.js');
//this config requirement comes from server.js

var mongoose = require('mongoose');
var studentsdb = mongoose.model('studentDB');
//// these requirement should be the same as users.js(controller)

list = [
    {
      student_first: "Joseph Donn",
      student_middle: "Calaunan",
      student_last: "Penuliar",
      student_middle: 887123,
      student_email: "jaydz@gmail.com",
      student_phone: 14089993333,
      mother_first: "Mary",
      mother_middle: "Lee",
      mother_last: "Hi",
      father_first: "Josh",
      father_middle: "Lee",
      father_last: "Bye",
      parent_email: "parent@gmail.com",
      parent_phone: 14085557777
    }, {timestamps:true}
]

// for(var i in list){
//   students = new studentsdb(list[i]);
//   students.save(function(err, result){
//    if(err){
//      console.log('Found this err while creating a student entry ', err);
//    }
//    else {
//      console.log('this is a student entry created by seeding',result);
//    }
//  }
// )}


var sampleStudent = new studentsdb({
  student_first: "Joseph Donn",
  student_middle: "Calaunan",
  student_last: "Penuliar",
  student_middle: 887123,
  student_email: "jaydz@gmail.com",
  student_phone: 14089993333,
  mother_first: "Mary",
  mother_middle: "Lee",
  mother_last: "Hi",
  father_first: "Josh",
  father_middle: "Lee",
  father_last: "Bye",
  parent_email: "parent@gmail.com",
  parent_phone: 14085557777
});
sampleStudent.save(function(err,data){
  if(err){
    console.log("something wrong haha");
  }else{
    console.log("haha!");
  }
});
