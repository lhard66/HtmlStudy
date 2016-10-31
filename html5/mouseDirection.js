function mouseDirection(event, obj) {
    //依赖jQuery
    //e表示event，鼠标移动的对象。
    var w = $(obj).width(); // 得到盒子宽度
    var h = $(obj).height();// 得到盒子高度
    // 获取x值
    var x = (event.pageX - obj.offsetLeft - (w / 2)) * (w > h ? (h / w) : 1);
    // 获取y值
    var y = (event.pageY - obj.offsetTop - (h / 2)) * (h > w ? (w / h) : 1);
    //direction的值为“0,1,2,3”分别对应着“上，右，下，左”
    var direction = Math.round((((Math.atan2(y, x) * (180 / Math.PI)) + 180) / 90) + 3) % 4;
    return direction;
}