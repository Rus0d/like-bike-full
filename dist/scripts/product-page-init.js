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
    testDrive();
    maskedInput();
    cityPicker();

});

function descriptionTrigger() {

    $('.description-trigger h6').click(function(e) {
        e.stopPropagation();
        $('.description-trigger h6').each(function () {
            $(this).removeClass('active');
        });
        $(this).addClass('active');

        $('.description-block .block-trigger li').addClass("hide");
        $('.description-block .block-trigger li').eq( $(this).index() ).removeClass("hide");
    });


}

function testDrive() {

    $('#test-drive-btn').on("click", function(e) {
        e.preventDefault();
        e.stopPropagation();
        $("body").addClass("scroll");
        $(".test-drive-form").removeClass("hide");
    });

    $(".popup, .close-btn").on("click", function(e) {
        if( $(e.target).hasClass("popup") || $(e.target).hasClass("close-btn") ) {
            $("body").removeClass("scroll");
            $(".popup").addClass("hide");
        }
    });

}

function maskedInput(){
    $('#phone').mask("+38(099) 999 99 99");
}

function cityPicker(){
    $('.test-drive-form form #city').select2({
        placeholder: "Выберите город"
    });
}
