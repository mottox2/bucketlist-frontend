import Vue from 'vue'
import Router from 'vue-router'
import Home from './pages/Home'
import Profile from './pages/Profile'
import Bucketlist from './pages/Bucketlist'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
        path: '/profile',
        name: 'profile',
        component: Profile
    },
    {
        path: '/bucketlist',
        name: 'bucketlist',
        component: Bucketlist
    }
  ]
})