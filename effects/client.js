function client() {
    var clientWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth || 0;
    var clientHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight || 0;
    return {width: clientWidth, height: clientHeight};
}