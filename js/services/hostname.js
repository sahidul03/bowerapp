(function () {
	angular
		.module('bowerApp')
		.factory('Hostname', Hostname);

	function Hostname() {
		//var Hostname = 'http://demo-api.jinerbadsha.com';
		var Hostname = 'http://localhost:5000';

		return Hostname;

	}
})();