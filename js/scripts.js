new Swiper('#swiper-top', {
    slidesPerView: 1,
    centeredSlides: true,
    loop: true,
    effect: 'fade',
    autoplay: {
        delay: 5000,
    },
    paginationClickable: true,
    pagination: {
        el: '.swiper-pagination',
        clickable: true
    }
});

$('.sw-Menu_Button').on('click', function(){
    $('.sw-Menu_ListWrapper').toggleClass('sw-Menu_ListWrapper-active');
    $('body').toggleClass('is-menu');
});