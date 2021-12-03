<template>
  <v-container class="my-5 mx-3 justify-center">
    <h1 class="mb-5">POSTS</h1>

      <v-layout row class="mb-3">
        <v-tooltip top>
          <template v-slot:activator="{ on, attrs }">
            <v-btn small @click="sortBy('title')" v-bind="attrs" v-on="on">
              <v-icon left small color="grey">mdi-thumb-up</v-icon>
              <span class="caption">by title</span>
            </v-btn>
          </template>
          <span>sort posts by the titles...</span>
        </v-tooltip>

        <v-tooltip top>
          <template v-slot:activator="{ on, attrs }">
            <v-btn small @click="sortBy('author')" v-bind="attrs" v-on="on">
              <v-icon left small color="grey">mdi-thumb-up</v-icon>
              <span class="caption">by author</span>
            </v-btn>
          </template>
        </v-tooltip>

        <v-tooltip top>
          <template v-slot:activator="{ on, attrs }">
            <v-btn small @click="sortBy('topic')" v-bind="attrs" v-on="on">
              <v-icon left small color="grey">mdi-thumb-up</v-icon>
              <span class="caption">by last topic</span>
            </v-btn>
          </template>
        </v-tooltip>
      </v-layout>

    <v-layout row wrap>
      <v-flex v-for="post in posts" :key="post.id" xs12 class="my-2">
        <v-card elevation="2" outlined class="pa-3">
          <v-card-title>{{ post.title }}</v-card-title>
          <v-card-subtitle>{{ post.author }}</v-card-subtitle>
          <v-card-text>{{ post.text }}</v-card-text>
          <Popup />
          <!-- <v-card-action>
            <v-btn outlined rounded text> READ </v-btn>
          </v-card-action> -->
          <v-icon v-if="post.liked" color="blue">mdi-thumb-up</v-icon>
          <v-icon v-else color="grey">mdi-thumb-up</v-icon>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import Popup from '../components/Popup.vue'

export default {
  components: {
    Popup,
  },
  data() {
    return {
      posts: [
        {
          id: 1,
          title: 'A title',
          text: 'text',
          updated: '',
          author: 'Pavel',
          liked: false,
        },
        {
          id: 2,
          title: 'B title',
          text: 'text',
          updated: '',
          author: 'Zaneta',
          liked: false,
        },
        {
          id: 3,
          title: 'C title',
          text: 'text',
          updated: '',
          author: 'Aneta',
          liked: true,
        },
      ],
    }
  },
  methods: {
    sortBy(param) {
      this.posts.sort((a, b) => (a[param] < b[param] ? -1 : 1))
    },
  },
}
</script>
