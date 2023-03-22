import '../style/banner_slider/style.css'

import Swiper, { Navigation, Pagination } from 'swiper';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const swiper = new Swiper('.swiper', {
    // configure Swiper to use modules
    modules: [Navigation, Pagination],

    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        bulletClass: 'swiper-pagination-bullet-custom',
        bulletActiveClass: 'swiper-pagination-bullet-custom-active'
    },
    autoHeight: true,

    navigation: {
        nextEl: '.swiper-button-next-custom',
        prevEl: '.swiper-button-prev-custom',
        enabled: false
    },

    breakpoints: {
        1288: {
            navigation: {
                enabled: true
            }
        }
    }
});