(function () {
	angular
		.module('bowerApp')
		.factory('Car', Car);

	Car.$inject = ['$http','Hostname'];

	function Car($http, Hostname) {
		var Car = {
			all: all,
			get: get,
			post: post,
			put: put,
			del: del,
			address: address,
			passwordChange: passwordChange,
			passwordReset: passwordReset
		};
		//var host = 'http://demo-api.jinerbadsha.com/';
		return Car;

		function all() {
			return $http.get(Hostname + '/api/cars');
		}

		function get(id) {
			return $http.get(Hostname + '/api/users', id);
		}

		function post(car) {
			return $http.post(Hostname + '/api/cars', car);
		}

		function put(id) {
			return $http.put(Hostname + '/api/users', id);
		}

		function del(id) {
			return $http.delete(Hostname + '/api/users/' + id);
		}

		function address() {
			return $http.get(Hostname + '/api/addresses');
		}

		function passwordChange(data) {
			return $http.patch(Hostname + '/api/change_password', data);
		}

		function passwordReset(data) {
			return $http.post(Hostname + '/api/reset_password', data);
		}
	}
})();