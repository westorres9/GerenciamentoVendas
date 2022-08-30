vendasApp.controller('AllSalesController', (function ($http) {
	var vm = this;
    vm.title = 'AllSalesController';
	vm.GetAllSales = GetAllSales;
	vm.SelectSale = SelectSale;
	vm.InsertSale = InsertSale;
	vm.UpdateSale = UpdateSale;
	vm.DeleteSale = DeleteSale;

    var url = "http://localhost:8080/sales";
	console.log('allSalescontroller', vm)

	//fazer a requisiçao pra http://localhost:8080/sales
	GetAllSales();
	//se a requisiçao der sucesso, armazenar a lista de sales dentro de uma variavel accessivel na view


	function GetAllSales() {
		$http.get(url)
        .then(function (response) {
			vm.sales = response.data.content;
		}).catch(function (response) {
			response = 'ERROR: ' + response.status;
		});
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
		vm.Select(url + `/${sale.id}`)
		vm.sale = sale;
		JSON.stringify(vm.sale)
		console.log(vm.sale)
	}
}));


vendasApp.controller('salesByIdController', (function ($routeParams) {
	$routeParams.id;
}));

vendasApp.controller('ApagarController', (function (sale) {
	alert("Tem certeza que deseja apagar");
}))
