(function(angular) {
    'use strict';

    //创建正在热映模块 
    var moduleHot = angular.module('moviecat.in_theaters', [
        'ngRoute',
        'moviecat.services.http'
    ]);
    //配置模块的路由
    moduleHot.config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/in_theaters/:page', {
            templateUrl: 'in_theaters/view.html',
            controller: 'InTheatersController'
        });
    }]);

    moduleHot.controller('InTheatersController', [
        '$scope',
        '$http', 
        'HttpService',
        function($scope,$http,HttpService) {    	
        $scope.title = '正在热映';
        $scope.data=[];
        $scope.msg='';
        // 1.使用不跨域的方便请求数据
        // $http.get('data.json').then(function(response){
        //     $scope.data=response.data;
        // },function(err){
        //     $scope.msg='请求异常，请稍候再试。';            
        // });

        //2.使用自定义的跨域请求
        HttpService.jsonp(
            'http://api.douban.com/v2/movie/in_theaters', 
            { start: 3, count: 8 },
            function(data){
                $scope.data=data;
                $scope.$apply();
        });
    }])


})(angular);
