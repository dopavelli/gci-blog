<template>
  <v-container>
    <div class="top-offset"></div>
    <v-btn @click="escape()" class="ma-2" outlined color="cyan">
      Go Back
    </v-btn>
    <v-divider></v-divider>
    <v-row justify="space-around" class="mx-4 my-5">
      <v-card class="mx-auto" max-width="90%" min-width="60%">
        <v-card-title>
          <div class="text-h4 mx-auto">
{{ post.title }}
          </div>
        </v-card-title>
        <div class="text-h6 font-weight-regular grey--text ml-5">
          <b>{{ post.author }}</b> -
          <i
            ><small>{{ this.formatLastUpdate(post.lastUpdateTS) }}</small></i
          >
        </div>
        <v-card-actions>
          <div v-if="post.topic === 'Frontend'">
            <v-chip class="ma-2" text-color="black" color="cyan" outlined>
              {{ post.topic }}
            </v-chip>
          </div>
          <div v-if="post.topic === 'Backend'">
            <v-chip class="ma-2" text-color="black" color="teal" outlined>
              {{ post.topic }}
            </v-chip>
          </div>
          <div v-if="post.topic === 'General'">
            <v-chip class="ma-2" text-color="black" outlined>
              {{ post.topic }}
            </v-chip>
          </div>
          <v-spacer></v-spacer>
          <v-btn icon @click="toggleLikePost(post)">
            <v-icon icon v-if="post.liked" color="cyan">mdi-thumb-up</v-icon>
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
    </v-row>
    <v-row>
      <p>{{ post.text }}</p>
    </v-row>
    <v-divider></v-divider>
    <v-btn @click="escape()" class="ma-2" outlined color="cyan">
      Go Back
    </v-btn>
  </v-container>
</template>

<script>
import PopupDelete from '../components/PopupDelete.vue'
import PopupEdit from '../components/PopupEdit.vue'
import { mapActions } from 'vuex'
export default {
  components: {
    PopupDelete,
    PopupEdit,
  },
  data() {
    return {
      post: {},
    }
  },
  methods: {
    ...mapActions(['toggleLikePost']),
    checkLoadedPost() {
      if (!this.post.id) {
        this.$router.push('/posts')
      }
    },
    escape() {
      this.$router.push('/posts')
    },
    formatLastUpdate(ts) {
      const date = new Date(ts)
      const d = date.getDate()
      const m = date.getMonth()
      const y = date.getFullYear()
      return `last updated: ${d}/${m + 1}/${y}`
    },
    updateUI() {
      this.post = this.$store.getters.post
    },
  },
  created() {
    this.post = this.$store.state.post
    this.checkLoadedPost()
  },
}
</script>
<style scoped>
.top-offset {
  height: 64px;
}
</style>
