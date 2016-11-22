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
	    $scope.myChartObject.data = {
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
		            {v: $scope.grades.attendace},
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
	});

	$scope.updateGrade = function(){
		$scope.grade._id = subjectID;
		gradesFactory.updateSubjectGrade($scope.grade, function(data){
			$location.url('/section/'+$scope.grades._student._section);
		});
	}
	$scope.myChartObject = {};
    
    $scope.myChartObject.type = "ColumnChart";

 //    $scope.myChartObject.data = {
 //    	"cols": [
	//         {id: "t", label: "Student", type: "string"},
	//         {id: "s", label: "Grades", type: "number"}
	//     ], 
	//     "rows": [
	//         {
	//         	c: [
	// 	            {v: "Mushrooms"},
	// 	            {v: 3},
	// 	        ]
	// 	    },
	//      //    {
	//      //    	c: $scope.onions
	//      //    },
	//      //    {
	//      //    	c: [
	// 	    //         {v: "Olives"},
	// 	    //         {v: 31}
	// 	    //     ]
	// 	    // },
	//      //    {
	//      //    	c: [
	// 	    //         {v: "Zucchini"},
	// 	    //         {v: 1},
	// 	    //     ]
	// 	    // },
	//      //    {
	//      //    	c: [
	// 	    //         {v: "Pepperoni"},
	// 	    //         {v: 2},
	// 	    //     ]
	// 	    // }
 //    	]
	// };

})
