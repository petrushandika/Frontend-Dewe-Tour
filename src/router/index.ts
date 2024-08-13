import { createRouter, createWebHistory } from "vue-router";
import HomePage from "../pages/Home/HomePage.vue";
import GroupTour from "../pages/Home/components/GroupTour.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: HomePage,
  },
  {
    path: "/grouptour",
    name: "Group Tour",
    component: GroupTour,
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
