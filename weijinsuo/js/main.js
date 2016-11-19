$(function () {
    //防抖动
    var timer = null;//用于防抖动
    function throttle(callback, delay) {
        clearTimeout(timer);
        timer = setTimeout(callback, delay);
    }

    //得到屏幕的宽度
    //当屏幕的宽度小于768（平板）时加载小图，当屏幕的宽度大于768时加载大图
    ////找到对应的每个节点
    function fitImage() {
        var windowWidth = $(window).width();
        var isSmallScreen = windowWidth < 768;
        $('#main_banner>.carousel-inner>.item').each(function (index, item) {
            //注意item是dom对象
            var $item = $(item);
            if (isSmallScreen) {
                //如果是小图，则插入img标签
                var imgHtml = '<img src="' + $item.data('image-xs') + '" alt="banner"></img>';
                $item.empty().html(imgHtml);
            } else {
                //改变添加背景图片地址
                $item.empty();
                $item.css('backgroundImage', 'url(' + $item.data('image-lg') + ')');
            }
        });
    }

    $(window).on('resize', function () {
        throttle(fitImage, 100);
    }).trigger('resize');

    //对tooltips进行初始化
    $('[data-toggle="tooltip"]').tooltip();

    //拿到每个元素的wide，累加起来
    var navWide = 30;
    var navProduct = $('#nav_product');
    navProduct.children().each(function (index, element) {
        navWide += element.clientWidth;
    }).parent()
    //如果width与屏幕宽度 $(window).width() 不足时，加上滚动条，否则不加    
    if (navWide > $(window).width()) {
        navProduct.css('width', navWide).parent().css('overflow-x', 'scroll');
    }
    //导航样式active切换
    $('#nav_titles>li').on('click', function () {
        $('#nav_titles').children().removeClass('active');
        $(this).addClass('active');
        $('#news_title').text($(this).data('title'));
    });
    //轮播图滑动切换
    (function () {
        var startX = 0;
        var endX = 0;
        $('#main_banner').on('touchstart', function (e) {
            startX = e.originalEvent.touches[0].clientX;
        });
        $('#main_banner').on('touchmove', function (e) {
            endX = e.originalEvent.touches[0].clientX;
        });
        $('#main_banner').on('touchend', function (e) {
            console.log(startX + '---' + endX);
            var distance = Math.abs(startX - endX);
            var offsetX = 50;
            if (distance > offsetX) {
                $(this).carousel(startX > endX ?  'next':'prev');
            }
        });
        
    }());
});
