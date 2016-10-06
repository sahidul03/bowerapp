// create the module and name it scotchApp
// also include ngRoute for all our routing needs
//var bowerApp = angular.module('bowerApp', ['ngRoute', 'ngFileUpload']);

// configure our routes



bowerApp.config(function($authProvider, $urlRouterProvider, $stateProvider) {
	$urlRouterProvider.otherwise("/login");
	$stateProvider
		.state('login', {
			url: '/login',
			templateUrl: 'template/login.html',
			controller: 'loginController',
			resolve: {
				auth: loginCheckForLoginPage
			}
		})
		.state('signUp', {
			url: '/signUp',
			templateUrl: 'template/signUp.html',
			controller: 'signUpController',
			resolve: {
				auth: loginCheckForLoginPage
			}
		})
		.state('about', {
			url: '/about',
			templateUrl: 'template/about.html',
			controller: 'aboutController',
			resolve: {
				auth: loginCheck
			}
		})
		.state('contact', {
			url: '/contact',
			templateUrl: 'template/contact.html',
			controller: 'contactController',
			resolve: {
				auth: loginCheck
			}
		})
		.state('newCar', {
			url: '/newCar',
			templateUrl: 'template/car/newCar.html',
			controller: 'newCarController',
			resolve: {
				auth: loginCheck
			}
		})
		.state('carShow', {
			url: '/carShow/:id',
			templateUrl: 'template/car/show.html',
			controller: 'showCarController',
			resolve: {
				auth: loginCheck
			}
		})
		.state('home', {
			url: '/',
			templateUrl: 'template/home.html',
			controller: 'mainController',
			resolve: {
				auth: loginCheck
			}
		});



	function loginCheck($auth,$state){
		return $auth.validateUser().then(function(resp) {
		})
		.catch(function(){
			$state.go('login');
		});
	}

	function loginCheckForLoginPage($auth,$state) {
		return $auth.validateUser().then(function(resp) {
			$state.go('home');
		})
		.catch(function(){

		});
	}

});