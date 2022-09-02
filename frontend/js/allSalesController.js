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

	//se a requisiçao der sucesso, armazenar a lista de sales dentro de uma variavel accessivel na view

	vm.sale = {
		date: "",
		deals: 0,
		visited: 0,
		amount: 0,
		sellerId: 0,
		sellerName: ""
	}


	function GetAllSales() {
		$http.get(url)
			.then(function (response) {
				vm.sales = response.data.content;
			}).catch(function (response) {
				response = 'ERROR: ' + response.status;
			});
	}

	GetAllSales();


	function InsertSale(sale) {
		$http.post(url, JSON.stringify(sale))
			.then(function (response) {
				var sale = response.content;
				console.log(response);
				console.log('response', sale);
				GetAllSales();
			})
			.catch(function (response) {
				vm.response = 'ERROR: ' + response.status;
			});
	}

	function UpdateSale(sale) {
		SelectSale(sale);
		if (sale.id !== 0 && sale.id !== undefined) {
			$http.put(`${url}/${sale.id}`, JSON.stringify(sale)).then(function (response) {
				var sale = response.content;
				console.log(response);
				console.log('response', sale);
				GetAllSales();
			})
				.catch(function (response) {
					vm.response = 'ERROR: ' + response.status;
				});
		}
		else (alert("Por favor selecione uma venda válida"))
	}

	function DeleteSale(sale) {
		SelectSale(sale);
		var response = GetAllSales();
		if (sale.id !== 0 && sale.id !== undefined) {
			$http.delete(`${url}/${sale.id}`, JSON.stringify(sale)).then(function (response) {
				vm.sales = response;
				delete vm.sale;
				vm.GetAllSales();
			})
				.catch(function (response) {
					vm.response = 'ERROR: ' + response.status;
				});
		}
	}

	function SelectSale(sale) {
		vm.sale = sale
		JSON.stringify(vm.sale);
		console.log(vm.sale)
	}



	vendasApp.controller('salesByIdController', (function ($routeParams) {
		$routeParams.id;
	}));

	vendasApp.controller('ApagarController', (function (sale) {
		alert("Tem certeza que deseja apagar");
	}))
}));