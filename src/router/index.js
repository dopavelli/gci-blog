import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../views/Home.vue'
import Post from '../views/Post.vue'
import Posts from '../views/Posts.vue'
import Editor from '../views/Editor.vue'
import About from '../views/About.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/post',
    name: 'Post',
    component: Post
  },
  {
    path: '/posts',
    name: 'Posts',
    component: Posts
  },
  {
    path: '/editor',
    name: 'Editor',
    component: Editor
  },
  {
    path: '/about',
    name: 'About',
    component: About
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
