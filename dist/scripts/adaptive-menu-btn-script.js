$(function() {

    $('#nav-icon').click(function(){
        $(this).toggleClass('open');
        $('.adaptive-menu-container').toggleClass('open');
    });

    $('.search-btn').click(function(){
        $(this).toggleClass('visible');
        $('#search-form').toggleClass('visible');
    });

    $('.search-btn-small').click(function(){
        $(this).toggleClass('visible');
        $('#search-form').toggleClass('visible');
    });

});


