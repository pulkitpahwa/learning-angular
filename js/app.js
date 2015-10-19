var app = angular.module("myapp",[]);
app.controller("abccontroller", function($scope){
    $scope.name= "Pulkit Pahwa",
    $scope.username = "pulkitpahwa"
});

app.controller("bcd", function($scope){
    $scope.name = [
     {name : "Pulkit Pahwa", age : 22},
     {name : "Bipin Roy", age : 22},
     {name : "Rahul Ranjan", age : 22},
     {name : "Abhinav Kumar", age : 22},
     {name : "Abhinav Kumar", age : 22},
     {name : "Pratap", age : 22}
    ];
});
