(function(angular) {
    'use strict';

    //创建正在热映模块 
    var moduleHot = angular.module('moviecat.movie_list', [
        'ngRoute',
        'moviecat.services.http'
    ]);
    //配置模块的路由
    moduleHot.config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/:category/:page', {
            controller: 'MovieListController',
            templateUrl: 'movie_list/view.html'
        });
    }]);

    moduleHot.controller('MovieListController', [
        '$scope',
        '$route',
        '$routeParams',
        // '$http',
        'HttpService',
        function($scope, $route, $routeParams, HttpService) { //这里删除了$http形参
            $scope.loading = true;
            $scope.title = ''; //标题
            $scope.data = []; //拿到的豆瓣数据
            $scope.msg = ''; //错误信息
            $scope.pageCount = 3; //一页显示多少条
            $scope.currentPage = parseInt($routeParams.page); //
            $scope.start = ($scope.currentPage - 1) * $scope.pageCount; //从那里开始读取数据
            $scope.totalPages = 0;            
            // 1.使用不跨域的方便请求数据
            // $http.get('data.json').then(function(response){
            //     $scope.data=response.data;
            // },function(err){
            //     $scope.msg='请求异常，请稍候再试。';            
            // });

            //2.使用自定义的跨域请求
            HttpService.jsonp(
                'http://api.douban.com/v2/movie/'+$routeParams.category, { start: $scope.start, count: $scope.pageCount },
                function(data) {
                    $scope.data = data;
                    $scope.title = data.title;
                    $scope.totalPages = Math.ceil(data.total / $scope.pageCount);//共多少页
                    console.log($scope.totalPages);
                    $scope.loading = false;
                    $scope.$apply();
                });
            $scope.goPage = function(page) {
                console.log(page);

                if (page > 0 && page <= $scope.totalPages) {
                    console.log(666);

                    $route.updateParams({ page: page });
                }
            }
        }
    ]);


})(angular);
