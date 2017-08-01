import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import BsComponents from '@/components/BsComponents'
import Home from '@/components/Home'
import New from '@/components/New'
import People from '@/components/People'
import Memberships from '@/components/Memberships'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'BootstrapComponents',
      component: BsComponents
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
    {
      path: '/new',
      name: 'New',
      component: New
    },
    {
      path: '/people',
      name: 'People',
      component: People
    },
    {
      path: '/memberships',
      name: 'Memberships',
      component: Memberships
    }

  ]
})
