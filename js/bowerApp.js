// create the module and name it scotchApp
var bowerApp = angular.module('bowerApp', [
	'ngRoute',
	'ng-token-auth',
	'ngFileUpload',
	'ui.router',
	'ngStorage',
	'pascalprecht.translate'
]);


bowerApp
	.config(function($stateProvider, $urlRouterProvider, $authProvider, $translateProvider) {

		// the following shows the default values. values passed to this method
		// will extend the defaults using angular.extend

		$authProvider.configure({
			apiUrl: 'http://localhost:5000'
		});

		//$urlRouterProvider.otherwise("/login");

		// For angular translate library
		$translateProvider.useStaticFilesLoader({
			prefix: 'assets/locales/',
			suffix: '.json'
		});
		//$translateProvider.translations('en', {
		//	TITLE: 'Hello',
		//	FOO: 'This is a paragraph.',
		//	BUTTON_LANG_EN: 'english',
		//	BUTTON_LANG_DE: 'german'
		//});
		//$translateProvider.translations('de', {
		//	TITLE: 'Hallo',
		//	FOO: 'Dies ist ein Paragraph.',
		//	BUTTON_LANG_EN: 'englisch',
		//	BUTTON_LANG_DE: 'deutsch'
		//});
		$translateProvider.preferredLanguage(localStorage.getItem('preferred_lang') != null ? localStorage.getItem('preferred_lang') : 'en');


	});
