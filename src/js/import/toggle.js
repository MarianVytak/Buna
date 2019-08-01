import $ from 'jquery';

'use strict';

const toggleLink = $('.toggle__btn');
const toggleContent = $('.toggle__content');

toggleLink.on('click', function (e) {
    e.preventDefault();
    let thisToggleContent = $(this).attr('href');
    toggleLink.removeClass('active');
    $(this).addClass('active');
    toggleContent.removeClass('active');
    $(thisToggleContent).addClass('active');
});