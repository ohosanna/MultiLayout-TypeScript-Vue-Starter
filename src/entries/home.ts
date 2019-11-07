import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'home',
    component: (): Promise<any> => import(/* webpackChunkName: "app" */ '@/pages/home/index.vue')
  }
];

const router = new VueRouter({
  base: '/home/',
  mode: 'history',
  routes
});

Vue.prototype.$bus = new Vue({
  el: '#app',
  router
});
