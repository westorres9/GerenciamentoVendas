vendasApp.controller('GetSalesController', (function ( $http) {
    var vm = this;
    vm.title = 'GetSalesController';
    var url = "http://localhost:8080/sales";
        console.log('1');
        $http.get(url)
        .then(function (response) {
            console.log('2');
            vm.page = response.data;
            console.log(vm.page);
            console.log(vm.page.content);
            vm.sales = vm.page.content;
        }).catch(function (response) {
            response = 'ERROR: ' + response.status;
            console.log('deu erro');
        });
        console.log('3');
    console.log(vm.sales)
}));