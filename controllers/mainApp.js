var mainApp = angular.module("mainApp", ['ngRoute']);

mainApp.config(['$routeProvider', function($routeProvider) {
    $routeProvider
    .when('/login', {
        templateUrl: 'login.html',
        controller: 'loginController'
    })
    .when('/signup', {
        templateUrl: 'signup.html',
        controller: 'signupController'
    })
    .otherwise({
        redirectTo: '/login'
    });
}])