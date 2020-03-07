import Tasklist from "./views/Tasklist.vue";
import Home from "./views/Home.vue";

export const routes = [
  { path: "/tasklist", component: Tasklist },
  { path: "/", component: Home }
];
