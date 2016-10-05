function $(str) {
    var type = str.charAt(0);
    var name = str.substr(1);
    switch (type) {
        case '#':
            return document.getElementById(name);
            break;
        case '.':
            return document.getElementsByClassName(name);
            break;
        default:
            return document.getElementsByTagName(str);
    }
}