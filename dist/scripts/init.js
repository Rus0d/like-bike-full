$(function() {

    var menuList = {},
        menuancor = $(".anchor"),
        windowHeight = $(window).height(),
        previousScrollTop = $(window).scrollTop(),
        distance = windowHeight / 2;




    menuInit();
    navMenuChecker();

    $(window).scroll(function(){

        navMenuChecker.call(this);

    });

    $(window).resize(function(){

        
    });

    function menuInit() {

        menuancor.each(function(i, elem) {
            menuList = $('.pagination-wrapper .pagination').append('<li></li>').children("li");
            menuList.eq(i).click(function() {
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


