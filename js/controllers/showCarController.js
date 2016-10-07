bowerApp.$inject = ['Car', 'HostServerDomain', 'Upload'];
bowerApp.controller('showCarController', function($scope, Car, HostServerDomain, Upload, $state, $stateParams) {
	$scope.message = 'Car details page.';
	Car.getCar($stateParams.id).then(SuccessFn, ErrorFn);


	function SuccessFn(data) {
		$scope.car = data.data;
		console.log($scope.car);
	}
	function ErrorFn(data) {
		console.log(data)
	}
});