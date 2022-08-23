
var vendasApp = angular.module('vendasApp', ['ngRoute']);



// create the controller and inject Angular's $scope
vendasApp.controller('mainController', function ($scope) {
	
	$scope.message = 'An Angular Controller injects this text by using $scope. ';
});