import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../views/Home.vue'
import Read from '../views/Read.vue'
import Posts from '../views/Posts.vue'
import Add from '../views/Add.vue'
import About from '../views/About.vue'
import NotFound from '../views/NotFound.vue'

Vue.use(VueRouter)

const routes = [{
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/posts',
    name: 'Posts',
    component: Posts
  },
  {
    path: '/read',
    name: 'Read',
    component: Read
  },
  {
    path: '/add',
    name: 'Add',
    component: Add
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/404',
    name: 'NotFound',
    component: NotFound
  },
  {
    path: '*',
    name: '404',
    redirect: '/404'
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
