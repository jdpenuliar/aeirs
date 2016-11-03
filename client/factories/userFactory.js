angular.module('AEIRS').factory('userFactory', function($http){
	var users=[];
	var factory = {};
	factory.haha = "hahahaqwer";

  factory.login = function(data,callback,errback){
    $http.post('/login',data).then(callback,errback);
  };
  
  factory.register = function(data,callback,errback){
    $http.post('/register',data).then(callback,errback);
  };

	factory.addUser=function(data, callback){
		console.log('made it to userFactory');
		$http.post('/users', data).then(function(data){
			console.log('made it back from backend this is new user ', data);
			users.push(data.data);
			callback(users);
		});
	};

	factory.getUsers=function(callback){
		console.log('made it to user factory getUsers');
		$http.get('/all_users').then(function(user){
			console.log('made it back from backend this is all users ', user);
			users=user.data;
			callback(users);
		});
	};

	factory.getUser=function(userID, callback){
		$http.get('/users/' + userID).then(function(user){
			console.log('made it back from backend this is one user ', user);
			callback(user);
		});
	};

	factory.updateUser=function(updatedUser, callback){
		$http.post('/user/' + updatedUser._id, updatedUser).then(function(data){
			console.log('made it back from backend this is updated user', data);
			callback(data);
		});
	};

	factory.removeUser = function(userID, callback){
    console.log("inside the removeUser method in the userFactory");
    console.log(userID, "this is user id");
    $http.post('/user/' + userID +'/delete').then(function(data){
      console.log('made it back from backend, after deleting user from DB', data);
      callback(data);
    })
  }

	return factory;
});
