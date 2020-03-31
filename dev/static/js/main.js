import $ from 'jquery';
import svg4everybody from 'svg4everybody';
import './includes/lazy';
import './includes/popup';
import Vue from 'vue/dist/vue';
import Temp from './vue/Temp.vue';

$(() => {

  svg4everybody();

  Vue.component('Temp', Temp);

  // eslint-disable-next-line
  new Vue({
    el: '#main-wrapper',
  });

});
