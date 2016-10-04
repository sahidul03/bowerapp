// create the module and name it scotchApp
// also include ngRoute for all our routing needs
//var bowerApp = angular.module('bowerApp', ['ngRoute', 'ngFileUpload']);

// configure our routes

bowerApp.config(function($routeProvider, $authProvider) {
	$routeProvider

		// route for the home page
		.when('/', {
			templateUrl : 'template/home.html',
			controller  : 'mainController',
			resolve: {
				auth: function($auth,$state) {
					return $auth.validateUser().
						then(function(resp) {
							console.log(resp);
					    })
						.catch(function(){
							console.log('please login');
							//$state.go('login');
						});
				}
			}
		})

		// route for the about page
		.when('/about', {
			templateUrl : 'template/about.html',
			controller  : 'aboutController'
		})

		// route for the login page
		.when('/login', {
			templateUrl : 'template/login.html',
			controller  : 'loginController'
		})

		// route for the contact page
		.when('/contact', {
			templateUrl : 'template/contact.html',
			controller  : 'contactController'
		})
		.when('/newCar', {
			templateUrl : 'template/newCar.html',
			controller  : 'newCarController'
		});
});

bowerApp.$inject = ['Car', 'HostServerDomain', 'Upload'];

// create the controller and inject Angular's $scope
bowerApp.controller('mainController', function($scope,$auth,$rootScope, Car, HostServerDomain) {
	// create a message to display in our view
	$scope.message = 'Everyone come and see how good I look!';
	$scope.hostname = HostServerDomain;
	$scope.cars = Car.all().then(SuccessFn, ErrorFn);


	function SuccessFn(data) {
		$scope.cars = data.data;
	}

	function ErrorFn() {
		console.log('can not get cars data');
	}
});

bowerApp.controller('aboutController', function($scope) {
	$scope.message = 'Look! I am an about page.';
});

bowerApp.controller('loginController', function($scope,$auth,$rootScope,$state) {
	$scope.message = 'login page.';
	$rootScope.$on('auth:login-success', function(ev, user) {
		console.log(user)

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


bowerApp.controller('contactController', function($scope, $auth) {
	$scope.message = 'Contact us! JK. This is just a demo.';

});

bowerApp.controller('newCarController', function($scope, Car, HostServerDomain, Upload) {
	$scope.message = 'New car page.';
	$scope.newCar = {
		title: '',
		price: '',
		discount: '',
		details: '',
		photo: null
	};
	$scope.file = null;
	$scope.createdCar = null;
	$scope.submit = Submit;


	function Submit(){
		//if ($scope.form.file.$valid && $scope.file) {
		//	$scope.newCar.photo = $scope.file;
			Car.post($scope.newCar).then(SuccessFn, ErrorFn);


			function SuccessFn(data) {
				$scope.createdCar = data.data;
			}

			function ErrorFn(data) {
				$scope.createdCar = data.data;
			}
			//$scope.upload($scope.file);
		//}

	}
});