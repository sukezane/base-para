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
        el: '.p-slide-pagination',
        bulletClass: 'p-slide-pagination__bullet',
        bulletActiveClass: 'p-slide-pagination__bullet--active',
        clickable: true
    }
});