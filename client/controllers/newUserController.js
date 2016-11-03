angular.module('AEIRS').controller('newUserController', function($scope, $routeParams, $location, userFactory){

	console.log('I am able to load my newUserController along with my new_prof partial');

  $scope.userRegister=function(){
    console.log('userRegister in the newUserController', $scope.userRegistrationData);
    userFactory.addUser($scope.userRegistrationData, function(userArray){
      $scope.users=userArray;
    })
  }
})
