AEIRSAppModule.controller('updateGradesController', function($scope, $routeParams, $cookies, $location, gradesFactory, studentFactory){
  var logged_in_user = $cookies.get('logged_user');
  $scope.firstName = $cookies.get("firstName");
  $scope.userLevel = $cookies.get("userLevel");
  $scope.lastName = $cookies.get("lastName");
  $scope.emailAddress = $cookies.get("emailAddress");

  if(!logged_in_user){
    $location.url('/')
  }

  //log out method
  $scope.logout = function(){
    $cookies.remove('logged_user');
    $location.url('/');
  }

  var subjectID=$routeParams.id;

  gradesFactory.getSubject(subjectID, function(data){
    $scope.grades=data.data;
    console.log("in grades for chart------\n",$scope.grades);
    $scope.myChartObjectQuizQuarter1 = {};
    $scope.myChartObjectQuizQuarter1.type = "ColumnChart";
    $scope.myChartObjectQuizQuarter1.options = {
      'title': '1st Quarter Quizzes in '+ $scope.grades.subject
    };
    $scope.myChartObjectQuizQuarter1.data = {
      "cols": [
        {id: "t", label: "Student", type: "string"},
        {id: "s", label: "Grades", type: "number"}
      ], 
      "rows": [
        {
          c: [
            {v: "Quiz1"},
            {v: $scope.grades.quiz1},
          ]
        },
        {
          c: [
            {v: "Quiz2"},
            {v: $scope.grades.quiz2},
          ]
        },
        {
          c: [
            {v: "Quiz3"},
            {v: $scope.grades.quiz3},
          ]
        },
        {
          c: [
            {v: "Quiz4"},
            {v: $scope.grades.quiz4},
          ]
        },
        {
          c: [
            {v: "Quiz5"},
            {v: $scope.grades.quiz5},
          ]
        },
        {
          c: [
            {v: "Quiz6"},
            {v: $scope.grades.quiz6},
          ]
        },
        {
          c: [
            {v: "Quiz7"},
            {v: $scope.grades.quiz7},
          ]
        },
        {
          c: [
            {v: "Quiz8"},
            {v: $scope.grades.quiz8},
          ]
        },
        {
          c: [
            {v: "Quiz9"},
            {v: $scope.grades.quiz9},
          ]
        },
        {
          c: [
            {v: "Quiz10"},
            {v: $scope.grades.quiz10},
          ]
        },
      ]
    };

    $scope.myChartObjectQuizQuarter2 = {};
    $scope.myChartObjectQuizQuarter2.type = "ColumnChart";
    $scope.myChartObjectQuizQuarter2.options = {
      'title': '2nd Quarter Quizzes in '+ $scope.grades.subject
    };
    $scope.myChartObjectQuizQuarter2.data = {
      "cols": [
        {id: "t", label: "Student", type: "string"},
        {id: "s", label: "Grades", type: "number"}
      ], 
      "rows": [
        {
          c: [
            {v: "Quiz11"},
            {v: $scope.grades.quiz11},
          ]
        },
        {
          c: [
            {v: "Quiz12"},
            {v: $scope.grades.quiz12},
          ]
        },
        {
          c: [
            {v: "Quiz13"},
            {v: $scope.grades.quiz13},
          ]
        },
        {
          c: [
            {v: "Quiz14"},
            {v: $scope.grades.quiz14},
          ]
        },
        {
          c: [
            {v: "Quiz15"},
            {v: $scope.grades.quiz15},
          ]
        },
        {
          c: [
            {v: "Quiz16"},
            {v: $scope.grades.quiz16},
          ]
        },
        {
          c: [
            {v: "Quiz17"},
            {v: $scope.grades.quiz17},
          ]
        },
        {
          c: [
            {v: "Quiz18"},
            {v: $scope.grades.quiz18},
          ]
        },
        {
          c: [
            {v: "Quiz19"},
            {v: $scope.grades.quiz19},
          ]
        },
        {
          c: [
            {v: "Quiz20"},
            {v: $scope.grades.quiz20},
          ]
        },
      ]
    };

    $scope.myChartObjectQuizQuarter3 = {};
    $scope.myChartObjectQuizQuarter3.type = "ColumnChart";
    $scope.myChartObjectQuizQuarter3.options = {
      'title': '3rd Quarter Quizzes in '+ $scope.grades.subject
    };
    $scope.myChartObjectQuizQuarter3.data = {
      "cols": [
        {id: "t", label: "Student", type: "string"},
        {id: "s", label: "Grades", type: "number"}
      ], 
      "rows": [
        {
          c: [
            {v: "Quiz21"},
            {v: $scope.grades.quiz21},
          ]
        },
        {
          c: [
            {v: "Quiz22"},
            {v: $scope.grades.quiz22},
          ]
        },
        {
          c: [
            {v: "Quiz23"},
            {v: $scope.grades.quiz23},
          ]
        },
        {
          c: [
            {v: "Quiz24"},
            {v: $scope.grades.quiz24},
          ]
        },
        {
          c: [
            {v: "Quiz25"},
            {v: $scope.grades.quiz25},
          ]
        },
        {
          c: [
            {v: "Quiz26"},
            {v: $scope.grades.quiz26},
          ]
        },
        {
          c: [
            {v: "Quiz27"},
            {v: $scope.grades.quiz27},
          ]
        },
        {
          c: [
            {v: "Quiz28"},
            {v: $scope.grades.quiz28},
          ]
        },
        {
          c: [
            {v: "Quiz29"},
            {v: $scope.grades.quiz29},
          ]
        },
        {
          c: [
            {v: "Quiz30"},
            {v: $scope.grades.quiz30},
          ]
        },
      ]
    };

    $scope.myChartObjectQuizQuarter4 = {};
    $scope.myChartObjectQuizQuarter4.type = "ColumnChart";
    $scope.myChartObjectQuizQuarter4.options = {
      'title': '4th Quarter Quizzes in '+ $scope.grades.subject
    };
    $scope.myChartObjectQuizQuarter4.data = {
      "cols": [
        {id: "t", label: "Student", type: "string"},
        {id: "s", label: "Grades", type: "number"}
      ], 
      "rows": [
        {
          c: [
            {v: "Quiz31"},
            {v: $scope.grades.quiz31},
          ]
        },
        {
          c: [
            {v: "Quiz32"},
            {v: $scope.grades.quiz32},
          ]
        },
        {
          c: [
            {v: "Quiz33"},
            {v: $scope.grades.quiz33},
          ]
        },
        {
          c: [
            {v: "Quiz34"},
            {v: $scope.grades.quiz34},
          ]
        },
        {
          c: [
            {v: "Quiz35"},
            {v: $scope.grades.quiz35},
          ]
        },
        {
          c: [
            {v: "Quiz36"},
            {v: $scope.grades.quiz36},
          ]
        },
        {
          c: [
            {v: "Quiz37"},
            {v: $scope.grades.quiz37},
          ]
        },
        {
          c: [
            {v: "Quiz38"},
            {v: $scope.grades.quiz38},
          ]
        },
        {
          c: [
            {v: "Quiz39"},
            {v: $scope.grades.quiz39},
          ]
        },
        {
          c: [
            {v: "Quiz40"},
            {v: $scope.grades.quiz40},
          ]
        },
      ]
    };
    $scope.myChartObjectExamAttendance = {};
    $scope.myChartObjectExamAttendance.type = "ColumnChart";
    $scope.myChartObjectExamAttendance.options = {
      'title': 'Quarterly Exam and whole attendance in '+ $scope.grades.subject
    };
    $scope.myChartObjectExamAttendance.data = {
      "cols": [
        {id: "t", label: "Student", type: "string"},
        {id: "s", label: "Grades", type: "number"}
      ], 
      "rows": [
        {
          c: [
            {v: "Exam1"},
            {v: $scope.grades.exam1},
          ]
        },
        {
          c: [
            {v: "Exam2"},
            {v: $scope.grades.exam2},
          ]
        },
        {
          c: [
            {v: "Exam3"},
            {v: $scope.grades.exam3},
          ]
        },
        {
          c: [
            {v: "Exam4"},
            {v: $scope.grades.exam4},
          ]
        },
        {
          c: [
            {v: "Attendance"},
            {v: $scope.grades.attendance},
          ]
        },
      ]
    };
  });

  $scope.updategrade = function(){
    $scope.grade._id = subjectid;
    gradesfactory.updatesubjectgrade($scope.grade, function(data){
      $location.url('/section/'+$scope.grades._student._section);
    });
  }


})
