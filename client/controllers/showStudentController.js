angular.module('AEIRS').controller('showStudentController', function($http, $scope, $routeParams, $cookies, $location, studentFactory, gradesFactory){

	// console.log('show specific student');

  var studentID=$routeParams.id;
  // console.log('this is routeParams.id ', $routeParams.id);

  var logged_in_user = $cookies.get('logged_user');
  $scope.firstName = $cookies.get("firstName");
  $scope.userLevel = $cookies.get("userLevel");
  $scope.lastName = $cookies.get("lastName");
  $scope.emailAddress = $cookies.get("emailAddress");
  // console.log('this is the cookie data',  $scope.firstName )
  if(!logged_in_user){
    $location.url('/')
  }

  //log out method
  $scope.logout = function(){
    $cookies.remove('logged_user');
    $location.url('/');
  }
  
  $scope.gridOptions = {
    columnDefs: [
    // { field: 'Id', visible: true },
    // { field: 'UpdatedAt', visible: true },
    // { field: 'CreatedAt', visible: true },
    // { field: 'Quiz1'},
    // { field: 'Quiz2'},
    // { field: 'Quiz3'},
    // { field: 'Quiz4'},
    // { field: 'Quiz5'},
    // { field: 'Quiz6'},
    // { field: 'Quiz7'},
    // { field: 'Quiz8'},
    // { field: 'Quiz9'},
    // { field: 'Quiz10'},
    // { field: 'Exam1'},
    // { field: 'Exam2'},
    // { field: 'Exam3'},
    // { field: 'Exam4'},
    // { field: 'Attendance'},
    // { field: 'Student', visible: true},
    // { field: 'V', visible: true}
    // { field: 'name' },
    // { field: 'gender', visible: false},
    // { field: 'company' }
    ],
    enableGridMenu: true,
    enableSelectAll: true,
    exporterCsvFilename: 'myFile.csv',
    exporterPdfDefaultStyle: {fontSize: 9},
    exporterPdfTableStyle: {margin: [30, 30, 30, 30]},
    exporterPdfTableHeaderStyle: {fontSize: 10, bold: true, italics: true, color: 'red'},
    exporterPdfHeader: { text: "My Header", style: 'headerStyle' },
    exporterPdfFooter: function ( currentPage, pageCount ) {
      return { text: currentPage.toString() + ' of ' + pageCount.toString(), style: 'footerStyle' };
    },
    exporterPdfCustomFormatter: function ( docDefinition ) {
      docDefinition.styles.headerStyle = { fontSize: 22, bold: true };
      docDefinition.styles.footerStyle = { fontSize: 10, bold: true };
      return docDefinition;
    },
    exporterPdfOrientation: 'portrait',
    exporterPdfPageSize: 'LETTER',
    exporterPdfMaxGridWidth: 500,
    exporterCsvLinkElement: angular.element(document.querySelectorAll(".custom-csv-link-location")),
    onRegisterApi: function(gridApi){
      $scope.gridApi = gridApi;
    }
  };

  gradesFactory.showStudentGrade(studentID, function(data){
    $scope.dataTableStudentGrade = data.data;
    // console.log("grades1-----\n",$scope.dataTableStudentGrade._id);
    $scope.dataTableStudentGrade._id = $scope.dataTableStudentGrade._student._id;
    $scope.dataTableStudentGrade._student = $scope.dataTableStudentGrade._student.student_last + ", " + $scope.dataTableStudentGrade._student.student_first + " " + $scope.dataTableStudentGrade._student.student_middle;
    // console.log("grades2-----\n",$scope.dataTableStudentGrade);
    $scope.gridOptions.data = [$scope.dataTableStudentGrade];
  });

  studentFactory.getStudent(studentID, function(data){
    $scope.student=data.data;
  });
  
  $scope.removeStudent = function(){
    console.log("this is the removeStudent method in the showController");
    console.log(studentID);
    studentFactory.removeStudent(studentID, function(){
      $location.path('/all_students');
    })
  }

  $scope.labels = ["January", "February", "March", "April", "May", "June", "July"];
  $scope.series = ['Series A', 'Series B'];
  $scope.data = [
    [65, 59, 80, 81, 56, 55, 40],
    [28, 48, 40, 19, 86, 27, 90]
  ];

})
