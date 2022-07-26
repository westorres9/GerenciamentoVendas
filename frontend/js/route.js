vendasApp.config(function ($routeProvider) {
	$routeProvider

		// route for the home page
		.when('/', {
			templateUrl: 'pages/home/home.html',
			controller: 'mainController'
		})

		.when('/login', {
			templateUrl: 'pages/login/login.html',
			controller: 'loginController',
			controllerAs: 'LCVm'
		})

		// route for the about page
		.when('/teams', {
			templateUrl: 'pages/teams/teams.html',
			controller: 'teamController',
			controllerAs: 'TCVm',
		})

		// route for the contact page
		.when('/sales', {
			templateUrl: 'pages/sales/sales.html',
			controller: 'AllSalesController',
			controllerAs: 'Vm'
		})

		.when("/sales/:id", {
			templateUrl: 'pages/sales/salesdetail.html',
			controller: 'salesByIdController'
		})

		.when('/users', {
			templateUrl: 'pages/users/user.html',
			controller: 'userController',
			controllerAs: 'UVm'
		})

		.when('/teste', {
			templateUrl: 'pages/teste/teste.html',
			controller: 'Customers',
			controllerAs: 'customersVm'
		})

		.otherwise('/');
});