<template>
  <v-container>
    <v-form class="px-3" ref="postForm">
      <v-layout row class="mb-3 justify-space-between">
        <v-flex sm12>
          <v-text-field
            label="Title"
            v-model="title"
            :rules="inputMinRules"
          ></v-text-field>
        </v-flex>

        <v-flex sm4>
          <v-text-field
            label="Author"
            v-model="author"
            :rules="inputMinRules.concat(inputMaxRules)"
          ></v-text-field>
        </v-flex>

        <v-flex sm4>
          <v-select
            v-model="topic"
            :items="topics"
            label="Topic"
            required
          ></v-select>
        </v-flex>

        <v-flex sm12>
          <v-textarea
            no-resize
            auto-grow
            label="Text"
            v-model="text"
            :rules="inputMinRules.concat(inputMaxTextRules)"
          ></v-textarea>
        </v-flex>

        <v-btn @click="onSubmit" class="success mx-2 mt-4">Submit</v-btn>
        <v-btn @click="clearForm" class="mx-2 mt-4">Clear</v-btn>
      </v-layout>
    </v-form>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      title: '',
      author: '',
      topic: 'General',
      text: '',
      lastUpdate: null,
      topics: ['General', 'Frontend', 'Backend'],
      inputMinRules: [(v) => v.length >= 3 || 'Minimum 3 characters'],
      inputMaxRules: [(v) => v.length <= 25 || 'Maximum 25 characters'],
      inputMaxTextRules: [(v) => v.length <= 2500 || 'Maximum 2500 characters']
    }
  },
  methods: {
    onSubmit() {
      if (this.$refs.postForm.validate() && this.topic) {
        console.log(
          this.title,
          this.author,
          this.topic,
          this.text,
          this.lastUpdate
        )
      }
    },
    clearForm() {
      this.title = ''
      this.author = ''
      this.text = ''
    },
  },
}
</script>
