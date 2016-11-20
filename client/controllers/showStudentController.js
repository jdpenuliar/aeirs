angular.module('AEIRS').controller('showStudentController', function($http, $scope, $routeParams, $cookies, $location, studentFactory){

	console.log('show specific student');

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

  $scope.gridOptions = {
    columnDefs: [
    { field: 'name' },
    { field: 'gender', visible: false},
    { field: 'company' }
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

  $http.get('https://cdn.rawgit.com/angular-ui/ui-grid.info/gh-pages/data/100.json')
  .success(function(data) {
    $scope.gridOptions.data = data;
  });


  $scope.removeStudent = function(){
    console.log("this is the removeStudent method in the showController");
    console.log(studentID);
    studentFactory.removeStudent(studentID, function(){
      $location.path('/all_students');
    })
  }

})
