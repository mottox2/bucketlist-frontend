import Vue from 'vue'
import Router from 'vue-router'
import Home from './pages/Home'
import Profile from './pages/Profile'
import Bucketlist from './pages/Bucketlist'
import BucketlistDetail from './pages/BucketlistDetail'
import Signup from './pages/Signup'
import Signin from './pages/Signin'

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
    },
    {
        path: '/bucketlist/:bucketlist_id',
        name: 'bucketlistdetail',
        component: BucketlistDetail
    },
    {
        path: '/signup',
        name: 'signup',
        component: Signup
    },
    {
        path: '/signin',
        name: 'signin',
        component: Signin
    }
  ]
})