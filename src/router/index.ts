import Main from '@/views/content/Main.vue'
import Login from '@/views/login/Login.vue'
import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import MainRouter from './main-router'
import store from '@/store/index'
import { IS_LOGIN } from '@/store/mutation-types'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '/main',
    name: 'main',
    component: Main,
    children: MainRouter,
    beforeEnter: (to, from, next) => {
      if (store.getters[IS_LOGIN]) {
        next()
      } else {
        next({ name: 'login' })
      }
    }
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '*',
    redirect: '/main/map'
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  console.log(to.path)
  next()
})

export default router
