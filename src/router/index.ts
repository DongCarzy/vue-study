
import Main from '@/view/content/Main.vue'
import Login from '@/view/login/Login.vue'
import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import MainRouter from './main-router'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
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

export default router