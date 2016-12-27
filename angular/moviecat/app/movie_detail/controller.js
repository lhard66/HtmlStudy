(function(angular) {
    'use strict'

    var detailModule = angular.module('moviecat.movie_detail', [
        'ngRoute',
        'moviecat.services.http'
    ]);
    detailModule.config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/detail/:id', {
            templateUrl: 'movie_detail/view.html',
            controller: 'MovieDetailController'
        });
    }]);
    detailModule.controller('MovieDetailController', [
        '$scope',
        '$route',
        '$routeParams',
        'HttpService',
        'AppConfig',
        function($scope, $route, $routeParams, HttpService, AppConfig) {
            $scope.movie = {};
            var apiAddress = AppConfig.detailApiAddress + $routeParams.id;
            HttpService.jsonp(apiAddress,{},function(data){
            	$scope.movie=data;
            	$scope.$apply();
            });
        }
    ]);
})(angular);
