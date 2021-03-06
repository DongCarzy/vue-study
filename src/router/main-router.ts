import { RouteConfig } from 'vue-router'
import Map from '@/views/content/map/Map.vue'
import Manger from '@/views/content/manger/Manger.vue'

const mainRoutes: Array<RouteConfig> = [
  {
    path: 'manger',
    name: 'manger',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Manger,
    children: []
  },
  {
    path: 'map',
    name: 'map',
    component: Map
  }, {
    path: '*',
    redirect: 'map'
  }
]

export default mainRoutes
