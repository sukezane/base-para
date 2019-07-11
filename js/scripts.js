$('.st-Header_MenuButton').on('click', function() {
    $('.st-Header_MenuListWrapper').toggleClass('st-Header_MenuListWrapper-active');
});

$(window).scroll(function () {
    if ($(this).scrollTop() > 200) {
        $('.st-Header-index').addClass('.st-Header-active');
    } else {
        $('.st-Header-index').removeClass('.st-Header-active');
    }
});