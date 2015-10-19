var app = angular.module("myapp",[]);
app.controller("abccontroller", function($scope){
    $scope.name= "Pulkit Pahwa",
    $scope.username = "pulkitpahwa"
});

app.controller("bcd", function($scope){
    $scope.name = [
     {name : "Pulkit Pahwa", age : 22},
     {name : "Bipin Roy", age : 21},
     {name : "Rahul Ranjan", age : 23},
     {name : "Abhinav Kumar", age : 20},
     {name : "Abhinav Kumar", age : 21},
     {name : "Pratap", age : 19}
    ];
});
