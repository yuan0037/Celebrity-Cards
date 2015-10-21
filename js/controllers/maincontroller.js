angular.module('Booya')

.controller('MainCtrl', function($scope, $http, Items){

    $scope.myVar = "Test"

    //$http({method:'GET', url:'data/data.json'})
    Items.getAll()
        .then(function(response){
        //success
        $scope.celebrity_list = response.data;
    }, function(response){
        //failure
    });

});
