// import "../css/main.css";
// import "../less/1.less";

// window.onload = function (){
//   document.onclick = function() {
//     console.log('a');
//   }
// }

import Vue from 'vue';
import App from './App.vue';

let vm = new Vue({
  el: "#root",
  data: {},
  template: "<App/>",
  components: {
    App
  }
});