import { createRouter, createWebHistory } from "vue-router";
import HomePage from "../pages/Home/HomePage.vue";
import GroupTour from "../pages/Home/components/GroupTour.vue";
import ProductPage from "../pages/Products/ProductPage.vue";

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
  {
    path: "/productdetail",
    name: "Product Detail",
    component: ProductPage,
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
