const mainNavigation = document.querySelector(".main-navigation");
const overlay = mainNavigation.querySelector(".overlay");
const toggler = mainNavigation.querySelector(".navbar-toggler");

const openSideNav = () => mainNavigation.classList.add("active");
const closeSideNav = () => mainNavigation.classList.remove("active");

/*document.addEventListener("swiped-right", openSideNav);
document.addEventListener("swiped-left", closeSideNav);*/
toggler.addEventListener("click", openSideNav);
overlay.addEventListener("click", closeSideNav);

/*var carouselWidth = $('.carousel-inner')[0].scrolWidth;
var cardWidth = $('.carousel-item').width();

var scrolPosition = 0;
$('.carousel-control-next').on('click', function () {
    // if (scrolPosition < (carouselWidth - (cardWidth * 3))) {
    scrolPosition = scrolPosition + cardWidth;
    $('.carousel-inner').animate({ scrollLeft: scrolPosition }, 600);
    //}
})
$('.carousel-control-prev').on('click', function () {
    if (scrolPosition > 0) {
        scrolPosition = scrolPosition - cardWidth;
        $('.carousel-inner').animate({ scrollLeft: scrolPosition }, 600);
    }
})