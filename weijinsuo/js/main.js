$(function () {
    //得到屏幕的宽度
    //当屏幕的宽度小于768（平板）时加载小图，当屏幕的宽度大于768时加载大图
    ////找到对应的每个节点
    function fitImage() {
        var windowWidth = $(window).width();
        var isSmallScreen = windowWidth < 768;
        $('#main_banner>.carousel-inner>.item').each(function (index, item) {
            //注意item是dom对象
            var $item = $(item);
            var fitImageUrl = isSmallScreen ? $item.data('image-xs') : $item.data('image-lg');
            $item.css('backgroundImage', 'url(' + fitImageUrl + ')');

        });
    }
    $(window).on('resize',fitImage).trigger('resize');
});