vendasApp.controller('userController', (function ($http) {
	var vm = this;
	vm.title = 'userController';
	vm.GetAllUsers = GetAllUsers;

	var url = "http://localhost:8080/users";

	function GetAllUsers() {
		$http.get(url)
		.then(function (response) {
			vm.users = response.data.content;
			console.log(vm.users);
		}).catch(function (response) {
			response = 'ERROR: ' + response.status;
		})
	}

	const users = new Promise(GetAllUsers);
	users.then(result => {
		vm.users = result;
		console.log(vm.users)
	}).catch(result => {
		console.log("error")	
	})

	InsertUser = function (user) {
		$http.post(url, { user })		
			.then(function (response) {
				vm.users = response;
				delete vm.user;
				vm.GetAllUsers();
			})
			.catch(function (response) {
				response = 'ERROR: ' + response.status;
			});
	}

	UpdateUser = function (user) {
		$http.put(`http://localhost:8080/users/${user.id}`, { user })
			.then(function (response) {
				vm.users = response;
				delete vm.user;
				vm.GetAllUsers();
			})
			.catch(function (response) {
				response = 'ERROR: ' + response.status;
			});
	}

	DeleteUser = function (user) {
		$http.delete(`http://localhost:8080/users/${$scope.user.id}`, { user })
			.then(function (response) {
				vm.users = response;
				delete vm.user;
				vm.GetAllUsers();
			})
			.catch(function (response) {
				vm.response = 'ERROR: ' + response.status;
			});
	}
})
);