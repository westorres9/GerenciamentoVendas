vendasApp.controller('userController', (function ($http) {
	var vm = this;
	vm.title = 'userController';
	vm.GetAllUsers = GetAllUsers;
	vm.InsertUser = InsertUser;
	vm.UpdateUser = UpdateUser;
	vm.DeleteUser = DeleteUser;
	vm.SelectUser = SelectUser;

	var url = "http://localhost:8080/users";

	vm.user = {
		id: 0,
		name: "",
		email: "",
		password: "",
		
	}

	function GetAllUsers() {
		$http.get(url)
        .then(function (response) {
			vm.users= response.data.content;
		}).catch(function (response) {
			response = 'ERROR: ' + response.status;
		});
    }

	GetAllUsers();

	function InsertUser (user) {
		$http.post(url,JSON.stringify(team))	
			.then(function (response) {
				vm.user = response.content;
				console.log(response);
				vm.GetAllUsers();
			})
			.catch(function (response) {
				response = 'ERROR: ' + response.status;
			});
	}

	function UpdateUser (user) {
		SelectUser(user);
		$http.put(`${url}/${user.id}`, JSON.stringify(user))
			.then(function (response) {
				var user = response.content;
				console.log(response);
				console.log('response', user);
				GetAllUsers();
			})
			.catch(function (response) {
				vm.response = 'ERROR: ' + response.status;
			});
	}

	function DeleteUser (user) {
		$http.delete(`${url}/${user.id}`, JSON.stringify(user))
		.then(function (response) {
			var user = response.content;
			console.log(response);
			console.log('response', user);
			GetAllUsers();
		})
		.catch(function (response) {
			vm.response = 'ERROR: ' + response.status;
		});
	}

	function SelectUser(user) {
		vm.user = user
		JSON.stringify(vm.user);
		console.log(vm.user)
	}
})
);