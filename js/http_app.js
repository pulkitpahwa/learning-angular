var app = angular.module("http_app",[]);

app.controller("http_controller", function($scope, $http){
    $http.get("http://www.w3schools.com/angular/customers.php")
    .success(function(response) {$scope.names = response.records;});
});
