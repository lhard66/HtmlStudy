(function(angular){
	//注册一个服务模块
	var serviceModule= angular.module('app.services.main',[]);
	serviceModule.service('MainService', ['$window', function($window){
		var storage=$window.localStorage;
		var todos=storage['my_todo_list']?JSON.parse(storage['my_todo_list']):[];
		//初始化数据,数组对象
		// var todos = [
        // 	{id:1,text:'学习',completed:true},
        // 	{id:2,text:'睡觉',completed:true},
        // 	{id:3,text:'打豆豆',completed:false}
        // ];
        //保存数据
        this.save=function(){
        	storage['my_todo_list']=JSON.stringify(todos);
        }
        //得到所有项目对象
		this.get=function(){
			return todos;
		}
		//添加单个项目
		this.add=function(text){
			todos.push({
				id:Math.random(),
				text:text,
				completed:false
			});
			this.save();
		}
		//清除完成的项目
		this.clearCompleted=function(){
			var result=[];
			for(var i=0;i<todos.length;i++){
				if(!todos[i].completed){
					result.push(todos[i]);
				}
			}
			todos=result;
			this.save();
			return todos;
		}
		//移除单个项目
		this.remove=function(id){
			for(var i=0;i<todos.length;i++){
				if(todos[i].id===id){
					todos.splice(i,1);
					break;
				}
			}
			this.save();				
		}
		//标记为全部完成
		var now=true;
		this.toggleAll=function(){
			for(var i=0;i<todos.length;i++){
				todos[i].completed=now;
			}
			now=!now;
			this.save();
		}
	}]);
	
})(angular);