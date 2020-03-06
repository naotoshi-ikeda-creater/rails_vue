import Vue from "vue";
import App from "./App.vue";
import VueRouter from "vue-router";
import { routes } from "./routes";
import store from "./store";
import Vuetify from "vuetify";
import { sync } from "vuex-router-sync";
import "vuetify/dist/vuetify.min.css";
import "material-design-icons-iconfont/dist/material-design-icons.css";

Vue.use(VueRouter);
Vue.use(Vuetify); // 追加
const vuetify = new Vuetify(); // 追加

Vue.config.productionTip = false;

const router = new VueRouter({
  routes
});

sync(store, router);

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount("#app");
