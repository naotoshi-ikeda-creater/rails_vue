<template>
  <v-app id="app">
    <Navbar />
    <v-content>
      <router-view />
    </v-content>
  </v-app>
</template>

<script>
import Navbar from "./components/Navbar";
export default {
  name: "app",
  components: { Navbar },
  data() {
    return {};
  }
};
</script>
