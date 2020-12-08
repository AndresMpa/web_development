import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  /*
  Direct loading
  */
  {
    path: "/",
    name: "Home",
    component: Home
  },
  /*
  Lazy loading
  */
  {
    path: "/to_do",
    name: "ToDo",
    component: () =>
      import("../views/ToDo.vue")
  },
  {
    path: "/in_prpgress",
    name: "InProgress",
    component: () =>
      import("../views/InProgress.vue")
  },
  {
    path: "/done",
    name: "Dome",
    component: () =>
      import("../views/Done.vue")
  },
  {
    path: "/about",
    name: "About",
    component: () =>
      import("../views/About.vue")
  }
];

const router = new VueRouter({
  routes
});

export default router;
