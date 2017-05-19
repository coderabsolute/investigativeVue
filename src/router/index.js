import Vue from 'vue'
import Router from 'vue-router'
import { routeList } from './routeList'

Vue.use(Router)

const router = new Router({
  routes: routeList
})

export default router

router.beforeEach((to, from, next) => {
  if (to.name === 'login') {
    localStorage.removeItem('accessToken')
    localStorage.removeItem('tenantName')
    localStorage.removeItem('fullName')
    localStorage.removeItem('userTypeName')
  }

  const accessToken = localStorage.getItem('accessToken')

  if (!accessToken && to.name !== 'login') {
    next({ name: 'login' })
  } else {
    next()
  }
})

