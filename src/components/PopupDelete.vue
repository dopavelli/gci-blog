<template>
  <v-row justify="center">
    <v-snackbar v-model="info" bottom :timeout="3000">
      <span>Post deleted... </span>
      <template v-slot:action="{ attrs }">
        <v-btn color="cyan" text v-bind="attrs" @click="info = false">
          Close
        </v-btn>
      </template>
    </v-snackbar>

    <v-dialog v-model="popup" max-width="400">
      <template v-slot:activator="{ on, attrs }">
        <v-btn icon v-bind="attrs" v-on="on"
          ><v-icon color="grey">mdi-delete</v-icon></v-btn
        >
      </template>

      <v-card>
        <v-card-title class="text-h5">DELETE POST</v-card-title>
        <v-card-text>Are you sure you want to delete this post?</v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="teal darken-1"
            text
            @click="onDelete(id)"
            :loading="loading"
          > Delete </v-btn>
          <v-btn color="teal" text @click="popup = false"> Cancel </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>
<script>
import { mapActions } from 'vuex'
export default {
  data() {
    return {
      info: false,
      popup: false,
      loading: false,
    }
  },
  props: ['id'],
  methods: {
    ...mapActions(['deletePost']),
    async onDelete(id) {
      this.loading = true
      this.deletePost(id)
      this.loading = false
      this.popup = false
      this.info = true
    },
  },
}
</script>
