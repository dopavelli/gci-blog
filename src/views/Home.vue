<template>
  <div class="container">
    <div class="top-offset"></div>
    <v-row justify="center">

        <span class="mx-5">
          <p>
            &nbsp; &nbsp; <strong>This project is a basic Single Page Application for made with Vue.js.</strong>
          </p>
          <p class="black white--text mt-2 mb-1">&nbsp; &nbsp; Key functionalities and features:</p>
              <v-list-item-title> - Add a new blog post</v-list-item-title>
              <v-list-item-title> - Edit/Delete an existing blog post</v-list-item-title>
              <v-list-item-title> - List all blog posts</v-list-item-title>
              <v-list-item-title> - Sort out blog posts by various parameters</v-list-item-title>
              <v-list-item-title> - Ability to tag a post with a 'thumb up'</v-list-item-title>
              <v-list-item-title> - Responsive design and navigation</v-list-item-title>
              <v-list-item-title> - Clean and modern design</v-list-item-title>
              <v-list-item-title> - Scalability</v-list-item-title>
          <p class="black white--text mt-2 mb-1">&nbsp; &nbsp; Key technologies used on this project:</p>
              <v-list-item-title><b>Vue.js</b> (2.6.11)</v-list-item-title>
              <v-list-item-title><b>Vuetify</b> (2.4.0)</v-list-item-title>
              <v-list-item-title><b>Vue-router</b> (3.2.0)</v-list-item-title>
              <v-list-item-title><b>Vuex</b> (3.4.0)</v-list-item-title>
          <p class="black white--text mt-2 mb-1">&nbsp; &nbsp; Additional technologies used on this project:</p>
              <v-list-item-title><b>Json-server</b> (0.17.0)</v-list-item-title>
              <v-list-item-title><b>Axios</b> (0.24.0)</v-list-item-title>
              <v-list-item-title><b>Concurrently</b> (6.4.0)</v-list-item-title>
          <p class="black white--text mt-2 mb-1">&nbsp; &nbsp; Resources (free licenced):</p>
              <v-list-item-title><b>https://picsum.photos/1920/1080?random</b></v-list-item-title>
              <v-list-item-subtitle> - background pictures for navigation</v-list-item-subtitle>
              <v-list-item-title><b>https://www.pexels.com/photo/pagoda-in-gray-scale-shot-301614</b></v-list-item-title>
              <v-list-item-subtitle> - image in About section</v-list-item-subtitle>
          <p class="black white--text mt-2 mb-1">&nbsp; &nbsp; Links:</p>
              <v-list-item-title>
                <a href="https://github.com/dopavelli/gci-blog" target="_">https://github.com/dopavelli/gci-blog</a>
              </v-list-item-title>
              <v-list-item-title>
                <a href="https://www.linkedin.com/in/dopavel" target="_">https://www.linkedin.com/in/dopavel</a>
              </v-list-item-title>
        </span>

    </v-row>
  </div>
</template>

<script>
export default {
  name: 'Home',

  components: {},
}
</script>

<style scoped>
.top-offset {
  height: 86px;
}
span {
  width: 90vh;
}
a{
  text-decoration: none;
}
a:hover {
  font-weight: bold;
}
</style>
