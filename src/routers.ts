import Home from '@/page/Home';
// import Demo from '@/page/Demo';
import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

// const Demo = { template: '<div>Demo</div>' }

export default new Router({
  routes: [
    {
      path: '/',
      component: Home
    },
    // {
    //   path: '/demo',
    //   name: 'Demo',
    //   component: Demo
    // },
    // {
    //   path: '/home',
    //   name: 'Home',
    //   component: Home
    // }
  ]
})

