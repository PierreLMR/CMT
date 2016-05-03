angular.module('CMT.courseListController', []).controller('courseListController', ['$scope', 'courses', '$location', '$http','$q', function ($scope, courses, $location, $http, $q){

	$scope.alphabeticalOrder = true;
	$scope.sort = 'name';
	$scope.courses = courses;


	$scope.go = function(id){
		$location.path('/cours/' + id);
	};


	$scope.sortCatalog = function ( sortMode ){

			if( sortMode == 'alphabeticalOrder' ){
				$scope.descendingGradeOrder = false;
				$scope.ascendingGradeOrder = false;
				$scope.alphabeticalOrder = true;

				$scope.sort = 'name';

				return;

			}else if (sortMode == 'descendingGradeOrder') {
				$scope.alphabeticalOrder = false;
				$scope.ascendingGradeOrder = false;
				$scope.descendingGradeOrder = true;

				$scope.sort = '-courseAverage';

				return;
				
			}else if (sortMode == 'ascendingGradeOrder') {
				$scope.alphabeticalOrder = false;
				$scope.descendingGradeOrder = false;
				$scope.ascendingGradeOrder = true;

				$scope.sort = 'courseAverage';

				return;
			}
	};

}]);