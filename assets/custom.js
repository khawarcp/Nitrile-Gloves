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
    autoplay: false,
    autoplayTimeout: 2000,
    smartSpeed: 800,
    thumbs: false,
    navText: ["<img src='https://cdn.shopify.com/s/files/1/0590/1719/9716/files/nav-arrow.png?v=1657109825'>","<img src='https://cdn.shopify.com/s/files/1/0590/1719/9716/files/nav-arrow.png?v=1657109825'>"],
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
$('.why-buy-slider-content .owl-carousel').owlCarousel({
    loop: true,
    margin: 15,
    dots: false,
    nav: true,
    autoplay: false,
    autoplayTimeout: 2000,
    smartSpeed: 800,
    thumbs: false,
    navText: ["<img src='https://cdn.shopify.com/s/files/1/0590/1719/9716/files/nav-arrow.png?v=1657109825'>","<img src='https://cdn.shopify.com/s/files/1/0590/1719/9716/files/nav-arrow.png?v=1657109825'>"],
    items: 3,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 2
        },
        1000: {
            items: 2.5
        }
    }
})
});

function openCity(evt, cityName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";
}
