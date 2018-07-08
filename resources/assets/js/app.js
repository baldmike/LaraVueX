import Vue from 'vue'
import Vuetify from 'vuetify'
import VueRouter from 'vue-router';
import { router } from './router'

import 'bootstrap/dist/css/bootstrap.css'

import store from './store';

require('./bootstrap');

Vue.use(VueRouter)
Vue.use(Vuetify)

window.Vue = require('vue');

Vue.component('navbar', require('./components/Navbar.vue'));
Vue.component('main-app', require('./components/MainApp.vue'));
Vue.component('pagex', require('./components/PageX.vue'));

window.addEventListener('load', function () {
    const app = new Vue({
        el: "#app",
        template: '<router-view></router-view>',
        router,
        store
    })
})