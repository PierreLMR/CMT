
angular.module('CMT.MainCtrl', []).controller('MainCtrl', [
'$scope', 'courses', '$location',
function($scope, courses, $location){

  $scope.courses = courses;


	$scope.go = function(courseID){
		$location.path('/cours/' + courseID);
	};

}]);