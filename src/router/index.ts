
import Main from '@view/content/Main.vue'
import Login from '@view/login/Login.vue'
import Vue from 'vue'
import VueRouter, { RouteConfig, RawLocation, Route } from 'vue-router'
import MainRouter from './main-router'
import store from '@store/index'
import { IS_LOGIN, LOGIN_SUC } from '@store/mutation-types'

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
    children: MainRouter,
    beforeEnter: (to, from, next) => {
      if (!store.getters[IS_LOGIN]) {
        const token = sessionStorage.getItem("token")
        if (token) {
          store.commit(LOGIN_SUC, token)
          next()
        } else {
          next({ name: 'login' })
        }
      } else {
        next()
      }
    }
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
  console.log(to.path)
  next()
})

export default router