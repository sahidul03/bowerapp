// create the module and name it scotchApp
// also include ngRoute for all our routing needs
var bowerApp = angular.module('bowerApp', ['ngRoute']);

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

		// route for the contact page
		.when('/contact', {
			templateUrl : 'template/contact.html',
			controller  : 'contactController'
		});
});

bowerApp.$inject = ['Car'];

// create the controller and inject Angular's $scope
bowerApp.run(function($rootScope,$location){
	$rootScope.auth_url = "http://localhost:3000"
	$rootScope.image_url = $rootScope.auth_url
});
bowerApp.controller('mainController', function($scope, Car) {
	// create a message to display in our view
	$scope.message = 'Everyone come and see how good I look!';
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

bowerApp.controller('contactController', function($scope) {
	$scope.message = 'Contact us! JK. This is just a demo.';
});