// create the module and name it scotchApp
// also include ngRoute for all our routing needs
//var bowerApp = angular.module('bowerApp', ['ngRoute', 'ngFileUpload']);

// configure our routes

bowerApp.config(function($routeProvider) {
	$routeProvider

		// route for the home page
		.when('/', {
			templateUrl : 'template/home.html',
			controller  : 'mainController'
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

bowerApp.$inject = ['Car', 'Hostname', 'Upload'];

// create the controller and inject Angular's $scope
bowerApp.run(function($rootScope,$location){
	$rootScope.auth_url = "http://localhost:3000"
	$rootScope.image_url = $rootScope.auth_url
});
bowerApp.controller('mainController', function($scope, Car, Hostname) {
	// create a message to display in our view
	$scope.message = 'Everyone come and see how good I look!';
	$scope.hostname = Hostname;
	$scope.cars = Car.all().then(SuccessFn, ErrorFn);


	function SuccessFn(data) {
		$scope.cars = data.data;
	}

	function ErrorFn() {
		console.log('Error');
	}
});

bowerApp.controller('aboutController', function($scope) {
	$scope.message = 'Look! I am an about page.';
});

bowerApp.controller('loginController', function($scope, $auth) {
	$scope.message = 'login page.';
	$scope.handleLoginBtnClick = function() {
		$auth.submitLogin($scope.loginForm)
			.then(function(resp) {
				// handle success response
				console.log('success');
				//$scope.$on('auth:login-success', function(ev, user) {
				//	alert('Welcome ', user.email);
				//});
			})
			.catch(function(resp) {
				// handle error response
				console.log('error');
			});
	};
});


bowerApp.controller('contactController', function($scope, $auth) {
	$scope.message = 'Contact us! JK. This is just a demo.';
	$scope.registrationForm = {}
	$scope.handleRegBtnClick = function() {
		$auth.submitRegistration($scope.registrationForm)
			.then(function(resp) {
				console.table(resp);
			})
			.catch(function(resp) {
				console.table(resp);
				// handle error response
			});
	};
});

bowerApp.controller('newCarController', function($scope, Car, Hostname, Upload) {
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