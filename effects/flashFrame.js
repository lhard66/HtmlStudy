//动态属性
function getStyle(obj, attr) {
    //IE
    if (obj.currentStyle) {
        return obj.currentStyle[attr];
    } else {
        //w3c标准
        return window.getComputedStyle(obj, null)[attr];
    }
}
//封闭缓动动画
function slowMoveAnimate(obj, json, millisecond, callback) {
    //先清除计时器
    clearInterval(obj.timer);
    var current, step, flag, ms = millisecond || 30;
    obj.timer = setInterval(function () {
        flag = true;
        for (var attr in json) {
            //获取当前对象的数值
            if (attr == 'opacity') {
                current = Math.round(parseInt(getStyle(obj, attr) * 100)) || 0;
            } else {
                current = parseInt(getStyle(obj, attr));
            }
            //计算步长=(目标-当前距离)/10
            step = (json[attr] - current) / 10;
            //四舍五入当前步长
            step = step > 0 ? Math.ceil(step) : Math.floor(step);
            if (attr == 'opacity') {
                //判断浏览器是否支持opacity
                if ('opacity' in obj.style) {
                    //除100，要转为opacity能的小数
                    obj.style.opacity = (current + step) / 100;
                } else {
                    obj.style.filter = 'alpha(opacity = ' + (current + step) * 10 + ')';
                    //obj.style.filter = "alpha(opacity = " + (current + step) * 10 + ")";
                }
            } else if (attr == 'zIndex') {
                obj.style.zIndex = json[attr];
            } else {
                obj.style[attr] = current + step + 'px';
            }
            //判断动画是否结束，结束后执行回调函数（执行在下面）
            if (current != json[attr]) {
                flag = false;
            }
        }
        if (flag) {
            clearInterval(obj.timer);
            //执行回调函数
            if (callback) {
                callback();
            }
        }
    }, ms);
}