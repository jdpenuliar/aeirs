angular.module('AEIRS').controller('showUserController', function($scope, $routeParams, $cookies, $location, userFactory){

	console.log('I am able to load my showUserController along with my all_users partial');

  var userID=$routeParams.id;
	console.log('this is routeParams.id ', $routeParams.id);

  var logged_in_user = $cookies.get('logged_user');
  $scope.firstName = $cookies.get("firstName");
  $scope.userLevel = $cookies.get("userLevel");
  $scope.lastName = $cookies.get("lastName");
  $scope.emailAddress = $cookies.get("emailAddress");
  console.log('this is the cookie data',  $scope.firstName )
  if(!logged_in_user){
    $location.url('/')
  }

  //log out method
  $scope.logout = function(){
    $cookies.remove('logged_user');
    $location.url('/');
  }
  
	console.log("try factory haha-------------\n",userFactory.haha);
  userFactory.getUser(userID, function(data){
    console.log('this is data from show controller-------------\n', data);
    $scope.user=data.data;
  })

	$scope.removeUser = function(){
    console.log("this is the removeUser method in the showController");
    console.log(userID);
    userFactory.removeUser(userID, function(){
      $location.url('/allUsers');
    })
  }
})
