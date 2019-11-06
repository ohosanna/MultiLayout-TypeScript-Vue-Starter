import Vue from 'vue'
import VueRouter from 'vue-router'

// import routes from '../routes/home.js'
// import { initConfig} from '../config/index.js'
//import store from '../store/'

// import _Socket from '../models/socket.model';
// import _Method from '../models/method.model';
// import _Common from '../models/common.model';
// import _Market from '../models/market.model';
// import _Kline from '../models/kline.model';

// import '../assets/stylesheets/app.scss'
// import '../assets/stylesheets/home.scss'
// import '../assets/stylesheets/components/marketlist.scss'

// initConfig();
Vue.use(VueRouter)

const router = new VueRouter({
  base: '/home/',
  mode: 'history',
  //routes
})

new Vue({
  router 
}).$mount('#app')
