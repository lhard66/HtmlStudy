/**
 * Created by lhard on 10/04/2016.
 */
function $(id) {
    return document.getElementById(id);
}
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





















