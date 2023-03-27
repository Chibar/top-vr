import '../style/banner_slider/style.css'

import Swiper, { Navigation, Pagination } from 'swiper';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const swiper = new Swiper('.banner_slider .swiper', {
    // configure Swiper to use modules
    modules: [Navigation, Pagination],

    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        bulletClass: 'swiper-pagination-bullet',
        bulletActiveClass: 'swiper-pagination-bullet-active'
    },
    autoHeight: true,

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
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