$(function() {

    var menuList = {},
        harr = [],
        menuancor = $(".anchor"),
        windowHeight = $(window).height(),
        previousScrollTop = $(window).scrollTop(),
        distance = windowHeight / 2;

    menuInit();
    navMenuChecker.call(this);

    $(window).scroll(function(){

        navMenuChecker.call(this);

    });

    $(window).resize(function(){
        windowHeight = $(window).height();

        if($(window).width() >= 768){
            scroll();
        }

    });

    function scroll() {
        menuancor.each(function (i, elem) {
            harr.push($(elem).innerHeight());
        });

        if(Math.max.apply(null, harr) <= windowHeight) {

            $(window).off("mousewheel");

            $(window).on("mousewheel", _.debounce(function(e){

                if((e.deltaY < 0) && (menuancor.eq(menuancor.length - 1).offset().top > $(window).scrollTop())) {

                    menuancor.each(function (i, elem) {

                        if( ($(elem).offset().top) >= ($(window).scrollTop() + windowHeight) ) {

                            $('html, body').animate({scrollTop: $(elem).offset().top}, 500);

                            return false;

                        }

                    });

                    return false;

                }
                else if((e.deltaY > 0) && ( (menuancor.eq(menuancor.length - 1).offset().top + menuancor.eq(menuancor.length - 1).innerHeight()) >= $(window).scrollTop())) {

                    menuancor.each(function (i, elem) {

                        if( ($(elem).offset().top + $(elem).innerHeight()) >= $(window).scrollTop() ) {

                            $('html, body').animate({scrollTop: $(elem).offset().top}, 500);

                            return false;

                        }

                    });

                    return false;

                }
                else {

                }

            }, 350, true));

        }
    }

    if($(window).width() >= 768){
        scroll();
    }

    function menuInit() {

        menuancor.each(function(i, elem) {
            menuList = $('.pagination-wrapper .pagination').append('<li></li>').children("li");
            menuList.eq(i).off('click');
            menuList.eq(i).on('click', function() {
                $('html, body').animate({scrollTop: ($(elem).offset().top)}, 1000);
            });
        });

    }

    function navMenuChecker(){

        var direction = 'DOWN';

        if ((previousScrollTop-$(this).scrollTop()) < 0){
            direction = 'DOWN';
        }
        else {
            direction = 'UP';
        }

        for (var i = 0; i < menuList.length; i++) {

            if (((direction=='DOWN') && (($(this).scrollTop()+windowHeight)>=menuancor.eq(i).offset().top+distance) && ($(this).scrollTop()<=(menuancor.eq(i).offset().top+menuancor.eq(i).height()-distance))) ||
                ((direction=='UP') && ($(this).scrollTop()<=(menuancor.eq(i).offset().top+menuancor.eq(i).height()-distance)) && (($(this).scrollTop()+windowHeight)>=menuancor.eq(i).offset().top+distance))){
                menuList.eq(i).addClass('active');
            }
            else {
                menuList.eq(i).removeClass('active');
            }
        }

        previousScrollTop = $(this).scrollTop();

    }

});


