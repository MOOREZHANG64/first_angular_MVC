var myApp = angular.module('mySimpleApp',[]);

myApp.controller('MySimpleController', ['$scope', function($scope) {
    $scope.message = 'initial message';
    $scope.greet = function() {
        $scope.message = 'hello!';
    };
}]);
