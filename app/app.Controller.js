'use strict'; 
angular
.module('material')
.controller('materialController', function($scope, $http, $mdSidenav){
        $scope.greeting = "holasdasdasa!";

        $http.get("data/data.json").then(function (response) {
            $scope.classfieds = response.data;
        });

        $scope.openSideBar = function () {
            $mdSidenav('left').open();
        }

});