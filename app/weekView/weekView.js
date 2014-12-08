'use strict';

angular.module('myApp.weekView', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/behavior-of-the-week', {
    templateUrl: 'weekView/weekView.html',
    controller: 'weekViewCtrl'
  });
}])

.controller('weekViewCtrl', ['$scope', '$filter', '$location', 'Value', function($scope, $filter, $location, Value) {
	//$scope.date = $filter('date')(new Date(), 'ww');
	$scope.value = Value.query();
	$scope.valueIndex = function() { return Math.floor(($filter('date')(new Date(), 'ww') % 8)/2); };
	$scope.behaviorIndex = function() { 
		if (($filter('date')(new Date(), 'ww') % 8) % 2 === 0){
			return 0;
		}
		else{
			return 1;
		}
	};
	$scope.goToPage = function (page) {        
	    $location.url(page);
	};
}])

.factory('Value', ['$resource',
	function($resource){
		return $resource('values/:valueId.json', {}, {
		query: {method:'GET', params:{valueId:'values'}, isArray:true}
	});
}]);