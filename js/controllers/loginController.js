bowerApp.controller('loginController', function($scope,$auth,$rootScope,$state) {
	$scope.message = 'login page.';
	$rootScope.$on('auth:login-success', function(ev, user) {
		$state.go('home');

	});

	$rootScope.$on('auth:login-error', function(ev, reason) {
		//$scope.errors = reason.errors[0];
		console.log("Failed to login!")
	});
	$rootScope.$on('auth:invalid', function() {
		//$scope.errors = reason.errors[0];
		console.log("Invalid!")
	});
});