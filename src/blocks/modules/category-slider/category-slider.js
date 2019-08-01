import $ from 'jquery';
import '../../../../node_modules/slick-carousel/slick/slick.min';

'use strict';

$('.category__slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    dots: true,
    appendDots: $('.category__slider_dots'),
    dotsClass: 'category__slider_dots_list',
    responsive: [
        {
            breakpoint: 576,
            settings: {
                arrows: false
            }
        }
    ]
});