var app = angular.module('eCommerce', ['ngRoute']);

app.config(function($routeProvider) {

    $routeProvider

    .when('/', {
        templateUrl: "templates/home.html",
        controller: "homeCtrl"
    })

    .when('/admin', {
        templateUrl: "templates/admin.html",
        controller: "adminCtrl"
    })

    .otherwise({
        redirectTo: '/'
    });

});
