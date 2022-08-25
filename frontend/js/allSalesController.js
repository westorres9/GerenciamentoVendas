vendasApp.controller('allSalesController', (function ($scope, $http) {
	var url = "http://localhost:8080/sales";
	$http.get(url)
		.then(function (response) {
			$scope.sales = response.data;
		}).catch(function (response) {
			$scope.response = 'ERROR: ' + response.status;
		});

	$scope.sale = $scope.sales;
	$scope.SelectSale = function (sale) {
		$scope.sale = sale;
		JSON.stringify(sale)
	}

	$scope.InsertSale = function (url, sale) {
		$http.post(url, JSON.stringify(sale))
			.then(function (response) {
				
				$scope.sales = response;
				delete $scope.sale;
				$scope.GetAllSales();
			})
			.catch(function (response) {
				$scope.response = 'ERROR: ' + response.status;
			});
	}

	$scope.UpdateSale = function (sale) {

		$http.put(url, { sale })
			.then(function (response) {
				$scope.sales = response;
				delete $scope.sale;
				$scope.GetAllSales();
			})
			.catch(function (response) {
				$scope.response = 'ERROR: ' + response.status;
			});
	}

	$scope.DeleteSale = function (sale) {


		$http.delete(url, { sale })
			.then(function (response) {
				$scope.sales = response;
				delete $scope.sale;
				$scope.GetAllSales();
			})
			.catch(function (response) {
				$scope.response = 'ERROR: ' + response.status;
			});
	}
})

);

vendasApp.controller('salesByIdController', (function ($routeParams) {
	$routeParams.id;
}));

vendasApp.controller('ApagarController', (function ($scope) {
	alert("Tem certeza que deseja apagar");
}))
