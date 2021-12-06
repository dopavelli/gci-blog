<template>
  <v-container>
    <div class="top-offset"></div>
        <v-alert
          color="red"
          elevation="24"
          outlined
          text
          type="error"
          ><center>ERROR 404: NOT FOUND</center></v-alert
        >
  </v-container>
</template>

<script>
export default {
  name: 'NotFound',
  components: {},
}
</script>

<style scoped>
.top-offset {
  height: 256px;
}
</style>
