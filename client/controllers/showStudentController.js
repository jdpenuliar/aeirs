angular.module('AEIRS').controller('showStudentController', function($scope, $routeParams, $cookies, $location, studentFactory){

	console.log('I am able to load my showStudentController along with my all_students partial');

  var studentID=$routeParams.id;
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
  
  console.log("try factory haha-------------\n",studentFactory.haha);
  studentFactory.getStudent(studentID, function(data){
    console.log('this is data from show controller-------------\n', data);
    $scope.student=data.data;
  })

  $scope.removeStudent = function(){
    console.log("this is the removeStudent method in the showController");
    console.log(studentID);
    studentFactory.removeStudent(studentID, function(){
      $location.path('/all_students');
    })
  }

})
