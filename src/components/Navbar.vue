<template>
  <nav>
    <v-app-bar
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
      <v-app-bar-nav-icon @click="sideMenu = true"></v-app-bar-nav-icon>
      <v-toolbar-title>
        <span>Gracall International </span>
        <span class="font-weight-light">Blog Assignment</span>
      </v-toolbar-title>

      <v-spacer />

      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>
      <v-btn icon>
        <v-icon>mdi-heart</v-icon>
      </v-btn>
      <v-btn icon>
        <v-icon>mdi-dots-vertical</v-icon>
      </v-btn>

      <v-btn color="grey">
        <span>TEST</span>
        <v-icon right>mdi-alert</v-icon>
      </v-btn>
    </v-app-bar>

    <v-navigation-drawer v-model="sideMenu" absolute temporary>
      <v-list nav dense>
        <v-subheader>MENU</v-subheader>
        <v-list-item-group color="primary">
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
      group: null,
      links: [
        { icon: 'mdi-home', text: 'Home', route: '/' },
        { icon: 'mdi-post', text: 'New post', route: '/post' },
        { icon: 'mdi-post', text: 'Posts', route: '/posts' },
        { icon: 'mdi-alert', text: 'About', route: '/about' },
      ],
    }
  },
}
</script>
