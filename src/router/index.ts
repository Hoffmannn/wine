import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import Home from "../views/Home.vue";
import Clube from "../views/Clube.vue";
import Eventos from "../views/Eventos.vue";
import Ofertas from "../views/Ofertas.vue";
import Produtores from "../views/Produtores.vue";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/clube",
    name: "Clube",
    component: Clube,
  },
  {
    path: "/Eventos",
    name: "Eventos",
    component: Eventos,
  },
  {
    path: "/Ofertas",
    name: "Ofertas",
    component: Ofertas,
  },
  {
    path: "/Produtores",
    name: "Produtores",
    component: Produtores,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
