import { createRouter, createWebHistory } from "vue-router";

import Question from "../components/Question.vue";
import App from "../App.vue";
import Home from "../components/Home.vue"
// import productD from "../components/ProductD.vue"

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      component: Home
    },
    {
      path: "/questions",
      component: Question
    },
    // {
    //   path:"/productDetails/:id",
    //   name:"ProductDetails",
    //   component:productD
    // }
  ]
});

export default router;