angular.module('AEIRS').controller('showStudentController', function($scope, $routeParams, $location, studentFactory){

	console.log('I am able to load my showStudentController along with my all_students partial');

  var studentID=$routeParams.id;
	console.log('this is routeParams.id ', $routeParams.id);

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
