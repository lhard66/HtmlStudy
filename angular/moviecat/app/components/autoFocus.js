'use strict';

(function(angular) {
    angular.module('moviecat.directives.auto_focus', [])
        .directive('autoFocus', ['$location', function($location) {
            // Runs during compile
            var path=$location.path();//获取URL地址。例如：/coming_soon/1
            return {
                restrict: 'A', // E = Element, A = Attribute, C = Class, M = Comment
                link: function($scope, iElm, iAttrs, controller) {
                    var aLink = iElm.children().attr('href');
                    var type = aLink.replace(/#(\/.+?)\/\d+/,'$1');//coming_soon
                    //判断从标签中拿到的地址与URL地址是否匹配
                    if(path.startsWith(type)){
                    	iElm.addClass('active');
                    }
                    iElm.on('click',function(){
                    	iElm.parent().children().removeClass('active');
                    	iElm.addClass('active');
                    });
                }
            };
        }]);



})(angular);
