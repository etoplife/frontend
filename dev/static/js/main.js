import $ from 'jquery';
import svg4everybody from 'svg4everybody';
import './includes/lazy';
import './includes/popup';
import Vue from 'vue';
import App from './vue/app.vue';

$(() => {

	svg4everybody();
	console.log(App);
	Vue.component('temp', App);

});
