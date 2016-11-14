require('./server/config/mongoose.js');
//this config requirement comes from server.js

var mongoose = require('mongoose');
var Class = mongoose.model('Class');

l=[    
    {
      school_year: "2016-2017",
      created_by: "shivani"
    }
];


for(var i in l){
  classes = new Class(l[i]);
  classes.save(function(err, result){
   if(err){
     console.log('Found this err while creating a class entry ', err);
   }
   else {
     console.log('this is a class entry created by seeding',result);
   }
 }
 )}