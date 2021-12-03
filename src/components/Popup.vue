<template>
  <v-row justify="center">
    <v-dialog v-model="dialog" persistent max-width="400">
      <template v-slot:activator="{ on, attrs }">
        <v-btn color="warning" small dark v-bind="attrs" v-on="on">
          <v-icon left small color="white">mdi-delete-outline</v-icon> Delete
        </v-btn>
      </template>
      <v-card>
        <v-card-title class="text-h5"> Are you sure? </v-card-title>
        <v-card-text
          >Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse,
          earum!</v-card-text
        >
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="green darken-1" text @click="dialog = false">
            Cancel
          </v-btn>
          <v-btn color="green darken-1" text @click="dialog = false">
            Confirm
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>
<script>
export default {
  data() {
    return {
      dialog: false,
    }
  },
}
</script>
