'use strict';

// ajax跨域请求
(function(angular) {
    //使用自定义跨域请求的原因
    //由于默认angular提供的异步请求对象不支持自定义回调函数名
    //angular随机分配的回调函数名称不被豆瓣支持
    var http = angular.module('moviecat.services.http', []);
    http.service('HttpService', ['$window', '$document', function($window, $document) {
        this.jsonp = function(url, data, callback) {
            //1.构造随机函数名
            var fnSuffix = Math.random().toString().replace('.', '');
            var cbFuncName = 'my_json_callback' + fnSuffix;
            //2.将此函数名直接定义在window全局环境中，不推荐
            //推荐使用angular的方式，windows.angular.funName
            //但此处angular的方式与豆瓣不兼容
            //$window[cbFuncName]此处的命名相当于window.my_json_callback=function(data){...}
            //将上一行的my_json_callback定义为全局函数，调用此函数是在构造的scipt标签中调用，形式如下：
            //;my_json_callback09978802098529842({jsonobj});
            //其中jsonobj即是豆瓣回复的数据。函数最前面的;号是为了防止前面有其它js代码与其混在一起，例如：
            //alert(123);my_json_callback
            $window[cbFuncName] = callback;
            //3.添加网址后的参数，如：?callback=fnName&name=jim
            var querystring = url.indexOf('?') == -1 ? '?' : '&';
            for (var key in data) {
                querystring += key + '=' + data[key] + '&';
            }
            querystring += 'callback=' + cbFuncName;
            //4.创建script标签
            var scriptElement = $document[0].createElement('script');
            scriptElement.src = url + querystring;
            $document[0].body.appendChild(scriptElement);
        }
    }]);

})(angular);
