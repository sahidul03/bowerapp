bowerApp.$inject = ['Car', 'HostServerDomain', 'Upload'];

// create the controller and inject Angular's $scope
bowerApp.controller('mainController', function($scope, $auth, $rootScope, $translate, $state, Car, HostServerDomain) {
	// create a message to display in our view
	$scope.message = 'Everyone come and see how good I look!';
	$scope.hostname = HostServerDomain;

	$scope.changeLanguage = function (key) {
		$translate.use(key);
		localStorage.setItem('preferred_lang', key);
	};

	$rootScope.$on('auth:logout-success', function(ev) {
		$state.go('login');
	});

});
