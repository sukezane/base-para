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