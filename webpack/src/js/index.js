import '../css/main.css';
import 'bootstrap/dist/css/bootstrap.css'
import $ from 'jquery';

$(function() {
  $('body').css('background', '#CCC');

  console.log(process.env.NODE_ENV)
})