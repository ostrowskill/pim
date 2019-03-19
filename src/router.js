import Vue from 'vue'
import Router from 'vue-router'
import MainDashboard from './views/Main-dashboard/Main-dashboard.vue';

import Products from './views/Products/Products.vue';
import Product from './views/Products/Product.vue';
Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'products',
      component: Products
    },
    {
      path: '/product/:id',
      name: 'product',
      component: Product
    },
    {
      path: '/settings',
      name: 'settings',
      component: () => import('./views/Settings/Settings.vue')
    }
  ],
  linkActiveClass: "active", // active class for non-exact links.
  linkExactActiveClass: "active" // active class for *exact* links.
})
