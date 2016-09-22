// create the module and name it scotchApp
var bowerApp = angular.module('bowerApp', ['ngRoute']);

// create the controller and inject Angular's $scope
bowerApp.controller('mainController', function($scope) {

	// create a message to display in our view
	$scope.message = 'Everyone come and see how good I look!';
});
bowerApp.config(['$httpProvider', function($httpProvider) {
	$httpProvider.defaults.useXDomain = true;
	delete $httpProvider.defaults.headers.common['X-Requested-With'];
}
]);