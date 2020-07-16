
import Main from '@view/content/Main.vue'
import Login from '@view/login/Login.vue'
import Vue from 'vue'
import VueRouter, { RouteConfig, RawLocation, Route } from 'vue-router'
import MainRouter from './main-router'
import store from '@store/index'
import {IS_LOGIN} from '@store/mutation-types'
 
Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    redirect: 'login'
  },
  {
    path: '/main',
    name: 'main',
    component: Main,
    children: MainRouter
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  }, {
    path: '*',
    redirect: '/main/map'
  }
]

const router = new VueRouter({
  routes
})

router.beforeEach((to, from, next) => {
  if (to.name !== 'login' && !store.getters[IS_LOGIN]) {
    next({ name: 'login' })
  } else {
    next()
  }
})

export default router