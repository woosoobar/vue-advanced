import { createRouter, createWebHistory } from 'vue-router'
import NewsView from '../views/NewsView.vue'
import AskView from '../views/AskView.vue'
import JobsView from '../views/JobsView.vue'
import UserView from '../views/UserView.vue'


const routes = [
    {
      path: '/',
      redirect: '/news'
    },
    {
      path: '/news',
      // name: 'NewsView',
      component: NewsView
    },
    {
      path: '/ask',
      // name: 'AskView',
      component: AskView
    },
    {
      path: '/jobs',
      // name: 'JobsView',
      component: JobsView
    },
    {
      path: '/user/:id',
      component: UserView
    }
    // {
    //   path: '/about',
    //   name: 'About',
    //   // route level code-splitting
    //   // this generates a separate chunk (about.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
    // }
  ]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router