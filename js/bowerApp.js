// create the module and name it scotchApp
var bowerApp = angular.module('bowerApp', ['ngRoute', 'ng-token-auth', 'ngFileUpload']);

// create the controller and inject Angular's $scope
bowerApp.controller('mainController', function($scope) {

	// create a message to display in our view
	$scope.message = 'Everyone come and see how good I look!';
});
bowerApp.config(['$httpProvider', function($httpProvider) {
	$httpProvider.defaults.useXDomain = true;
	$httpProvider.defaults.withCredentials = true;
	delete $httpProvider.defaults.headers.common["X-Requested-With"];
	$httpProvider.defaults.headers.common["Accept"] = "application/json";
	$httpProvider.defaults.headers.common["Content-Type"] = "application/json";
}
]);

bowerApp
	.config(function($authProvider) {

		// the following shows the default values. values passed to this method
		// will extend the defaults using angular.extend

		$authProvider.configure({
			apiUrl:                  'http://localhost:5000',
			tokenValidationPath:     '/auth/validate_token',
			signOutUrl:              '/auth/sign_out',
			emailRegistrationPath:   '/auth',
			accountUpdatePath:       '/auth',
			accountDeletePath:       '/auth',
			confirmationSuccessUrl:  window.location.href,
			passwordResetPath:       '/auth/password',
			passwordUpdatePath:      '/auth/password',
			passwordResetSuccessUrl: window.location.href,
			emailSignInPath:         '/auth/sign_in',
			storage:                 'cookies',
			forceValidateToken:      false,
			validateOnPageLoad:      true,
			proxyIf:                 function() { return false; },
			proxyUrl:                '/proxy',
			omniauthWindowType:      'sameWindow',
			authProviderPaths: {
				github:   '/auth/github',
				facebook: '/auth/facebook',
				google:   '/auth/google'
			},
			tokenFormat: {
				"access-token": "{{ token }}",
				"token-type":   "Bearer",
				"client":       "{{ clientId }}",
				"expiry":       "{{ expiry }}",
				"uid":          "{{ uid }}"
			},
			cookieOps: {
				path: "/",
				expires: 9999,
				expirationUnit: 'days',
				secure: false,
				domain: 'domain.com'
			},
			createPopup: function(url) {
				return window.open(url, '_blank', 'closebuttoncaption=Cancel');
			},
			parseExpiry: function(headers) {
				// convert from UTC ruby (seconds) to UTC js (milliseconds)
				return (parseInt(headers['expiry']) * 1000) || null;
			},
			handleLoginResponse: function(response) {
				return response.data;
			},
			handleAccountUpdateResponse: function(response) {
				return response.data;
			},
			handleTokenValidationResponse: function(response) {
				return response.data;
			}
		});
	});