myApp.controller('loginUsersController', function($scope, $location, $cookies, userFactory){
  // var logged_in_user = $cookies.get('logged_user');
  // console.log(logged_in_user, " this is the logged in user in the loginController");

  $scope.register = function(){
    console.log("haha");
    usersFactory.register($scope.registration, function(data){
      if (data.data.errors){
        $scope.errors = data.data.errors;
      }
      else{
        $scope.user = data.data;
        cookie_userID = data.data._id;
        cookie_firstNAME = data.data.firstName;
        cookie_lastNAME = data.data.lastName;
        console.log(cookie_userID, 'this is the cookie_userID for user: ', cookie_firstNAME);
        $cookies.put('logged_user', cookie_userID);
        console.log($cookies.get('logged_user'));
        $location.url('/');
        // $scope.register = {};
      }
    }, function(err){
      console.log("I am an error",err);
    })
  }

  $scope.login = function(){
    usersFactory.login(
      $scope.userLogin,
      function(data){
        if (data.data.errors){
          $scope.errors = data.data.errors;
        }
        else{
          $scope.user = data.data;
          cookie_userID = data.data._id;
          cookie_firstNAME = data.data.firstName;
          cookie_lastNAME = data.data.lastName;
          console.log(cookie_userID, 'this is the cookie_userID for user: ', cookie_firstNAME);
          $location.url('/dashboard');
          $cookies.put('logged_user', cookie_userID);
          $cookies.put('first_name', cookie_firstNAME);
          console.log($cookies.get('logged_user'));
        }
      },
      function(err){
        console.log("I am an error",err);
      });
    }

    //log out method
    $scope.logout = function(){
      console.log('we are in the logout method');
      console.log($cookies.get('logged_user'), 'this is the cookie method PRE remove');
      $cookies.remove('logged_user');
      $location.url('/');
      console.log($cookies.get('logged_user'), 'this is the logged_user cookie POST remove');
      cookie_userID='';
      cookie_firstNAME='';
      cookie_lastNAME='';
      console.log(cookie_userID, 'this is the cookie_userID for user: ', cookie_firstNAME, cookie_lastNAME);
    }

});
