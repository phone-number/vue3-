import { createRouter, createWebHistory } from 'vue-router'
export default createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      name: 'home',
      component: () => import(/*webpackChunkName: 'home' */ '../view/home')
    },
    {
      path: '/other',
      name: 'other',
      component: () => import(/*webpackChunkName: 'other' */ '../view/other')
    }
  ]
})