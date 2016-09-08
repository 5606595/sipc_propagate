/**
 * Created by jorten on 16/9/6.
 */
(function($) {
    var $pages = $('.pages');
    var $pageArr = $pages.find('.page'),
        pageCount = $pageArr.length,
        curPage = 0;
    var pageWidth = window.innerWidth,
        pageHeight = window.innerHeight,
        startX = 0,
        startY = 0,
        moveX = 0,
        moveY = 0,
        dx = 0,
        dy = 0;
    $pageArr.css({
        height: pageHeight,
        width: pageWidth
    })
    var scroll = {

    }
    scroll.down = function() {
        $pages.css({
            'transform': 'translateY(-' + pageHeight * (curPage + 1) + 'px)',
            '-webkit-transform': 'translateY(-' + pageHeight * (curPage + 1) + 'px)'
        })
        $pageArr.eq(curPage).removeClass('ani');
        curPage++;
        $pageArr.eq(curPage).addClass('ani')
    }
    scroll.up = function() {
        $pages.css({
            'transform': 'translateY(-' + pageHeight * (curPage - 1) + 'px)',
            '-webkit-transform': 'translateY(-' + pageHeight * (curPage - 1) + 'px)'
        })
        $pageArr.eq(curPage).removeClass('ani');
        $pageArr.eq(curPage).css('transform', 'translateY(0%)');
        curPage--;
        $pageArr.eq(curPage).css('transform', 'translateY(0%)');
        $pageArr.eq(curPage).addClass('ani')
    }
    $pages.on('touchstart', function(e) {
        e.preventDefault();   // 去除苹果手机滑动白页效果
        startX = e.touches[0].clientX;
        startY = e.touches[0].clientY;
    })
    $pages.on('touchmove', function(e) {
        e.preventDefault();
        moveX = e.touches[0].clientX;
        moveY = e.touches[0].clientY;
        dx = moveX - startX;
        dy = moveY - startY;
        if(Math.abs(dy) > Math.abs(dx)) {
            if(dy >= 0) {
                if(curPage > 0) {
                    $pages.addClass('drag');
                    $pages.css({
                        'transform': 'translateY(' + Number(dy - pageHeight * (curPage))  + 'px)',
                        '-webkit-transform': 'translateY(' + Number(dy - pageHeight * (curPage)) + 'px)'
                    })
                }
            } else {
                if(curPage < pageCount - 1) {
                    $pages.addClass('drag');
                    $pages.css({
                        'transform': 'translateY(' + Number(dy - pageHeight * (curPage))  + 'px)',
                        '-webkit-transform': 'translateY(' + Number(dy - pageHeight * (curPage)) + 'px)'
                    })
                }
            }
        }
    })
    $pages.on('touchend', function(e) {
        e.preventDefault();
        if(Math.abs(dy) > Math.abs(dx)) {
            if(dy >= 30) {
                if(curPage > 0) {
                    scroll.up();
                }
            } else if(dy <= -30) {
                if(curPage < pageCount - 1) {
                    scroll.down();
                }
            } else {
                $pages.css({
                    'transform': 'translateY(-' + pageHeight * (curPage) + 'px)',
                    '-webkit-transform': 'translateY(-' + pageHeight * (curPage) + 'px)'
                })
            }
        }
        $pages.removeClass('drag');
    })
    $.fn.down = function() {
        $pages.css({
            'transform': 'translateY(-20'  + 'px)',
            '-webkit-transform': 'translateY(-20' + 'px)'
        })
    }
})(jQuery)
