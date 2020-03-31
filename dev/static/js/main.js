import svg4everybody from 'svg4everybody';
import './includes/lazy';
import Vue from 'vue';
import Temp from './vue/Temp.vue';

document.addEventListener('DOMContentLoaded', () => {

  svg4everybody();

  Vue.component('Temp', Temp);

  // eslint-disable-next-line
  new Vue({
    el: '#main-wrapper',
  });

});
