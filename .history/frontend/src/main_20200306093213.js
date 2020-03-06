import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import Vuetify from "vuetify";
import "vuetify/dist/vuetify.min.css";
import { sync } from "vuex-router-sync";

Vue.use(Vuetify); // 追加
const vuetify = new Vuetify(); // 追加

Vue.config.productionTip = false;
const router = new VueRouter({
  routes
});

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount("#app");
