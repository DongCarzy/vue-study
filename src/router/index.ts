
import Main from '@view/content/Main.vue'
import Login from '@view/login/Login.vue'
import Vue from 'vue'
import VueRouter, { RouteConfig, RawLocation, Route } from 'vue-router'
import MainRouter from './main-router'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    component: Login
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
  }
]

const router = new VueRouter({
  routes
})

router.beforeEach((to, from, next) => {
  console.log(to, from)
  next()
})

export default router