/**
 * Created by lhard on 10/04/2016.
 */

var bannerNum = $('bigbannerul').children.length;

for (var i = 1; i <= bannerNum; i++) {
    var bannerNumli = document.createElement('li');
    bannerNumli.innerText = i;
    var ulobj = $('bannerNumul');
    ulobj.appendChild(bannerNumli);
}
//选中第一个
$('bannerNumul').children[0].className = 'slider-num';
//鼠标划过序号背景颜色改变
for (var i = 0; i < bannerNum; i++) {
    $('bannerNumul').children[i].onmouseover = function () {
        for (var i = 0; i < bannerNum; i++) {
            $('bannerNumul').children[i].removeAttribute('class');
            $('bigbannerul').children[i].removeAttribute('class');
        }
        this.className = 'slider-num';

        $('bigbannerul').children[this.innerText - 1].className = 'slider-current';
    }
}
$('topbtnId').onmouseover = function () {
    var textObj = this.children[1];
    textObj.style.backgroundColor = '#C81623';
    textObj.style.color = '#fff';
    this.style.backgroundColor = '#C81623';
    slowMoveAnimate(textObj, {left: -30});
}
$('topbtnId').onmouseout = function () {
    var textObj = this.children[1];
    textObj.style.backgroundColor = '#7A6E6E';
    textObj.style.color = '#7A6E6E';
    this.style.backgroundColor = '#7A6E6E';
    slowMoveAnimate(textObj, {left: 0});
}
//跳至首页
$('topbtnId').onclick = function () {
    var leader = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    var target = 0;
    var timer = setInterval(function () {
        leader = leader + (target - leader) / 10;
        leader = Math.floor(leader);
        window.scrollTo(0, leader);
        if (leader == 0) {
            clearInterval(timer);
        }
    }, 20);
}
window.onscroll = function () {


}





















