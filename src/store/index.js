import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    posts: [],
    currentPost: {
      title: '',
      author: '',
      text: '',
      topic: null,
      liked: null,
      lastUpdateTS: null
    }
  },
  getters: {
    posts(state) {
      return state.posts
    }
  },
  mutations: {
    setPosts(state, posts) {
      state.posts = posts
    },
    setPost(state, post) {
      state.currentPost = post
      console.log('state.currentPost :>> ', state.currentPost);
    },
    removePost(state, id) {
      state.posts = state.posts.filter(post => post.id !== id)
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

    async fetchPost({
      commit
    }, id) {
      try {
        const response = await axios.get(`http://localhost:5000/posts/${id}`)
        console.log('fetchPOST ACTION:', response.data);
        commit('setPost', response.data)
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

    async editPost() {}
    // modules: {}
  }
})
