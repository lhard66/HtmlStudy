//动态属性
function getStyle(obj, attr) {
    //IE
    if (obj.currentStyle) {
        //得到所有的样式，无论内嵌还是外联。以前用offset家族，只能得到部分样式。
        return obj.currentStyle[attr];
    } else {
        //w3c标准
        return window.getComputedStyle(obj, null)[attr];
    }
}
//封闭缓动动画
function slowMoveAnimate(obj, json, callback) {
    //先清除计时器
    clearInterval(obj.timer);
    var current, step, flag;
    obj.timer = setInterval(function () {
        flag = true;
        for (var attr in json) {
            //获取当前对象的数值
            current = parseInt(getStyle(obj, attr));
            //计算步长=(目标-当前距离)/10
            step = (json[attr] - current) / 10;
            //四舍五入当前步长
            step = step > 0 ? Math.ceil(step) : Math.floor(step);
            obj.style[attr] = current + step + 'px';
            if (current != json[attr]) {
                flag = false;
            }
        }
        if (flag) {
            clearInterval(obj.timer);
            //执行回调函数
            if(callback){
                callback();
            }
        }
    }, 10);
}