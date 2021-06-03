import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Demo1  from '../views/Demo1.vue'
import Demo2 from '../views/Demo2_Event.vue'



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
  },
  {
    path: '/demo2',
    name: 'demo2',
    component: Demo2
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
