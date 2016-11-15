angular.module('AEIRS').controller('newClassController', function($scope, $routeParams, $cookies, $location, classFactory){

	console.log('I am able to load my newClassController along with my all_classses partial');
	var logged_in_user = $cookies.get('logged_user');

	$scope.logged_in_user_id = logged_in_user;


	$scope.createClass=function(){
		$scope.newClass.created_by = $scope.logged_in_user_id;
		console.log('createClass in the newClassController----\n', $scope.newClass);
		classFactory.addclass($scope.newClass, function(data){
			// $scope.newClass = {};
			console.log('contorller data from factory===\n',data);
			$scope.classes=data;
		});
	}
})
