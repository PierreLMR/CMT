angular.module('CMT.reviewListController', []).controller('reviewListController', ['$scope', 'graph', 'courses', 'course', function ($scope, graph, courses, course){

	  //$scope.configGrade = graph.config;
	 // $scope.data = graph.data;
	  $scope.orderByDate = true;
	  $scope.course = course;
	  $scope.labels = graph.labels
	  $scope.series = graph.series;
	  $scope.data = graph.data;

	  $scope.getStyle = function(enabled, color) {
			 return {
			  'background': enabled?color:'#1B90D5',
			  'border-color': enabled?color:'#1B90D5'
			 }
			}

	  $scope.sortReviews = function ( sortMode){

	  	if( sortMode == 'orderByUpvotes' ){
				$scope.orderByDescendingGrade = false;
				$scope.orderByAscendingGrade = false;
				$scope.orderByDate = false;
				$scope.orderByUpvotes = true;

				$scope.sort = 'upvotes';

				return;

			}else if (sortMode == 'orderByDescendingGrade') {
				$scope.orderByUpvotes = false;
				$scope.orderByAscendingGrade = false;
				$scope.orderByDescendingGrade = true;
				$scope.orderByDate = false;

				$scope.sort = '-average';

				return;
				
			}else if (sortMode == 'orderByAscendingGrade') {
				$scope.orderByUpvotes = false;
				$scope.orderByDescendingGrade = false;
				$scope.orderByAscendingGrade = true;
				$scope.orderByDate = false;

				$scope.sort = 'average';

				return;
			}else if (sortMode == 'orderByDate') {
				$scope.orderByUpvotes = false;
				$scope.orderByDescendingGrade = false;
				$scope.orderByAscendingGrade = false;
				$scope.orderByDate = true;

				$scope.sort = '-date';

				return;
			}

	  }


}]);