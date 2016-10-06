bowerApp.controller('signUpController', function($scope,$auth,$rootScope,$state) {
	$scope.message = 'Sign Up page.';

	$rootScope.$on('auth:registration-email-success', function(ev, message) {
		console.log("A registration email was sent to " + message.email);
		$state.go('home');
	});
	$rootScope.$on('auth:registration-email-error', function(ev, reason) {
		//$scope.errors = reason.errors[0];
		alert("Registration failed: " + reason.errors[0]);
	});
});