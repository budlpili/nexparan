// NEXPARAN PROJECT 2


$("section").each(function () {
    // 개별적으로 Wheel 이벤트 적용 mousewheel(IE/chrome/opera) DOMMouseScroll(FF)
    $(this).on("mousewheel DOMMouseScroll", function (e) {
        e.preventDefault();
        var delta = 0;
        /* IE */
        if (!event) event = window.event;
        //휠에 대한 정보 얻기 파이어폭스 외 IE/Chrome/Opera = wheelDelta
        if (event.wheelDelta) {
            delta = event.wheelDelta / 50;
            //평균 50~120 사이로 요소의 인식높이에 따라 다름(한 화면(height100%)기준일떄는 120
            if (window.opera) delta = -delta;
        //휠에 대한 정보 얻기 Mozilla FF = detail
        } else if (event.detail) delta = -event.detail / 3;
        var moveTop = null;
        // 마우스휠을 위에서 아래로
        if (delta < 0) {
            if ($(this).next() != undefined) {
                moveTop = $(this).next().offset().top;
            }
        // 마우스휠을 아래에서 위로
        } else {
            if ($(this).prev() != undefined) {
                moveTop = $(this).prev().offset().top;
            }
        }
        // 화면 이동 0.8초(800)
        $("html,body").stop().animate({
            scrollTop: moveTop + 'px'
        }, {
            duration: 300, complete: function () {
            }
        });
    });
});



// Nav Top Search bar 02

function searchToggle(obj, evt){
    var container = $(obj).closest('.search-wrapper');
        if(!container.hasClass('active')){
            container.addClass('active');
            evt.preventDefault();
        }
        else if(container.hasClass('active') && $(obj).closest('.input-holder').length == 0){
            container.removeClass('active');
            // clear input
            container.find('.search-input').val('');
        }
}




// 흐르는 롤링 배너 (반응형)


$(window).on('load', function() {
    setFlowBanner();
})

function setFlowBanner() {
    const $wrap = $('.flow_banner');
    const $list = $('.flow_banner .list');
    let wrapWidth = ''; //$wrap의 가로 크기
    let listWidth = ''; //$list의 가로 크기
    const speed = 92; //1초에 몇픽셀 이동하는지 설정

    //리스트 복제
    let $clone = $list.clone();
    $wrap.append($clone);
    flowBannerAct()

    //반응형 :: 디바이스가 변경 될 때마다 배너 롤링 초기화
    let oldWChk = window.innerWidth > 1279 ? 'pc' : window.innerWidth > 767 ? 'ta' : 'mo';
    $(window).on('resize', function() {
        let newWChk = window.innerWidth > 1279 ? 'pc' : window.innerWidth > 767 ? 'ta' : 'mo';
        if (newWChk != oldWChk) {
            oldWChk = newWChk;
            flowBannerAct();
        }
    });

    //배너 실행 함수
    function flowBannerAct() {
        //배너 롤링 초기화
        if (wrapWidth != '') {
            $wrap.find('.list').css({
                'animation': 'none'
            });
            $wrap.find('.list').slice(2).remove();
        }
        wrapWidth = $wrap.width();
        listWidth = $list.width();

        //무한 반복을 위해 리스트를 복제 후 배너에 추가
        if (listWidth < wrapWidth) {
            const listCount = Math.ceil(wrapWidth * 2 / listWidth);
            for (let i = 2; i < listCount; i++) {
                $clone = $clone.clone();
                $wrap.append($clone);
            }
        }
        $wrap.find('.list').css({
            'animation': `${listWidth / speed}s linear infinite flowRolling`
        });
    }

    // 마우스가 요소 위로 진입했을 때 일시정지
    $wrap.on('mouseenter', function () {
        $wrap.find('.list').css('animation-play-state', 'paused');
    });

    // 마우스가 요소에서 빠져나갈 때 재생
    $wrap.on('mouseleave', function () {
        $wrap.find('.list').css('animation-play-state', 'running');
    });
}