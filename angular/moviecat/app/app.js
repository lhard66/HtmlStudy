'use strict';

// 应用入口，载入模块依赖和配置路由
// 需要把所有用到的直接子模块都载入进来，但其相关模块的路由可以在其对应的模块内配置。
// 若由载入其直接子模块，则不会报错，但路由导入会失败，没有反应。
angular.module('moviecat', [
  'ngRoute',
  'moviecat.movie_list',
  'moviecat.directives.auto_focus'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/in_theaters/1'});
}]);
