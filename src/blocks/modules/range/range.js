//import "./wNumb";
//import "./nouislider";

'use strict';

const range = document.getElementById('range');

noUiSlider.create(range, {
    start: 10,
    connect: true,
    range: {
        'min': 1,
        'max': 50
    },
    step: 1,
    tooltips: true,
    format: wNumb({
        decimals: 0,
    })
});