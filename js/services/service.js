(function () {
	angular
		.module('bowerApp')
		.factory('Car', Car);

	Car.$inject = ['$http'];

	function Car($http) {
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
		return Car;

		function all() {
			return $http.get('http://localhost:3000/api/cars');
		}

		function get(id) {
			return $http.get('http://localhost:3000/api/users', id);
		}

		function post(customer) {
			return $http.post('http://localhost:3000/api/sign_up', user);
		}

		function put(id) {
			return $http.put('http://localhost:3000/api/users', id);
		}

		function del(id) {
			return $http.delete('http://localhost:3000/api/users/' + id);
		}

		function address() {
			return $http.get('http://localhost:3000/api/addresses');
		}

		function passwordChange(data) {
			return $http.patch('http://localhost:3000/api/change_password', data);
		}

		function passwordReset(data) {
			return $http.post('http://localhost:3000/api/reset_password', data);
		}
	}
})();