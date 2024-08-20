import { createRouter, createWebHistory } from "vue-router";
import HomePage from "../pages/Home/HomePage.vue";
import GroupTour from "../pages/Home/components/GroupTour.vue";
import ProductPage from "../pages/Products/ProductPage.vue";
import OrderPage from "../pages/Order/OrderPage.vue";
import LoginPage from "../pages/Auth/LoginPage.vue";
import RegisterPage from "../pages/Auth/RegisterPage.vue";
import UserPage from "../pages/User/UserPage.vue";
import OrderList from "../pages/Order/components/OrderList.vue";
import OrderApprove from "../pages/Order/components/OrderApprove.vue";
import ProductTrip from "../pages/Products/components/ProductTrip.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: ProductTrip,
  },
  // {
  //   path: "/register",
  //   name: "Register",
  //   component: RegisterPage,
  // },
  // {
  //   path: "/login",
  //   name: "Login",
  //   component: LoginPage,
  // },
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
  // {
  //   path: "/user",
  //   name: "User",
  //   component: UserPage,
  // },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
