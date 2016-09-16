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
        centeredSlides: true,
        slidesPerView: 4,
        touchRatio: 0.2,
        slideToClickedSlide: true
    });
    galleryTop.params.control = galleryThumbs;
    galleryThumbs.params.control = galleryTop;

});
