/**
 * Created by HeroLiu on 09/30/2016.
 */
function $(id) {
    return document.getElementById(id);
}

document.getElementById('closeBanner').onclick = function () {
    document.getElementById('topBanner').style.display = 'none';
}
document.getElementById('closeLogin').onclick = function () {
    document.getElementById('login').style.display = 'none';
    document.getElementById('cover').style.display = 'none';
}
document.getElementById('btnLogin').onclick = function () {
    document.getElementById('login').style.display = 'block';
    document.getElementById('cover').style.display = 'block';
}
var loginobj = $('login');
var loginX, loginY;
$('loginTitle').onmousedown = function (downevent) {
    //得到鼠标距login盒子的距离
    var downevt = downevent || window.event;
    var cursorLoginX = downevt.clientX - loginobj.offsetLeft;
    var cursorLoginY = downevt.clientY - loginobj.offsetTop;
    document.onmousemove = function (event) {
        var evt = event || window.event;
        loginX = evt.clientX - cursorLoginX;
        loginY = evt.clientY - cursorLoginY;
        loginobj.style.left = loginX + 250 + 'px';
        loginobj.style.top = loginY + 250 + 'px';
        //拖动时，取消选择
        window.getSelection ? window.getSelection().removeAllRanges() : document.selection.empty();

    }
    document.onmouseup = function () {
        document.onmousemove = null;
    }
}
//点击登陆框外部隐藏登陆框
$('cover').onclick=function () {
    document.getElementById('login').style.display = 'none';
    document.getElementById('cover').style.display = 'none';
}

















