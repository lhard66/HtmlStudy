/**
 * Created by HeroLiu on 10/10/2016.
 */
function scroll() {
    var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    var scrollLeft = window.pageXOffset || document.documentElement.scrollLeft || document.body.scrollLeft || 0;
    return {
        top: scrollTop,
        left: scrollLeft
    }
}