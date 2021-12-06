<template>
  <v-row justify="center">
    <v-snackbar v-model="info" bottom :timeout="3000">
      <span>Post updated... </span>
      <template v-slot:action="{ attrs }">
        <v-btn color="cyan" text v-bind="attrs" @click="info = false">
          Close
        </v-btn>
      </template>
    </v-snackbar>

    <v-dialog v-model="popup" persistent width="90%">
      <template v-slot:activator="{ on, attrs }">
        <v-btn icon v-bind="attrs" v-on="on"
          ><v-icon color="grey">mdi-pencil</v-icon></v-btn
        >
      </template>

      <v-card>
        <v-card-title>
          <span class="text-h5"></span>
        </v-card-title>
        <v-card-text>
          <v-form ref="postForm" class="px-2">
            <v-layout row wrap class="mb-3 justify-space-between">
              <v-flex xs12 class="mb-2">
                <v-text-field
                  label="Title"
                  v-model="title"
                  :rules="inputMinRules"
                ></v-text-field>
              </v-flex>

              <v-flex xs12 class="mb-2">
                <v-text-field
                  label="Author"
                  v-model="author"
                  :rules="inputMinRules.concat(inputMaxRules)"
                ></v-text-field>
              </v-flex>

              <v-flex xs12 class="mb-2">
                <v-select
                  v-model="topic"
                  :items="topics"
                  label="Topic"
                  required
                ></v-select>
              </v-flex>

              <v-flex xs12 class="mb-2">
                <v-textarea
                  no-resize
                  auto-grow
                  label="Text"
                  v-model="text"
                  :rules="inputMinRules.concat(inputMaxTextRules)"
                ></v-textarea>
              </v-flex>

              <v-btn
                @click="onUpdate(post.id)"
                class="teal mx-2 mt-4"
                :loading="loading"
                >Update</v-btn
              >
              <v-btn @click="popup = false" class="mx-2 mt-4">Cancel</v-btn>
            </v-layout>
          </v-form>
        </v-card-text>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
import axios from 'axios'
import { mapActions } from 'vuex'
export default {
  data() {
    return {
      title: this.post.title,
      author: this.post.author,
      text: this.post.text,
      topic: this.post.topic,

      topics: [],
      inputMinRules: [(v) => v.length >= 3 || 'Minimum 3 characters'],
      inputMaxRules: [(v) => v.length <= 30 || 'Maximum 30 characters'],
      inputMaxTextRules: [(v) => v.length <= 2500 || 'Maximum 2500 characters'],

      popup: false,
      info: false,
      loading: false,
    }
  },
  props: ['post'],
  methods: {
    ...mapActions(['updatePost']),
    async onUpdate(post) {
      if (this.$refs.postForm.validate() && this.topic) {
        this.loading = true
        const updPost = {
          id: this.post.id,
          title: this.title,
          author: this.author,
          topic: this.topic,
          text: this.text,
          lastUpdateTS: Date.now(),
          liked: post.liked,
        }
        this.updatePost(updPost)
        this.loading = false
        this.popup = false
        this.info = true
      }
    },
    async fetchPostTopics() {
      try {
        const response = await axios.get('http://localhost:5000/postsTopics')
        this.topics = response.data
        return
      } catch (error) {
        console.log(error)
      }
    },
  },
  created() {
    this.fetchPostTopics()
  },
}
</script>
