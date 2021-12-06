<template>
  <nav>
    <v-app-bar
      fixed
      dark
      color="#fcb69f"
      src="https://picsum.photos/1920/1080?random"
    >
      <template v-slot:img="{ props }">
        <v-img
          v-bind="props"
          gradient="to top right, rgba(19,84,122,.5), rgba(128,208,199,.8)"
        ></v-img>
      </template>
      <v-app-bar-nav-icon
        @click="sideMenu = true"
        class="hidden-md-and-up"
      ></v-app-bar-nav-icon>
      <v-toolbar-title>
        <span>Gracall International </span>
        <span class="font-weight-light">Blog Assignment</span>
      </v-toolbar-title>
      <v-spacer />
      <div class="mr-5 justify-center mx-5">
        <v-btn
          text
          v-for="(link, i) in links"
          :key="i"
          router
          :to="link.route"
          class="mx-1 hidden-sm-and-down"
        >
          <v-icon class="mr-2">{{ link.icon }}</v-icon>
          <span>{{ link.text }}</span>
        </v-btn>
      </div>
    </v-app-bar>

    <v-navigation-drawer v-model="sideMenu" absolute temporary>
      <v-list nav dense>
        <v-subheader>MENU</v-subheader>
        <v-list-item-group>
          <v-list-item
            v-for="(link, i) in links"
            :key="i"
            router
            :to="link.route"
          >
            <v-list-item-icon>
              <v-icon v-text="link.icon"></v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title v-text="link.text"></v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      sideMenu: false,
      links: [
        { icon: 'mdi-home', text: 'Home', route: '/' },
        { icon: 'mdi-vuetify', text: 'About', route: '/about' },
        { icon: 'mdi-view-list', text: 'Posts', route: '/posts' },
        { icon: 'mdi-message-text', text: 'New post', route: '/add' },
      ],
    }
  },
}
</script>
