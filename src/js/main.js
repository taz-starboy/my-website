/*
import './header.js';
import './footer.js';
import './card.js';
*/
$(document).ready(function () {
    initializeSwiperIfPresent();
});


function initializeSwiperIfPresent() {
    if ($(".swiper").length) {
        new Swiper(".swiper", {
            swiperElementNodeName: 'SWIPER-CONTAINER',
            slidesPerView: "auto",
            centeredSlides: true,
            grabCursor: true,
            spaceBetween: 20,
            freeMode: true,
            pagination: {
                el: ".pagination",
                clickable: true,
                bulletClass: 'bullet',
                bulletActiveClass: 'active'
            },
            breakpoints: {
                768: {
                    centeredSlides: false,
                    slidesOffsetBefore: 20,
                    slidesOffsetAfter: 20
                }
            }
        });
        console.log("Swiper initialized.");
    }
}







