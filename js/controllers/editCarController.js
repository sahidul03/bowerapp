bowerApp.$inject = ['Car', 'HostServerDomain', 'Upload'];
bowerApp.controller('editCarController', function($scope, Car, HostServerDomain, Upload, $state, $stateParams) {
	$scope.message = 'Car edit page.';
	Car.editCar($stateParams.id).then(SuccessFn, ErrorFn);
	$scope.submit = Submit;

	function SuccessFn(data) {
		$scope.carData = data.data;
		$scope.car = {
			title: $scope.carData.title,
			price: $scope.carData.price,
			details: $scope.carData.details,
			discount: $scope.carData.discount,
			photo: $scope.carData.photo.url
		}
	}
	function ErrorFn(data) {
		console.log(data)
	}

	function Submit(){
		//if ($scope.form.file.$valid && $scope.file) {
		//	$scope.newCar.photo = $scope.file;
		Upload.upload({
			url: 'http://localhost:5000/api/cars/' + $scope.carData.id,
			method: 'PUT',
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