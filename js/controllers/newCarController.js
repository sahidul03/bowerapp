bowerApp.$inject = ['Car', 'HostServerDomain', 'Upload'];
bowerApp.controller('newCarController', function($scope, Car, HostServerDomain, Upload, $state) {
	$scope.message = 'New car page.';
	$scope.car = {
		title: '',
		price: '',
		discount: '',
		details: '',
		photo: null
	};
	$scope.file = null;
	$scope.savedCar = null;
	$scope.submit = Submit;


	function Submit(){
		//if ($scope.form.file.$valid && $scope.file) {
		//	$scope.newCar.photo = $scope.file;
		Upload.upload({
			url: 'http://localhost:5000/api/cars',
			data: {car: $scope.car}
		}).then(SuccessFn, ErrorFn);


		function SuccessFn(data) {
			//$scope.createdCar = data.data;
			$state.go('home');
		}

		function ErrorFn(data) {
			$scope.savedCar = data.data;
		}
		//$scope.upload($scope.file);
		//}

	}
});