<template>
  <div>
    
    <v-container class="my-5 mx-3">
      <v-layout row class="mb-3 my-5 d-flex justify-center mb-6">
        <v-tooltip top class="d-flex">
          <template v-slot:activator="{ on, attrs }">
            <v-btn small @click="sortBy('title')" v-bind="attrs" v-on="on" class="mx-1 my-1">
              <v-icon left small color="grey">mdi-sort</v-icon>
              <span class="caption">title</span>
            </v-btn>
          </template>
          <span>sort posts by the titles...</span>
        </v-tooltip>

        <v-tooltip top>
          <template v-slot:activator="{ on, attrs }">
            <v-btn small @click="sortBy('author')" v-bind="attrs" v-on="on" class="mx-1 my-1">
              <v-icon left small color="grey">mdi-sort</v-icon>
              <span class="caption">author</span>
            </v-btn>
          </template>
          <span>sort posts by the author...</span>
        </v-tooltip>

        <v-tooltip top>
          <template v-slot:activator="{ on, attrs }">
            <v-btn small @click="sortBy('topic')" v-bind="attrs" v-on="on" class="mx-1 my-1">
              <v-icon left small color="grey">mdi-sort</v-icon>
              <span class="caption">topic</span>
            </v-btn>
          </template>
          <span>sort posts by the topic...</span>
        </v-tooltip>

        <v-tooltip top>
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              small
              @click="sortBy('lastUpdateTS')"
              v-bind="attrs"
              v-on="on"
              class="mx-1 my-1"
            >
              <v-icon left small color="grey">mdi-sort</v-icon>
              <span class="caption">earliest</span>
            </v-btn>
          </template>
          <span>sort posts chronologically...</span>
        </v-tooltip>

        <v-tooltip top>
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              small
              @click="sortByNew('lastUpdateTS')"
              v-bind="attrs"
              v-on="on"
              class="mx-1 my-1"
            >
              <v-icon left small color="grey">mdi-sort</v-icon>
              <span class="caption">latest</span>
            </v-btn>
          </template>
          <span>sort posts by the latest...</span>
        </v-tooltip>

        <v-flex
          v-for="post in posts"
          :key="post.id"
          xs10
          md-and-over
          class="my-2"
        >
          <v-card elevation="2" outlined class="pa-1">
            <v-card-title
              >{{ post.title }} <v-spacer />

            <div v-if="post.topic === 'Frontend'">
            <v-chip class="ma-2" text-color="black" color="cyan"> {{ post.topic }} </v-chip>
            </div>
            <div v-if="post.topic === 'Backend'">
            <v-chip class="ma-2" text-color="black" color="teal"> {{ post.topic }} </v-chip>
            </div>
            <div v-if="post.topic === 'General'">
            <v-chip class="ma-2" text-color="black"> {{ post.topic }} </v-chip>
            </div>

            </v-card-title>

            <v-card-subtitle>
              {{ post.author }} - {{ formatLastUpdate(post.lastUpdateTS) }}
            </v-card-subtitle>

            <v-card-text>{{ post.text.substr(0, 275) }}...</v-card-text>
            <v-card-actions>
              <template>
                <v-btn
                  @click="readPost(post)"
                  class="ma-2"
                  outlined
                  color="teal"
                >
                  Read post
                </v-btn>
              </template>

              <v-spacer></v-spacer>
              <v-btn icon @click="toggleLike(post)">
                <v-icon icon v-if="post.liked" color="cyan"
                  >mdi-thumb-up</v-icon
                >
                <v-icon icon v-else color="grey">mdi-thumb-up</v-icon>
              </v-btn>
              <v-btn icon @click="editPost(post.id)">
                <v-icon color="grey">mdi-pencil</v-icon>
              </v-btn>
              <v-btn icon>
                <Popup :id="post.id" />
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
import Popup from '../components/Popup.vue'
import axios from 'axios'
import { mapMutations, mapActions, mapGetters } from 'vuex'

export default {
  components: {
    Popup,
  },
  data() {
    return {
      showReadingModal: false,
    }
  },
  methods: {
    ...mapActions(['fetchPosts', 'fetchPost']),
    ...mapMutations(['loadPost']),
    ...mapGetters(['listPosts']),
    formatLastUpdate(ts) {
      const date = new Date(ts)
      const d = date.getDate()
      const m = date.getMonth()
      const y = date.getFullYear()
      return `last update: ${d}/${m + 1}/${y}`
    },
    sortBy(param) {
      this.posts.sort((a, b) => (a[param] < b[param] ? -1 : 1))
    },
    sortByNew(param) {
      this.posts.sort((a, b) => (a[param] > b[param] ? -1 : 1))
    },

    async getPost(id) {
      try {
        const response = await axios.get(`http://localhost:5000/posts/${id}`)
        return response.data

      } catch (error) {
        console.log(error)
      }
    },
    async readPost(post) {
      const x = await this.getPost(post.id)
      console.log(x)

    },

    async toggleLike(post) {
      await axios.put(`http://localhost:5000/posts/${post.id}`, {...post, liked: !post.liked})
      await this.fetchPosts()
    },

    async editPost(id) {
      this.fetchPost(id)
      

    },
  },
  computed: {
    ...mapGetters(['posts']),
  },
  created() {
    this.fetchPosts()

  },
}
</script>
