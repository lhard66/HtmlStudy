(function(angular) {
    'use strict';

    //创建top250 
    var moduleRank = angular.module('moviecat.top250', [
        'ngRoute'
    ]);
    //配置模块的路由
    moduleRank.config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/top250', {
            templateUrl: 'top250/view.html',
            controller: 'Top250Controller'
        });
    }]);

    moduleRank.controller('Top250Controller', ['$scope', function($scope) {
        $scope.title = 'top250';
    }]);

})(angular);
