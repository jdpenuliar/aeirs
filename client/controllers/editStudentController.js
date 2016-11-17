angular.module('AEIRS').controller('editStudentController', function($scope, $routeParams, $cookies, $location, studentFactory){

	console.log('I am able to load my editStudentController along with my all_students partial');

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

  var studentID=$routeParams.id;
  console.log('this is routeParams.id ', $routeParams.id);
  studentFactory.getStudent(studentID, function(data){
    console.log('this is data from show controller ', data);
    $scope.student=data.data;
  });

  $scope.updateStudent = function(){
    console.log("haha");
    studentFactory.updateStudent($scope.student, function(data){
      $location.path('/all_students');
    });
  };
});
