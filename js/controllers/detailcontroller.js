angular.module('Booya')

.controller('DetailCtrl', function($scope, $routeParams, Items){
    $scope.itemID = $routeParams.item_id;
    $scope.item = {};
    Items.getOne($scope.itemID)
        .then(function(response){
        //success
        var items  = response.data.celebrities;
        items.forEach(function(i){
            if (i.id == $scope.itemID)
                {
                    $scope.item = i;
                }
        });
        
    }, function(response){
        //failure
    });
});