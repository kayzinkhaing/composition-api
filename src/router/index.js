import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Detail from '../views/Detail.vue'
import Create from '../views/Create.vue'
import Tag from '../views/Tag.vue'
import RealTime from '../views/RealTime.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/posts/:id',
    name: 'Detail',
    component: Detail,
    props:true
  },
  {
    path: '/create',
    name: 'Create',
    component:Create,
    props:true
  },
  { 
    path:"/tags/:tag",
    name:"Tag",
    component:Tag,
    props:true
  },
  {
    path:"/realtime",
    // name:"Tag",
    component:RealTime,
    props:true
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
