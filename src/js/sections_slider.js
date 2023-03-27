import '../style/sections_slider.css'

import Swiper, { Navigation, Pagination } from 'swiper';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const swiper = new Swiper('.sections_slider_block .swiper', {
    // configure Swiper to use modules
    modules: [Navigation, Pagination],

    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        bulletClass: 'swiper-pagination-bullet',
        bulletActiveClass: 'swiper-pagination-bullet-active',
        dynamicBullets: true,
        dynamicMainBullets: 3,
    },
    autoHeight: false,

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
        enabled: false
    },

    // slidesPerGroup: 2,
    // slidesPerView: 2,
    slidesPerView: 'auto',
    slidesPerGroup: 1,
    slidesPerGroupAuto: true,
    spaceBetween: 10,

    breakpoints: {
        786: {
            spaceBetween: 20,
        },
        1288: {
            navigation: {
                enabled: true
            },
            spaceBetween: 20,
            // slidesPerGroup: 4,
            // slidesPerView: 4,
        }
    }
});

const items = document.querySelectorAll('.advantages-item')

for (let index = 0; index < items.length; index++) {
    const element = items[index];
    element.addEventListener('mouseover', function (e) {
        const activeItem = document.querySelector('.advantages-item.active-adv')
        if(!this.classList.contains('active-adv')){
            activeItem.classList.remove('active-adv')
            this.classList.add('active-adv')
        }   
    })
}