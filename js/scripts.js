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

// fetch('https://mag.digle.tokyo/wp-json/wp/v2/posts?category=1&per_page=3',{
//     method: 'GET'
// }).then(res =>{
//     return res.json();
// }).then(res => {
//     console.log(res);
    
// })