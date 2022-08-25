vendasApp.controller('AllSalesController', (function ($scope, $http) {
    var vm = this;
    vm.title = 'AllSalesController';

    var url = "http://localhost:8080/sales";

    vm.allSales = function () {
        $http.get(url)
            .then(function (response) {
                vm.sales = response.data;
            }).catch(function (response) {
                vm.response = 'ERROR: ' + response.status;
            });

        vm.sale = vm.sales;
        vm.SelectSale = function (sale) {
            vm.sale = sale;
            JSON.stringify(sale)
        }
    }
}))