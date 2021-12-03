<template>
  <v-app>
    <Navbar />
    <v-main class="justify-center">
      <v-container class="mx-3 mb-3">
        <router-view></router-view>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import Navbar from './components/Navbar.vue'

export default {
  name: 'App',
  components: {
    Navbar,
  },

  data: () => ({
    //
  }),
}
</script>
