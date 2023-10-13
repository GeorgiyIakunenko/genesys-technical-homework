import { createRouter, createWebHistory } from 'vue-router'

import Home from '@/views/Home.vue'
import Profile from '@/views/Profile.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      redirect: '/characters/page/1'
    },
    {
      path: '/characters/page/:id',
      name: 'characters',
      component: Home,
      props: true
    },
    {
      path: '/character/:id/profile',
      name: 'profile',
      component: Profile,
      props: true
    }
  ]
})

export default router
