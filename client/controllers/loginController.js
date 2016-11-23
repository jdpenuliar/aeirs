angular.module('AEIRS').controller('loginController', function($scope, $location, $cookies, userFactory, sectionFactory){
  console.log("haha landinglogin");
  var logged_in_user = $cookies.get('logged_user');
  $scope.firstName = $cookies.get("firstName");
  $scope.userLevel = $cookies.get("userLevel");
  $scope.lastName = $cookies.get("lastName");
  $scope.emailAddress = $cookies.get("emailAddress");
  $scope._id = $cookies.get("_id");
  console.log('this is scope.id', logged_in_user);
  console.log('this is the cookie data',  $scope.firstName )
  if(!logged_in_user){
    $location.url('/')
  }

  $scope.register = function(){
    userFactory.register($scope.registration, function(data){
      if (data.data.errors){
        $scope.errors = data.data.errors;
      }
      else{
        console.log('this is the else statement inside resiger')
        $location.url('/faculty/allUsers');
      }
    }, function(err){
      
    })
  }

  var userID=logged_in_user;
  console.log('this is user using scope ------\n', userID)
  sectionFactory.getSectionFaculty(userID, function(data){
    console.log('this is data from show controllersectionsssssss-------------\n', data);
    $scope.sections=data.data;
  })

  $scope.login = function(){
    userFactory.login(
      $scope.userLogin,
      function(data){
        if (data.data.errors){
          console.log('front end fail log in---\n');
          $scope.errors = data.data.errors;
        }
        else{
          console.log('front end success log in---\n');
          $scope.user = data.data;
          cookie_userID = data.data._id;
          cookie_firstName = data.data.firstName;
          cookie_lastName = data.data.lastName;
          cookie_emailAddress = data.data.emailAddress;
          cookie_userLevel = data.data.userLevel;
          $location.url('/dashboard');
          $cookies.put('logged_user', cookie_userID);
          $cookies.put('firstName', cookie_firstName);
          $cookies.put('lastName', cookie_lastName);
          $cookies.put('emailAddress', cookie_emailAddress);
          $cookies.put('userLevel', cookie_userLevel);
        }
      },
      function(err){
      }
      );
  }


	//log out method
	$scope.logout = function(){
		$cookies.remove('logged_user');
		$location.url('/');
	}

});
