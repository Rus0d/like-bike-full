$(function() {
});

$(window).resize(function () {
});

function positionCalculator() {

    var wrapperH = $('.wrapper').height(),
        headerH = $('header').innerHeight(),
        contentH = $('.content').innerHeight(),
        diff = wrapperH - headerH - contentH;

    if (diff > 0) {
        $('.content').css('margin-top', diff*3/8 + 'px');
        $('.like-bike-menu').css('margin-top', diff/8 + 'px');
    }

}