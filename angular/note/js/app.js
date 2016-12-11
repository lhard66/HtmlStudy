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
	}])
})(angular);















