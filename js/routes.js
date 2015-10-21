angular.module('Booya')

.config(function($routeProvider){
    //routing settings;
    $routeProvider
    .when('/', {
        templateUrl:'templates/main.html',
        controller: 'MainCtrl as list'
    })
    .when('/detail/:item_id', {
        templateUrl:'templates/detail.html', 
        controller: 'DetailCtrl'
    })
    .otherwise({redirectTo: '/'});
})