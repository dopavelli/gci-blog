<template>
  <v-container>
    <v-snackbar v-model="info" bottom :timeout="3000">
      <span>Post added... </span>
      <template v-slot:action="{ attrs }">
        <v-btn color="cyan" text v-bind="attrs" @click="info = false">
          Close
        </v-btn>
      </template>
    </v-snackbar>

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

        <v-btn @click="onSubmit" class="teal mx-2 mt-4" :loading="loading"
          >SAVE</v-btn
        >
        <v-btn @click="clearForm" class="mx-2 mt-4">Clear</v-btn>
      </v-layout>
    </v-form>
  </v-container>
</template>

<script>
import axios from 'axios'

export default {
  data() {
    return {
      title: '',
      author: '',
      topic: 'General',
      text: '',
      lastUpdate: null,
      topics: [],
      inputMinRules: [(v) => v.length >= 3 || 'Minimum 3 characters'],
      inputMaxRules: [(v) => v.length <= 30 || 'Maximum 30 characters'],
      inputMaxTextRules: [(v) => v.length <= 2500 || 'Maximum 2500 characters'],
      loading: false,
      info: false,
    }
  },
  methods: {
    async onSubmit() {
      if (this.$refs.postForm.validate() && this.topic) {
        this.loading = true

        await axios.post('http://localhost:5000/posts', {
          title: this.title,
          author: this.author,
          topic: this.topic,
          text: this.text,
          lastUpdateTS: Date.now(),
          liked: null
        })

        this.loading = false
        this.info = true
        this.$router.push('/posts')
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
    clearForm() {
      this.title = ''
      this.author = ''
      this.text = ''
    },
  },
  created() {
    this.fetchPostTopics()
  }
}
</script>
