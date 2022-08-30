vendasApp.controller("loginController", function ($http, $httpParamSerializerJQLike , AuthService) {
	var vm = this;
	vm.user = { 'grant_type': 'password' };
	vm.authenticate = function () {
		var CLIENT_ID = 'dsvendas'
		var CLIENT_SECRET = 'dsvendas123'

		$http.post("http://localhost:8080/oauth/token", $httpParamSerializerJQLike($scope.user),
			{
				headers: {
					'Content-Type': 'application/x-www-form-urlencoded',
					'Authorization': 'Basic ' + window.btoa(CLIENT_ID + ':' + CLIENT_SECRET)
				}
			})
			.then(function (response, $window) {
				const loginResponse = response.data;
				console.log('response', response)
				console.log(AuthService.setToken);
				AuthService.setToken(loginResponse);
				console.log('log2', AuthService.getToken());
			}).catch(function (response) {
				console.log("Falha" + response.data);
			});
	}
})