'use strict';

angular.module('myApp.listView', ['ngRoute', 'ngResource'])

.config(['$routeProvider', function($routeProvider) {
	$routeProvider.when('/values', {
		templateUrl: 'listView/listView.html',
		controller: 'listViewCtrl'
	});
}])

.controller('listViewCtrl', ['$scope', 'Value', function($scope, Value) {
	$scope.values = Value.query();
}])

.factory('Value', ['$resource',
	function($resource){
		return $resource('values/:valueId.json', {}, {
		query: {method:'GET', params:{valueId:'values'}, isArray:true}
	});
}]);