// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import './assets/css/reset.css'
import 'babel-polyfill' //解决IE11数据喧软问题

import 'swiper/dist/css/swiper.css';
import { setCookie, getCookie, delCookie } from './JS/cookie.js'
//import Vuex from 'vuex'
Vue.config.productionTip = false

//Vue.use(Vuex)
/* eslint-disable no-new */
Vue.prototype.$cookieStore = {
  setCookie,
  getCookie,
  delCookie
},
  router.afterEach((to, from, next) => {
    window.scrollTo(0, 0);
  });
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
