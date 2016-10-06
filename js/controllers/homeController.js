bowerApp.$inject = ['Car', 'HostServerDomain', 'Upload'];

// create the controller and inject Angular's $scope
bowerApp.controller('mainController', function($scope,$auth,$rootScope,$state, Car, HostServerDomain) {
	// create a message to display in our view
	$scope.message = 'Everyone come and see how good I look!';
	$scope.hostname = HostServerDomain;
	$scope.cars = Car.all().then(SuccessFn, ErrorFn);

	$rootScope.$on('auth:logout-success', function(ev) {
		$state.go('login');
	});

	function SuccessFn(data) {
		$scope.cars = data.data;
	}

	function ErrorFn() {
		console.log('can not get cars data');
	}
});
