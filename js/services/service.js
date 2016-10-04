(function () {
	angular
		.module('bowerApp')
		.factory('Car', Car);

	Car.$inject = ['$http','HostServerDomain', 'Upload'];

	function Car($http, $auth, HostServerDomain, Upload) {
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
		var host = 'http://localhost:5000';
		return Car;

		function all() {
			//console.log(HostServerDomain);
			return $http.get(host + '/api/cars');
		}

		function get(id) {
			return $http.get(host + '/api/users', id);
		}

		function post(car) {
			//return $http.post(Hostname + '/api/cars', car);
		return	Upload.upload({
				url: host + '/api/cars',
				data: {car: car}
			})
		}

		function put(id) {
			return $http.put(host + '/api/users', id);
		}

		function del(id) {
			return $http.delete(host + '/api/users/' + id);
		}

		function address() {
			return $http.get(host + '/api/addresses');
		}

		function passwordChange(data) {
			return $http.patch(host + '/api/change_password', data);
		}

		function passwordReset(data) {
			return $http.post(host + '/api/reset_password', data);
		}
	}
})();