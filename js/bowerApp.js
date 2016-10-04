// create the module and name it scotchApp
var bowerApp = angular.module('bowerApp', ['ngRoute', 'ng-token-auth', 'ngFileUpload', 'ui.router']);


bowerApp
	.config(function($stateProvider, $urlRouterProvider,$authProvider) {

		// the following shows the default values. values passed to this method
		// will extend the defaults using angular.extend

		$authProvider.configure({
			apiUrl: 'http://localhost:5000'
		});

		//$urlRouterProvider.otherwise("/login");


	});
