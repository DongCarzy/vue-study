import Home from '@/view/Home.vue'
import Demo from '@/view/Demo.vue'
import Login from '@/view/login/Login.vue'
import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    component: Home
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/home',
    name: 'Home',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Home
  },
  {
    path: '/demo',
    name: 'Demo',
    component: Demo
  }
]

const router = new VueRouter({
  routes
})

export default router