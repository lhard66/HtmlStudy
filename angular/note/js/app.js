(function(angular) {
  'use strict';

  /**
   * MyTodoMvc Module
   *
   * 应用程序的主要的模块
   */
  	var noteModule=angular.module('note',[]);
	noteModule.controller('MainController',['$scope',function ($scope) {
		//初始化数据,数组对象
		$scope.todos=[
			{id:1,text:'学习',completed:true},
			{id:2,text:'睡觉',completed:true},
			{id:3,text:'打豆豆',completed:false}
		];
		//添加
		$scope.text='';//初始化添加框的内容
		$scope.add=function () {
			if($scope.text==''){
				return;
			}
			$scope.todos.push({
				id:Math.random(),
				text:$scope.text,
				completed:false
			});
			$scope.text='';
		}
		//删除
		$scope.delete=function (id) {
			for(var i=0;i<$scope.todos.length;i++){
				if($scope.todos[i].id==id){
					$scope.todos.splice(i,1);
				}
			}
		}
	}])
})(angular);
