(function(angular) {
    'use strict';

    //创建正在热映模块 
    var moduleHot = angular.module('moviecat.in_theaters', [
        'ngRoute'
    ]);
    //配置模块的路由
    moduleHot.config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/in_theaters/:page', {
            templateUrl: 'in_theaters/view.html',
            controller: 'InTheatersController'
        });
    }]);

    moduleHot.controller('InTheatersController', ['$scope', function($scope) {
    	console.log(1111);
        $scope.title = '正在热映';
    }])


})(angular);
