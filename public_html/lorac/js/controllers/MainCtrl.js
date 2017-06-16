/* global app */
var map = [];

app.controller('myController', ["$scope",function($scope){
    $scope.emailPattern = /^[a-z]+[a-z0-9._]+@[a-z]+\.[a-z.]{2,5}$/;
    
    
    $scope.addVals = function() 
    {
        map.push({ 
            email: $scope.email,
            nombre: "talcosa"
        });
        console.log(map);
    };
}]);

