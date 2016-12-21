(function(angular) {
    'use strict';

    //独立的模块
    var mainModule = angular.module('app.controllers.main', ['app.services.main']); //此处的app.services.main指的是注入的服务模块

    mainModule.controller('MainController', [
        '$scope',
        '$routeParams',
        '$route',
        'MainService',
        function($scope, $routeParams, $route, MainService) {
            $scope.text = '';
            $scope.todos = MainService.get();

            //添加新项目
            $scope.add = function() {
                    if (!$scope.text) {
                        return;
                    }
                    MainService.add($scope.text);
                    $scope.text = '';
                }
                //清空已完成的
            $scope.clearCompleted = function() {
                    //拿到清除过的数据
                    var newTodos = MainService.clearCompleted();
                    //赋值给scope.todos
                    $scope.todos = newTodos;
                }
                //是否显示clear completed按钮
            $scope.existCompleted = function() {

                    for (var k in $scope.todos) {
                        if ($scope.todos[k].completed) {
                            return true;
                        }
                    }
                    return false;
                }
                //删除项目
            $scope.delete = function(id) {
                    MainService.remove(id);
                }
                //当前正在编辑的文本框ID
            $scope.currentEditId = -1;
            $scope.editing = function(id) {
                $scope.currentEditId = id;
            }
            $scope.save = function() {
                    $scope.currentEditId = -1;
                }
                //全选
            var selStatus = true;
            $scope.selectAll = function() {
                    $scope.todos.forEach(function(item) {
                        item.completed = selStatus;
                    });
                    selStatus = !selStatus;
                }
                //自定义比较函数，默认filter过滤器使用的是模糊匹配
                //筛选已完成和未完成时使用
            $scope.equalCompare = function(source, target) {
                    return source === target;
                }
                //筛选状态
            $scope.selector = {};
            var status = $routeParams.status;
            switch (status) {
                case 'active':
                    $scope.selector = { completed: false };
                    break;
                case 'completed':
                    $scope.selector = { completed: true };
                    break;
                default:
                	//将url地址用户自己输入的内容清空
                    $route.updateParams({ status: '' });
                    $scope.selector = {};
                    break;
            }
            //全部标记为完成
            $scope.toggleAll=function(){
            	MainService.toggleAll();
            }
            //单个标记为完成
            $scope.toggle=function(){
            	MainService.save();
            }
        }
    ]);

})(angular);
