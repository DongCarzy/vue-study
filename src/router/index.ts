
import Main from '@/view/content/Main.vue'
import Login from '@/view/login/Login.vue'
import Vue from 'vue'
import VueRouter, { RouteConfig, RawLocation, Route } from 'vue-router'
import MainRouter from './main-router'

Vue.use(VueRouter)
// const originalPush = VueRouter.prototype.push
// VueRouter.prototype.push =  (location: RawLocation): Promise<Route> => {
//   let r: Promise<Route> = originalPush(location)
//   r.catch(err => err)
//   return r
// }


const routes: Array<RouteConfig> = [
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
})

export default router