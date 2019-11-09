import Vue from 'vue';
import VueRouter from 'vue-router';
import VueI18n from 'vue-i18n';
import cnCommonLang from '@cn/common.json';
import enCommonLang from '@en/common.json';
import cnHomeLang from '@cn/home.json';
import enHomeLang from '@en/home.json';
import '@scss/home.scss';

Vue.use(VueRouter);
Vue.use(VueI18n);

const cnLang = Object.assign({}, cnCommonLang, cnHomeLang);
const enLang = Object.assign({}, enCommonLang, enHomeLang);
const i18n = new VueI18n({
  locale: 'en',
  messages: {
    'cn': cnLang,
    'en': enLang
  }
});

const routes = [
  {
    path: '/',
    name: 'home',
    component: (): Promise<any> => import(/* webpackChunkName: "app" */ '@views/home/index.vue')
  }
];

const router = new VueRouter({
  base: '/home/',
  mode: 'history',
  routes
});

Vue.prototype.$bus = new Vue({
  el: '#app',
  router,
  i18n
});
