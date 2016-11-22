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
		console.log("------\n",$scope.grades);
	    $scope.myChartObject.options = {
	        'title': 'Grades in '+ $scope.grades.sub
	    };
	});

	$scope.updateGrade = function(){
		$scope.grade._id = subjectID;
		gradesFactory.updateSubjectGrade($scope.grade, function(data){
			$location.url('/section/'+$scope.grades._student._section);
		});
	}
	$scope.myChartObject = {};
    
    $scope.myChartObject.type = "ColumnChart";
    
    $scope.myChartObject.data = {
    	"cols": [
	        {id: "t", label: "Student", type: "string"},
	        {id: "s", label: "Grades", type: "number"}
	    ], 
	    "rows": [
	        {
	        	c: [
		            {v: "Mushrooms"},
		            {v: 3},
		        ]
		    },
	     //    {
	     //    	c: $scope.onions
	     //    },
	     //    {
	     //    	c: [
		    //         {v: "Olives"},
		    //         {v: 31}
		    //     ]
		    // },
	     //    {
	     //    	c: [
		    //         {v: "Zucchini"},
		    //         {v: 1},
		    //     ]
		    // },
	     //    {
	     //    	c: [
		    //         {v: "Pepperoni"},
		    //         {v: 2},
		    //     ]
		    // }
    	]
	};

})
