import $ from 'jquery';
//import '../../../node_modules/inputmask/dist/min/jquery.inputmask.bundle.min';
import '../../../node_modules/inputmask/dist/inputmask/inputmask';
import '../../../node_modules/inputmask/dist/inputmask/jquery.inputmask';

'use strict';

$("input[type='tel']").inputmask("+7(999)999-99-99");
$(".form-date").inputmask("99/99/9999",{ "placeholder": "dd/mm/yyyy" });