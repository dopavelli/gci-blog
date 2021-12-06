import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    posts: [],
    post: {}
  },
  getters: {
    posts(state) {
      return state.posts
    },
    post(state) {
      return state.post
    }
  },
  mutations: {
    setPosts(state, posts) {
      state.posts = posts
    },
    removePost(state, id) {
      state.posts = state.posts.filter(post => post.id !== id)
    },
    editPost(state, updPost) {
      state.posts = state.posts.filter((post) => post.id !== updPost.id)
      state.posts.push(updPost)
    },
    toggleLike(state, lkdPost) {
      const objI = state.posts.findIndex((obj) => obj.id === lkdPost.id)
      state.posts[objI].liked = !lkdPost.liked
      },    
    loadPost(state, post) {
      state.post = post
    },
    clearPost(state) {
      state.post = null
    }
  },
  actions: {
    async fetchPosts({
      commit
    }) {
      try {
        const response = await axios.get('http://localhost:5000/posts')
        commit('setPosts', response.data)
        return response.data
      } catch (error) {
        console.log(error)
      }
    },
    async deletePost({
      commit
    }, id) {
      await axios.delete(`http://localhost:5000/posts/${id}`)
      commit('removePost', id)
    },
    async updatePost({
      commit
    }, post) {
      await axios.put(`http://localhost:5000/posts/${post.id}`, post)
      commit('editPost', post)
    },
    async toggleLikePost({commit}, post) {
      await axios.put(`http://localhost:5000/posts/${post.id}`, {
        ...post,
        liked: !post.liked,
      })
      commit('toggleLike', post)
    }
  }
})
