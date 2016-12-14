(function(angular) {
  'use strict';

  /**
   * MyTodoMvc Module
   *
   * 应用程序的主要的模块
   */
  	var noteModule=angular.module('note',[]);
	noteModule.controller('MainController',['$scope','$location',function ($scope,$location) {
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
		//清除完成的项目
		$scope.clearCompleted=function () {
			var notCompleted=[];
			$scope.todos.forEach(function (item) {
				if(!item.completed){
					notCompleted.push(item);
				}
			});
			$scope.todos=notCompleted;
		}
		//是否显示clear completed按钮
		$scope.existCompleted=function () {

			for(var k in $scope.todos){
				if($scope.todos[k].completed){
					return true;
				}
			}
			return false;
		}
		//当前正在编辑的文本框ID
		$scope.currentEditId=-1;
		$scope.editing=function (id) {
			$scope.currentEditId=id;
		}
		$scope.save=function () {
			$scope.currentEditId=-1;
		}
		//全选
		var selStatus=true;
		$scope.selectAll=function () {
			$scope.todos.forEach(function (item) {
				item.completed=selStatus;
			});
			selStatus=!selStatus;
		}
		//筛选：完成、未完成、全部
		$scope.selector={};
		//因为watch只能监控$scope对象，故将$location.path()赋值给$scope
		$scope.$location=$location;
		//此处watch的形参now不能写成new,因为new是关键字
		//使用watch监控的原因：因为URL的改变，浏览器是不是自动刷新的，需要使用watch监控URL地址的改变，若改变后做一些处理。
		$scope.$watch('$location.path()',function(now,old){
			switch(now){
				case '/active':
					$scope.selector={completed:false};//这里赋的值是一个对象，不要用单引号
					break;
				case '/completed':
					$scope.selector={completed:true};
					break;
				default:
					$scope.selector={};
			}
		});

		//自定义比较函数，默认filter过滤器使用的是模糊匹配
		$scope.equalCompare=function(source,target){
			return source===target;
		}
	}])
})(angular);















