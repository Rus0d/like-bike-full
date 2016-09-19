$(function() {

    var galleryTop = new Swiper('.gallery-top', {
        nextButton: '.product-bar-top .swiper-button-next',
        prevButton: '.product-bar-top .swiper-button-prev',
        spaceBetween: 55
    });
    var galleryThumbs = new Swiper('.gallery-thumbs', {
        nextButton: '.product-bar-bottom .swiper-button-next',
        prevButton: '.product-bar-bottom .swiper-button-prev',
        spaceBetween: 10,
        /*centeredSlides: true,*/
        slidesPerView: 4,
        touchRatio: 0.2,
        slideToClickedSlide: true
    });
    galleryTop.params.control = galleryThumbs;
    galleryThumbs.params.control = galleryTop;

    $('.js-lazyYT').lazyYT('');

    descriptionTrigger();

});

function descriptionTrigger() {

    $('.description-trigger h6').click(function(e) {
        e.stopPropagation();
        $('.description-trigger h6').each(function () {
            $(this).removeClass('active');
        });
        $(this).addClass('active');

        $('.description-block .block-trigger li').css('display', 'none');
        $('.description-block .block-trigger li').eq( $(this).index() ).css('display', 'block');
    });


}
