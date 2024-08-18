import { createRouter, createWebHistory } from "vue-router";
import HomePage from "../pages/Home/HomePage.vue";
import GroupTour from "../pages/Home/components/GroupTour.vue";
import ProductPage from "../pages/Products/ProductPage.vue";
import OrderPage from "../pages/Order/OrderPage.vue";
import LoginPage from "../pages/Auth/LoginPage.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: LoginPage,
  },
  // {
  //   path: "/grouptour",
  //   name: "Group Tour",
  //   component: GroupTour,
  // },
  // {
  //   path: "/product/:id",
  //   name: "Product Detail",
  //   component: ProductPage,
  // },
  // {
  //   path: "/order",
  //   name: "Order",
  //   component: OrderPage,
  // },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
