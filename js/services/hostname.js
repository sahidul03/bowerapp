(function () {
	angular
		.module('bowerApp')
		.factory('HostServerDomain', HostServerDomain);

	function HostServerDomain() {
		//var Hostname = 'http://demo-api.jinerbadsha.com';
		var HostServerDomain = { domain: 'http://localhost:5000' };

		return HostServerDomain;

	}
})();