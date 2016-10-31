angular.module('AEIRS').controller('editStudentController', function($scope, $routeParams, $location, studentFactory){

	console.log('I am able to load my editStudentController along with my all_students partial');

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
