<template>
  <v-container>
    <div class="top-offset"></div>
    <v-row justify="space-around" class="mt-5">
      <v-card width="400">
        <v-img height="200px" src="../assets/img/about_bg.jpg">
          <v-spacer></v-spacer>
          <v-card-title class="white--text mt-8">
          </v-card-title>
        </v-img>

        <v-card-text>
          <div class="font-weight-bold ml-8 mb-2">
            Key technologies used on this project
          </div>

          <v-timeline align-top dense>
            <v-timeline-item
              v-for="tech in techArr"
              :key="tech.id"
              :color="tech.color"
              small
            >
              <div>
                <div class="font-weight-normal">
                  <strong>{{ tech.main }}</strong
                  > {{ tech.additional }}
                </div>
                <div>
                  <small>{{ tech.lang }}</small>
                </div>
              </div>
            </v-timeline-item>
          </v-timeline>
        </v-card-text>
      </v-card>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    techArr: [
      {
        main: 'Vue.js',
        additional: `(2.6.11)`,
        lang: 'javascript',
        color: 'teal',
      },
      {
        main: 'Vuetify',
        additional: '(2.4.0)',
        lang: 'javascript',
        color: 'cyan',
      },
      {
        main: 'Vuex',
        additional: '(3.4.0)',
        lang: 'javascript',
        color: 'cyan',
      },
    ],
  }),
}
</script>

<style scoped>
.top-offset {
  height: 64px;
}
</style>
