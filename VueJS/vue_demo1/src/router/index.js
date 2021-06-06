import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Demo1  from '../views/Demo1.vue'
import Demo2 from '../views/Demo2_Event.vue'
import Demo3 from '../views/Demo3_Data.vue'
import Demo4 from '../views/Demo4_Computed.vue'
import Demo5 from '../views/Demo5_Binding.vue'
import Demo6 from '../views/Demo6_Form.vue'
import Demo7 from '../views/Demo7_Slot.vue'


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
  },
  {
    path: '/demo3',
    name: 'demo3',
    component: Demo3
  },
  {
    path: '/demo4',
    name: 'demo4',
    component: Demo4
  },
  {
    path: '/demo5',
    name: 'demo5',
    component: Demo5
  },
  {
    path: '/demo6',
    name: 'demo6',
    component: Demo6
  },
  {
    path: '/demo7',
    name: 'demo7',
    component: Demo7
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
