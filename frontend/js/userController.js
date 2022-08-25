vendasApp.controller('userController', (function ($scope, $http) {
	var url = "http://localhost:8080/users";
	$http.get(url)
		.then(function (response) {
			$scope.users = response.data;
			console.log(response)
		}).catch(function (response) {
			$scope.response = 'ERROR: ' + response.status;
		})

	$scope.user = $scope.users;
	$scope.SelectUser = function (user) {
		$scope.user = user;
	}

	$scope.InsertUser = function (user) {
		$http.post(url, { user })		
			.then(function (response) {
				$scope.users = response;
				delete $scope.user;
				$scope.GetAllUsers();
			})
			.catch(function (response) {
				$scope.response = 'ERROR: ' + response.status;
			});
	}

	$scope.UpdateUser = function (user) {
		$http.put(`http://localhost:8080/users/${user.id}`, { user })
			.then(function (response) {
				$scope.users = response;
				delete $scope.user;
				$scope.GetAllUsers();
			})
			.catch(function (response) {
				$scope.response = 'ERROR: ' + response.status;
			});
	}

	$scope.DeleteUser = function (user) {
		$http.delete(`http://localhost:8080/users/${$scope.user.id}`, { user })
			.then(function (response) {
				$scope.users = response;
				delete $scope.user;
				$scope.GetAllUsers();
			})
			.catch(function (response) {
				$scope.response = 'ERROR: ' + response.status;
			});
	}
})
);