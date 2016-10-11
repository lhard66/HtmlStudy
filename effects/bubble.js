function bubble(event) {
    if(event&&event.stopPropagation){
        //w3c标准
        event.stopPropagation();
    }else {
        //ie 6 7 8
        event.cancelBubble=true;
    }
}