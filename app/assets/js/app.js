'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
	'ngRoute',
	'ngTouch',
	'mobile-angular-ui',
	'myApp.listView',
	'myApp.weekView',
	'myApp.version'
]).
config(['$routeProvider', function($routeProvider) {
	$routeProvider.otherwise({redirectTo: '/behavior-of-the-week'});
}]);
