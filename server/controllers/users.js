//include packages needed for sanitizing the input and jwt
var mongoose = require("mongoose");
var User = mongoose.model("User");
// var faker = require('faker');
var jwt = require('jsonwebtoken');
var jwtSecret = 'hahagasps';
var bCrypt = require('bcrypt-nodejs');
var xssFilters = require('xss-filters');

module.exports = (function(){
	// using bcrypt to create a password hash
	var createHash = function(password){
		// return bCrypt.hashSync(password, bCrypt.genSaltSync(10), null);
		return bCrypt.hashSync(password, bCrypt.genSaltSync(10), null);
	}
	// using bcrypt to check passwords at login
	var isValidPassword = function(user, password){
		return bCrypt.compareSync(password, user.password);
	}
	return{
		index: function(req,res){
			console.log("-------------------------------------\n",req.body);
			res.json({haha:"haha", hash: createHash("haha")});
		},
		login: function(req,res){
			console.log("-------------------------------------login\n",req.body);
			var filteredUsername = xssFilters.inHTMLData(req.body.loginUserName);
			var filteredPassword = xssFilters.inHTMLData(req.body.loginPassword);
			console.log("-------------------------------------\n",filteredUsername);
			console.log("-------------------------------------\n",filteredPassword);
			User.findOne({userName: filteredUsername},function(err,data){
				if(err){
					res.json(err);
				}else{
					var token = jwt.sign({
						data
					},
					jwtSecret,
					{expiresIn: 86400});
					res.json({token: token, user:data, loggedIn: true});
					// res.json(data);
				}
			});
		},
		create: function(req,res){
			console.log("-------------------------------------register\n",req.body);
			var filteredRegisterUserName = xssFilters.inHTMLData(req.body.registerUserName);
			var filteredRegisterEmailAddress = xssFilters.inHTMLData(req.body.registerEmailAddress);
			var filteredRegisterUserPassword = xssFilters.inHTMLData(req.body.registerUserPassword);
			var filteredRegisterUserPasswordConfirm = xssFilters.inHTMLData(req.body.registerUserPasswordConfirm);
			var filteredRegisterUserFirstName = xssFilters.inHTMLData(req.body.registerUserFirstName);
			var filteredRegisterUserLastName = xssFilters.inHTMLData(req.body.registerUserLastName);
			var filteredRegisterUserPhoneNumber = xssFilters.inHTMLData(req.body.registerUserPhoneNumber);
			console.log("-------------------------------------\n",filteredRegisterUserName);
			console.log("-------------------------------------\n",filteredRegisterEmailAddress);
			console.log("-------------------------------------\n",filteredRegisterUserPassword);
			console.log("-------------------------------------\n",filteredRegisterUserPasswordConfirm);
			console.log("-------------------------------------\n",filteredRegisterUserFirstName);
			console.log("-------------------------------------\n",filteredRegisterUserLastName);
			console.log("-------------------------------------\n",filteredRegisterUserPhoneNumber);
			var newUser = new User({
				userName: filteredRegisterUserName,
				emailAddress: filteredRegisterEmailAddress,
				password: createhash(filteredRegisterUserPassword),
				passwordConfirm: filteredRegisterUserPasswordConfirm,
				firstName: filteredRegisterUserFirstName,
				lastName:  filteredRegisterUserLastName,
				phoneNumber: filteredRegisterUserPhoneNumber
			});
			// User.findOne({userName: filteredRegisterUserName},function(err,data){
			// 	if(err){
			// 		console.log(err,{error: "user name already taken"});
			// 		res.json({error: "user name already taken"});
			// 	}else{
			// 		if(!data){
			// 			newUser.save(function(err,data){
			// 				if(err){
			// 					console.log("something went wrong",err.message);
			// 					res.json(err);
			// 				}else{
			// 					console.log('successfully added a hahha!\n',data);
			// 					res.json(data);
			// 				}
			// 			});
			// 		}
			// 	}
			// });
			User.findOne({userName: filteredRegisterUserName},function(err,data){
				if(err){
					console.log(err,{error: "user name already taken"});
					res.json({error: "user name already taken"});
				}else{
					if(!data){
						newUser.save(function(err,data){
							if(err){
								console.log("something went wrong",err.message);
								res.json(err);
							}else{
								console.log('successfully added a hahha!\n',data);
								var token = jwt.sign({
									data
								},
								jwtSecret,
								{expiresIn: 86400});
								res.json({token: token, user:data, loggedIn: true});
								// res.json(data);
							}
						});
					}
				}
			});
		}
	}
})();