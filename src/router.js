import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/music',
    name: 'Music',
    component: () => import('./pages/MusicPlayer.vue')
  }
]
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})
export default router