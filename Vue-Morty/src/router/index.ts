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
      redirect: '/page/1'
    },
    {
      path: '/page/:id',
      name: 'page',
      component: Home,
      props: (route) => ({ id: Number(route.params.id) })
    },
    {
      path: '/character/:id/profile',
      name: 'profile',
      component: Profile,
      props: (route) => ({ id: Number(route.params.id) })
    }
  ]
})

export default router
