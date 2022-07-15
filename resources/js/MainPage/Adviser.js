$(".owl-carousel").owlCarousel({
    loop: true,
    margin: 10,
    nav: false,
    autoplay: true,
    autoplayTimeout: 5000,
    responsive: {
        0: {
            items: 1,
            dots: false,
            pagination: false,
            dotsEach: false,
        },
        600: {
            items: 1,
            dots: false,
            pagination: false,
            dotsEach: false,
        },
        1000: {
            items: 1,
        },
    },
});
