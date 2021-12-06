<template>
  <div>
    <div class="top-offset"></div>
    <v-container class="my-5 mx-3">
      <v-layout row class="mb-3 my-5 d-flex justify-center mb-6">
        <v-tooltip top class="d-flex">
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              small
              @click="sortBy('title')"
              v-bind="attrs"
              v-on="on"
              class="mx-1 my-1"
            >
              <v-icon left small color="grey">mdi-sort</v-icon>
              <span class="caption">title</span>
            </v-btn>
          </template>
          <span>sort posts by the titles...</span>
        </v-tooltip>

        <v-tooltip top>
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              small
              @click="sortBy('author')"
              v-bind="attrs"
              v-on="on"
              class="mx-1 my-1"
            >
              <v-icon left small color="grey">mdi-sort</v-icon>
              <span class="caption">author</span>
            </v-btn>
          </template>
          <span>sort posts by the author...</span>
        </v-tooltip>

        <v-tooltip top>
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              small
              @click="sortBy('topic')"
              v-bind="attrs"
              v-on="on"
              class="mx-1 my-1"
            >
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
                <v-chip class="ma-2" text-color="black" color="cyan">
                  {{ post.topic }}
                </v-chip>
              </div>
              <div v-if="post.topic === 'Backend'">
                <v-chip class="ma-2" text-color="black" color="teal">
                  {{ post.topic }}
                </v-chip>
              </div>
              <div v-if="post.topic === 'General'">
                <v-chip class="ma-2" text-color="black">
                  {{ post.topic }}
                </v-chip>
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
              <v-btn icon @click="toggleLikePost(post)">
                <v-icon icon v-if="post.liked" color="cyan"
                  >mdi-thumb-up</v-icon
                >
                <v-icon icon v-else color="grey">mdi-thumb-up</v-icon>
              </v-btn>
              <v-btn icon>
                <PopupEdit :post="post" />
              </v-btn>
              <v-btn icon>
                <PopupDelete :id="post.id" />
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
import PopupDelete from '../components/PopupDelete.vue'
import PopupEdit from '../components/PopupEdit.vue'
import { mapActions, mapGetters, mapMutations } from 'vuex'

export default {
  components: {
    PopupDelete,
    PopupEdit,
  },
  data() {
    return {}
  },
  methods: {
    ...mapActions(['fetchPosts', 'toggleLikePost']),
    ...mapGetters(['listPosts']),
    ...mapMutations(['loadPost']),
    formatLastUpdate(ts) {
      const date = new Date(ts)
      const d = date.getDate()
      const m = date.getMonth()
      const y = date.getFullYear()
      return `last updated: ${d}/${m + 1}/${y}`
    },
    sortBy(param) {
      this.posts.sort((a, b) => (a[param] < b[param] ? -1 : 1))
    },
    sortByNew(param) {
      this.posts.sort((a, b) => (a[param] > b[param] ? -1 : 1))
    },
    readPost(post) {
      this.loadPost(post)
      this.$router.push('/read')
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

<style scoped>
.top-offset {
  height: 32px;
}
</style>
