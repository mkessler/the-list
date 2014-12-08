'use strict';

angular.module('myApp.listView', ['ngRoute', 'ngResource'])

.config(['$routeProvider', function($routeProvider) {
	$routeProvider.when('/values', {
		templateUrl: 'listView/listView.html',
		controller: 'listViewCtrl'
	});
}])

.controller('listViewCtrl', ['$scope', '$location', 'Value', function($scope, $location, Value) {
	$scope.values = Value.query();
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