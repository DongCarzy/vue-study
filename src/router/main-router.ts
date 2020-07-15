import VueRouter, { RouteConfig } from 'vue-router'
import Home from '@/view/Home.vue'
import Demo from '@/view/Demo.vue'

const mainRoutes: Array<RouteConfig> = [
  {
    path: 'home',
    name: 'home',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Home
  },
  {
    path: 'demo',
    name: 'Demo',
    component: Demo
  }
]

export default mainRoutes;