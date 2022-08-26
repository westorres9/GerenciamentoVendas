vendasApp.controller('AllSalesController', (function ($scope, $http) {
	var vm = this;
    vm.title = 'AllSalesController';
	vm.GetAllSales = GetAllSales;
	vm.SelectSale = SelectSale;
	vm.InsertSale = InsertSale;
	vm.UpdateSale = UpdateSale;
	vm.DeleteSale = DeleteSale;
	 

	

    var url = "http://localhost:8080/sales";
	console.log('allSalescontroller')

    function GetAllSales() {
        $http.get(url)
            .then(function (response) {
                vm.sales = response.data.content;
				console.log(sales)
            }).catch(function (response) {
                response = 'ERROR: ' + response.status;
            });
		SelectSale(sale);
    }

	

	function InsertSale (url, sale) {
		$http.post(url, JSON.stringify(sale))
			.then(function (response) {
				
				vm.sales = response;
				delete vm.sale;
				vm.GetAllSales();
			})
			.catch(function (response) {
				vm.response = 'ERROR: ' + response.status;
			});
	}

	function UpdateSale (sale) {

		$http.put(url, { sale })
			.then(function (response) {
				vm.sales = response;
				delete vm.sale;
				vm.GetAllSales();
			})
			.catch(function (response) {
				vm.response = 'ERROR: ' + response.status;
			});
	}

	function DeleteSale (sale) {


		vm.delete(url, { sale })
			.then(function (response) {
				vm.sales = response;
				delete vm.sale;
				vm.GetAllSales();
			})
			.catch(function (response) {
				vm.response = 'ERROR: ' + response.status;
			});
	}

	function SelectSale (sale) {
		sale = sale;
		JSON.stringify(sale)
	}
})

);

vendasApp.controller('salesByIdController', (function ($routeParams) {
	$routeParams.id;
}));

vendasApp.controller('ApagarController', (function (sale) {
	alert("Tem certeza que deseja apagar");
}))
