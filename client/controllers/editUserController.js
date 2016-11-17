angular.module('AEIRS').controller('editUserController', function($scope, $routeParams, $cookies, $location, userFactory){

	console.log('I am able to load my editUserController along with my edit_user partial');

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
  
  var userID=$routeParams.id;
  console.log('this is routeParams.id ', $routeParams.id);
  userFactory.getUser(userID, function(data){
    console.log('this is data from show controller ', data);
    $scope.user=data.data;
  });

  $scope.updateUser = function(){
    userFactory.updateUser($scope.user, function(data){
      $location.path('/faculty/allUsers');
    });
  };
});
