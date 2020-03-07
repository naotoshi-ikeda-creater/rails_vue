<template>
  <nav>
    <v-app-bar flat app class="white">
      <v-app-bar-nav-icon
        class="grey--text"
        @click="drawer = !drawer"
      ></v-app-bar-nav-icon>
      <v-toolbar-title class="text-uppercase grey--text">
        <span class="">Hippy</span>
        <span>app</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
    </v-app-bar>

    <v-navigation-drawer app v-model="drawer" class="teal lighten-4">
      <v-card flat class="mx-auto teal lighten-4" max-width="400" tile>
        <v-list rounded>
          <v-subheader>REPORTS</v-subheader>
          <v-list-item-group v-model="item" color="teal darken-1">
            <v-list-item
              v-for="(item, i) in items"
              :key="i"
              router
              :to="item.route"
            >
              <v-list-item-icon>
                <v-icon v-text="item.icon"></v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title v-text="item.text"></v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list-item-group>
        </v-list>
      </v-card>
    </v-navigation-drawer>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      drawer: false,
      items: [
        { icon: "home", text: "Home", route: "/" },
        { icon: "library_books", text: "Tasklist", route: "/tasklist" }
      ]
    };
  }
};
</script>
