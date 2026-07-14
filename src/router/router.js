import { createRouter, createWebHashHistory } from "vue-router";

import Question from "../components/Question.vue";
import App from "../App.vue";
import Home from "../components/Home.vue"
import Detailsoproduct from "../components/Detailsoproduct.vue";


const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: "/",
      component: Home
    },
    {
      path: "/questions",
      component: Question
    },
   
    {
      path:"/details/:id",
      component:Detailsoproduct
    }
  ]
});

export default router;