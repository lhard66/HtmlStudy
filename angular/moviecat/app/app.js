'use strict';

// 应用入口，载入模块依赖和配置路由
// 需要把所有用到的直接子模块都载入进来，但其相关模块的路由可以在其对应的模块内配置。
// 若由载入其直接子模块，则不会报错，但路由导入会失败，没有反应。
angular.module('moviecat', [
  'ngRoute',
  'moviecat.movie_detail',
  'moviecat.movie_list',
  'moviecat.directives.auto_focus'
])
.constant('AppConfig',{
	pageSize:3,
	listApiAddress:'http://api.douban.com/v2/movie/',
	detailApiAddress:'http://api.douban.com/v2/movie/subject/'
})
.config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/in_theaters/1'});
}])
.controller('SearchController', ['$scope','$route', function($scope,$route){
	//取出文本中输入的值
	$scope.input='';
	//定义敲击键盘事件
	$scope.Search=function(){
		console.log($scope.input);
		//更新路由地址，执行对应的函数
		$route.updateParams({category:'search',q:$scope.input});
	}
}]);
