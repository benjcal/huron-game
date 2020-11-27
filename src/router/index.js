import Vue from 'vue'
import VueRouter from 'vue-router'
import Selector from '../views/Selector'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Selector',
    component: Selector
  },
  {
    path: '/game',
    name: 'Game',
    component: () => import('../views/Game')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
