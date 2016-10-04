/**
 * Created by lhard on 10/04/2016.
 */
window.onload=function () {
    function $(id) {
        return document.getElementById(id);
    }
    var bannerNum=$('bigbannerul').children.length;

    for(var i=1;i<=bannerNum;i++){
        var bannerNumli=document.createElement('li');
        bannerNumli.innerText=i;
        $('bannerNumul').appendChild(bannerNumli);
    }
}