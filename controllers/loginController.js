angular.module('mainApp').controller('loginController', function($scope, $http, $location) {
    $scope.title = "Use your username and password to log back in:";

    $scope.reset = function() {
        $scope.username = "";
        $scope.password = "";
        console.log("Reset the fields!");
    }

    $scope.login = function() {
        var url = "http://localhost:5000/login";
        var data = {
            'username': $scope.username,
            'password': $scope.password
        }

        $http.post(url, data).then(function(response) {
            console.log(`Successfully sent data and got back ${JSON.stringify(response)}`)
            $location.path('/#/dashboard');
        }, 
        function(error) {
            console.log(`There was an error: ${error}`);
        })
    }

    $scope.reset();
})