angular.module('CMT.writeAReviewController', []).controller('writeAReviewController', ['$scope', 'courses', function ($scope, courses){

	var date = new Date();

	$scope.courses = courses;


	$scope.courseSelected = function (course){
		$scope.course = course;
		$scope.name = course.name;
		$scope.code = course.code;
		$scope.courseID = course._id;
	};



	if(date.getFullYear() % 2 == 0){

		$scope.isYearEven = true;

		$scope.thisYear = (date.getFullYear()-1).toString() + '/' + date.getFullYear().toString(); 
		$scope.lastYear = (date.getFullYear()-2).toString() + '/' + (date.getFullYear()-1).toString(); 
		$scope.twoYearsAgo = (date.getFullYear()-3).toString() + '/' + (date.getFullYear()-2).toString();
	
	}else{

		$scope.isYearEven = false;
		
		$scope.thisYear = date.getFullYear().toString() + '/' + (date.getFullYear()+1).toString(); 
		$scope.lastYear = (date.getFullYear()-2).toString() + '/' + (date.getFullYear()-1).toString();
		$scope.twoYearsAgo = (date.getFullYear()-3).toString() + '/' + (date.getFullYear()-2).toString();
	}

	$scope.addReview = function (){

		$scope.$broadcast('show-errors-check-validity');

		if($scope.reviewForm.$valid){



		var tempReview = {
			"name": $scope.name,
			"code": $scope.code,
			"author": 'author',
			"average": 2,
			"bet": $scope.bet,
			"contentGrade": $scope.contentGrade,
			"teachingGrade": $scope.teachingGrade,
			"day": $scope.day,
			"professor": $scope.professor,
			"round": $scope.round,
			"contentReview": $scope.contentReview,
			"teachingReview": $scope.teachingReview,
			"trimester": $scope.trimester,
			"year": $scope.year,
			"time": $scope.time,
			"upvotes": 0,
			"passed": $scope.passed
		};

		console.log(tempReview);

		courses.addReview($scope.course._id, tempReview).success(function (review){
			//$scope.course.reviews.push(review);
			console.log('addingReview');
		});

		}

	}

	
	
}]);
