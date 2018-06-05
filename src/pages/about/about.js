import Vue from 'Vue'
import About from './about.vue';
import store from '@/store';

new Vue({
	el:'#about',
	store,
	render:h=>h(About)
})