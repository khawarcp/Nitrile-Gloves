$(document).ready(function () {
$('.our-logos .owl-carousel').owlCarousel({
    loop: true,
    margin: 30,
  	touchDrag:false,
  	mouseDrag:false,
  	center:true,
    dots: false,
    nav: false,
    autoplay: true,
    autoplayTimeout: 2000,
    smartSpeed: 800,
    thumbs: false,
    items: 3,
    responsive: {
        0: {
            items: 3
        },
        600: {
            items: 4
        },
        1000: {
            items: 6
        }
    }
})
$('.testimonials-sec .owl-carousel').owlCarousel({
    loop: true,
    margin: 15,
    dots: false,
    nav: true,
    autoplay: true,
    autoplayTimeout: 2000,
    smartSpeed: 800,
    thumbs: false,
    items: 3,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 2
        },
        1000: {
            items: 3
        }
    }
})
});