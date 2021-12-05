import { createRouter, createWebHistory } from 'vue-router'
import Inventory from '../views/Inventory.vue'

const routes = [
  {
    path: '/',
    name: 'Inventory',
    component: Inventory
  },
  {
    name: 'CheckOut',
    path: '/check-out',
    component: () => import(/* webpackChunkName: "about" */ '../views/CheckOut.vue')
  },
  {
    name: 'CheckIn',
    path: '/check-in',
    component: () => import(/* webpackChunkName: "about" */ '../views/CheckIn.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
