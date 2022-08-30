vendasApp.controller('teamController', (function ($http) {
	var vm = this;
	vm.title = 'teamController';
	vm.GetAllTeams = GetAllTeams;

	var url = "http://localhost:8080/teams";

	function GetAllTeams() {
		$http.get(url)
        .then(function (response) {
			vm.teams = response.data.content;
		}).catch(function (response) {
			response = 'ERROR: ' + response.status;
		});
    }

	GetAllTeams();
	
	InsertTeam = function (user) {
		$http.post("http://localhost:8080/teams", { team })
			.then(function (response) {
				vm.teams = response;
				delete vm.team;
				vm.GetAllTeams();
			})
			.catch(function (response) {
				vm.response = 'ERROR: ' + response.status;
			});
	}

	UpdateTeam = function (team) {
		$http.put("http://localhost:8080/team/" + team.id, { team })
			.then(function (response) {
				vm.teams = response;
				delete vm.team;
				vm.GetAllTeams();
			})
			.catch(function (response) {
				vm.response = 'ERROR: ' + response.status;
			});
	}

	DeleteTeam = function (team) {
		$http.delete("http://localhost:8080/teams/" + team.id, { team })
			.then(function (response) {
				vm.teams = response;
				delete vm.team;
				vm.GetAllTeams();
			})
			.catch(function (response) {
				vm.response = 'ERROR: ' + response.status;
			});
	}
})
);