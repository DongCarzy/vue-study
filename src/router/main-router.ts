import { RouteConfig } from 'vue-router'
import Home from '@/view/content/data/Home.vue'
import Map from '@/view/content/map/Map.vue'

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
    path: 'map',
    name: 'map',
    component: Map
  }
]

export default mainRoutes;