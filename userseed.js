require('./server/config/mongoose.js');
//this config requirement comes from server.js

var mongoose = require('mongoose');
var User = mongoose.model('User');

l=[    
    {
      userName: 'admin',
      emailAddress:'admin@admin.com',
      password:'password',
      firstName:'Administrator',
      middleName:'Admin',
      lastName: 'Admin',
      phoneNumber: '123456789',
      userLevel:0
    }
];

for(var i in l){
  users = new User(l[i]);
  users.save(function(err, result){
   if(err){
     console.log('Found this err while creating a user entry ', err);
   }
   else {
     console.log('this is a user entry created by seeding',result);
   }
 }
 )}