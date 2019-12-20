var mainApp = angular.module("mainApp", ['ngRoute']);

mainApp.config(['$routeProvider', function($routeProvider) {
    $routeProvider
    .when('/login', {
        templateUrl: 'login.html',
    })
    .when('/signup', {
        templateUrl: 'signup.html',
    })
    .when('/dashboard', {
        templateUrl: 'dashboard.html',
    })
    .otherwise({
        redirectTo: '/login'
    });
}])