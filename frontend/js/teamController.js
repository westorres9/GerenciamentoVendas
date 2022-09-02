vendasApp.controller('teamController', (function ($http) {
	var vm = this;
	vm.title = 'teamController';
	vm.GetAllTeams = GetAllTeams;
	vm.InsertTeam = InsertTeam;
	vm.UpdateTeam = UpdateTeam;
	vm.DeleteTeam = DeleteTeam;
	vm.SelectTeam = SelectTeam;

	var url = "http://localhost:8080/teams";

	vm.team = {
		id: 0,
		name: "",
		managerId: "",
		managerName: "",
	}

	function GetAllTeams() {
		$http.get(url)
        .then(function (response) {
			vm.teams = response.data.content;
		}).catch(function (response) {
			response = 'ERROR: ' + response.status;
		});
    }

	GetAllTeams();
	
	function InsertTeam (team) {
		$http.post(url,JSON.stringify(team))
			.then(function (response) {
				var team = response.content;
				console.log(response);
				console.log('response', team);
				GetAllTeams();
			})
			.catch(function (response) {
				vm.response = 'ERROR: ' + response.status;
			});
	}

	function UpdateTeam (team) {
		SelectTeam(team);
		$http.put(`${url}/${team.id}`, JSON.stringify(team))
			.then(function (response) {
				var team = response.content;
				console.log(response);
				console.log('response', team);
				GetAllTeams();
			})
			.catch(function (response) {
				vm.response = 'ERROR: ' + response.status;
			});
	}

	function DeleteTeam (team) {
		SelectTeam(team);
		$http.delete(`${url}/${team.id}`, JSON.stringify(team))
			.then(function (response) {
				var team = response.content;
				console.log(response);
				console.log('response', team);
				GetAllTeams();
			})
			.catch(function (response) {
				vm.response = 'ERROR: ' + response.status;
			});
	}

	function SelectTeam(team) {
		vm.team= team
		JSON.stringify(vm.team);
		console.log(vm.team)
	}
})
);