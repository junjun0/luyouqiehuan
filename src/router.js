import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/goodlist',
      name: 'goodlist',
      component: () => import(/* webpackChunkName: "about" */ './views/goodlist.vue')
    },
    {
      path: '/car',
      name: 'car',
      component: () => import(/* webpackChunkName: "about" */ './views/car.vue')
    },
    {
      path: '/user',
      name: 'user',
      component: () => import(/* webpackChunkName: "about" */ './views/user.vue')
    }
  ]
})
