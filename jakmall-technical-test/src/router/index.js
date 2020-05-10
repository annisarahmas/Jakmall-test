import Vue from "vue";
import VueRouter from "vue-router";
import Home from "@/components/delivery.vue"; //@ is src
import Payment from "@/components/payments.vue";
import Finish from "@/components/thankyou-page.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/payments",
    name: "Payment",
    component: Payment
  },
  {
    path: "/thankyou-page",
    name: "Finish",
    component: Finish
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
