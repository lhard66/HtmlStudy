(function(angular){
	'use strict';
	//为应用程序创建一个模块，用来管理界面的结构
	var myApp=angular.module('app',['ngRoute','app.controllers.main']);
	//路由配置
	myApp.config(['$routeProvider',function($routeProvider) {
		$routeProvider
			.when('/:status?',{
				controller:'MainController',
				templateUrl:'main_tmpl'//内嵌式路由模版
			})
			.otherwise({
				redirectTo:'/'
			});
	}]);
	
})(angular);