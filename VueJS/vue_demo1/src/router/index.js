import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Demo1  from '../views/Demo1.vue'



const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/demo1',
    name: 'demo1',
    component: Demo1
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
