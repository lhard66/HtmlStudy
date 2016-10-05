/**
 * Created by HeroLiu on 09/30/2016.
 */
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
